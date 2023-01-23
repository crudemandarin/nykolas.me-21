import ProjectPreview from "../components/ProjectPreview";

import { useEffect, useState } from "react";
import ApiManager from "../api/ApiManager";

function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		async function fetchProjects() {
			const data = await ApiManager.getProjects();
			setProjects(data);
		}
		fetchProjects();
	}, []);

	return (
		<section id="projects" className="flex justify-center mb-[200px]">
			<div className="w-4/5 max-w-[1200px]">
				<h2 className="text-3xl mb-5 text-center">Projects</h2>
				<div className="flex justify-center flex-wrap">
					{projects.length === 0 ? (
						<>Nothing to show!</>
					) : (
						projects.map((project) => (
							<div key={project.title} className="m-3">
								<ProjectPreview project={project} />
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
}

export default Projects;

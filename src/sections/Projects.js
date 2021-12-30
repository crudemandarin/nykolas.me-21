import ProjectPreview from "../components/ProjectPreview";

import dino from "../resources/dino.gif";
import dc2 from "../resources/dc2.png";
import oneA from "../resources/1a.png";

function Projects() {
	const data = [
		{
			title: "1Announce",
			img: oneA,
			shortDesc:
				"An extensible, scalable platform to schedule rich messages to variable destinations",
			tags: ["Full Stack", "Cloud Native", "AWS"],
		},
		{
			title: "HoneyComb",
			img: dino,
			shortDesc:
				"A 2D platform-genre physics simulator sandbox built from scratch in Java",
			tags: ["Java", "OOP", "Physics Sim"],
		},
		{
			title: "DC2 Commission",
			img: dc2,
			shortDesc:
				"Commissioned to design and implement a website brochure for energy retail products",
			tags: ["Front-End", "HTML/CSS/JS"],
		},
	];

	return (
		<section id="projects" className="flex justify-center mb-[100px]">
			<div className="w-4/5">
				<h2 className="text-3xl mb-5 text-center">Projects</h2>
				<div className="flex justify-center flex-wrap">
					{data.map((project) => (
						<div key={project.title} className="m-3">
							<ProjectPreview project={project} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;

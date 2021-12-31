import { useEffect, useState } from "react";
import ApiManager from "../api/ApiManager";

import ExperienceTable from "../components/ExperienceTable";

function Experience() {
	const [experiences, setExperiences] = useState([]);

	useEffect(() => {
		async function fetchExperiences() {
			const data = await ApiManager.getExperiences();
			setExperiences(data);
		}
		fetchExperiences();
	}, []);

	return (
		<section
			id="experience"
			className="w-full flex justify-center mb-[100px]"
		>
			<div className="w-3/5 max-w-[1000px]">
				<h2 className="text-3xl mb-5">Professional Experience</h2>
				<div className="w-full flex">
					{experiences.length === 0 ? (
						<>Nothing to show!</>
					) : (
						<ExperienceTable experiences={experiences} />
					)}
				</div>
			</div>
		</section>
	);
}

export default Experience;

import { useState } from "react";

/**
 * experiences = string[]
 */

function ExperienceNav({ experiences, selectIndex, setSelectIndex }) {
	return (
		<div>
			{experiences.map((experience, index) => (
				<div
					key={`${experience.company}`}
					onClick={() => setSelectIndex(index)}
					className={`pb-1 ${
						index === selectIndex ? "font-bold" : ""
					}`}
				>
					{experience.company}
				</div>
			))}
		</div>
	);
}

/**
 * positions = position[]
 * position = {
 * 		title: string,
 * 		range: string,
 * 		bullets: string[]
 * }
 */

function ExperienceContent({ positions }) {
	return (
		<>
			{positions.map((position) => (
				<div key={position.title}>
					<div className="text-2xl font-bold">{position.title}</div>
					<div className="mb-1">{position.range}</div>
					<ul className="list-disc pl-6 mb-3">
						{position.bullets.map((bullet) => (
							<li key={`${position.title}.${bullet}`}>
								{bullet}
							</li>
						))}
					</ul>
				</div>
			))}
		</>
	);
}

/**
 * experiences = [ experience ]
 * experience = {
 * 	company: string,
 * 	positions: position[]
 * }
 */
function Experience() {
	const experiences = [
		{
			company: "IBM Corporation",
			positions: [
				{
					title: "Full Stack Developer, IBM Power",
					range: "May 2021 — Present",
					bullets: [
						"Develops for Performance Collection Tools with large international team to contribute to Navigator for IBM i",
						"Uses Angular, Dojo, Java, Maven, SQL, and IBM i interfaces to migrate and enhance legacy codebases to modern frameworks",
					],
				},
			],
		},
		{
			company: "Tokio Marine HCC",
			positions: [
				{
					title: "DevOps Intern, Cloud and Platform Services",
					range: "August 2020 — May 2021",
					bullets: [
						"Architected robust solutions to promote cloud enablement, automation, and best practices across TMHCC business units",
						"Programmed CI/CD pipeline builder that generates application pipelines from configuration files",
						"Built general-purpose chatbot generator on top of Amazon Lex to enable company teams to make and consume chatbots",
						"Created serverless multi-account auto-tagger to enforce tag synchronicity on cloud resources for cost transparency",
					],
				},
				{
					title: "IT Intern, Project Management Office",
					range: "May 2020 — August 2020",
					bullets: [
						"Developed an automated application test suite for a payment portal web client utilizing Selenium and TestNG via Maven",
						"Integrated test suite as stage of application’s deployment pipeline through Docker and CodePipeline",
					],
				},
			],
		},
	];

	const [selectIndex, setSelectIndex] = useState(0);

	return (
		<section
			id="experience"
			className="w-full flex justify-center mb-[100px]"
		>
			<div className="w-3/5 max-w-[1000px]">
				<h2 className="text-3xl mb-5">Professional Experience</h2>
				<div className="w-full flex">
					<div className="w-1/4">
						<ExperienceNav
							experiences={experiences}
							selectIndex={selectIndex}
							setSelectIndex={setSelectIndex}
						/>
					</div>
					<div className="w-3/4">
						<ExperienceContent
							positions={experiences[selectIndex].positions}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;

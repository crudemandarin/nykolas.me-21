import SkillBlock from "../components/SkillBlock";

function Skills() {
	const data = [
		{
			title: "Programming Languages",
			skills: [
				"Java",
				"Python",
				"JavaScript",
				"TypeScript",
				"C++",
				"HTML/CSS",
				"C#",
				"SQL",
			],
			bgColor: "bg-red-600",
		},
		{
			title: "Libraries, Frameworks",
			skills: [
				"Node.js",
				"React",
				"Angular",
				"Maven",
				"NuGet",
				"Express",
				"Python Flask",
				"AWS SDK",
				"AWS CDK",
				"JWT",
				"Bcrypt",
				"jQuery",
				"TailswindCSS",
				"SASS",
			],
			bgColor: "bg-violet-600",
		},
		{
			title: "Additional",
			skills: [
				"Git",
				"AWS",
				"Azure",
				"Google Cloud",
				"Docker",
				"Windows",
				"MacOS",
				"Linux",
				"Agile",
				"DevOps",
				"Visual Studio",
				"IBM i",
				"ServiceNow",
			],
			bgColor: "bg-green-600",
		},
	];

	return (
		<section id="skills" className="flex justify-center">
			<div className="w-3/5">
				<h2 className="text-3xl mb-5">Skills</h2>
				{data.map((skillGroup, i) => {
					let offset = "";
					if ((i + 1) % 2 === 0) offset = "ml-auto";
					return (
						<div className={`w-4/5 my-4 ${offset}`}>
							<SkillBlock skillGroup={skillGroup} />
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Skills;

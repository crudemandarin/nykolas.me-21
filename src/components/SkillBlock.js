/**
 * skillGroup = { title: string, skills: string[] || { logo: string, label: string }[], bgColor: string }
 */

function renderSkills(skillGroup) {
	const skills = skillGroup.skills;
	if (!skills.length) return undefined;

	if (typeof skills[0] === "string") {
		return (
			<div className="flex flex-wrap justify-end max-w-[400px]">
				{skills.map((skill) => (
					<div
						key={`skill-${skillGroup.title}.${skill}`}
						className="bg-white tracking-wide w-fit h-fit px-2 py-1 m-1 rounded-md"
					>
						{skill}
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="flex flex-wrap justify-end max-w-[520px]">
			{skills.map((skill) => (
				<a
					key={`skill-${skill.label}`}
					href={skill.link}
					target="_blank"
					rel="noreferrer"
					className="rounded-md hover:bg-slate-200 mr-3 mb-2"
				>
					<img
						className="h-[160px] p-1"
						src={skill.logo}
						alt={skill.label}
					/>
				</a>
			))}
		</div>
	);
}

/**
 * skillGroup = { title: string, skills: string[] || { logo: string, label: string }[], bgColor: string }
 */
function SkillBlock({ skillGroup }) {
	return (
		<div className={`w-fit p-3 flex rounded-lg ${skillGroup.bgColor}`}>
			<div className="max-w-[200px]">
				<p className="pr-4 text-2xl font-bold text-white">
					{skillGroup.title}
				</p>
			</div>

			{renderSkills(skillGroup)}
		</div>
	);
}

export default SkillBlock;

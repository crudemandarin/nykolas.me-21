/**
 * skillGroup = { title: string, skills: string[], bgColor: string }
 */
function SkillBlock({ skillGroup }) {
	return (
		<div className={`w-fit flex p-3 rounded-lg ${skillGroup.bgColor}`}>
			<div className="w-1/3">
				<p className="text-2xl font-bold text-white">
					{skillGroup.title}
				</p>
			</div>
			<div className="w-2/3 flex flex-wrap">
				{skillGroup.skills.map((skill) => (
					<div
						key={`${skillGroup.title}.${skill}`}
						className="bg-white tracking-wide w-fit h-fit px-2 py-1 m-1 rounded-md"
					>
						{skill}
					</div>
				))}
			</div>
		</div>
	);
}

export default SkillBlock;

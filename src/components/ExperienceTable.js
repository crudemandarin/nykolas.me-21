import { useState } from "react";

/**
 * experiences = string[]
 */

function TableNav({ experiences, selectIndex, setSelectIndex }) {
	return (
		<>
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
		</>
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

function TableContent({ positions }) {
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

function ExperienceTable({ experiences }) {
	const [selectIndex, setSelectIndex] = useState(0);

	return (
		<>
			<div className="w-1/4">
				<TableNav
					experiences={experiences}
					selectIndex={selectIndex}
					setSelectIndex={setSelectIndex}
				/>
			</div>
			<div className="w-3/4">
				<TableContent positions={experiences[selectIndex].positions} />
			</div>
		</>
	);
}

export default ExperienceTable;

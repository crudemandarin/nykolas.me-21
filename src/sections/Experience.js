import ExperienceContent from "../components/ExperienceContent";

function Experience() {
	return (
		<section id="experience" className="w-full flex justify-center">
			<div className="w-3/5">
				<h2 className="text-3xl mb-5">Professional Experience</h2>
				<div className="w-full flex">
					<div className="w-1/4">
						<div id="exp-1-btn" className="font-bold">
							IBM Corporation
						</div>
						<div>Tokio Marine HCC</div>
					</div>
					<div className="w-3/4">
						<ExperienceContent />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;

import nykolasPhoto from "../resources/nykolas-photo.jpeg";

function Bio() {
	return (
		<section id="bio" className="flex justify-center">
			<div className="w-4/5 max-w-[1000px] flex">
				<div className="w-full flex items-center">
					<div>
						<h2 className="text-3xl">About Me</h2>
						<p className="py-3">
							I'm an energetic, ambitious, and growth-driven
							tech-junkie.
						</p>
						<p>
							Over years of work experience, personal projects,
							and student involvement, I have honed broad
							technical skills alongside teamwork and
							communication.
						</p>
						<p className="py-3">
							I'm currently pursuing a B.S. in Computer Science at
							the University of Houston, graduating Spring 2022.
						</p>
						<p>
							<span className="text-green-600">
								Seeking full-time software engineering
								opportunities for 2022
							</span>
						</p>
					</div>
				</div>
				<div className="w-full flex justify-end">
					<img
						className="w-2/3 max-w-[350px]"
						src={nykolasPhoto}
						alt="Nykolas"
					></img>
				</div>
			</div>
		</section>
	);
}

export default Bio;

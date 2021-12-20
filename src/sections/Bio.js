import nykolasPhoto from "../resources/nykolas-photo.jpeg";

function Bio() {
	return (
		<section id="bio">
			<div className="flex">
				<div className="container flex justify-center items-center">
					<div className="w-4/5">
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
							the University of Houston,{" "}
							<span className="text-cyan-800">
								graduating Spring 2022
							</span>
							.
						</p>
						<p>
							<span className="font-bold">
								Seeking full-time software engineering
								opportunities for 2022
							</span>
						</p>
					</div>
				</div>
				<div className="container flex justify-end">
					<div className="w-2/3">
						<img
							className="w-2/3 rounded-xl"
							src={nykolasPhoto}
							alt="Nykolas"
						></img>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Bio;

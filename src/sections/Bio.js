import nykolasPhoto from "../resources/nykolas-photo.jpeg";

import { ReactComponent as TopBorder } from "../resources/top-border.svg";
import { ReactComponent as BottomBorder } from "../resources/bottom-border.svg";

function Bio() {
	return (
		<>
			<TopBorder />
			<section id="bio" className="flex justify-center bg-violet-600">
				<div className="w-4/5 max-w-[1000px] flex py-20">
					<div className="w-full flex items-center">
						<div className="bg-white py-5 px-10 rounded-lg">
							<h2 className="text-3xl">About Me</h2>
							<p className="py-3">
								I'm an energetic, ambitious, and growth-driven
								tech-junkie.
							</p>
							<p>
								Over years of work experience, personal
								projects, and student involvement, I have honed
								broad technical skills alongside teamwork and
								communication.
							</p>
							<p className="py-3">
								I'm currently pursuing a B.S. in Computer
								Science at the University of Houston, graduating
								Spring 2022.
							</p>
							<p>
								<span className="text-green-500 font-semibold">
									Seeking full-time software engineering
									opportunities for 2022
								</span>
							</p>
						</div>
					</div>
					<div className="w-full flex justify-end">
						<div className="w-2/3 max-w-[275px]">
							<img
								className="rounded-lg"
								src={nykolasPhoto}
								alt="Nykolas"
							></img>
						</div>
					</div>
				</div>
			</section>
			<BottomBorder />
		</>
	);
}

export default Bio;

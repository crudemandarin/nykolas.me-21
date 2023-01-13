import Typewriter from "typewriter-effect";

import Nav from "../components/Nav";
import Socials from "../components/Socials";
import nykolasLogo from "../resources/nykolas-icon.png";

function Hero() {
	return (
		<section
			id="hero"
			className="flex justify-center"
			style={{ height: "75vh" }}
		>
			<div className="w-4/5 h-full flex flex-col">
				<div className="flex flex-grow items-center">
					<div className="w-full">
						<p className="text-2xl tracking-wider">
							Hello, World! My name is
						</p>

						<div className="my-1" />

						<h1 className="text-7xl py-3">Nykolas Farhangi</h1>

						<div className="my-2" />

						<div className="flex text-2xl tracking-wider">
							<div>I'm a multi-talented</div>
							<div className="mx-1" />
							<span className="text-green-500">
								<Typewriter
									onInit={(typewriter) => {
										typewriter
											.typeString("software engineer")
											.pauseFor(2500)
											.deleteAll()
											.typeString("cloud architect")
											.pauseFor(2500)
											.deleteAll()
											.typeString("human being")
											.start();
									}}
								/>
							</span>
						</div>

						<div className="my-6" />

						<Socials />
					</div>
					<div className="w-full flex justify-end">
						<img
							className="w-2/3"
							src={nykolasLogo}
							alt="My logo"
						/>
					</div>
				</div>
				<div className="flex items-center">
					<div className="w-full flex justify-between items-center">
						<p className="text-2xl tracking-wider">
							Learn more about me
						</p>
						<Nav />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;

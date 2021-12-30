import Nav from "../components/Nav";
import Socials from "../components/Socials";
import nykolasLogo from "../resources/nykolas-icon.png";

function Hero() {
	return (
		<section id="hero" className="h-screen flex justify-center mb-[100px]">
			<div className="w-4/5">
				<div className="flex h-4/5 items-center">
					<div className="w-full">
						<p className="text-2xl tracking-wider">
							Hello, World! My name is
						</p>
						<h1 className="text-7xl py-3">Nykolas Farhangi</h1>
						<p className="text-2xl tracking-wider pb-3">
							I'm a multi-talented{" "}
							<span className="text-green-600">
								software engineer
							</span>
							.
						</p>
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
				<div className="h-1/5 flex items-center">
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

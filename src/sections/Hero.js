import Nav from "../Nav";
import nykolasLogo from "../resources/nykolas-icon.png";

function Hero() {
	return (
		<section id="hero" className="h-screen">
			<div className="flex h-4/5">
				<div className="container flex justify-center items-center">
					<div>
						<p className="text-lg">Hello, World! My name is</p>
						<h1 className="text-3xl font-bold leading-10">
							Nykolas Farhangi
						</h1>
						<p className="text-lg">
							I'm a multi-talented{" "}
							<span style={{ color: "green" }}>
								software engineer
							</span>
							.
						</p>
					</div>
				</div>
				<div className="container flex justify-center items-center">
					<img className="w-4/5" src={nykolasLogo} alt="My logo" />
				</div>
			</div>
			<div className="container h-1/5 flex justify-center items-center">
				<Nav />
			</div>
		</section>
	);
}

export default Hero;

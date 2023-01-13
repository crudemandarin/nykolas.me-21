import Socials from "../components/Socials";
import nykolasLogo from "../resources/nykolas-icon.png";

function Footer() {
	return (
		<section id="footer" className="w-full">
			<div className="flex justify-center">
				<img className="w-[100px]" src={nykolasLogo} alt="My logo" />
			</div>
			<div className="text-center">
				<p className="text-xl py-2">nykolasfarhangi@protonmail.com</p>
				<div className="flex justify-center">
					<Socials />
				</div>

				<div className="h-10"></div>
				<p className="text-2xl">
					Designed and Built by{" "}
					<span className="font-bold">Nykolas Farhangi</span>
				</p>
				<div className="h-10"></div>
			</div>
		</section>
	);
}

export default Footer;

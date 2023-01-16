import Socials from "../components/Socials";
import nykolasLogo from "../resources/logos/nykolas-icon.png";

import NavLink from "../components/NavLink";

function Footer() {
	return (
		<section id="footer" className="w-full">
			<div className="flex justify-center mb-14">
				<NavLink label={"Back To Top"} targetId={"hero"} offset={0} />
				<div className="p-4" />
			</div>
			<div className="flex justify-center">
				<img className="w-[100px]" src={nykolasLogo} alt="My logo" />
			</div>
			<div className="text-center">
				<p className="text-xl py-2">nykolasfarhangi@protonmail.com</p>
				<div className="flex justify-center mb-10">
					<Socials />
				</div>
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

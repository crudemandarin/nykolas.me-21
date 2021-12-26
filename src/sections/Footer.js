import Socials from "../components/Socials";

function Footer() {
	return (
		<section id="footer" className="w-full">
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

import githubIcon from "../resources/github-icon.png";
import linkedInIcon from "../resources/linkedin-icon.png";
import resumeIcon from "../resources/resume-icon.png";

function Footer() {
	return (
		<section id="footer" className="container flex justify-center">
			<div className="text-center">
				<h2 className="text-2xl">Nykolas Farhangi</h2>
				<p className="text-2xl py-2">nykolasfarhangi@protonmail.com</p>
				<div className="flex justify-center py-2">
					<img className="h-8 px-3" src={githubIcon} alt="GitHub" />
					<img
						className="h-8 px-3"
						src={linkedInIcon}
						alt="LinkedIn"
					/>
					<img className="h-8 px-3" src={resumeIcon} alt="Resume" />
				</div>
				<div className="h-10"></div>
				<p className="text-2xl">
					Designed and Built by Nykolas Farhangi
				</p>
				<div className="h-10"></div>
			</div>
		</section>
	);
}

export default Footer;

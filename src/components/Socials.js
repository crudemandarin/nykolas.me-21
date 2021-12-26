import githubIcon from "../resources/github-icon.png";
import linkedInIcon from "../resources/linkedin-icon.png";
import resumeIcon from "../resources/resume-icon.png";

function Socials() {
	return (
		<div className="flex py-2">
			<img className="h-8 pr-3" src={githubIcon} alt="GitHub" />
			<img className="h-8 px-3" src={linkedInIcon} alt="LinkedIn" />
			<img className="h-8 pl-3" src={resumeIcon} alt="Resume" />
		</div>
	);
}

export default Socials;

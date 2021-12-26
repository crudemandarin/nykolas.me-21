import Hero from "./sections/Hero";
import Bio from "./sections/Bio";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

function App() {
	return (
		<>
			<Hero />
			<div className="p-[50px]"></div>
			<Bio />
			<div className="p-[50px]"></div>
			<Experience />
			<div className="p-[50px]"></div>
			<Skills />
			<div className="p-[50px]"></div>
			<Projects />
			<div className="p-[50px]"></div>
			<Footer />
		</>
	);
}

export default App;

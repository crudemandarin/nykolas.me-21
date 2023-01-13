function Nav() {
	return (
		<nav className="flex text-2xl">
			<div className="relative mr-8">
				<div className="px-4 py-1 rounded-md bg-green-500 absolute bottom-[-5px] right-[-8px] z-0">
					Bio
				</div>
				<div className="px-4 py-1 rounded-md bg-slate-400">Bio</div>
			</div>
			<div className="relative mr-8">
				<div className="px-4 py-1 rounded-md bg-green-500 absolute bottom-[-5px] right-[-8px] z-0">
					Experience
				</div>
				<div className="px-4 py-1 rounded-md bg-slate-400">
					Experience
				</div>
			</div>
			<div className="relative mr-8">
				<div className="px-4 py-1 rounded-md bg-green-500 absolute bottom-[-5px] right-[-8px] z-0">
					Skills
				</div>
				<div className="px-4 py-1 rounded-md bg-slate-400">Skills</div>
			</div>
			<div className="relative">
				<div className="px-4 py-1 rounded-md bg-green-500 absolute bottom-[-5px] right-[-8px] z-0">
					Projects
				</div>
				<div className="px-4 py-1 rounded-md bg-slate-400">
					Projects
				</div>
			</div>
		</nav>
	);
}

export default Nav;

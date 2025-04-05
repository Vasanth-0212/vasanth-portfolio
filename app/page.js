"use client";

import { WelcomeSection, AboutSection, TechnologiesSection} from "app/sections";
import ProjectsList from "./my-projects/projects";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<ProjectsList />
			<TechnologiesSection />
		</div>
	);
}

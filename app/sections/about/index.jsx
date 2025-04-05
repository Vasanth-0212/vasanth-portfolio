"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Vasanth. I successfully graduated from MLR Institute of Technology,Hyderabad in computer
							science stream.
						</p>
						<p>
							I am a grounded and disciplined individual with a deep passion for learning and growing within the field of computer science. My main focus is on expanding my knowledge in various technologies and contributing to the growth of organizations by applying my skills effectively. I am committed to continuously improving myself by taking on challenges that enhance both my technical abilities and my understanding of the industry. Currently, as a Frontend Software Developer at The Marble Jar, I am using modern web technologies such as React.js, Next.js, and TypeScript to create an intuitive and seamless experience for users. My goal is to continue refining my problem-solving skills and stay updated on the latest developments in technology. Whether it's through my internships, personal projects, or certifications, I am dedicated to expanding my expertise in areas like MERN Stack, Python, and Java, while striving for a meaningful impact on every project I work on.
						</p>

					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}

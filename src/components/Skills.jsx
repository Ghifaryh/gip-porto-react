import { SkillsData } from "../data/Data"

import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export default function Skills() {
	return (
		<section id="Skills">
			<div className="container skills-container">
				{SkillsData.map(({ skillName, percentage }, index) => {
					return (
						<div className="circular-box" key={index}>
							<CircularProgressbar
								value={percentage}
								text={`${percentage}%`}
								styles={{
									root: {},
									path: {
										stroke: "#1A74E2",
										strokeLinecap: "butt",
										transition: "stroke-dashoffset 0.5s ease 0s",
										transform: "rotate(0.25turn)",
										transformOrigin: "center center",
									},

									trail: {
										stroke: "#FFFF",
										strokeLinecap: "butt",
										transform: "rotate(0.25turn)",
										transformOrigin: "center center",
									},

									text: {
										fill: "#FFFF",
										fontSize: "16px",
									},
								}}
							/>
							<p className="skill-name">{skillName}</p>
						</div>
					)
				})}
			</div>
		</section>
	)
}

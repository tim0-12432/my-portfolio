import React, { useEffect, useState } from "react";
import { IoCodeSlash, IoDesktopOutline } from "react-icons/io5";
import { Section } from "../../elements/Sections.style";
import { Headline, ProjectCard, PreviewImage, SubSubHeadline, InfoBox, Caption, Item, Fabs, Fab, ProjectContainer } from "./Portfolio.style";
import data from "../../../resources/data/projects.json";
import { Column, Row, Spacer } from "../../flex/Flex.style";
import getGithubInfoForRepo from "../../../api/github";

function Portfolio(): JSX.Element {
	const [details, setDetails] = useState<any>([]);

	useEffect(() => {
		data.forEach(async (project, idx) => {
		});
	}, []);

	console.log(details);

	return (
		<Section id="portfolio">
			<Headline>Projects and Case studies</Headline>
			{
				data.map((project, index) => {
					return (
						<ProjectContainer key={`project-${index}`}>
							<Fabs className="fabs">
								<Fab outlined>
									<IoCodeSlash />
								</Fab>
								<Fab secondary outlined>
									<IoDesktopOutline />
								</Fab>
							</Fabs>
							<ProjectCard className="card">
								<InfoBox>
									<Column>
										<SubSubHeadline>
											{project.title}
										</SubSubHeadline>
										<Caption>
											{project.caption}
										</Caption>
										<Spacer />
										<Row>
											<Item>
												{
													project.used.map((technique, idx) => {
														if (idx == 0) {
															return technique;
														} else {
															return ", " + technique;
														}
													})
												}
											</Item>
										</Row>
									</Column>
								</InfoBox>
								<PreviewImage src={`images/projects/${project.image}.png`} />
							</ProjectCard>
						</ProjectContainer>
					);
				})
			}
		</Section>
	);
}

export default Portfolio;

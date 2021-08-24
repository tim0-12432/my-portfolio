import React, { useEffect, useState } from "react";
import { IoCodeSlash, IoDesktopOutline, IoEyeOutline, IoGitNetworkOutline, IoStarOutline, IoCalendarOutline } from "react-icons/io5";
import { Section } from "../../elements/Sections.style";
import { Headline, ProjectCard, PreviewImage, SubSubHeadline, InfoBox, Caption, Item, Fabs, Fab, ProjectContainer } from "./Portfolio.style";
import data from "../../../resources/data/projects.json";
import { Column, Row, Spacer } from "../../flex/Flex.style";
import axios from "axios";
import { GlassMagnifier } from "react-image-magnifiers";

function Portfolio() {
	const [details, setDetails] = useState<any>([]);

	useEffect(() => {
		fetchApi(0);
	}, []);

	function fetchApi(idx: number) {
		axios.get(`https://api.github.com/repos/tim0-12432/${data[idx].name}`)
			.then((response) => {
				setDetails((details: any) => [...details, response.data]);
			}).then(() => {
				if(data[idx + 1]) {
					fetchApi(idx + 1);
				}
			});
	}

	return (
		<Section id="portfolio">
			<Headline>Projects and Case studies</Headline>
			{
				data.map((project, index) => {
					return (
						<ProjectContainer key={`project-${index}`}>
							<Fabs className="fabs">
								{
									details[index]?.html_url ?
										<a href={details[index].html_url} target="_blank">
											<Fab outlined>
												<IoCodeSlash />
											</Fab>
										</a> : null
								}
								{
									details[index]?.homepage ?
										<a href={details[index].homepage} target="_blank">
											<Fab secondary outlined>
												<IoDesktopOutline />
											</Fab>
										</a> : null
								}
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
											{
												details[index]?.forks_count != undefined ?
													<Item>
														<IoGitNetworkOutline />
														{details[index].forks_count}
													</Item> : null
											}
											{
												details[index]?.stargazers_count != undefined ?
													<Item>
														<IoStarOutline />
														{details[index].stargazers_count}
													</Item> : null
											}
											{
												details[index]?.watchers_count != undefined ?
													<Item>
														<IoEyeOutline />
														{details[index].watchers_count}
													</Item> : null
											}
											{
												details[index]?.created_at != undefined ?
													<Item>
														<IoCalendarOutline />
														<DateString date={details[index]?.created_at} />
													</Item> : null
											}
										</Row>
									</Column>
								</InfoBox>
								<PreviewImage>
									<GlassMagnifier
										imageSrc={`images/projects/${project.image}.png`}
										magnifierBorderSize={3}
										magnifierSize="75%"
									/>
								</PreviewImage>
							</ProjectCard>
						</ProjectContainer>
					);
				})
			}
		</Section>
	);
}

const DateString = (props: {date: string}) => {
	const date = new Date(props.date);
	return <>{date.toLocaleDateString()}</>;
};

export default Portfolio;

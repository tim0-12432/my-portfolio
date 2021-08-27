import React, { useContext } from "react";
import { SiJava, SiFlask, SiNodeDotJs, SiTypescript, SiAtlassian, SiGit } from "react-icons/si";
import { IoLogoPython, IoLogoHtml5, IoLogoSass, IoLogoReact, IoLayersSharp } from "react-icons/io5";
import { ThemeContext } from "../../context/ThemeContext";
import { AboutSection } from "../../elements/Sections.style";
import { Column, Container, Row } from "../../flex/Flex.style";
import { Headline, InfoBox, Profile, Divider, Skills, SubHeadline, SubSubHeadline, SkillCard, List, ListItem, Caption, Thoughts, ThoughtCard, ThoughtBody, ThoughtImage } from "./About.style";
import data from "../../../resources/data/thoughts.json";

function About(): JSX.Element {
	const {isDark} = useContext(ThemeContext);
	return (
		<AboutSection isDark={isDark} id="about">
			<Row>
				<Column>
					<Headline>About Me</Headline>
					<InfoBox isDark={isDark}>
						I am a 19 years old student from Germany.
						<br/>
						<br/>
						I found a passion in working with computers.
						<br/>
						<br/>
						2016 I started coding in JavaScript.
						<br/>
						Since then it became a hobby to me.
					</InfoBox>
				</Column>
				<Column>
					<Profile />
				</Column>
			</Row>
			<Container>
				<Divider>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
					</svg>
				</Divider>
			</Container>
			<SkillSection />
			<ThoughtsSection />
		</AboutSection>
	);
}

interface IItemProps {
	icon: JSX.Element;
	label: string;
}

function Item(props: IItemProps): JSX.Element {
	return (
		<ListItem>
			<a href={`https://www.google.com/search?q=${props.label}`} target="_blank">
				{props.icon}
				<span>{props.label}</span>
				<span className="help">?</span>
			</a>
		</ListItem>
	);
}

function SkillSection(): JSX.Element {
	return (
		<Skills>
			<SubHeadline>
					Skillset
			</SubHeadline>
			<Row style={{ padding: "0 5rem", alignItems: "flex-start" }}>
				<SkillCard>
					<SubSubHeadline>
							Backend
					</SubSubHeadline>
					<List>
						<Item
							icon={<SiJava />}
							label="Java"
						/>
						<Item
							icon={<IoLogoPython />}
							label="Python"
						/>
						<Item
							icon={<SiFlask />}
							label="Flask"
						/>
						<Item
							icon={<SiNodeDotJs />}
							label="NodeJS"
						/>
					</List>
				</SkillCard>
				<SkillCard>
					<SubSubHeadline>
							Frontend
					</SubSubHeadline>
					<List>
						<Item
							icon={<IoLogoHtml5 />}
							label="HTML5"
						/>
						<Item
							icon={<IoLogoSass />}
							label="CSS3/SASS"
						/>
						<Item
							icon={<SiTypescript />}
							label="TypeScript"
						/>
						<Item
							icon={<IoLogoReact />}
							label="React"
						/>
					</List>
				</SkillCard>
				<SkillCard>
					<SubSubHeadline>
							Workflow
					</SubSubHeadline>
					<List>
						<Item
							icon={<IoLayersSharp />}
							label="Scrum"
						/>
						<Item
							icon={<SiAtlassian />}
							label="Jira"
						/>
						<Item
							icon={<SiGit />}
							label="Git"
						/>
					</List>
				</SkillCard>
			</Row>
			<Caption>
					...extending my knowledge everyday!
			</Caption>
		</Skills>
	);
}

function ThoughtsSection(): JSX.Element {
	return (
		<Thoughts>
			<SubHeadline>
					Some random thoughts
			</SubHeadline>
			<Column>
				{
					data.map((thought, index) => {
						if (index % 2 == 1) {
							return (
								<ThoughtCard key={`thought-${index}`}>
									<ThoughtImage
										src={`vector/${thought.image}.svg`}
										style={{ marginRight: "4rem" }}
									/>
									<Column style={{ flexGrow: 1, alignItems: "flex-end" }}>
										<SubSubHeadline style={{ paddingRight: 0 }}>
											{thought.title}
										</SubSubHeadline>
										<ThoughtBody style={{ textAlign: "right" }}>
											{thought.body}
										</ThoughtBody>
									</Column>
								</ThoughtCard>
							);
						} else {
							return (
								<ThoughtCard key={`thought-${index}`}>
									<Column style={{ flexGrow: 1 }}>
										<SubSubHeadline style={{ paddingLeft: 0 }}>
											{thought.title}
										</SubSubHeadline>
										<ThoughtBody>
											{thought.body}
										</ThoughtBody>
									</Column>
									<ThoughtImage
										src={`vector/${thought.image}.svg`}
										style={{ marginLeft: "4rem" }}
									/>
								</ThoughtCard>
							);
						}
					})
				}
			</Column>
		</Thoughts>
	);
}

export default About;

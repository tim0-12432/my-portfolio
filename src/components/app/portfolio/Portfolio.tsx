import React, { useEffect, useState, useContext, Fragment } from "react";
import Fade from "react-reveal/Fade";
import { IoCodeSlash, IoDesktopOutline, IoEyeOutline, IoGitNetworkOutline, IoStarOutline, IoCalendarOutline } from "react-icons/io5";
import { Section } from "../../elements/Sections.style";
import { Headline, ProjectCard, PreviewImage, SubSubHeadline, Font, InfoBox, Caption, Item, Fabs, Fab, ProjectContainer, PreviewImageModal, ColorBar, Color, Link } from "./Portfolio.style";
import data from "../../../resources/data/projects.json";
import { Column, Row, Spacer } from "../../flex/Flex.style";
import axios from "axios";
import { GlassMagnifier } from "react-image-magnifiers";
import { ModalContext } from "../../context/ModalContext";
import { Background, Modal } from "../../elements/Modal.style";
import { Button } from "../../elements/Button.style";
import { isMobileRatio } from "../utility";
import mapping from "../../../resources/data/languageIconMapping";

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
			<Fade bottom>
				<ProjectCards details={details} />
			</Fade>
		</Section>
	);
}

function ProjectCards(props: {details: any}) {
	const {toggleModal, injectModal} = useContext(ModalContext);

	function toggleProjectModal(project: any, index: number) {
		injectModal(<ProjectModal project={project} details={props.details[index]} />);
		toggleModal();
	}

	return <>{ data.map((project, index) => {
		return isMobileRatio() ? (
			<ProjectContainer key={`project-${index}`} onClick={() => toggleProjectModal(project, index)}>
				<ProjectCard className="card">
					<InfoBox>
						<Column>
							<SubSubHeadline>
								{project.title}
							</SubSubHeadline>
						</Column>
					</InfoBox>
					<PreviewImage>
						<GlassMagnifier
							imageSrc={`${project.logo}`}
							magnifierBorderSize={3}
							magnifierSize="75%"
						/>
					</PreviewImage>
				</ProjectCard>
			</ProjectContainer>
		) : (
			<ProjectContainer key={`project-${index}`} onClick={() => toggleProjectModal(project, index)}>
				<Fabs className="fabs">
					{
						props.details[index]?.html_url ?
							<a href={props.details[index].html_url} target="_blank">
								<Fab outlined>
									<IoCodeSlash />
								</Fab>
							</a> : null
					}
					{
						props.details[index]?.homepage ?
							<a href={props.details[index].homepage} target="_blank">
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
										project.used.map((technique: string, idx: number) => {
											if (idx == 0) {
												return technique;
											} else {
												return ", " + technique;
											}
										})
									}
								</Item>
								{
									props.details[index]?.forks_count != undefined ?
										<Item>
											<IoGitNetworkOutline />
											{props.details[index].forks_count}
										</Item> : null
								}
								{
									props.details[index]?.stargazers_count != undefined ?
										<Item>
											<IoStarOutline />
											{props.details[index].stargazers_count}
										</Item> : null
								}
								{
									props.details[index]?.watchers_count != undefined ?
										<Item>
											<IoEyeOutline />
											{props.details[index].watchers_count}
										</Item> : null
								}
								{
									props.details[index]?.created_at != undefined ?
										<Item>
											<IoCalendarOutline />
											<DateString date={props.details[index]?.created_at} />
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
	})}</>;
}

function ProjectModal(props: {project: any, details: any}) {
	const {toggleModal} = useContext(ModalContext);
	const {project, details} = props;

	useEffect(() => {
		if(project.frontend !== undefined) {
			const newStyle = document.createElement("link");
			newStyle.href = project.frontend.font.url;
			newStyle.rel = "stylesheet";
			document.head.appendChild(newStyle);
		}
	}, []);

	return <>
		<Background offset={window.pageYOffset} />
		<Modal offset={window.pageYOffset}>
			<Row>
				<Spacer />
				<Button outlined primary onClick={() => toggleModal()}>
					X
				</Button>
			</Row>
			<InfoBox>
				<Column>
					<Link href={details !== undefined ? details.html_url : "https://bit.ly/Github-tim0_12432"} target="_blank" referrerPolicy="origin">
						<SubSubHeadline>
							{project.title}
						</SubSubHeadline>
					</Link>
					<Caption>
						{project.caption}
					</Caption>
					<Item style={{margin: "1.5rem 0"}}>
						{
							project.used.map((technique: string, idx: number) => {
								if (idx == 0) {
									return <Fragment key={`tech-${idx}`}>{mapping[technique]}{technique}</Fragment>;
								} else {
									return <Fragment key={`tech-${idx}`}>, {mapping[technique]}{technique}</Fragment>;
								}
							})
						}
					</Item>
					{
						project.frontend !== undefined
							? <>
								<Item>Resources</Item>
								<Row style={{ alignItems: "flex-start" }}>
									<Caption style={{ paddingRight: "1rem" }}>Colors</Caption>
									<ColorBar>
										{
											project.frontend.colors.map((color: string, idx: number) => {
												return <Color key={`color-${idx}`} color={color} />;
											})
										}
									</ColorBar>
								</Row>
								<Row style={{ alignItems: "flex-start" }}>
									<Caption style={{ paddingTop: 0, paddingRight: "1rem" }}>Font</Caption>
									<Column>
										<Font style={{ fontWeight: 300, fontStyle: "italic", fontFamily: `${project.frontend.font.name}, sans-serif` }}>
											{project.frontend.font.name}
										</Font>
										<Font style={{ fontWeight: 500, fontStyle: "normal", fontFamily: `${project.frontend.font.name}, sans-serif` }}>
											{project.frontend.font.name}
										</Font>
										<Font style={{ fontWeight: 700, fontStyle: "normal", fontFamily: `${project.frontend.font.name}, sans-serif` }}>
											{project.frontend.font.name}
										</Font>
									</Column>
								</Row>
								<Spacer />
							</> : null
					}
					<Row>
						{
							details?.forks_count != undefined ?
								<Item>
									<IoGitNetworkOutline />
									{details.forks_count}
								</Item> : null
						}
						{
							details?.stargazers_count != undefined ?
								<Item>
									<IoStarOutline />
									{details.stargazers_count}
								</Item> : null
						}
						{
							details?.watchers_count != undefined ?
								<Item>
									<IoEyeOutline />
									{details.watchers_count}
								</Item> : null
						}
						{
							details?.created_at != undefined ?
								<Item>
									<IoCalendarOutline />
									<DateString date={details?.created_at} />
								</Item> : null
						}
					</Row>
				</Column>
			</InfoBox>
			{
				isMobileRatio()
					? <PreviewImageModal>
						<GlassMagnifier
							imageSrc={`images/projects/${project.image}.png`}
							magnifierBorderSize={3}
							magnifierSize="75%"
						/>
					</PreviewImageModal>
					: <PreviewImage style={{ marginTop: "1rem" }}>
						<GlassMagnifier
							imageSrc={`images/projects/${project.image}.png`}
							magnifierBorderSize={3}
							magnifierSize="75%"
						/>
					</PreviewImage>
			}
		</Modal>
	</>;
}

const DateString = (props: {date: string}) => {
	const date = new Date(props.date);
	return <>{date.toLocaleDateString()}</>;
};

export default Portfolio;

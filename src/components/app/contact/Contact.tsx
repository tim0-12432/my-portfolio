import React from "react";
import { Section } from "../../elements/Sections.style";
import { ContactCard, ContactContainer, Headline, Link, SocialCaption, SocialIcon, SocialName } from "./Contact.style";
import data from "../../../resources/data/social";

function Contact() {
	return (
		<Section id="contact">
			<Headline>Contact Me</Headline>
			<SocialCaption style={{ paddingLeft: "5rem" }}>Get in touch...</SocialCaption>
			<ContactContainer>
				{
					data.map((social, index) => {
						return (
							<ContactCard key={`contact-${index}`}>
								<Link href={social.link} target="_blank" referrerPolicy="origin">
									<SocialIcon>
										{social.icon}
									</SocialIcon>
									<SocialCaption>
										{social.network}
									</SocialCaption>
									<SocialName>
										{social.name}
									</SocialName>
								</Link>
							</ContactCard>
						);
					})
				}
			</ContactContainer>
		</Section>
	);
}

export default Contact;

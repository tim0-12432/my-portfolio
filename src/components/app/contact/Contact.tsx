import React from "react";
import { Section } from "../../elements/Sections.style";
import { ContactCard, ContactContainer, Headline, Link, SocialCaption, SocialIcon } from "./Contact.style";
import data from "../../../resources/data/social";

function Contact() {
	return (
		<Section id="contact">
            <Headline>Contact Me</Headline>
            <ContactContainer>
                {
                    data.map((social, index) => {
                        return (
                            <ContactCard>
                                <Link href={social.link} target="_blank">
                                    <SocialIcon>
                                        {social.icon}
                                    </SocialIcon>
                                    <SocialCaption>
                                        {social.network}
                                    </SocialCaption>
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

import React from "react";
import { Button } from "../../elements/Button.style";
import { ParallaxBaseLayer, ParallaxBeforeLayer, ParallaxGroup, ParallaxWrapper } from "../../parallax/Parallax.style";
import { Background, ButtonContainer, InfoBoxContainer, InfoBox, Logo, Image, Transition } from "./Home.style";

function Home(): JSX.Element {
	return (
		<ParallaxWrapper id="home">
			<ParallaxGroup>
				<ParallaxBaseLayer>
					<Background>
						<Image />
						<Transition>
							<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
								<path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
							</svg>
						</Transition>
					</Background>
				</ParallaxBaseLayer>
				<ParallaxBeforeLayer>
					<Logo>Tim0_12432</Logo>
					<InfoBoxContainer>
						<InfoBox>
							<p>Hi,</p>
							<p>my name is Timo!</p>
							<p>Welcome to</p>
							<p><strong>My Personal Homepage</strong>!</p>
						</InfoBox>
						<ButtonContainer>
							<Button outlined onClick={() => {window.location.href = "#about";}}>
								Scroll down
							</Button>
						</ButtonContainer>
					</InfoBoxContainer>
				</ParallaxBeforeLayer>
			</ParallaxGroup>
		</ParallaxWrapper>
	);
}

export default Home;

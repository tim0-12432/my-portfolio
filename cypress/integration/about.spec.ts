/* eslint-disable no-undef */
/// <reference types="cypress" />

import { find } from "cypress/types/lodash";
import thoughts from "../../src/resources/data/thoughts.json";

describe("About", () => {
	const ABOUT_SELECTOR = "[id=about]";

	beforeEach(() => {
		cy.visit("/");
	});

	describe("Intro", () => {
		it("has a text on the left", () => {
			cy.get(ABOUT_SELECTOR).find("h1").should("be.visible");
			cy.get(ABOUT_SELECTOR).find("h1").should("have.text", "About Me");

			cy.get(ABOUT_SELECTOR).find("p").should("exist");
		});

		it("has an image on the right", () => {
			cy.get(ABOUT_SELECTOR).find(".react-reveal").children("div").children("div").should("exist");
			cy.get(ABOUT_SELECTOR).find(".react-reveal").children("div").children("div").should("have.css", "background-image");
		});
	});

	describe("Skills", () => {
		it("has three cards", () => {
			cy.get(ABOUT_SELECTOR).find("#skills").find("h3").should("have.length", 3);
		});

		it("has a hover animation", () => {
			cy.get(ABOUT_SELECTOR).find("#skills").find("li").children("a").should("exist");
			cy.get(ABOUT_SELECTOR).find("#skills").find("li").children("a").children("span").should("not.be.visible");
		});
	});

	describe("Thoughts", () => {
		it("has the right amount of cards", () => {
			cy.get(ABOUT_SELECTOR).find("#thoughts").children("div").next().children("div").children("div").should("have.length", thoughts.length);
		});

		it("has an image depending on index", () => {
			const cards = cy.get(ABOUT_SELECTOR).find("#thoughts").children("div").next().children("div").children("div");
			cards.each((value, index) => {
				if (index%2 == 0) {
					cy.wrap(value).children("img").should("have.css", "margin-right");
				} else {
					cy.wrap(value).children("img").should("have.css", "margin-left");
				}
			});
		});
	});
});
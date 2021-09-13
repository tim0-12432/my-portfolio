/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Home", () => {
	const HOME_SELECTOR = "[id=home]";
	const ABOUT_SELECTOR = "[id=about]";

	beforeEach(() => {
		cy.visit("/");
	});

	it("has call to action button", () => {
		cy.get(HOME_SELECTOR).find("button").should("be.visible");
		cy.get(HOME_SELECTOR).find("button").should("have.text", "Scroll down");
	});

	it("has logo in the corner", () => {
		cy.get(HOME_SELECTOR).find("h1").should("be.visible");
		cy.get(HOME_SELECTOR).find("h1").should("have.text", "Tim0_12432");
		cy.get(HOME_SELECTOR).find("h1").should("have.css", "font-family", "Upheaval, Arial, sans-serif");
	});

	it("scrolls down", () => {
		cy.get(HOME_SELECTOR).should("be.visible");
		cy.get(HOME_SELECTOR).find("button").click();
		cy.get(ABOUT_SELECTOR).should("be.visible");
	});
});
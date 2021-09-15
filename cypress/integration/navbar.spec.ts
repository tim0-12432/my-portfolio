/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Home", () => {
	const NAVBAR_SELECTOR = "[id=navbar]";
	const HOME_SELECTOR = "[id=home]";
	const ABOUT_SELECTOR = "[id=about]";
	const PORTFOLIO_SELECTOR = "[id=portfolio]";
	const CONTACT_SELECTOR = "[id=contact]";

	beforeEach(() => {
		cy.visit("/");
	});

	it("has working links", () => {
		const childs = cy.get(NAVBAR_SELECTOR).children("div");
		cy.get(NAVBAR_SELECTOR).children("div").eq(1).should("be.visible").children("a").should("have.text", "about me").click();
		cy.get(ABOUT_SELECTOR).should("be.visible");
		cy.get(NAVBAR_SELECTOR).children("div").eq(2).should("be.visible").children("a").should("have.text", "portfolio").click();
		cy.get(PORTFOLIO_SELECTOR).should("be.visible");
		cy.get(NAVBAR_SELECTOR).children("div").eq(3).should("be.visible").children("a").should("have.text", "contact").click();
		cy.get(CONTACT_SELECTOR).should("be.visible");
		cy.get(NAVBAR_SELECTOR).children("div").eq(0).should("be.visible").children("a").should("have.text", "home").click();
		cy.get(HOME_SELECTOR).should("be.visible");
	});

	it("has a theme button that works", () => {
		cy.get(NAVBAR_SELECTOR).find("button").should("be.visible");
		cy.get(NAVBAR_SELECTOR).should("have.css", "background-color", "rgb(237, 237, 237)");
		cy.get(NAVBAR_SELECTOR).find("button").click();
		cy.get(NAVBAR_SELECTOR).should("have.css", "background-color", "rgb(26, 26, 26)");
	});
});
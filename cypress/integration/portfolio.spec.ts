/* eslint-disable no-undef */
/// <reference types="cypress" />

import projects from "../../src/resources/data/projects.json";

describe("Portfolio", () => {
	const PORTFOLIO_SELECTOR = "[id=portfolio]";

	beforeEach(() => {
		cy.visit("/");
	});

	it("has right amount of projects", () => {
		cy.get(PORTFOLIO_SELECTOR).children("div").children("div").should("have.length", projects.length);
	});

	it("puts on dialog when clicking", () => {
		cy.get(PORTFOLIO_SELECTOR).children("div").children("div").first().click();
		cy.get("#root").children("div").next().next().next().children("div").should("be.visible");
	});

	it("puts exits the dialog", () => {
		cy.get(PORTFOLIO_SELECTOR).children("div").children("div").first().click();
		cy.get("#root").children("div").next().next().next().children("div").find("button").click();
		cy.get("#root").children("div").next().next().next().should("not.exist");
	});
});
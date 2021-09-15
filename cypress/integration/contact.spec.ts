/* eslint-disable no-undef */
/// <reference types="cypress" />

import data from "../../src/resources/data/social";

describe("Contact", () => {
	const CONTACT_SELECTOR = "[id=contact]";

	beforeEach(() => {
		cy.visit("/");
	});

	it("has right amount of social buttons", () => {
		cy.get(CONTACT_SELECTOR).children("div").next().children("div").children("div").should("have.length", data.length);
	});
});
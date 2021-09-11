/* eslint-disable no-undef */
describe("App", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("has section home", () => {
		cy.get("[id=home]").should("exist");
	});

	it("has section about", () => {
		cy.get("[id=about]").should("exist");
	});

	it("has section portfolio", () => {
		cy.get("[id=portfolio]").should("exist");
	});

	it("has section contact", () => {
		cy.get("[id=contact]").should("exist");
	});

	it("has section copyright", () => {
		cy.get("[id=copyright]").should("exist");
	});
});
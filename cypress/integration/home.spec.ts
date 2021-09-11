/* eslint-disable no-undef */
describe("Home", () => {
	let home = null;

	beforeEach(() => {
		cy.visit("/");
		home = cy.get("[id=home]");
	});

	it("has call to action button", () => {
		home.children("button").should("be.visible");
		home.children("button").should("have.value", "Scroll down");
	});
});
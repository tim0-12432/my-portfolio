/* eslint-disable no-undef */
import "./commands";
import "cypress-react-unit-test/support";

Cypress.on("uncaught:exception", (err) => {
	console.log(err);
	return false;
});
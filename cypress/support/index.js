/* eslint-disable no-undef */
import "./commands";
import "cypress-react-unit-test/support";

Cypress.on("uncaught:exception", (err, _runnable) => {
	console.log(err);
	return false;
});
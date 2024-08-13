import Page from "../app/page";

it("uses custom text for the button label", () => {
  cy.mount(<Page></Page>);
  cy.get("div").should("contains.text", "3");
});

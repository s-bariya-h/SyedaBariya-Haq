import * as config from "../config/config";

describe("Pet Store api", () => {
  context("Testing Pet Requests", () => {
    it("GET request", () => {
      // Checking the header content type of the request
      cy.request({
        method: "GET",
        url: `/pet/${config.petExampleValue.id}`,
      })
        .its("headers")
        .its("content-type")
        .should("include", "application/json");

      // Further Tests
      cy.request({
        method: "GET",
        url: `/pet/${config.petExampleValue.id}`,
      }).then((response) => {
        // Checking the status of the request
        expect(response.status).to.eq(200);
        expect(response.isOkStatusCode).to.eq(true);

        // Additionally Checking error status codes
        expect(response.status).to.not.equal(400); // Invalid ID supplied
        expect(response.status).to.not.equal(404); // Pet not found

        // Unorthodox way to check if the coming response is JSON
        cy.log(JSON.stringify(response.body));

        // Schema validation
        expect(response.body).to.have.all.keys(
          Object.keys(config.petExampleValue)
        );
      });
    });

    it("POST request", () => {
      cy.request({
        method: "POST",
        url: "/pet",
        body: config.myPetExample,
      }).then((response) => {
        // Checking the status of the request
        expect(response.status).to.eq(200);
        expect(response.isOkStatusCode).to.eq(true);

        // Additionally Checking error status codes
        expect(response.status).to.not.equal(405); // Invalid input

        // Schema validation
        expect(response.body).to.have.all.keys(
          Object.keys(config.myPetExample)
        );
      });

      // GET Request to check if our example pet got saved or not
      cy.request({
        method: "GET",
        url: `/pet/${config.myPetExample.id}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.status).to.not.equal(404); // Pet not found

        // Schema validation
        expect(response.body).to.have.all.keys(
          Object.keys(config.myPetExample)
        );

        // Randomly chosen Values Validation
        expect(response.body.id).to.eq(config.myPetExample.id);
        expect(response.body.name).to.eq(config.myPetExample.name);
        expect(response.body.status).to.eq(config.myPetExample.status);
      });
    });

    it("DELETE request", () => {
      // Get API Authorization

      // Updating the values of the myPetExample by id
      // (saved in the previous test)
      cy.request({
        method: "DELETE",
        url: `/pet/${config.myPetExample.id}?api_key=1234`,
        failOnStatusCode: false,
      }).then((response) => {
        // Checking the status of the request
        expect(response.status).to.eq(200);
        expect(response.isOkStatusCode).to.eq(true);

        // Additionally Checking error status codes
        expect(response.status).to.not.equal(400); // Invalid pet value
      });

      // Get request to check if the pet still exists
      cy.request({
        method: "GET",
        url: `/pet/${config.myPetExample.id}`,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404); // Pet not found
      });
    });
  });
});

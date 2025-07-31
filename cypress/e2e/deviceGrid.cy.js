/// <reference types="cypress" />

describe('DeviceGrid Page', () => {
  it('should load the main page and display the app title', () => {
    cy.visit('/');
    cy.contains('IOT Devices Manager', { matchCase: false }).should('exist');
  });

  it('should filter devices using the search bar', () => {
    cy.visit('/');
    cy.get('input[placeholder*="Filter your devices"]').type('Sensor');
    cy.get('table').find('tr').should('have.length.greaterThan', 1); 
  });

  it('should paginate to next page when clicking pagination', () => {
    cy.visit('/');
    cy.get('button[aria-label="Go to next page"]').click();
    cy.get('button[aria-label^="Current page"]').should('have.attr', 'aria-current', 'page');
  });

  it('should show the correct number of rows per page', () => {
    cy.visit('/');
    cy.get('table').find('tr').then(rows => {
      expect(rows.length).to.be.greaterThan(1);
      expect(rows.length).to.be.lessThan(12);
    });
  });

  it('should clear the search and show all devices again', () => {
    cy.visit('/');
    cy.get('input[placeholder*="Filter your devices"]').type('Sensor');
    cy.get('input[placeholder*="Filter your devices"]').clear();
    cy.get('table').find('tr').should('have.length.greaterThan', 1);
  });

  it('should disable previous page button on first page', () => {
    cy.visit('/');
    cy.get('button[aria-label="Go to previous page"]').should('be.disabled');
  });

  it('should disable next page button on last page', () => {
    cy.visit('/');
    function goToLastPage() {
      cy.get('button[aria-label="Go to next page"]').then($btn => {
        if (!$btn.is(':disabled')) {
          cy.wrap($btn).click();
          goToLastPage();
        }
      });
    }
    goToLastPage();
    cy.get('button[aria-label="Go to next page"]').should('be.disabled');
  });
});

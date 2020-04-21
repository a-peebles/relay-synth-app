
const getStore = () => cy.window().its('app.$store');
describe('Leaderboard', () => {

    beforeEach(function() {
        cy.visit('/');
        it('loads', () => {
            cy.window()
            .its('app')
        })  
        getStore().then((store) => {
            store.dispatch('login', { email: 'alex_peebles@outlook.com',
            password: 'Moley2608!'});
        })
        getStore().its('getters.isLoggedIn').should('eq', true);

    })
    it('should allow logged in user to visit leaderboard page', function() {
        cy.visit('/leaderboard');
        cy.contains('Leaderboard');
        cy.contains('Email');
        cy.contains('Score');
        cy.contains('Rank');
        cy.contains('Tutorials Completed');
        cy.contains('alex_peebles@outlook.com');
        cy.get('.v-data-footer__icons-after').click();
        cy.get('#search-field').type('alex_peebles@outlook.com');
        cy.get('#search-field').clear();
        cy.get('.v-data-footer__icons-after').click();
        cy.get('.v-data-footer__icons-before').click();

   

    })



})
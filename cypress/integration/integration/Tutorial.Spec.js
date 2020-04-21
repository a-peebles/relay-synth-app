
const getStore = () => cy.window().its('app.$store');
describe('Tutorial Single', () => {

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
        cy.visit('/tutorials/1');

    })
    it('should allow logged in user to visit tutorials page', function() {
        cy.contains('Sine Waves');

    })
    it('should play the tutorial and user synth with the play button', function() {
        cy.wait(1000);
        cy.get('#tutorial-play-button').click();
        cy.wait(4000);
        cy.get('#tutorial-play-button').click();
        cy.wait(1000);
        cy.get('#user-play-button').click();
        cy.wait(4000);
        cy.get('#user-play-button').click();
    })

    it('Should select an incorrect option from the dropdown menu and submit the answer', function() {
        cy.get('#waveform-select').click();
        cy.contains('Waveform 1').click();
        cy.get('#select-oscillator').click();
        cy.get('#user-play-button').click();
        cy.wait(2000);
        cy.get('#user-play-button').click();
        cy.get('#check-answer').click();
        cy.contains('Incorrect!! Try playing the example again');
    })
    it('Should select  thecorrect option from the dropdown menu and submit the answer', function() {
        cy.get('#waveform-select').click();
        cy.contains('Waveform 2').click();
        cy.get('#select-oscillator').click();
        cy.get('#user-play-button').click();
        cy.wait(2000);
        cy.get('#user-play-button').click();
        cy.get('#check-answer').click();
        cy.contains('Correct!!');
    })
})
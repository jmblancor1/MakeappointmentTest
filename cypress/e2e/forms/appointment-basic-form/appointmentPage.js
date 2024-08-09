class appointmentPage{
    static navigatingMainPage(){
        cy.visit(baseUrl);

    }
    static navigatingMakeAppointment(){
        cy.get('btn-make-appointment').click();
    }
    static authenticationSuccess(userName,password){
        cy.get('txt-username').type(userName);
        cy.get('txt-password').type(password);
        cy.get('btn-login').click({force: true}); 
        cy.exceptions();
     
    }
    static makeAppointment(facility,comment){
        const date = new Date(2024, 9, 5) // Mes es cero-indexado: 7 = agosto

        cy.get('combo_facility').select(facility);
        cy.selectDate(date);
        cy.get('txt_comment',{ timeout: 40000 }).type(comment + '{enter}');
        cy.get('btn-book-appointment').click();
    }
    static verifyingSuccessMakeAppointment(sucessMessage){
        //se valida la creacion esitoso del post
        cy.contains(successMessage).should('be.visible');
    }

}
export default appointmentPage;
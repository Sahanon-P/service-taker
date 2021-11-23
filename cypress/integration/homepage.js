describe("renders the homepage", () => {
    it("renders correctly", () => {
        cy.visit("/")
        cy.url().should('eq', 'https://service-taker.vercel.app/login')
    })
    it("allow user to signup", () =>{
        cy.visit("/")
        cy.get("#root").get(".container .login:first button:first").click()
        cy.url().should('eq', 'https://service-taker.vercel.app/signup')
        cy.get("#root").get(".register").get("form > button").eq(1).click()
        cy.url().should('eq', 'https://service-taker.vercel.app/login')
    })
})
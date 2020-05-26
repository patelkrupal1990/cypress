class LoginPage {


fillUsername(username){
  cy.get('#login').within(() => {
   const user =  cy.get('#login_field')
         user.focus()
         user.clear()
         user.type(username, { delay: 10 }).should('have.value',username)
  })
return this    
}

fillPassword(password){
  cy.get('#login').within(() =>{
    const pwd = cy.get('#password')
    pwd.type(password)
    pwd.clear()
    pwd.should('have.value','')
    pwd.type(password)
    pwd.should('have.value',password)
  })
  return this  
}

loginButton(){
  const button = cy.get('.btn')
    button.click()
}


}

export default LoginPage
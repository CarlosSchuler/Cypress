import signUp from "../pages/SignupPage";
import SignUpFactory from "../factories/SignUpFactory";
import SignupPage from "../pages/SignupPage";



describe("Cadastro", () => {
  it.skip("Usuário deve se tornar um entregador", function () {
    var deliver = SignUpFactory.deliver();

    signUp.go();
    signUp.fillForm(deliver);
    signUp.submit();
    signUp.modalShouldBe(
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
    );
  });

it.skip("CPF incorreto", function () {
    var deliver = SignUpFactory.deliver();

    deliver.cpf = "0182123abcas";

    signUp.go();
    signUp.fillForm(deliver);
    signUp.submit();
    signUp.modalErrorShouldBe("Oops! CPF inválido");
  });

it.skip("Email incorreto", function () {
    var deliver = SignUpFactory.deliver();

    deliver.email = "mail.com";

    signUp.go();
    signUp.fillForm(deliver);
    signUp.submit();
    signUp.modalErrorShouldBe("Oops! Email com formato inválido.");
  });

context("Required fields", function () {
    const messages = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "cep", output: "É necessário informar o CEP" },
      { field: "number", output: "É necessário informar o número do endereço" },
      { field: "delivery", output: "Selecione o métodos de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" }
    ]

    before(function() {
        SignupPage.go()
        SignupPage.submit()
     })
    
    messages.forEach(function(msg){
        it(`${msg.field} is required`, function(){
            SignupPage.modalErrorShouldBe(msg.output)
        })
    })
})
})
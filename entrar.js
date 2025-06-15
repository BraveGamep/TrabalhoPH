import Aluno from "./classe.js";

let form_entrar = document.querySelector("#id_formularioEntrar");
form_entrar.addEventListener("submit", (evento) => {
  evento.preventDefault();

  let login = "false";
  let nomeEmpresa = window.document.getElementById("id_empresa").value;
  let nomevar = window.document.getElementById("id_nome").value;
  let contas = [];
  contas = JSON.parse(localStorage.getItem("contas")) || [];
  for (let i = 0; i < contas.length || login != "true"; i++) {
    if (contas[i] == `Empresa: ${nomeEmpresa} | Nome: ${nomevar}`) {
      alert("Login feito com sucesso!");
      login = "true";
      window.location.href =
        "https://docs.google.com/spreadsheets/d/1v-DN-Im10ZHcAONQiGFzmKv-iXvfW1ckkt9Sq1kugHs/edit?usp=classroom_web&authuser=0";
    } else if (
      "Empresa: admin@admin.com | Nome: admin" ==
      `Empresa: ${nomeEmpresa} | Nome: ${nomevar}`
    ) {
      alert("Login feito com sucesso!");
      login = "true";
      window.location.href = "./admin_CRUD.html";
    } else if (contas[i] == undefined) {
      break;
    }
  }
  console.log(nomeEmpresa);
  console.log(nomevar);
  if (login != "true") {
    alert(
      `Não foi possível fazer login.\nNome da empresa ou nome do aluno incorretos.`
    );
  }
});

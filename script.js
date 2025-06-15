import Aluno from "./classe.js";
let conta = "";
let contaCadastrada = new Boolean(false);
let contas = JSON.parse(localStorage.getItem("contas")) || [];
let form = document.querySelector("#id_formulario");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  let nomeEmpresa = window.document.getElementById("id_empresa").value;
  let nomevar = window.document.getElementById("id_nome").value;
  contaCadastrada = false;

  for (let i = 0; i < contas.length; i++) {
    if (contas[i] == `Empresa: ${nomeEmpresa} | Nome: ${nomevar}`) {
      alert(`Essa conta já existe.`);
      contaCadastrada = true;
    }
  }

  if (
    nomeEmpresa != "admin@admin.com" &&
    nomevar != "admin" &&
    nomeEmpresa != "" &&
    nomevar != "" &&
    contaCadastrada == false
  ) {
    conta = new Aluno(nomeEmpresa, nomevar);
    contas.push(`Empresa: ${conta.getEmpresa()} | Nome: ${conta.getNome()}`);
    alert(`Conta cadastrada com sucesso.`);
  } else if (nomeEmpresa == "admin@admin.com" && nomevar == "admin") {
    alert(`O Administrador não pode ser cadastrado.`);
  } else if (nomeEmpresa == "" && nomevar == "") {
    alert(`Nome da empresa ou nome do aluno vazio.`);
  }

  localStorage.setItem("nome", conta.getNome());
  localStorage.setItem("Empresa", conta.getEmpresa());

  localStorage.setItem("contas", JSON.stringify(contas));
  form.reset();
});

let divAlunos = window.document.getElementById("id_lista_alunos");
divAlunos.innerHTML = mensagem;

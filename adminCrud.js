import Aluno from "./classe.js";
let conta = "";
let contaCadastrada = new Boolean(false);
let listarTodosvar = new Boolean(false);
let contas = JSON.parse(localStorage.getItem("contas")) || [];

let form = document.querySelector("#id_formulario");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
});
let cadastrar = document.querySelector("#id_cadastrar");
cadastrar.addEventListener("click", (evento) => {
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
    let divAlunos = window.document.getElementById("id_lista_alunos");
    let mensagem = "";
    for (let i = 0; i < contas.length; i++) {
      mensagem += `${contas[i]} <button id="id_editarBotao${i}">Editar</button> <button id="id_excluirBotao${i}">Excluir</button><br>`;
    }
    divAlunos = window.document.getElementById("id_lista_alunos");
    if (divAlunos != mensagem && listarTodosvar == true) {
      divAlunos.innerHTML = mensagem;
    } else {
      divAlunos == "";
    }
  } else if (nomeEmpresa == "admin@admin.com" && nomevar == "admin") {
    alert(`O Administrador não pode ser cadastrado.`);
  } else if (nomeEmpresa == "" && nomevar == "") {
    alert(`Nome da empresa ou nome do aluno vazio.`);
  }

  localStorage.setItem("contas", JSON.stringify(contas));
  form.reset();
});

let consultar = document.getElementById("id_listarTodos");
consultar.addEventListener("click", (evento) => {
  evento.preventDefault();
  let divAlunos = window.document.getElementById("id_lista_alunos");
  if (listarTodosvar == false && contas.length > 0) {
    listarTodosvar = true;
  } else if (listarTodosvar == true) {
    listarTodosvar = false;
  }

  let mensagem = "";
  if (listarTodosvar == true) {
    for (let i = 0; i < contas.length; i++) {
      mensagem += `${contas[i]} <button id="id_editarBotao${i}">Editar</button> <button id="id_excluirBotao${i}">Excluir</button><br>`;
      divAlunos.innerHTML = mensagem;
    }
  } else if (listarTodosvar == false) {
    divAlunos.innerHTML = "";
  }
});

let Fechar = document.getElementById("id_fechar");
Fechar.addEventListener("click", (evento) => {
  evento.preventDefault();
  id_contaEstado.close();
});

function excluirConta(editarexcluir_id_js) {
  document.querySelector(`#id_excluirBotao${editarexcluir_id_js}`);

  document
    .getElementById("id_lista_alunos")
    .addEventListener("click", function (event) {});
  let divAlunos = window.document.getElementById("id_lista_alunos");
  let mensagem = "";
  contas.splice(editarexcluir_id_js, 1);
  localStorage.setItem("contas", JSON.stringify(contas));
  for (let i = 0; i < contas.length; i++) {
    mensagem += `${contas[i]} <button id="id_editarBotao${i}">Editar</button> <button id="id_excluirBotao${i}">Excluir</button><br>`;
  }
  if (listarTodosvar == false) {
    listarTodosvar == true;
  }
  divAlunos.innerHTML = mensagem;
}
function editarConta(editarexcluir_id_js) {
  document.querySelector(`#id_editarBotao${editarexcluir_id_js}`);
  let divAlunos = window.document.getElementById("id_lista_alunos");

  id_contaEstado.showModal();
  document
    .getElementById("id_salvar")
    .addEventListener("click", function (event) {
      let nomeEmpresa =
        window.document.getElementById("id_empresaDialogo").value;
      let nomevar = window.document.getElementById("id_nomeDialogo").value;
      let mensagem = "";

      contas[
        editarexcluir_id_js
      ] = `Empresa: ${nomeEmpresa} | Nome: ${nomevar}`;
      console.log(editarexcluir_id_js);

      localStorage.setItem("contas", JSON.stringify(contas));
      id_contaEstado.close();

      for (let i = 0; i < contas.length; i++) {
        mensagem += `${contas[i]} <button id="id_editarBotao${i}">Editar</button> <button id="id_excluirBotao${i}">Excluir</button><br>`;
        if (listarTodosvar == false) {
          listarTodosvar = true;
        }
        divAlunos.innerHTML = mensagem;
      }
    },
    {once: true});
}

document
  .getElementById("id_lista_alunos")
  .addEventListener("click", function (event) {
    let editarexcluir_id_js = event.target.id;
    let acao = event.target.id;
    editarexcluir_id_js = parseInt(editarexcluir_id_js.replace(/[^0-9]/g, ""));
    acao = acao.replace(/[0-9]/g, "");
    console.log(editarexcluir_id_js);
    console.log(acao);

    if (acao == "id_excluirBotao") {
      excluirConta(editarexcluir_id_js);
    } else if (acao == "id_editarBotao") {
      editarConta(editarexcluir_id_js);
    }
  });

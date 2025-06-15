export default class Aluno {
  #empresa;
  #nome;
  constructor(empresa, nome) {
    this.#empresa = empresa;
    this.#nome = nome;
  }

  getEmpresa() {
    return this.#empresa;
  }
  setEmpresa(empresa) {
    this.#empresa = empresa;
  }
  getNome() {
    return this.#nome;
  }
  setNome(nome) {
    this.#nome = nome;
  }
}

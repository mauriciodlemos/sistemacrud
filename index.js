let pessoas = []
let editandoIndex = null

function salvar(){
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value

    if(editandoIndex === null) {
        let pessoa = {
            nome:nome,
            idade:idade
        }
        pessoas.push(pessoa)
    } else {
        pessoas[editandoIndex].nome = nome
        pessoas[editandoIndex].idade = idade

        editandoIndex = null
    }

    limparInputs()
    mostrarPessoas()
}

function mostrarPessoas() {
  let lista = document.getElementById("lista")
  lista.innerHTML = ""

  pessoas.forEach(function(pessoa, index) {
    let li = document.createElement("li")

    li.innerText = pessoa.nome + " - " + pessoa.idade

    let btnEditar = document.createElement("button")
    btnEditar.innerText = "Editar"
    btnEditar.onclick = function() {
      editar(index)
    }

    let btnExcluir = document.createElement("button")
    btnExcluir.innerText = "Excluir"
    btnExcluir.onclick = function() {
      excluir(index)
    }

    li.appendChild(btnEditar)
    li.appendChild(btnExcluir)

    lista.appendChild(li)
  })
}

function editar(index) {
  let pessoa = pessoas[index]

  document.getElementById("nome").value = pessoa.nome
  document.getElementById("idade").value = pessoa.idade

  editandoIndex = index
}
function excluir(index) {
  pessoas.splice(index, 1)
  mostrarPessoas()
}
function limparInputs() {
  document.getElementById("nome").value = ""
  document.getElementById("idade").value = ""
}
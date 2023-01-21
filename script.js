const form = document.querySelector("#form-habits") // Registrar na memoria
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) // Registrar na memoria evento de Clique
form.addEventListener("change", save) // Registrar na memoria evento de modificação

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
  localStorage.getItem("NLWSetup@habits")
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //Salva a ação no armazenamento do navegador
nlwSetup.setData(data)
nlwSetup.load()

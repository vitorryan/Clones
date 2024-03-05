// Primeiro passo foi identificar quem era o input e o button
const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

// Segundo passo saber quando o botão foi clicado
button.addEventListener('click', adicionarTarefa)

// Terceiro passo montar a função que vai pegar o valor do input quando o button for clicado
let minhaListaDeItens = []


function adicionarTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''
    mostrarTarefas()
}

// Quarto passo criar uma função para mostrar a nova tarefa na tela
function mostrarTarefas() {
    let novaLi = ''
    minhaListaDeItens.forEach( (item, index) => {
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}" >
            <img src="source/img/checked.png" alt="checked" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}</p>
            <img src="source/img/trash.png" alt="trash" onclick="deletarItem(${index})">
        </li>`
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1)
    mostrarTarefas()
}

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    mostrarTarefas()
}

function regarregarTarefas() {
    const tarefasLocalStorage = localStorage.getItem('lista')
    minhaListaDeItens = JSON.parse(tarefasLocalStorage)

    mostrarTarefas()
}
regarregarTarefas()
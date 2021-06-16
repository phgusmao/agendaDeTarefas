let tarefasDaManha = []
let tarefasDaTarde = []
let tarefasDaNoite = []

//taferas da manha
document.getElementById('tarefasManha').addEventListener('submit', (m) =>{
    let tarefaMinput = document.getElementById("inputManha")
    let tarefaMinputD = document.getElementById("inputDateM")
    let tarefaMinputT = document.getElementById("inputTimeM")
    let tarefaM = document.getElementById("inputManha").value
    let tarefaTimeM = document.getElementById("inputTimeM").value
    let tarefaDateM = document.getElementById("inputDateM").value
    addTarefaM(tarefaM, tarefaTimeM, tarefaDateM)
    m.preventDefault()
    tarefaMinput.value = ''
    tarefaMinputD.value=''
    tarefaMinputT.value=''
})

function addTarefaM(tarefaM, tarefaTimeM, tarefaDateM){
    let tarefaDaManha = {
        tarefaM:tarefaM,
        tarefaTimeM:tarefaTimeM,
        tarefaDateM: tarefaDateM
    }
    tarefasDaManha.push(tarefaDaManha)
    readTarefaM()
}

function readTarefaM(){
    let tarefaMhtml = document.getElementById("mostrarManha")
    tarefaMhtml.innerHTML = ''
    for(let i = 0; i < tarefasDaManha.length ; i++){
            tarefaMhtml.innerHTML += `
            Horário: <p>${tarefasDaManha[i].tarefaTimeM}<br><br>
            Data: <p>${tarefasDaManha[i].tarefaDateM}<br>
            <p> ${tarefasDaManha[i].tarefaM}</p>
            <br><button type="button" class="btn btn-outline-warning" onClick="editarTarefaM('${i}')">Editar</button>
            <button type="button" onClick="apagarTarefaM(${i})" class="float-right btn btn-outline-danger">-</button><br><br>
            `
    }
}

function apagarTarefaM(m){
    tarefasDaManha.splice(m, 1)
    readTarefaM()
}

function editarTarefaM(m){
    let tarefaMhtml = document.getElementById('mostrarManha')
    tarefaMhtml.innerHTML = ''
    for(let i = 0; i < tarefasDaManha.length; i++){
        if(i == m){
            tarefaMhtml.innerHTML += `
            <p>Nova tarefa: <input id="tarefaM2" required type="text" placeholder="${tarefasDaManha[i].tarefaM}"></p>
            <p>Novo horário: <input id="tarefaTimeM2" type="time"></p>
            <p>Nova data: <input id="tarefaDateM2" type="date"></p>
            <button type="button" class="btn btn-outline-success" onClick ="atualizarTarefaM(${i})">Salvar</button>
            <button type="button" onClick="apagarTarefaM(${i})"  class="float-right btn btn-outline-danger">-</button><br>
            `
        }else{
            tarefaMhtml.innerHTML += `
            Horário: <p>${tarefasDaManha[i].tarefaTimeM}</p><br>
            Data: <p>${tarefasDaManha[i].tarefaDateM}</p><br>
            <p> ${tarefasDaManha[i].tarefaM}</p>
            <br><button type="button" class="btn btn-outline-warning" onClick="editarTarefaM('${i}')">Editar</button>
            <button type="button" onClick="apagarTarefaM(${i})" class="float-right btn btn-outline-danger">-</button><br>
            `
        }
    }
}

function atualizarTarefaM(m){
    let upTarefaM = document.getElementById("tarefaM2").value
    let upTimeM = document.getElementById("tarefaTimeM2").value
    let upDateM = document.getElementById("tarefaDateM2").value
    if(upTarefaM == ''){
        alert("Por favor, coloque uma nova tarefa")
    }else{
        tarefasDaManha[m].tarefaTimeM = upTimeM
        tarefasDaManha[m].tarefaM = upTarefaM
        tarefasDaManha[m].tarefaDateM = upDateM
        readTarefaM()
    }
}

// tarefas da tarde
document.getElementById('tarefasTarde').addEventListener('submit', (t) =>{
    let tarefaTinput = document.getElementById("inputTarde")
    let tarefaTinputD = document.getElementById("inputDateT")
    let tarefaTinputT = document.getElementById("inputTimeT")
    let tarefaTimeT = document.getElementById("inputTimeT").value
    let tarefaT = document.getElementById("inputTarde").value
    let tarefaDateT = document.getElementById("inputDateT").value
    addTarefaT(tarefaT, tarefaTimeT, tarefaDateT)
    t.preventDefault()
    tarefaTinput.value = ''
    tarefaTinputD.value=''
    tarefaTinputT.value=''
})

function addTarefaT(tarefaT, tarefaTimeT, tarefaDateT){
    let tarefaDaTarde = {
        tarefaT:tarefaT,
        tarefaTimeT:tarefaTimeT,
        tarefaDateT: tarefaDateT
    }
    tarefasDaTarde.push(tarefaDaTarde)
    readTarefaT()
}

function readTarefaT(){
    let tarefaThtml = document.getElementById("mostrarTarde")
    tarefaThtml.innerHTML = ''
    for(let i = 0; i < tarefasDaTarde.length ; i++){
            tarefaThtml.innerHTML += `
            Horário: <p>${tarefasDaTarde[i].tarefaTimeT}</p><br>
            Data: <p> ${tarefasDaTarde[i].tarefaDateT}</p><br>
            <p> ${tarefasDaTarde[i].tarefaT}</p>
            <br><button type="button" class="btn btn-outline-warning" onClick="editarTarefaT(${i})">Editar</button>
            <button type="button" onClick="apagarTarefaT(${i})" class="float-right btn btn-outline-danger">-</button><br>
            `
    }
}

function apagarTarefaT(t){
    tarefasDaTarde.splice(t, 1)
    readTarefaT()
}

function editarTarefaT(t){
    let tarefaThtml = document.getElementById('mostrarTarde')
    tarefaThtml.innerHTML = ''
    for(let i = 0; i < tarefasDaTarde.length; i++){
        if(i == t){
            tarefaThtml.innerHTML += `
            <p>Nova tarefa: <input id="tarefaT2" required type="text" placeholder="${tarefasDaTarde[i].tarefaT}"></p>
            <p>Novo horário: <input id="tarefaTimeT2" type="time"></p>
            <p>Nova data: <input id="tarefaDateT2" type="date"></p>
            <button type="button" class="btn btn-outline-success" onClick ="atualizarTarefaT(${i})">Salvar</button>
            <button type="button" onClick="apagarTarefaT(${i})"  class="float-right btn btn-outline-danger">-</button><br>
            `
        }else{
            tarefaThtml.innerHTML += `
            Horário: <p>${tarefasDaTarde[i].tarefaTimeT}</p><br>
            Data: <p>${tarefasDaTarde[i].tarefaDateT}</p><br>
            <p> ${tarefasDaTarde[i].tarefaT}</p>
            <br><button type="button" class="btn btn-outline-warning" onClick="editarTarefaT(${i})">Editar</button>
            <button type="button" onClick="apagarTarefaT(${i})" class="float-right btn btn-outline-danger">-</button><br>
            `
        }
    }
}

function atualizarTarefaT(t){
    let upTarefaT = document.getElementById("tarefaT2").value
    let upTimeT = document.getElementById("tarefaTimeT2").value
    let upDateT = document.getElementById("tarefaDateT2").value
    if(upTarefaT == ''){
        alert("Por favor, coloque uma nova tarefa")
    }else{
        tarefasDaTarde[t].tarefaTimeT = upTimeT
        tarefasDaTarde[t].tarefaT = upTarefaT
        tarefasDaTarde[t].tarefaDateT = upDateT
        readTarefaT()
    }
}

//tarefa da noite
document.getElementById('tarefasNoite').addEventListener('submit', (n) =>{
    let tarefaNinput = document.getElementById("inputNoite")
    let tarefaNinputT = document.getElementById("inputTimeN")
    let tarefaNinputD = document.getElementById("inputDateN")
    let tarefaN = document.getElementById("inputNoite").value
    let tarefaTimeN = document.getElementById("inputTimeN").value
    let tarefaDateN = document.getElementById("inputDateN").value
    addTarefaN(tarefaN, tarefaTimeN, tarefaDateN)
    n.preventDefault()
    tarefaNinput.value=''
    tarefaNinputT.value=''
    tarefaNinputD.value=''
})

function addTarefaN(tarefaN, tarefaTimeN, tarefaDateN){
    let tarefaDaNoite = {
        tarefaN:tarefaN,
        tarefaTimeN:tarefaTimeN,
        tarefaDateN:tarefaDateN
    }
    tarefasDaNoite.push(tarefaDaNoite)
    readTarefaN()
}

function readTarefaN(){
    let tarefaNhtml = document.getElementById("mostrarNoite")
    tarefaNhtml.innerHTML = ''
    for(let i = 0; i < tarefasDaNoite.length ; i++){
            tarefaNhtml.innerHTML += `
            Horário: <p>${tarefasDaNoite[i].tarefaTimeN}</p><br>
            Data: <p>${tarefasDaNoite[i].tarefaDateN}</p><br>
            <p> ${tarefasDaNoite[i].tarefaN}</p>
            <br><button type="button" class="btn btn-outline-warning" onClick="editarTarefaN(${i})">Editar</button>
            <button type="button" onClick="apagarTarefaN(${i})" class="float-right btn btn-outline-danger">-</button><br>
            `
    }
}

function apagarTarefaN(n){
    tarefasDaNoite.splice(n, 1)
    readTarefaN()
}

function editarTarefaN(n){
    let tarefaNhtml = document.getElementById('mostrarNoite')
    tarefaNhtml.innerHTML = ''
    for(let i = 0; i < tarefasDaNoite.length; i++){
        if(i == n){
            tarefaNhtml.innerHTML += `
            <p>Nova tarefa: <input id="tarefaN2" required type="text" placeholder="${tarefasDaNoite[i].tarefaN}"></p>
            <p>Novo horário: <input id="tarefaTimeN2" type="time" placeholder="${tarefasDaNoite[i].tarefaTimeN}"></p>
            <p>Nova data: <input id="tarefaDateN2" type="date"></p>
            <button type="button" class="btn btn-outline-success" onClick ="atualizarTarefaN(${i})">Salvar</button>
            <button type="button" onClick="apagarTarefaN(${i})"  class="float-right btn btn-outline-danger">-</button><br>
            `
        }else{
            tarefaNhtml.innerHTML += `
            Horário: <p>${tarefasDaNoite[i].tarefaTimeN}</p><br>
            Data: <p>${tarefasDaNoite[i].tarefaDateN}</p><br>
            <p> ${tarefasDaNoite[i].tarefaN}</p>
            <br><button type="button" class="btn btn-outline-warning" onClick="editarTarefaN(${i})">Editar</button>
            <button type="button" onClick="apagarTarefaN(${i})" class="float-right btn btn-outline-danger">-</button><br>
            `
        }
    }
}

function atualizarTarefaN(n){
    let upTarefaN = document.getElementById("tarefaN2").value
    let upTimeN = document.getElementById("tarefaTimeN2").value
    let upDateN = document.getElementById("tarefaDateN2").value
    if(upTarefaN == ''){
        alert("Por favor, coloque uma nova tarefa")
    }else{
        tarefasDaNoite[n].tarefaTimeN = upTimeN
        tarefasDaNoite[n].tarefaN = upTarefaN
        tarefasDaNoite[n].tarefaDateN = upDateN
        readTarefaN()
    }
}

//Data e hora atual

setInterval (function() {
    let time = new Date()
    let hora = time.getHours()
    let minuto = time.getMinutes()
    let segundo = time.getSeconds()
    let dia = time.getDay()
    let msg = window.document.getElementById('msgDaHora')
    minuto = zero(minuto);
    segundo = zero(segundo);
    switch(dia){
        case 0: msg.innerHTML = `${hora}:${minuto}:${segundo}, Domingo.`;
        break;
        case 1: msg.innerHTML = `${hora}:${minuto}:${segundo}, Segunda.`;
        break;
        case 2: msg.innerHTML = `${hora}:${minuto}:${segundo}, Terça.`;
        break;
        case 3: msg.innerHTML = `${hora}:${minuto}:${segundo}, Quarta.`;
        break;
        case 4: msg.innerHTML = `${hora}:${minuto}:${segundo}, Quinta.`;
        break;
        case 5: msg.innerHTML = `${hora}:${minuto}:${segundo}, Sexta.`;
        break;
        case 6: msg.innerHTML = `${hora}:${minuto}:${segundo}, Sábado.`
        break;
    }
}, 1000)

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}


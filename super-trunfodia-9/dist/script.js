var cartaLememes = {
  nome:"Mike Wazowski morto por dentro",
  imagem: "https://i.pinimg.com/736x/df/ef/52/dfef52bc718c0e35ded5ad5eb80da4bb.jpg",
  atributos: {
  treta:35,
  dibre:99,
  deboche:66,
     }
}
var cartaLicas = {
  nome:"Pato com o sandubão",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPDN4_sm4ICw7c_QAwZo12EGZ8r7g3kbDKAdos12dvyqXfbGioFhW9u4wLzlAUKwuMkU&usqp=CAU",
  atributos: {
  treta:43,
  dibre:70,
  deboche:83,
    }
}
var cartaJato = {
  nome:"Chico Lopes pistolito",
  imagem:"https://www.ahnegao.com.br/wp-content/uploads/2019/09/meme-32.jpg",
  atributos: {
    treta:91,
    dibre:40,
    deboche:65,
  }
}
var cartaThito = {
  nome:"Miau miau brocoli é mau",
  imagem:"https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/18/1_4691731.png?cache_timestamp=1574134871525",
  atributos: {
    treta:65,
    dibre:100,
    deboche:80,
  }
}
var cartaBirara = {
  nome:"Britney Careca",
  imagem:"https://vejasp.abril.com.br/wp-content/uploads/2017/02/1035x1144-20140416-britney-x1800-1397675725.jpg?quality=70&strip=info&w=1024",
  atributos: {
    treta:100,
    dibre:10,
    deboche:40,
  }
}
var carta1 = {
  nome:"Choris no skate",
  imagem:"https://avaazdo.s3.amazonaws.com/dd9ee867776654bd56c36e15c67357f6.jpg",
  atributos: {
    treta:55,
    dibre:100,
    deboche:20,
  }
}
var carta2 = {
  nome:"Bob Esponja pré-histórico", imagem:"https://pbs.twimg.com/profile_images/736547275523166208/Ljpwa6Kg.jpg",
  atributos: {
    treta:99,
    dibre:50,
    deboche:15,
  }
}
var carta3 = {
  nome:"Pica pau tapeado",
  imagem:"https://i.pinimg.com/originals/25/35/c3/2535c31fd8c379efd33bedc4f8e651df.jpg",
  atributos: {
    treta:90,
    dibre:55,
    deboche:30,
  }
}
var carta4 = {
  nome:"Mônica só nos computer",
  imagem:"https://claudia.abril.com.br/wp-content/uploads/2020/01/meme-da-monica-origem-1.jpg",
  atributos: {
    treta:20,
    dibre:60,
    deboche:99,
  }
}
var carta5 = {
  nome:"O grande soldador",
  imagem:"https://i.pinimg.com/600x315/5f/01/11/5f01113231b81781ba31630fd5ce809d.jpg",
  atributos: {
    treta:10,
    dibre:40,
    deboche:70,
  }
}
var carta6 = {
  nome:"Pichula tiste",
  imagem:"https://i.pinimg.com/originals/4d/e6/18/4de61864c45c6751ed27dce4aa92059d.jpg",
  atributos: {
    treta:15,
    dibre:60,
    deboche:40,
  }
}
var cartaSuperTrunfo = {
  nome:"Hackerman",
  imagem:"https://i.kym-cdn.com/entries/icons/original/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg",
  atributos: {
    treta:20,
    dibre:100,
    deboche:99,
  }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaSuperTrunfo, carta6, carta5, carta4, carta3, carta2, carta1, cartaBirara,cartaThito,cartaJato, cartaLicas, cartaLememes]
  
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeCartas()

function atualizaQuantidadeCartas(){
 var divQuantidadeCartas = document.getElementById('quantidade-cartas')
 var html = "Quantidade de cartas no jogo: " + cartas.length
 
 divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)

    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Parabains! Você venceu!</p>'
        audioResultado = '<audio autoplay src="https://www.myinstants.com/media/sounds/anime-wow-sound-effect-mp3cut.mp3"></audio>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Perdeste!</p>'
        pontosMaquina++
      audioResultado = '<audio autoplay src="https://www.myinstants.com/media/sounds/oh_no_1_yTNavML.mp3"></audio>'
    } else {
        htmlResultado = '<p class="resultado-final">Empate!</p>'
      audioResultado = '<audio autoplay src= "https://www.myinstants.com/media/sounds/noot-noot_2.mp3"></audio>'
    }
  
  if (cartas.length == 0) {
    alert("Fim de jogo!")
    if (pontosJogador > pontosMaquina) {
    htmlResultado = '<p class="resultado-final">Ganhaste!</p>' 
audioResultado = '<audio autoplay src= "https://www.myinstants.com/media/sounds/parabains.mp3"></audio>'
    } else if (pontosMaquina > pontosJogador) {
    htmlResultado = '<p class="resultado-final">Perdeste!</p>'  
      audioResultado = '<audio autoplay src= "https://www.myinstants.com/media/sounds/they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3"></audio>'
    } else {
    htmlResultado = '<p class="resultado-final">Empate!</p>' 
      audioResultado = '<audio autoplay src= "https://www.myinstants.com/media/sounds/cut_y2mate_Y5WVpDN.mp3"></audio>'
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false
  }

  divResultado.innerHTML = htmlResultado + audioResultado
  document.getElementById('btnJogar').disabled = true
 
  atualizaPlacar()
  exibeCartaMaquina()
  atualizaQuantidadeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  
  divCartas.innerHTML = `<div id= "carta-jogador" class= "carta"></div> <div id="carta-maquina" class="carta"></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}
const quantidadeIMG = 4

const listaImagens = []

for(let i =0; i<quantidadeIMG; i++){
    listaImagens.push(`Imagens/imagens banner/frame (${[i]}).jpg`)
}

var num = 1

function mudarImg(){
    const imagem = document.querySelector(".banner")
    imagem.src = `Imagens/imagens banner/frame (${num}).jpg`
}

function aumentarNum(){
    if(num<quantidadeIMG){
        num++
    }
    else{
        num = 1
    }
}

setInterval(aumentarNum, 4000)
setInterval(mudarImg, 5000)
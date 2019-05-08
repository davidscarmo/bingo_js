
var a =0; 
var tabela = ['']; 
var sr = 0;
var gn = 0;
var z = 0;
var bingo = '';


var numeros = [''];

function tabelaBingo()
{
     for(i = 0; i<25; i++, a++ )
        {
            tabela[i] = '<div class=fileira id =area' +a + '>' +  '</div>'; 
            document.getElementById('tabelaBingo').innerHTML += tabela[i] ;   
        }
   
      document.getElementById('area12').innerHTML = "<img src='bingoImg.jpg' id='imgBingo' >"; 
      addNum();
}

function addNum()
{
    for(x = 0; x <= 75; x++)
    {
        numeros[x] = sr;
        sr++;
    }
  
}

function gerarNumero()
{

    gn = Math.floor(Math.random() * numeros.length);
    if(z == 12) //utilizado para pular a posição 13 da tabela do bingo que contem a imagem 
        z++;

    document.getElementById('area'+z).innerHTML = "<p class = numTabela> " + numeros[gn] + "</p>";
    document.getElementById('numGerado').innerHTML = "<p class = numTabela> " + numeros[gn] + "</p>";
    numeros.splice(gn, 1); // remove o numero na posição que foi mostrada para que ele não seja repetido
    console.log(numeros);
    z++;
    if(z == a)
        checkBingo();
}

function checkBingo()
{
    if(z == a)
    {
        bingo = prompt("Bingo? S / N ");
        if(bingo == 's' || bingo == 'S')
        {
            alert("Bingo!");
        }
        else // se não der bingo ele gera uma linha mais na cartela, preenche e depois novamente perguntas se deu bingo
        {
            for(i = 0; i < 5; i++, a++ )
        {
            tabela[i] = '<div class=fileira id =area' +a + '>' +  '</div>'; 
            document.getElementById('tabelaBingo').innerHTML += tabela[i] ;   
        }
        }
    }
}
function novoJogo(){
    document.location.reload(true);
}
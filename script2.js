function verificar()
{
    var data = new Date();
    var ano = data.getFullYear();

    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');

    if(fano.value.length == 0 || Number(fano.value) > ano)
    //fano.value.length == 0 para conferir se não foi digitado nada
    {
        window.alert('Verifique os dados e tente novamente!');
    }
    else
    {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        //Cria um elemento pelo JavaScript e armazena variavel img
        img.setAttribute('id', 'foto');
        //Acrescenta um id ao elemento img armazenado na variável img

        if(fsex[0].checked)
        //Confere se o primeiro elemento do fsex (radsex) foi selecionado
        {
            genero = 'Homem';
            if(idade >= 0 && idade < 10)        //Criança
            {
                img.setAttribute('src', 'foto-bebe-m.png');
            }
            else if(idade >=10 && idade < 21)   //Jovem
            {
                img.setAttribute('src', 'foto-jovem-m.png');
            }
            else if(idade < 50)                 //Adulto
            {
                img.setAttribute('src', 'foto-adulto-m.png');
            }
            else                                //Idoso
            {
                img.setAttribute('src', 'foto-idoso-m.png');
            }
        }
        else if (fsex[1].checked)
        //Confere se o segundo elemento do fsex (radsex) foi selecionado
        {
            genero = 'Mulher';
            if(idade >= 0 && idade < 10)        //Criança
            {
                img.setAttribute('src', 'foto-bebe-f.png');
            }
            else if(idade >=10 && idade < 21)   //Jovem
            {
                img.setAttribute('src', 'foto-jovem-f.png');
            }
            else if(idade < 50)                 //Adulto
            {
                img.setAttribute('src', 'foto-adulto-f.png');
            }
            else                                //Idoso
            {
                img.setAttribute('src', 'foto-idoso-f.png');
            }
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
        //Adicionou o elemento img a div com id res armazenado na variavel res

    }
}
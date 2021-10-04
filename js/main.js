function consultaCep() {
    $('.barra-progresso').show()
    $('.cep').hide()
    setTimeout(function() {
        $('.barra-progresso').hide() 
    }, 3000)

    var cep = document.getElementById('cep').value
    var url = `https://viacep.com.br/ws/${cep}/json/`
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            setTimeout(function() {
                if (response.cep === undefined) {
                    $('#titulo_cep').html(`CEP ${cep} não encontrado`)
                    $('#logradouro').html('')
                    $('#bairro').html('')
                    $('#localidade').html('')
                    $('#uf').html('')
                    $('.cep').show(300)
                } else {
                    $('#logradouro').html(response.logradouro)
                    $('#bairro').html(response.bairro)
                    $('#localidade').html(response.localidade)
                    $('#uf').html(response.uf)
                    $('#titulo_cep').html(`CEP ${response.cep}`)
                    $('.cep').show(300)
        
                    /*document.getElementById('logradouro').innerHTML = response.logradouro
                    document.getElementById('bairro').innerHTML = response.bairro
                    document.getElementById('localidade').innerHTML = response.localidade
                    document.getElementById('uf').innerHTML = response.uf*/
                }
            }, 3000)          
        }
    })
}

$(function() {
    $('.cep').hide()
    $('.barra-progresso').hide()
})
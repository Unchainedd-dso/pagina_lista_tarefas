$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault()

        const atividade = $('#tarefa-entrada')

        //tem que ser diretamente dentro do primeiro seletor, pois ele é apenas uma string, e não um texto html com  id, containers, classes, etc
        const novaAtividade = $(`<li>${atividade.val()}</li>`) 
        novaAtividade.appendTo('ul')
        
        atividade.val('')
    })

    // Visto que o li é inserido dinamicamente, temos que usar a delegação de eventos para o clique nos itens da lista
    // Estudar mais sobre delegação de eventos -> O que eu sei: o elemento principal tem que ser o pai, que está presente desde o início
    // O evento do clique deve ser escutado para qualquer elemento li dentro de ul
    $('ul').on('click', 'li', function(e){
        //colocando 'this', estamos referindo aoi li que foi clicado
        $(this).css({
            'text-decoration' : 'line-through'
        })
    })

})
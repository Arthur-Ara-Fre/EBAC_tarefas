$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $(`<li>${novaTarefa}</li>`);
        
        $(novoItem).appendTo('ul');
    })

    $('ul').click(function(e) {
        itemClicado = e.target;
        itemClicado.style.textDecoration = "line-through";
    })
})
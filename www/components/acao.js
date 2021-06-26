// This is a JavaScript file

$(document).on("click", "#buscar", function(){
  $.ajax({
    type:"get",
    url:"https://viacep.com.br/ws/"+$("#cep").val()+"/json/",
    success: function(data){
      var conteudo;
      conteudo = "<p><strong>Logradouro:</strong>"+data.logradouro+"</p>";
      conteudo += "<p><strong>Bairro:</strong>"+data.bairro+"</p>";
      conteudo += "<p><strong>Cidade:</strong>"+data.localidade+"</p>";
      conteudo += "<p><strong>Estado:</strong>"+data.uf+"</p>";
      conteudo += "<p><strong>DDD:</strong>"+data.ddd+"</p>";

      $("#dados").html(conteudo);
    },
    error: function(){
      alert("deu erro!");
    }
  });
});
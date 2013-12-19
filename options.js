function getData()
{
	//Popular a tabela ao entrar na página das opções
}

function returnData(Email)
{
	chrome.storage.sync.get('Email', function (result) {

		var code = result.Email;

		alert("Email: " + Email + ", Código: " + code);

	});
}

function clickHandler(e) 
{
  bootbox.confirm("<form role='form'><br><br><div class='title'><h3><b>Instruções</b></h3></div><br><div class='text'>O Email escolhido deve ser <b>obrigatoriamente</b> igual ao Email do Facebook; <br><br>O Código só deve conter números entre <b>0</b> e <b>9</b>;</div><br><br><div class='form-group'><label class='text' for='Email'><b>Email</b></label><br><input type='email' class='form-control' id='Email'></div><br><div class='form-group'><label class='text' for='Password1'><b>Código</b></label><br><input type='password' class='form-control' id='Password1'></div><br><div class='form-group'><label class='text' for='Password2'><b>Confirmar Código</b></label><br><input type='password' class='form-control' id='Password2'></div></form>", function(result) {

	if($('#Password1').val() == $('#Password2').val())
	{
		var Email = $('#Email').val();
		var code = $('#Password1').val();

		chrome.storage.sync.set({'Email': code});

		//returnData(Email);

		bootbox.alert("<br><div class='text'><b>Dados guardados com sucesso.</b></div>");
	}
	else
	{
		bootbox.alert("<br><div class='text'><b>Os códigos inseridos não são iguais. <br><br>Tente de novo.</b></div>");
	}

  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
});
	

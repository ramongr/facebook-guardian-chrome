function getData()
{
	chrome.storage.local.get(null, function(items) {

	    var allKeys = Object.keys(items);
	    //console.log(allKeys);

	    var table = "<table id='tb' class='text table table-striped'>";

		table += "<tr>																																																		  <td style='text-align: center;'><b> # </b></td>																																					              <td style='text-align: center;'><b> E-Mail </b></td>																																				  <td style='text-align: center;'><b> Código </b></td>																																				              <td style='text-align: center;'><b> Edição </b></td>																																				  </tr>"

		for (var i = 1; i < allKeys.length; i++) 
		{
			table += "<tr><td style='text-align: center;'>" 																																					              + (i) + 																																														            "</td><td style='text-align: center;'>" 																																                          + allKeys[i] + 																																														        "</td><td style='text-align: center;'>" 																																		                  + items[allKeys[i]] + 																																														"</td><td style='text-align: center;'>																																                          <button style='margin-right: 10px;' id='edit' type='button' class='btn btn-warning'><span class='glyphicon glyphicon-pencil'></span></button>															<button id='remove' type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td></tr>";
			
		}

		table += "</table>";

		document.getElementById('table-print').innerHTML = table;

		$('button#remove').on('click',function(){

			var td = $(this).closest('td').parent()[0];

			var mail = td.getElementsByTagName('td')[1].innerHTML;

			removeUser(mail);
		});

		$('button#edit').on('click',function(){
			
			var td = $(this).closest('td').parent()[0];

			var mail = td.getElementsByTagName('td')[1].innerHTML;

			editUser(mail);
		});

	});
	
}

function clickHandler(e) 
{
	bootbox.confirm("<form role='form'>																																													     	    <div class='title'>																																															       <h3><b>Instruções</b></h3>																																													       </div>																																																		       <br>																																																			       <div class='text'>O Email escolhido deve ser <b>obrigatoriamente</b> igual ao Email do Facebook; <br><br>O Código só deve conter números entre <b>0</b> e <b>9</b>;											       </div>																																																		       <br><br>																																																		       <div class='form-group'>																																														       <label class='text' for='Email'><b>Email</b></label>																																							       <br>																																																		       <input style='width: 400px;' type='email' class='form-control' id='Email'>																																							       </div>																																																		       <br>																																																			       <div class='form-group'>																																														       <label class='text' for='Password1'><b>Código</b></label>																																						   <br>																																																			       <input style='width: 400px;' type='password' class='form-control' id='Password1'>																																					       </div> 																																																		       <br>																																																			       <div class='form-group'>																																														       <label class='text' for='Password2'><b>Confirmar Código</b></label>																																			       <br>																																																			       <input style='width: 400px;' type='password' class='form-control' id='Password2'>																																					       </div>																																																		       </form>", function(result) {

					if(result)
					{
						var obj = {};
						var email = $('#Email').val();
						var code = $('#Password1').val();

						//Primeiro vamos verificar se já não existe um utilizador registado com o mesmo e-mail

						chrome.storage.local.get(email, function (result) {

							var res = result.Email;

							if(res)
							{
								bootbox.alert("<br><div class='text'><b>Já existe um utilizador com o mesmo Email registado.</b></div>");
							}
							else
							{
								if($('#Password1').val() == $('#Password2').val())
								{	
									chrome.storage.local.get('c_user', function (result) {

										obj[email] = code;
										obj['id'] = result['c_user'];

										chrome.storage.local.set(obj);

										bootbox.alert("<br><div class='text'><b>Dados guardados com sucesso.</b></div>");

										chrome.storage.local.remove('c_user', function() {});

										getData();
									});
								}
								else
								{
									bootbox.alert("<br><div class='text'><b>Os códigos inseridos não são iguais. <br><br>Tente de novo.</b></div>");
								}
							}
						});
					}
		});
}

function removeUser(Email)
{
	bootbox.confirm("<div class='text'><b>Utilizador prestes a ser removido. <br><br>Deseja continuar?</b></div>", function(result) {

		if(result)
		{
			chrome.storage.local.remove(Email, function() {

				bootbox.alert("<br><div class='text'><b>Utilizador removido com sucesso</b></div>");

				getData();

			});
		}
	});
}

function editUser(Email)
{
	bootbox.confirm("<form role='form'>																																																  <div class='text'>O Código só deve conter números entre <b>0</b> e <b>9</b>.</div>																														          <br><br>																																																	          <div class='form-group'>																																													          <label class='text' for='Password1'><b>Código</b></label>																																					          <br>																																																		          <input style='width: 300px;' type='password' class='form-control' id='Password1'>																																				          </div> 																																																	          <br>																																																		          <div class='form-group'>																																													          <label class='text' for='Password2'><b>Confirmar Código</b></label>																																		          <br>																																																		          <input style='width: 300px;' type='password' class='form-control' id='Password2'>																																				          </div>																																																	          </form>", function (result) {

						if(result)
						{
							if($('#Password1').val() == $('#Password2').val())
							{
								var code = $('#Password1').val();

								var obj = {};

				                obj[Email] = code;

								chrome.storage.local.set(obj);

								bootbox.alert("<br><div class='text'><b>Dados alterados com sucesso.</b></div>");

								getData();
							}
							else
							{
								bootbox.alert("<br><div class='text'><b>Os códigos inseridos não são iguais. <br><br>Tente de novo.</b></div>");
							}
						}
			});	
}

//Funções para testes

function setData()
{
	chrome.storage.local.set({'megajpc': '123'});
	chrome.storage.local.set({'ramon': '456'});
	chrome.storage.local.set({'sandra': '789'});
	chrome.storage.local.set({'sofia': '0'});
}

function returnData(Email)
{
	chrome.storage.local.get(Email, function (result) {

		console.log(Email, result[Email]);
	});
}

function getAll()
{
	chrome.storage.local.get(null, function(items) {

	    var allKeys = Object.keys(items);

	    for (var i = 1; i < allKeys.length; i++) 
		{
			console.log(i + ", " + allKeys[i] + ", " + items[allKeys[i]] + ", " + items['id']);
		}

	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
  getData();
  getAll();
});
	

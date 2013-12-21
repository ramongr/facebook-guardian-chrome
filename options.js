function getData()
{
	chrome.storage.local.get(null, function(items) {
	    var allKeys = Object.keys(items);
	    //console.log(allKeys);

	    var table = "<table id='tb' align='center' class='text table table-striped'>";

		table += "<tr>																																																		  <td style='width: 50px; text-align: center;'><b> # </b></td>																																					    <td style='width: 200px; text-align: center;'><b> E-Mail </b></td>																																				  <td style='width: 100px; text-align: center;'><b> Código </b></td>																																				<td style='width: 100px; text-align: center;'><b> Edição </b></td>																																				  </tr>"

		for (var i = 0; i < allKeys.length; i++) 
		{
			var Email = allKeys[i];

			table += "<tr><td style='width: 100px; text-align: center;'>" 																																					  + (i+1) + 																																														            "</td><td style='width: 100px; text-align: center;'>" 																																                          + allKeys[i] + 																																														        "</td><td style='width: 100px; text-align: center;'>" 																																		                  + items[allKeys[i]] + 																																														"</td><td style='width: 100px; text-align: center;'>																																                          <button style='margin-right: 10px;' id='edit' type='button' class='btn btn-default btn-lg'><span class='glyphicon glyphicon-pencil'></span></button>															<button id='remove' type='button' class='btn btn-default btn-lg'><span class='glyphicon glyphicon-remove'></span></button></td></tr>";
			
		}

		table += "</table>";

		document.getElementById('table-print').innerHTML = table;

		$('button#remove').on('click',function(){

			removeUser();
		});

		$('button#edit').on('click',function(){
			
			editUser();
		});

	});
	
}

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

function clickHandler(e) 
{
	bootbox.confirm("<form role='form'>																																														  <br><br>																																																		        <div class='title'>																																															          <h3><b>Instruções</b></h3>																																													        </div>																																																		          <br>																																																			        <div class='text'>O Email escolhido deve ser <b>obrigatoriamente</b> igual ao Email do Facebook; <br><br>O Código só deve conter números entre <b>0</b> e <b>9</b>;											          </div>																																																		        <br><br>																																																		      <div class='form-group'>																																														        <label class='text' for='Email'><b>Email</b></label>																																							      <br>																																																		            <input type='email' class='form-control' id='Email'>																																							      </div>																																																		        <br>																																																			      <div class='form-group'>																																														        <label class='text' for='Password1'><b>Código</b></label>																																						      <br>																																																			        <input type='password' class='form-control' id='Password1'>																																					          </div> 																																																		        <br>																																																			      <div class='form-group'>																																														        <label class='text' for='Password2'><b>Confirmar Código</b></label>																																			          <br>																																																			        <input type='password' class='form-control' id='Password2'>																																					          </div>																																																		        </form>", function(result) {

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
					obj[email] = code;

					chrome.storage.local.set(obj);

					bootbox.alert("<br><div class='text'><b>Dados guardados com sucesso.</b></div>");

					getData();
				}
				else
				{
					bootbox.alert("<br><div class='text'><b>Os códigos inseridos não são iguais. <br><br>Tente de novo.</b></div>");
				}
			}
		});
		});
}

function removeUser()
{
	var rows = document.getElementById('tb')
                 .getElementsByTagName('tbody')[0]
                  .getElementsByTagName('tr');

    for (i = 0; i < rows.length; i++) 
    {
        rows[i].onclick = function () {
        
            var mail = document.getElementById('tb')
             .getElementsByTagName('tbody')[0]
              .getElementsByTagName('tr')[this.rowIndex]
              .getElementsByTagName('td')[1]
              .innerHTML;

            chrome.storage.local.remove(mail, function() {

				bootbox.alert("<br><div class='text'><b>Utilizador removido com sucesso</b></div>");

				getData();

			});
        }
    }
}

function editUser()
{
	bootbox.confirm("<form role='form'>																																														          <br><br>																																																	          <div class='text'>O Código só deve conter números entre <b>0</b> e <b>9</b>.</div>																														          <br><br>																																																	          <div class='form-group'>																																													          <label class='text' for='Password1'><b>Código</b></label>																																					          <br>																																																		          <input type='password' class='form-control' id='Password1'>																																				          </div> 																																																	          <br>																																																		          <div class='form-group'>																																													          <label class='text' for='Password2'><b>Confirmar Código</b></label>																																		          <br>																																																		          <input type='password' class='form-control' id='Password2'>																																				          </div>																																																	          </form>", function (result) {

							if($('#Password1').val() == $('#Password2').val())
							{
								var code = $('#Password1').val();

								var obj = {};

								var rows = document.getElementById('tb')
					                 .getElementsByTagName('tbody')[0]
					                  .getElementsByTagName('tr');

							    for (i = 0; i < rows.length; i++) 
							    {
							        rows[i].onclick = function () {
							        	
							            var mail = document.getElementById('tb')
						                 .getElementsByTagName('tbody')[0]
						                  .getElementsByTagName('tr')[this.rowIndex]
						                  .getElementsByTagName('td')[1]
						                  .innerHTML;

						                console.log(mail + ":" + code); 

						                obj[mail] = code;

										chrome.storage.local.set(obj);

										bootbox.alert("<br><div class='text'><b>Dados alterados com sucesso.</b></div>");

										getData();
							        }
							    }
							}
							else
							{
								bootbox.alert("<br><div class='text'><b>Os códigos inseridos não são iguais. <br><br>Tente de novo.</b></div>");
							}
			});	
}


document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
  getData();
});
	

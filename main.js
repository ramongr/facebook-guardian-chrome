$(document).ready(function() 
{
  	var x, flag = 0, codigo = null;

  	//Obter o id de utilizador através do cookie

	var cookie = "c_user=";
    var ca = document.cookie.split(';');
    var id;

    for(var i=0; i < ca.length; i++) 
    {
        var c = ca[i];

        while (c.charAt(0)==' ') 
        	c = c.substring(1,c.length);

        if (c.indexOf(cookie) == 0) 
        	id = c.substring(cookie.length,c.length);
    }
	    

  	//Guardar o id da sessão actual através do chrome storage para ser usado na página das opções e para pesquisar se existe um user registado com esse id

    var obj = {};

    obj['c_user'] = id;

	chrome.storage.local.set(obj);


	//Vamos obter todos os users guardados e comparar o seu id com o id da sessão actual

	chrome.storage.local.get(null, function(items) {

	    var allKeys = Object.keys(items);

	    for (var i = 1; i < allKeys.length; i++) 
		{
			if(items['id'] == id)
			{
				codigo = _.cloneDeep(items[allKeys[i]]);
			}
		}

		// Se o código for diferente de 0 significa que o utilizador está registado e como tal aparece a janela para introduzir o código

		if(_.isEmpty(codigo) == false)
		{
			$('._42ft.selected')
				.attr('type', 'button')
				.on('click',function() {

				if(flag == 0)
				{
					bootbox.confirm("<div style='text-align:center'>                                                                                                                                                                  <h3 class='title'><b>Insira o código</b></h3>                                                                                                                                                                 <br><br>																																																	  <input id='code' type='password' class='input form-control'>																																				    <br><br>																																																      <button id='num' value='1' type='button' class='buttons-left-middle btn btn-default'> 1 </button>																											    <button id='num' value='2' type='button' class='buttons-left-middle btn btn-default'> 2 </button>																									          <button id='num' value='3' type='button' class='buttons-right btn btn-default'> 3 </button>																													<br><br>																																																	  <button id='num' value='4' type='button' class='buttons-left-middle btn btn-default'> 4 </button>																											    <button id='num' value='5' type='button' class='buttons-left-middle btn btn-default'> 5 </button>																										      <button id='num' value='6' type='button' class='buttons-right btn btn-default'> 6 </button>																													<br><br>																																																      <button id='num' value='7' type='button' class='buttons-left-middle btn btn-default'> 7 </button>																								                <button id='num' value='8' type='button' class='buttons-left-middle btn btn-default'> 8 </button>																						                      <button id='num' value='9' type='button' class='buttons-right btn btn-default'> 9 </button>																												    <br><br>																																																      <button id='num' value='0' type='button' class='buttons-right btn btn-default'> 0 </button>																													</div>", function(result) {

							if(result)
							{
								if(_.isEqual(codigo, CryptoJS.SHA3($('#code').val())))
								{
									flag = 1;

									$('._42ft.selected')
										.attr('type', 'submit')
										.trigger('click');
								}
								else
								{
									bootbox.alert("<br><div style='text-align:center' class='title'><h3><b>Código errado</b></h3></div>");
								}
							}
						});

						$('button#num').on('click',function(){
							x = $('#code').val();
							$('#code').val(x+$(this).val());
						});
				}
				else
				{
					flag = 0;
				}
			});
		}
	});
});
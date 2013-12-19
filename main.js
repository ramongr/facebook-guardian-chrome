$(document).ready(function() 
{

  var x = 1234;

  $('._42ft.selected').parent().prepend("<button type='button' id='new-button' class='new-button'> Publicar </button>");
  $('._42ft.selected').hide();
  $('#new-button').show();

  $('#new-button')
    .on('click',function() {

	    bootbox.confirm("<div style='text-align:center'><h3 class='title'><b>Insert your code</b></h3><br><br><input id='code' type='password' class='input form-control'><br><br><button id='num1' value='1' type='button' class='buttons-left-middle btn btn-default'> 1 </button><button id='num2' value='2' type='button' class='buttons-left-middle btn btn-default'> 2 </button><button id='num3' value='3' type='button' class='buttons-right btn btn-default'> 3 </button><br><br><button id='num4' value='4' type='button' class='buttons-left-middle btn btn-default'> 4 </button><button id='num5' value='5' type='button' class='buttons-left-middle btn btn-default'> 5 </button><button id='num6' value='6' type='button' class='buttons-right btn btn-default'> 6 </button><br><br><button id='num7' value='7' type='button' class='buttons-left-middle btn btn-default'> 7 </button><button id='num8' value='8' type='button' class='buttons-left-middle btn btn-default'> 8 </button><button id='num9' value='9' type='button' class='buttons-right btn btn-default'> 9 </button><br><br><button id='num0' value='0' type='button' class='buttons-right btn btn-default'> 0 </button></div>", function(result) {

	    	if(x == $('#code').val())
	    	{
	    		$('._42ft.selected').trigger('click');
	    	}
	    	else
	    	{
	    		bootbox.alert("<br><div style='text-align:center' class='title'><h3><b>Código errado</b></h3></div>");
	    	}
		});


		$('#num1').on('click',function(){

		  $('#code').val($('#code').val()+$(this).val());
		  //console.log($(this).val());
	    });

	    $('#num2').on('click',function(){

		  $('#code').val($('#code').val()+$(this).val());
		  //console.log($(this).val());
	    });

	    $('#num3').on('click',function(){

		  $('#code').val($('#code').val()+$(this).val());
		  //console.log($(this).val());
	    });

	    $('#num4').on('click',function(){

		  $('#code').val($('#code').val()+$(this).val());
		  //console.log($(this).val());
	    });

	    $('#num5').on('click',function(){

		  $('#code').val($('#code').val()+$(this).val());
		  //console.log($(this).val());
	    });

	    $('#num6').on('click',function(){

		  $('#code').val($('#code').val()+$(this).val());
		  //console.log($(this).val());
	    });

	    $('#num7').on('click',function(){

		  $('#code').val($('#code').val()+$(this).val());
		  //console.log($(this).val());
	    });

	    $('#num8').on('click',function(){

		  $('#code').val($('#code').val()+$(this).val());
		  //console.log($(this).val());
	    });

	    $('#num9').on('click',function(){

		  $('#code').val($('#code').val()+$(this).val());
		  //console.log($(this).val());
	    });

	    $('#num0').on('click',function(){

		  $('#code').val($('#code').val()+$(this).val());
		  //console.log($(this).val());
	    });
    });

});
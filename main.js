$(document).ready(function(){
	/*



		Dialog handling code section




	*/
	
    $('head').append("<link rel='sylesheet' href='/netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css'");
        
	/*$('._42ft.selected').parent()
		.append('<div class='dialog-form' title='Insert PIN'><input type='password' class='code-pass' size='24'/><div class='number-pad'><button type='button' class='code-input' value='1'>1</button><button type='button' class='code-input' value='2'>2</button><button type='button' class='code-input' value='3'>3</button><button type='button' class='code-input' value='4'>4</button><button type='button' class='code-input' value='5'>5</button><button type='button' class='code-input' value='7'>7</button><button type='button' class='code-input' value='8'>8</button><button type='button' class='code-input' value='9'>9</button><button type='button' class='code-input' value='0'>0</button></div><button type='button' class='code-clear' value='-2'>Clear</button><button type='submit' class='code-ok' value='-1'>Ok</button></div>');
    
    $('.number-pad').attr({
        width: 100,
        height: 200
    })
    
	$('.code-input').on('click',function(){
		$('.code-pass').val($('.code-pass').val()+$(this).val());
	})

	$('.code-clear').on('click',function(){
		$('.code-pass').val('');
	})
    
    $('._42ft.selected').attr('type','button')
		.on('click',function(){
			
			$('.dialog-form').dialog('open');
            $('.ui-dialog').attr('background-color','blue');
		});

	$('.dialog-form').dialog({
		autoOpen: false,
		height: 250,
		width: 150,
		modal: true
	})*/
    
    
    $('._42ft.selected').attr("data-toggle", "modal"); 
    $('._42ft.selected').attr("data-target", "#myModal");
    
    
    <div class='modal fade' id='myModal'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'> Teste </div></div></div></div>
});
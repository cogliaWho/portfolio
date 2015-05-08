function initContactForm(){
	$("#submit").bind("click",function(event){
		if(checkFields())
		{
			$(".alert").hide();
			jQuery.post('resources/email.php',  
			{
				name: $.trim($("#name").val()),
				email: $.trim($("#email").val()),
				subject: $.trim($("#subject").val()),
				message: $.trim($("#message").val())
			}, 'json');
			$("#name,#email,#subject,#message").val("");
			alert("Thank you!  I'll answer you as soon as possible!");
			}            
	});

	$("#name").bind('blur',function(event){
		if($.trim($("#name").val())=="")
		{
			$("#alertName").show();
			}
		else
		{
			$("#alertName").hide();
			}
	});
	
	$("#email").bind('blur',function(event){
		if($.trim($("#email").val())=="")
		{
			$("#alertEmail").show();
			}
		else
		{
			$("#alertEmail").hide();
			}
	});
	
	$("#subject").bind('blur',function(event){
		if($.trim($("#subject").val())=="")
		{
			$("#alertSubject").show();
			}
		else
		{
			$("#alertSubject").hide();
			}
	});
	
	$("#message").bind('blur',function(event){
		if($.trim($("#message").val())=="")
		{
			$("#alertMessage").show();
			}
		else
		{
			$("#alertMessage").hide();
			}
	});
}

function checkFields(){
	if($.trim($("#name").val())=="")
	{
		$("#alertName").show();
		return false;
		}
	if($.trim($("#email").val())=="")
	{
		$("#alertEmail").show();
		return false;
		}
	if($.trim($("#subject").val())=="")
	{
		$("#alertSubject").show();
		return false;
		}
	if($.trim($("#message").val())=="")
	{
		$("#alertMessage").show();
		return false;
		}
	return true;
}
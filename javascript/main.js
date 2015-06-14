var getHeight = function()
{
    var y = 0;
    if (self.innerHeight)
    {
        y = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight)
    {
        y = document.documentElement.clientHeight;
    }
    else if (document.body)
    {
        y = document.body.clientHeight;
    }
    return y;
}

var resizeSections = function(){
	var sections = $("section");
	var headerHeight = $(header).height();
	var footerHeight = $(footer).height();
	var documentHeight = getHeight();
	
	var standardH = documentHeight-headerHeight;
	var lastElementH = standardH-footerHeight;

	sections.each(function(index,elem){
		if (index == sections.length-1){
			elem.style.height = lastElementH+"px";
		} else	{
			elem.style.height = standardH+"px";
		}
	});
};

function loaded() {
	console.log("Welcome!");

	var ismobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

	if (ismobile == null){
		//if not mobile
		
	} 
	
	resizeSections();
}
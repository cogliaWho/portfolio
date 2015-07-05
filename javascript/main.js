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

var resizeSections = function(callback){
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

  callback();
};

function addBioImage(){
  //var container = document.getElementById('container-bio');
  var imgBio = document.createElement("IMG");
  var imgURL ="url(http://www.cogliawho.it/resources/images/_MG_6839.jpg)";
  imgBio.src = "http://www.cogliawho.it/resources/images/_MG_6839.jpg";
  document.getElementById("bio-img").appendChild(imgBio);

  //document.getElementById('bio-img').style.backgroundImage = imgURL;
}

function loaded() {
	console.log("Welcome!");

	var ismobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

	if (ismobile == null){
		//if not mobile

	}

	resizeSections(function(){
    addBioImage();
  });
  window.addEventListener("resize", resizeSections);


//Graph
  var totalElem = document.getElementById('graph-total');
  var graphTotal = d3.select(totalElem);

  function onClick1(){

  }

  function labelFunction(val,min,max) {

  }

  function start() {
    var rp1 = radialProgress(totalElem)
                          .onClick(onClick1)
                          .diameter($(totalElem).width())
                          .value(66)
                          .render();
  }

setTimeout(function(){start();}, 1000);

}

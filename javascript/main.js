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

function loadRadialProgress(){
  var totalElem = document.getElementById('graph-total');

var totalElem2 = document.getElementById('graph-total2');
var totalElem3 = document.getElementById('graph-total3');
var totalElem4 = document.getElementById('graph-total4');
var totalElem5 = document.getElementById('graph-total5');
var totalElem6 = document.getElementById('graph-total6');

var diameter = ($(totalElem).height() < $(totalElem).width()) ? $(totalElem).height() : $(totalElem).width();
var graphTotal = d3.select(totalElem);

var graphTotal2 = d3.select(totalElem2);
var graphTotal3 = d3.select(totalElem3);
var graphTotal4 = d3.select(totalElem4);
var graphTotal5 = d3.select(totalElem5);
var graphTotal6 = d3.select(totalElem6);

function onClick1(){

}

function labelFunction(val,min,max) {

}

function start() {


  var rp1 = radialProgress(totalElem)
                        .onClick(onClick1)
                        .diameter(diameter)
                        .value(66)
                        .render();

  var rp2 = radialProgress(totalElem2)
                        .onClick(onClick1)
                        .diameter(diameter)
                        .value(66)
                        .render();

  var rp3 = radialProgress(totalElem3)
                        .onClick(onClick1)
                        .diameter(diameter)
                        .value(66)
                        .render();

  var rp4 = radialProgress(totalElem4)
                        .onClick(onClick1)
                        .diameter(diameter)
                        .value(66)
                        .render();

  var rp5 = radialProgress(totalElem5)
                        .onClick(onClick1)
                        .diameter(diameter)
                        .value(66)
                        .render();

  var rp6 = radialProgress(totalElem6)
                        .onClick(onClick1)
                        .diameter(diameter)
                        .value(66)
                        .render();
}

setTimeout(function(){start();}, 1000);

}

function loadDDL(){
  var ddlVertBar = $("#portfolio-ddl-vert-bar");
  var ddlHorizBar = $("#portfolio-ddl-horiz-bar");
  var isFilled = false;
  var animDDLdelay = 300;

  var debugList = [{title:"nome1", data:"data1", techs:["id1","id2","id3","id4"], url: "urltest1"}, {title:"nome2", data:"data2", techs:["id1","id2","id3"], url: "urltest2"}, {title:"nome3", data:"data3", techs:["id1","id2"], url: "urltest3"}, {title:"nome4", data:"data4", techs:["id1"], url: "urltest4"}, {title:"nome5", data:"data5", techs:["id1","id2"], url: "urltest5"}, {title:"nome6", data:"data6", techs:["id1","id2","id3","id4"], url: "urltest6"}];

  var toggleDDL = function toggleDDL() {
    var isOpen = ($("#portfolio-ddl-button").attr("data-isOpen") === 'true');
    $("#portfolio-ddl-button").attr("data-isOpen", !isOpen);

    animDDLIcon(isOpen);
    fillDDLList(isOpen);
  };

  var fillDDLList = function animDDLIcon(isOpen){
    if(!isFilled){
      for (var i = 0; i < debugList.length; i++)
      {
        if(i % 2 == 0)
          $("#portfolio-ddl-list").append('<div class="portfolio-ddl-item left-all">'+debugList[i].title+'</div>');
        else
          $("#portfolio-ddl-list").append('<div class="portfolio-ddl-item right-all">'+debugList[i].title+'</div>');
      }
      isFilled = true;
    }
    animDDLList(isOpen);
  };

  var animDDLIcon = function animDDLIcon(isOpen){
    if(isOpen){
      ddlVertBar.removeClass('anim-ddl-icon-open-vert').addClass('anim-ddl-icon-close-vert');
      ddlHorizBar.removeClass('anim-ddl-icon-open-horiz').addClass('anim-ddl-icon-close-horiz');
      setTimeout(function(){
        $("#portfolio-ddl-list").css("display", "none");
      }, animDDLdelay);
    } else {
      ddlVertBar.removeClass('anim-ddl-icon-close-vert').addClass('anim-ddl-icon-open-vert');
      ddlHorizBar.removeClass('anim-ddl-icon-close-horiz').addClass('anim-ddl-icon-open-horiz');
      $("#portfolio-ddl-list").css("display", "block");
    }
  };


  var animDDLList = function animDDLIcon(isOpen){
    if(isOpen){
      jQuery.each($(".portfolio-ddl-item"), function(i, val){
        if(i % 2 == 0)
          $(val).removeClass('anim-ddl-open-left').addClass('anim-ddl-close-left');
        else
          $(val).removeClass('anim-ddl-open-right').addClass('anim-ddl-close-right');
      });
    } else {
      $(".portfolio-ddl-item").each(function(i, val){
        if(i % 2 == 0)
          $(val).removeClass('anim-ddl-close-left').addClass('anim-ddl-open-left');
        else
          $(val).removeClass('anim-ddl-close-right').addClass('anim-ddl-open-right');
      });
    }
  };
}

function toggleLight(){
  if($("#switchLabel").html() === "off"){
    $("#switchLabel").html("on");
  } else {
    $("#switchLabel").html("off");
  }
  $('body').toggleClass('lightOff');
}

function loaded() {
	console.log("Welcome!");

	var ismobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

	if (ismobile == null){
		//if not mobile

	}

  //addBioImage();
}
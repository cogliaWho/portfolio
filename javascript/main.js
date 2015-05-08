var heightNoHeader;
var works = "";
var boxIndexOpen = 0;
var headerHeight = 60;
var boxBorderColor = "#44232e";

function GetHeight()
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

function GetWidth()
{
    var x = 0;
    if (self.innerWidth)
    {
        x = self.innerWidth;
    }
    else if (document.documentElement && document.documentElement.clientWidth)
    {
        x = document.documentElement.clientWidth;
    }
    else if (document.body)
    {
        x = document.body.clientWidth;
    }
    return x;
}

function resizeHeightSections(){
	heightNoHeader = GetHeight() - headerHeight;
	var widthBody = GetWidth();

	if(heightNoHeader > 585 ){
		if(widthBody > 1023 ){
			if(!$("div[class^='section-']").hasClass("no-height") || $(".section-contact").hasClass("no-height"))
				$("div[class^='section-']").css("height",heightNoHeader+"px");
		}
		else{
			$(".section-intro, .section-contact").css("height",heightNoHeader+"px");
		}
	}
	else
	{
		$(".section-intro").css("height",heightNoHeader+"px");
	}
};

function transitionMenu(obj){
	// var url = obj.attr("data-url");

	// $(".site-transition").css("display", "block");

	// $(".panel-top, .panel-bottom").animate({
	// 	height: "60%"}, 400, "linear");

	// $(".panel-left, .panel-right").animate({
	// 	width: "60%"}, 400, "linear", function() {
	//     // Animation complete.
	//     // $(".site-transition").css("display", "none");
	//     // $(".panel-top, .panel-bottom").css("height","0%");
	//     // $(".panel-left, .panel-right").css("width","0%");
	//     window.location.href = url;
 //    });
}

function loaded() {
	console.log("Welcome!");

    var openMenu =  function(){
		if($(".site-content").hasClass("openMenu")){
			$(".site-content").removeClass("openMenu");
			$(".site-content").transition({ x: 0 });
			$(".site-menu").transition({ x: 0 });
			$(".menuButton div:nth-child(1)").transition({ 
				x: 0,
				easing: 'easeInOutQuint',
				duration: 800 });
			$(".menuButton div:nth-child(3)").transition({ 
				x: 0,
				easing: 'easeInOutQuint',
				duration: 800 });
		} else {
			$(".site-content").addClass("openMenu");
			$(".site-content").transition({ x: -300 });
			$(".site-menu").transition({ x: -300 });
			$(".menuButton div:nth-child(1)").transition({ 
				x: -30,
				easing: 'easeInOutQuint',
				duration: 800 });
			$(".menuButton div:nth-child(3)").transition({ 
				x: +30,
				easing: 'easeInOutQuint',
				duration: 800 });
		}
	};

	resizeHeightSections();	
	var ismobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);

	if (ismobile == null){
		//if not mobile
		$( window ).resize(resizeHeightSections);
	} 
	
	$(".menuButton").click(openMenu);

	$(".main-navigation a").click(function(){
		var obj = $(this);
		transitionMenu(obj);
	});

	$(".scrollDown").on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		$target = $(target);
		var distanceFromTop;

		if(target == "#knowledge")
			distanceFromTop = heightNoHeader + $target[0].clientHeight;
		else
			distanceFromTop = heightNoHeader;

		var siteBody = $("body, html");
		siteBody.stop().animate({
	        'scrollTop': distanceFromTop
	    }, 500, 'swing');
	});

	// Bounce effect
	var addBounce = function(){
		$(".anim-next").addClass("bounce");
	}

	var removeBounce = function(){
		$(".anim-next").removeClass("bounce");
	}

	setInterval(addBounce, 4000);
	setInterval(removeBounce, 5000);
}

function scrollPageOffset(offset, cb){
	var siteBody = $("body, html");
	siteBody.stop().animate({
        'scrollTop': offset
    }, 200, 'swing');
	cb();    
}

function resetDetails(obj, cb){
	$('.portfolio-box').css("background-color","transparent");
	$('#' + boxIndexOpen).transition({ height: '0px' }, 200).html("");
	setTimeout(function(){cb(obj.offset().top-headerHeight)}, 200);
}

function setDetails(boxIndex){
	var detailText = '<ul class="details">';
	detailText += '<li class="title">'+works[boxIndex-1].title+' ('+works[boxIndex-1].date+')</li>';
	detailText += '<li>'+works[boxIndex-1].platforms+'</li>';
	detailText += '<li>'+works[boxIndex-1].tools+'</li>';
	detailText += '<li class="description">'+works[boxIndex-1].description+'</li>';
	detailText += '</ul>';

	$('#' + boxIndex).html(detailText);
}

function setWorks(s){
	for (var i=0; i < works.length; i++){
		var workText = '<div class="portfolio-box" data-box="'+ works[i].id +'">';
		workText += '<div class="portfolio-img">';
		workText += '<img src="resources/portfolio/'+s+'/'+ works[i].image +'.jpg">';
		workText += '</div>';
		workText += '<div id="'+ works[i].id +'" class="portfolio-details-'+ works[i].id +'"></div>';
		workText += '</div>';
		$('.portfolio-thumbs').append(workText);
	}

	setWorkBoxesEvent();
}

function setWorkBoxesEvent(){
	$(".portfolio-box img").on('click',function (e) {
		var clickedObj = $(this).parent().parent();
		var boxIndex = clickedObj.attr("data-box");
		var detailsHeight = clickedObj[0].clientHeight;
		
		if(detailsHeight > 350)
			detailsHeight = 350;
		if(detailsHeight > (heightNoHeader - detailsHeight))
			detailsHeight = heightNoHeader - detailsHeight;
		
		var pageOffset = clickedObj.offset().top-headerHeight;

		if(boxIndexOpen == boxIndex){
			// clicked on the same element
			resetDetails(clickedObj, function(offset){
					boxIndexOpen = 0;
					detailsIndexOpen = 0;
			});
			
			return null;
		}

		// everything is closed
		if(boxIndexOpen == 0)
		{
			setDetails(boxIndex);
			boxIndexOpen = boxIndex;
			//detailsIndexOpen = detailsIndex;
			scrollPageOffset(pageOffset, function(){	
				$('#' + boxIndex).transition({ height: detailsHeight+'px' }, 200);
				clickedObj.css("background-color", boxBorderColor);
			});
			return null;
		}

		//clicked on different elemnt on a diff row
		resetDetails(clickedObj, function(offset){
			setDetails(boxIndex);
			boxIndexOpen = boxIndex;
			//detailsIndexOpen = detailsIndex;
			scrollPageOffset(offset, function(){
				$('#' + boxIndex).transition({ height: detailsHeight+'px' }, 200);
				clickedObj.css("background-color", boxBorderColor);
			});
		});		
	});
}

// Get method

function getWorksBySection(s){

	var url = "db/getWorksBySection.php";

	var request = $.ajax({
	  url: url,
	  type: "GET",
	  data: { section : s },
	  dataType: "json"
	});
	 
	request.done(function( msg ) {
	  works = msg;
	  setWorks(s);
	});
	 
	request.fail(function( jqXHR, textStatus ) {
	  console.log( "Request failed: " + textStatus );
	});
}
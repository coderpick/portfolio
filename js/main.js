
	"use strict";

		$('#bar1').barfiller({ barColor: '#005F8F' });
		$('#bar2').barfiller({ barColor: '#005F8F' });
		$('#bar3').barfiller({ barColor: '#005F8F' });

$('.item-list').owlCarousel({
    items:1,
    loop:true,
    margin:30,
    autoplay:false,
    nav:true,
    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
 
})
/* active mixitup js*/
var mixer = mixitup('.work-items');
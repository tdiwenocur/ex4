$(document).ready(function(){
    
    console.log("ready");

//hide the b and white photos
$('#bandwphotos').hide();
$('#captions p').hide();	
$('#bigphotos img').hide();

	$('#title').click(function(){
		$('#bandwphotos').show();
		return false;
		
	})
//hover the headphones pic	
$('#headpic').hover(function(){
console.log("hovered headphones");
	$('p#headphones').show();
	},
	function(){
		$('p#headphones').hide();
});	

//hover the pencil pic	
$('#penpic').hover(function(){
console.log("hovered pencil");
	$('p#pencil').show();
	},
	function(){
		$('p#pencil').hide();
});	

//hover the phone pic	
$('#phonepic').hover(function(){
console.log("hovered phone");
	$('p#phone').show();
	},
	function(){
		$('p#phone').hide();
});	

//hover the bikelight pic	
$('#bikepic').hover(function(){
console.log("hovered bikepic");
	$('p#bikelight').show();
	},
	function(){
		$('p#bikelight').hide();
});	

//hover the glove pic	
$('#glovepic').hover(function(){
console.log("hovered glove");
	$('p#gloves').show();
	},
	function(){
		$('p#gloves').hide();
});	


//LET THE COLORS COME

//blow up the headphones pic	
$('#headpic').click(function(){
console.log("clicked pencil");
$('#headphonecol').show();
	$('#headphonecol').animate({
		left: "0%",
		opacity: 1,
	}
	
	);
});
//unclick headphones
$('#headphonecol').click(function(){
console.log("clicked body");
$('#headphonecol').animate({
	left: "100%",
	opacity: 0,
});
});

//blow up the pencil pic	
$('#penpic').click(function(){
console.log("clicked pencil");
$('#pencilcol').show();
	$('#pencilcol').animate({
		left: "0%",
		opacity: 1,
	}
	
	);	
});
//unclick headphones
$('#pencilcol').click(function(){
console.log("clicked body");
$('#pencilcol').animate({
	left: "100%",
	opacity: 0,
});
});	
//blow up the phone pic	
$('#phonepic').click(function(){
console.log("clicked pencil");
$('#phonecol').show();
	$('#phonecol').animate({
		left: "0%",
		opacity: 1,
	}
	
	);	
});
//unclick headphones
$('#phonecol').click(function(){
console.log("clicked body");
$('#phonecol').animate({
	left: "100%",
	opacity: 0,
});
});

//blow up the bike light pic	
$('#bikepic').click(function(){
console.log("clicked pencil");
$('#bikelightcol').show();
	$('#bikelightcol').animate({
		left: "0%",
		opacity: 1,
	}
	
	);	
});
//unclick bikelight
$('#bikelightcol').click(function(){
console.log("clicked body");
$('#bikelightcol').animate({
	left: "100%",
	opacity: 0,
});
});
//blow up the gloves pic	
$('#glovepic').click(function(){
console.log("clicked pencil");
$('#glovescol').show();
	$('#glovescol').animate({
		left: "0%",
		opacity: 1,
	}
	
	);	
});	
//unclick headphones
$('#glovescol').click(function(){
console.log("clicked body");
$('#glovescol').animate({
	left: "100%",
	opacity: 0,
});
});
	
	
	
	//close jquery
	})
	

	
	
	
	
	
	
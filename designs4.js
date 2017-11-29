// set up grid
var gridActive =  false;// set up conditional boolean for grid

function makeGrid(evt){
    // prevent default event on click
    evt.preventDefault();	

	// get grid height and width value
    var gridH = $("#input_height").val();
    var gridW = $("#input_width").val();

    //validate that input is between 1 and 20
    if (isValid(gridH, gridW) === true) {
     	if (gridActive) {
	        var overwriteResponse = confirm("Overwrite current grid?");
	        if (overwriteResponse === true) {
	            $("div.grid-unit").remove();
	            addGridUnit(gridH, gridW);
	        }
	    }

        else if (!gridActive) {
			$(".flexbox-grid-container").addClass("visible");
			addGridUnit(gridH, gridW);
			gridActive = true;	    
		}       
    }

    else {
        alert("Choose grid values between 1 and 20 only!");
    }

	changeColor();
	clearColor();
	quickPick();
}// end makeGrid


/* *********************************** makeGrid helper functions ************************************* */
function isValid(gridH, gridW) {
	if ( (gridH > 0) && (gridH < 21) && (gridW > 0) && (gridW < 21) )  {
		return true; 
	}

	else {
		return false;
	}
}// end isValid

function addGridUnit(gridH, gridW) {
	var flexboxW = gridW*25;// 25 because that's the px width of each square/grid unit
	//set flexbox-grid-container width
    $(".flexbox-grid-container").css("width", flexboxW);

    // calculate how many squares/grid-units to populate
    var howManySquares = gridH*gridW;
    for (var i = 0; i < howManySquares; i++) {
        $(".flexbox-grid-container").append("<div class='grid-unit'></div>");
    }// end for loop
}// end addGridUnit

function changeColor() {
	// changing the colors of a square/pixel/grid-unit with one click
    $(".grid-unit").on( 'mousedown', function( evt ) {
        var hexVal = $("#colorPicker").val();
        $( evt.target ).css( 'background', hexVal);
    });
} //end changeColor

function clearColor() {
	// clear the color of a square/pixel/grid-unit with double-click
    $(".grid-unit").on( 'dblclick', function( evt ) {
        $( evt.target ).css( 'background', "none");
    });
} //end changeColor

function quickPick() {
$(".quickPick-panel").on("click", "div.swatch", function(evt){
	var target = $(this).attr('id');
	if (target === "swatch_5C4B51") {
	$("#colorPicker").val("#5C4B51");
	}
	else if (target === "swatch_8CBEB2") {
	$("#colorPicker").val("#8CBEB2");
	}
	else if (target === "swatch_F2EBBF") {
	$("#colorPicker").val("#F2EBBF");
	}
	else if (target === "swatch_F3B562") {
	$("#colorPicker").val("#F3B562");
	}
	else {
	$("#colorPicker").val("#F06060");
	}		
});

}
/* *********************************** more functions ************************************* */
function shiftPanel() {
$(".console-panel").toggleClass("console-panel-right");
}// end shiftPanel


/* *********************************** UI event listeners *********************************** */
// When size is submitted by the user, call makeGrid()
$("#submitSize").on("click", makeGrid);



// When user wants the UI panel shifted left or right
$("#shiftPanel").on("click", shiftPanel);




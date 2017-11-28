// set up grid
let gridActive =  false;// set up conditional boolean for grid

function makeGrid(evt){
    // prevent default event on click
    evt.preventDefault();	

	// get grid height and width value
    let gridH = $("#input_height").val();
    let gridW = $("#input_width").val();

    //validate that input is between 1 and 20
    if (isValid(gridH, gridW) === true) {
     	if (gridActive) {
	        let deleteResp = confirm("Overwrite current grid?");
	        if (deleteResp === true) {
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
	let flexboxW = gridW*25;// 25 because that's the px width of each square/grid unit
	//set flexbox-grid-container width
    $(".flexbox-grid-container").css("width", flexboxW);

    // calculate how many squares/grid-units to populate
    let howManySquares = gridH*gridW;
    for (let i = 0; i < howManySquares; i++) {
        $(".flexbox-grid-container").append("<div class='grid-unit'></div>");
    }// end for loop
}// end addGridUnit

function changeColor() {
	// changing the colors of a square/pixel/grid-unit
    $(".grid-unit").on( 'mousedown', function( evt ) {
        let hexVal = $("#colorPicker").val();
        $( evt.target ).css( 'background', hexVal);
    });
} //end changeColor


/* *********************************** more functions ************************************* */
function shiftPanel() {
$(".console-panel").toggleClass("console-panel-right");
}// end shiftPanel


/* *********************************** UI event listeners *********************************** */
// When size is submitted by the user, call makeGrid()
$("#submitSize").on("click", makeGrid);

// When user wants the UI panel shifted left or right
$("#shiftPanel").on("click", shiftPanel);




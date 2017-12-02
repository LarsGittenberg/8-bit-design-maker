
let gridActive =  false;// set up conditional boolean for grid

// alert instructions string
const alertInstructions = '- Click a square to fill with colour\n' +
	'- Double click to unfill\n' +
	'- Choose a colour by clicking the picker or quick swatch!';

// set up grid
function makeGrid(evt){
    // prevent default event on click
    evt.preventDefault();

	// get grid height and width value, assign to variables
    let gridH = $('#input_height').val();
    let gridW = $('#input_width').val();

    //validate that input is between 1 and 20
    if (isValid(gridH, gridW) === true ) {
     	if ( gridActive ) {
	        const overwriteResponse = confirm('Overwrite current grid? You should know you can\'t undo this.');
	        if (overwriteResponse) {
	            $('div.grid-unit').remove();
	            addGridUnit(gridH, gridW);
	        }

     } else if (!gridActive) {
        	alert( alertInstructions )
			$('.flexbox-grid-container').addClass('visible');
			addGridUnit(gridH, gridW);
			gridActive = true;
		}

    } else {
        alert('Tut-tut! Choose grid values between 1 and 25 only!');
    }

	changeColor();
	clearColor();
}// end makeGrid


/* *********************************** makeGrid helper functions ************************************* */
function isValid(gridH, gridW) {
	//want to limit and check for a grid of 25x25 squares
	if ( (gridH > 0) && (gridH < 26) && (gridW > 0) && (gridW < 26) )  {
		return true;

	} else {
		return false;
	}
}// end isValid

function addGridUnit(gridH, gridW) {
	let flexboxW = gridW*20;// 20 because that's the px width of each square/grid unit
	//set flexbox-grid-container width
    $('.flexbox-grid-container').css('width', flexboxW);

    // calculate how many squares/grid-units to populate
    let howManySquares = gridH*gridW;
    for (var i = 0; i < howManySquares; i++) {//I can't use const i = 0; per Udacity style guide
    	//b/c doesn't work in my Chrome browser
        $('.flexbox-grid-container').append('<div class="grid-unit"></div>');
    }// end for loop
}// end addGridUnit

function changeColor() {
	// changing the colors of a square/pixel/grid-unit with one click
    $('.grid-unit').on( 'mousedown', function( evt ) {
        let hexVal = $('#colorPicker').val();
        $(evt.target).css( 'background', hexVal);
    });
} // end changeColor

function clearColor() {
	// clear the color of a square/pixel/grid-unit with double-click
    $('.grid-unit').on( 'dblclick', function( evt ) {
        $( evt.target ).css( 'background', 'none');
    });
} // end changeColor


function quickPick() {
	// get the id/color identifier of the div.swatch area that was clicked
	let targetId = $(this).attr('id');
	if (targetId === 'swatch_5c4b51') {
		$('#colorPicker').val('#5c4b51');

	} else if (targetId === 'swatch_8cbeb2') {
		$('#colorPicker').val('#8cbeb2');

	} else if (targetId === 'swatch_f2ebbf') {
		$('#colorPicker').val('#f2ebbf');

	} else if (targetId === 'swatch_f3b562') {
		$('#colorPicker').val('#f3b562');

	} else {
		$('#colorPicker').val('#f06060');
	}
}// end quickPick


function shiftPanel() {
	//shift UI panels left to right and vice versa
	$('.panel').toggleClass('all-panel-right');
}// end shiftPanel


/* *********************************** UI event listeners *********************************** */
// When size is submitted by the user, call makeGrid()
$('#submitSize').on('click', makeGrid);

// When anywhere in parent quickPick-panel is clicked, assign the corresponding child
//swatch div's colour to the colour picker with quickPick(), using jQuery
//event delegation syntax (takes advantage of bubbling)
$('.quickPick-panel').on('click', 'div.swatch', quickPick);

// When user clicks this button, call shiftPanel(). This feature allows the UI panel shifted left or right
//( useful depending on their right-left handedness preference if using Wacom tablet for eg)
$('#shiftPanel').on('click', shiftPanel);




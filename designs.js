// set up grid
var gridActive =  false;// set up conditional boolean for grid


function makeGrid(evt){
// prevent default event on click
    evt.preventDefault();
// get grid height and width value
    var gridH = $("#input_height").val();
    var gridW = $("#input_width").val();

    if ( gridH < 1 || gridH > 15 || gridW < 1 || gridW > 15) {
        alert("Choose a grid value between 1 and 15")
    }

    else if (gridActive===false) {
// make flexbox-grid-container visible by adding 'visible' class
        $(".flexbox-grid-container").addClass("visible");
// calculate and set flexbox-grid-container width
        var flexboxW = gridW*30;// 30 because that's the px width of each square unit
        $(".flexbox-grid-container").css("width", flexboxW);
// calculate how many squares to populate
        var squareCount = gridH*gridW;
        for (var i = 0; i < squareCount; i++) {
        $(".flexbox-grid-container").append("<div class='grid-unit'></div>");
        }// end for loop

// changing the colors on the grid
        $(".grid-unit").on( 'mousedown', function( evt ) {
            var hexVal = $("#colorPicker").val();
            $( evt.target ).css( 'background', hexVal);
        });// 

// set conditional boolean for grid to true
        gridActive = true;
    }// end else if

    else if (gridActive===true) {
    alert("You have a grid already!\nDelete grid to make another.")
    }// end else if 
}// end makeGrid



function deleteGrid(evt) {
// prevent default event on click
    evt.preventDefault();

// confirm pop up to make sure user wants to delete
    if (gridActive === false) {
        alert("No grid to delete, silly.")
    }// end if

    else if (gridActive === true) {    
        var deleteResp = confirm("Delete?");

        if (deleteResp === true) {
// remove flexbox-grid container by taking away its class 'visible'
             $(".flexbox-grid-container").removeClass("visible");
// set conditional boolean for grid to false   
            gridActive = false;
            $(".grid-unit").each(function removeSquares() {
                $(".grid-unit").remove();// remove square units clearing grid with removeSquares function
                }// end removeSquares 
            );
        }// end if
    }// end else if  
}// end deleteGrid



function shiftPanel() {
    $(".console-panel").toggleClass("console-panel-right");
}

/* ********* UI event listeners ************ */

// When size is submitted by the user, call makeGrid()
$("#submitSize").on("click", makeGrid);
//  When use wants to erase squares but keep grid
$("#deleteGrid").on("click", deleteGrid);
// When user want to reset colors on the grid, aka 'clean slate'
$('#colorReset').on('click', function(evt) {
    console.log("clicked on button")
 $(".grid-unit").css('background', '#383838');
});
// When user wants the UI panel shifted left or right
$("#shiftPanel").on("click", shiftPanel);




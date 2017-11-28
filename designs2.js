// set up grid
var gridActive =  false;// set up conditional boolean for grid


function makeGrid(evt){
    // prevent default event on click
    evt.preventDefault();
    // get grid height and width value
    var gridH = $("#input_height").val();
    var gridW = $("#input_width").val();

    if ( gridH < 1 || gridH > 20 || gridW < 1 || gridW > 20) {
        alert("Choose grid values between 1 and 20");
    }
    
    else if (gridActive === true) {
        var deleteResp = confirm("Overwrite current grid?");
        if (deleteResp === true) {
                $("div.grid-unit").remove();
        }
    }

    else if (gridActive === false) {// make flexbox-grid-container visible by adding 'visible' class
        $(".flexbox-grid-container").addClass("visible");
    }
  
    // calculate and set flexbox-grid-container width
    var flexboxW = gridW*25;// 25 because that's the px width of each square unit
    $(".flexbox-grid-container").css("width", flexboxW);
    // calculate how many squares to populate
    var squareCount = gridH*gridW;
    for (var i = 0; i < squareCount; i++) {
        $(".flexbox-grid-container").append("<div class='grid-unit'></div>");
    }// end for loop
    //since we created an active grid already, let's set boolean grid flag to true 
    gridActive =  true;
    // changing the colors on the grid
    $(".grid-unit").on( 'mousedown', function( evt ) {
        var hexVal = $("#colorPicker").val();
        $( evt.target ).css( 'background', hexVal);
    });
    
}// end makeGrid






function shiftPanel() {
    $(".console-panel").toggleClass("console-panel-right");
}// shiftPanel

/* ********* UI event listeners ************ */

// When size is submitted by the user, call makeGrid()
$("#submitSize").on("click", makeGrid);
//  When use wants to erase squares but keep grid

// When user wants the UI panel shifted left or right
$("#shiftPanel").on("click", shiftPanel);




// When the page is fully loaded:
$(document).ready(function() {
    // When any of the buttons with class jQButton is clicked:
    $(".jQButton").click(function() {
        // Then this other anonymous function is executed:
        $("#colorDiv").css("background-color", this.innerHTML.toLowerCase());
    });
});
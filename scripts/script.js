/*global $, alert*/
$("#count-down").ready(function () {
    "use strict";
    var counterDown = setInterval(function () {
        var span = document.getElementById("count-down").innerHTML;
        var counter = parseInt(span);
        console.log(span, counter);
        if (counter !== 1) {
            document.getElementById("count-down").innerHTML = (counter - 1);
        } else {
            clearInterval(counterDown);
            $(".loading").fadeOut()
        }
    }, 500);
});
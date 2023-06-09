
$(document).ready(function () {

    //$(".make").hide();

    $(".make").click(function () {
        var max = parseInt($("#Max").val());
        var min = parseInt($("#Min").val());
        var typ = $("#repeatnum").attr('class');
        var n = parseInt($("#Amount").val());
        var s = '';
        var m = new Array();
        var len = 1;
        var r = 0;
        m.splice(1, 0, min - 1);

        $(".sz").children().remove();
        $(".bz").remove();

        if (n > 0 && max >= min) {
            if (typ == 'normal' && n > max - min + 1) {
                n = max - min + 1;
                alert("Sorry, we are unable to generate the result you requested. We will provide you with the closest possible result.");
            }
            for (var i = 0; i < n; i++) {
                var x = Math.floor(Math.random() * (max - min + 1) + min);
                if (typ == 'normal') {
                    while (m.includes(x))
                        x = Math.floor(Math.random() * (max - min + 1) + min);
                    m.splice(1, 0, x);
                    len++;
                }

                if (s == '')
                    s = s + String(x);
                else
                    s = s + ' ' + String(x);      
                /*     
                $(".sz").append("<div></div>");
                $(".sz div:last").addClass("sz1");
                $(".sz div:last").append("<p></p>");
                $(".sz1 p:last").text(x);
                */
            }

            $(".sz").append("<p></p>");
            $(".sz p:last").addClass("rpn");
            $(".rpn").text(s);
        }
        else if (n < 1) {
            alert("Please enter the required number of random numbers with natural numbers.");
        }
        else {
            alert("The maximum value cannot be less than the minimum value.");
        }
    });

    $(".clear").click(function () {
        $(".sz").children().remove();
    });

    $("#repeatnum").click(function () {
        var typ = $("#repeatnum").attr('class');
        if (typ == 'normal') {
            $(this).addClass("n_active");
            $(this).removeClass("normal");
        }
        else {
            $(this).addClass("normal");
            $(this).removeClass("n_active");
        }
    });
});

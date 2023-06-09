
$(document).ready(function () {
    //����û���⣬���������о�������
    $(".extract").click(function () {
        //$("#resBox").remove();

        var itemlist = $('.draw-pond>button').map(function () {
            return $(this).text();
        });
        var typ = $("#rep").attr('class');
        var n = parseInt($(".count").val());
        var len = itemlist.length;
        var s = '';
        //alert(typ);

        if (n > 0 && len > 0) {
            $("#resBox").children().remove();
            $(".jc1").remove();
            $(".bz1").remove();

            if (typ == 'pick' && n > len) {
                n = len;
                alert("Sorry, we are unable to generate the result you requested. We will provide you with the closest possible result.");
            }
            for (var i = 0; i < n; i++) {
                var x = Math.floor(Math.random() * len);

                if (s == '')
                    s = s + itemlist[x];
                else
                    s = s + '; ' + itemlist[x];

                /*
                $("#resBox").append("<div></div>");
                $("#resBox div:last").addClass("item");
                $("#resBox div:last").text(itemlist[x]);
                */

                if (typ == 'pick') {
                    itemlist.splice(x, 1);
                    len--;
                }
            }
            $("#resBox").append("<p></p>");
            $("#resBox p:last").addClass("rp");
            $(".rp").text(s);
        }
        else if (n < 1)
            alert("Please enter the required number of prizes");
        else
            alert("Please add prizes to the prize pool");
        //$("#res").text(s);
    });
    //��ӵ�ģ��û�������ˣ����������ǻ���
    $(".add").click(function () {
        $(".jc").remove();
        $(".explain").remove();
        var s = $(".new").val();
        if (s != '') {
            $(".draw-pond").append("<button></button>");
            $(".draw-pond button:last").addClass("item");
            $(".draw-pond button:last").attr("id", "d-item");
            $(".draw-pond button:last").click(function () {
                var typ = $(this).attr('class');
                if (typ == 'item') {
                    $(this).addClass("item_active");
                    $(this).removeClass("item");
                }
                else {
                    $(this).addClass("item");
                    $(this).removeClass("item_active");
                }
            });
            $(".draw-pond button:last").text(s);
        }
        else {
            alert("Please enter the prize content");
        }
    });
    //��Ҫ�ģ�����Ѿ�����
    $(".lower").click(function () {
        $(".item_active").remove();
    });
    //��Ҫ�ģ�����Ѿ�����
    $(".eliminate").click(function () {
        $(".extracted").children().remove();
    });
    //��Ҫ�ܣ��������Ҫ��
    /*$("#rep").click(function () {
        var typ = $("#rep").attr('class');
        if (typ == 'pick') {
            $(this).addClass("repeat");
            $(this).removeClass("pick");
        }
        else {
            $(this).addClass("pick");
            $(this).removeClass("repeat");
        }
    });
    */
    //��Ҫ�ģ�����Ѿ�����
    $("#d-item").click(function () {
        var typ = $(this).attr('class');
        if (typ == 'item') {
            $(this).addClass("item_active");
            $(this).removeClass("item");
        }
        else {
            $(this).addClass("item");
            $(this).removeClass("item_active");
        }
    });
});

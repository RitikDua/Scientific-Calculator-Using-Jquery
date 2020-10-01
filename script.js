$(document).ready(function(e) {
    $(".num").click(function() {
        var a = $(this).val();
        $(".dis").val($(".dis").val() + a);
    });
    $(".ac").click(function() {
        $(".dis").val(null);
    });
    $(".eq").click(function() {
        $(".dis").val(eval($(".dis").val()));
    });
    $(".sin").click(function() {
        if ($('.deg').is(':checked')) {
            $(".dis").val(Math.sin($(".dis").val() * Math.PI / 180));
        } else if ($('.rad').is(':checked')) {
            $(".dis").val(Math.sin($(".dis").val()));
        }
    });
    $(".cos").click(function() {
        if ($('.deg').is(':checked')) {
            $(".dis").val(Math.cos($(".dis").val() * Math.PI / 180));
        } else if ($('.rad').is(':checked')) {
            $(".dis").val(Math.cos($(".dis").val()));
        }
    });
    $(".tan").click(function() {
        if ($('.deg').is(':checked')) {
            $(".dis").val(Math.tan($(".dis").val() * Math.PI / 180));
        } else if ($('.rad').is(':checked')) {
            $(".dis").val(Math.tan($(".dis").val()));
        }
    });
    $(".log").click(function() {
        $(".dis").val(Math.log($(".dis").val()) / Math.LN10);
    });
    $(".sq").click(function() {
        $(".dis").val(Math.pow($(".dis").val(), 2));
    });
    $(".pie").click(function() {
        a = $(".dis").val();
        $(".dis").val(eval(a * 3.14));
    });
    $("#back").click(function() {
        var num = $(".dis").val();
        num = num.substring(0, num.length - 1);
        $(".dis").val(num);
    });
});

// 2022 validation 
$(document).ready(function () {
    _ajax_form = 'form.ajax_form';
    
    $(_ajax_form + " input").focus(function () {
        if(!$(this).val()){
            $(this).parents('.anim_lbl').addClass('animate_lbl');
        }
    });
    $(_ajax_form + " input").blur(function () {
        if(!$(this).val()){
            $(this).parents('.anim_lbl').removeClass('animate_lbl');
        }
    });
    var validator = $(_ajax_form).validate({
        wrapper: "span",
        errorElement: "em",
        rules: { email: { email: true }, phone: { number: true } },
        highlight: function(element) {
            $(element).parent().addClass("error_box")
        },
        unhighlight: function(element) {
            $(element).parent().removeClass("error_box")
        },
        invalidHandler: function(form, validator) {
            $(_ajax_form).animate({ scrollTop: 200 }, 'slow');
        },
        submitHandler: function(form) {
            var dataString = $(_ajax_form).serialize();
            var thanks = $(_ajax_form).find('.thanks').val();
            $.ajax({
                url: '/application/themes/_spam_protect.php',
                type: 'post',
                data: dataString,
                success  : function (data) {
                    window.location = thanks;
                }
            });
        }
    });
    
    });
    // 2022 validation 
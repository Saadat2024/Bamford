// Phone validation and spam protection
$(function() {
  var count_click = 0;
  $("form.ajax_form").validationEngine('attach',
  {
    onValidationComplete: function(form, status)
    {
      if (status == true)
      {
        $('.progress,._progress').show();
        count_click++;
        if (count_click == 1)
        {
          var dataString = $(form).serializeArray();
          var action_path = $(form).find('.action_path').val();
          var thanks = $(form).find('.thanks').val();
          $.ajax(
          {
            type: "POST",
            url: action_path,
            data: dataString,
            success: function(thanks)
            {
              $('.progress').hide();
              window.location = thanks;
              //console.log(thanks);
            }
          });
        }
      }
    },
    scroll: false,
    promptPosition: "topLeft",
    /* showOneMessage: true, */ autoHideDelay: 5000,
    autoHidePrompt: true,
    delay: 500,
    binded: false
  });
  function validDigits(n)
  {
    return n.replace(/[^\d\(\)\+\-\s]+/g, '');
  }
  $('.phone').on("input keydown keyup mousedown mouseup select contextmenu drop", function(e)
  {
    this.value = validDigits(this.value);
  });
});
// Phone validation and spam protection
$(function() {
  var count_click = 0;
  $("form.syed_ajax_form").validationEngine('attach',
  {
    onValidationComplete: function(form, status)
    {
      if (status == true)
      {
        count_click++;
        //if (count_click == 1) {
          var dataString = $(form).serializeArray();
          var action_path = $(form).find('.action_path').val();
          var thanks = $(form).find('.thanks').val();
          $.ajax(
          {
            type: "POST",
            url: action_path,
            data: dataString,
            success: function(response)
            {
              response = $.parseJSON(response);
              if(response.thanks) {
                //console.log(response.thanks);
                window.location = response.thanks;
              } else {
                alert(response.message);
                //$('.prm_validate').validationEngine('showPrompt', response.message, 'error', 'topLeft', true);
              }
            }
          });
        //}
      }
    },
    scroll: false,
    promptPosition: "topLeft",
    /* showOneMessage: true, */ autoHideDelay: 5000,
    autoHidePrompt: true,
    delay: 500,
    binded: false
  });
});

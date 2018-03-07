(function($) {

  $(document).on('change', '.status', function() {

    var status = $(this).val(),
        node_to_change = $(this).closest('.nested-fields').find('.statusValue');

    if(status == 'B')
      node_to_change.val(50)
    else if(status == 'C')
      node_to_change.val(100)
    else  node_to_change.val(0)
            
  });

})(jQuery);



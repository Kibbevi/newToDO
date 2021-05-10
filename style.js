$(document).ready(
    function(){
        
        $('#button').click(
            function(){
                var addtask = $('input[name=Item]').val();
                
                $('ul').append('<li>' + addtask + '</li>');
                
                $('input').val('');
            });
                      
      $(document).on('click','li', function(){
        $(this).toggleClass('strike');    
      });
      $(document).on('dblclick','li', function(){
        $(this).fadeOut('fast');
        
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
        
      $('#clear').click(function() {
        $('li').hide()
        $('input').val('')

      });
    }
    
    
);

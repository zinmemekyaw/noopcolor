$(document).ready(function() {
    
    $("#chgcolor").on({
        click: function(){
            $.ajax({
                url: "http://api.noopschallenge.com/hexbot?count=1"
            }).then(function(data) {
                $(".bg-1").css("background-color",data.colors[0].value );                
            });
            
        }  
    });
});
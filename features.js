$(document).ready(function(){

    $("#button_import").on("change", function(e){

        var files = $(this)[0].files;

        if(files.length == 1){
            var filename = e.target.value.split('\\').pop();
            $("#label_span").text(filename);
        }
        
    });
});
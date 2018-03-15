$(document).ready(function(){

    $(".burger_menu_logo").click(function(){
        $(".menu_burger").toggleClass("isOpen");
    });

    $("#button_import").on("change", function(e){
        var files = $(this)[0].files;

        if(files.length == 1){
            var filename = e.target.value.split('\\').pop();
            $("#label_span").text(filename);
        }
    })

    $(".white").click(function(){
        var key = $(this);
        /* GESTION DES NOTES DO */
        if(key.hasClass("c")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./midia/0C.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./midia/261-C.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./midia/523-C.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./midia/1046-C.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/4C.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/5C.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./midia/6C.mp3");
            }
            if(key.parents().attr("id") == "8"){
                $.playSound("./midia/7C.mp3");
            }
        }
        /* GESTION DES NOTES RE */
        if(key.hasClass("d")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./midia/0D.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./midia/293-D.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./midia/587-D.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/4D.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/5D.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./midia/6D.mp3");
            }
        }
        /* GESTION DES NOTES MI */
        if(key.hasClass("e")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./midia/0E.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./midia/329-E.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./midia/659-E.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./midia/3E.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/4E.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/5E.mp3");
            }
        }
        /* GESTION DES NOTES FA */
        if(key.hasClass("f")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./midia/0F.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./midia/349-F.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./midia/698-F.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./midia/3F.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/4F.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/5F.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./midia/6F.mp3");
            }
        }
        /* GESTION DES NOTES SOL */
        if(key.hasClass("g")){
            if(key.parents().attr("id") == "2"){
                $.playSound("./midia/391-G.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./midia/783-G.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./midia/3G.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/4G.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/5G.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./midia/6G.mp3");
            }
        }
        /* GESTION DES NOTES LA */
        if(key.hasClass("a")){
            if(key.parents().attr("id") == "0"){
                $.playSound("./midia/00A.mp3");
            }
            if(key.parents().attr("id") == "1"){
                $.playSound("./midia/220-A.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./midia/440-A.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./midia/880-A.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./midia/3A.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/4A.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/5A.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./midia/6A.mp3");
            }
        }
        /* GESTION DES NOTES SI */
        if(key.hasClass("b")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./midia/246-B.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./midia/495-B.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./midia/987-B.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./midia/3B.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/4B.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/5B.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/6B.mp3");
            }
        }
    });

    $(".black").click(function(){
        var key = $(this);
        /* GESTION DES NOTES DO# */
        if(key.hasClass("cs")){
            if(key.parents().attr("id") == "2"){
                $.playSound("./midia/277-C-sharp.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./midia/545-C-sharp.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/5Cs.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./midia/6Cs.mp3");
            }
        }
        /* GESTION DES NOTES RE# */
        if(key.hasClass("ds")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./midia/0Ds.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./midia/311-D-sharp.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./midia/622-D-sharp.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./midia/3Ds.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/4Ds.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/5Ds.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./midia/6Ds.mp3");
            }
        }
        /* GESTION DES NOTES RE# */
        if(key.hasClass("fs")){
            if(key.parents().attr("id") == "4"){
                $.playSound("./midia/3Fs.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/4Fs.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/5Fs.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./midia/6Fs.mp3");
            }
        }
        /* GESTION DES NOTES FA# */
        if(key.hasClass("fs")){
            if(key.parents().attr("id") == "4"){
                $.playSound("./midia/3Fs.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/4Fs.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/5Fs.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./midia/6Fs.mp3");
            }
        }
        /* GESTION DES NOTES SOL# */
        if(key.hasClass("gs")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./midia/0Gs.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./midia/415-G-sharp.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./midia/830-G-sharp.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./midia/3Gs.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/4Gs.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/5Gs.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./midia/6Gs.mp3");
            }
        }
        /* GESTION DES NOTES LA# */
        if(key.hasClass("as")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./midia/0As.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./midia/466-A-sharp.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./midia/932-A-sharp.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./midia/3As.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./midia/4As.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./midia/5As.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./midia/6As.mp3");
            }
        }
    });

});
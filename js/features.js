$(document).ready(function(){

    $(".burger_menu_logo").click(function(){
        $(".menu_burger").toggleClass("isOpen");
    });

    $(".burger_menu_logo").click(function(){
        $(".MapMidi").toggleClass("isOpen");
    });

    $(".burger_menu_logo").click(function(){
        $(".ClavierPiano").toggleClass("isOpen");
    });

    $(".burger_menu_logo").click(function(){
        $(".pre_menu").toggleClass("isOpen");
    });

    $("#button_import").on("change", function(e){
        var files = $(this)[0].files;

        /*if(files.length == 1){
            var filename = e.target.value.split('\\').pop();
            $("#label_span").text(filename);
        }*/

        if(files){
        }
    });

    $(".white").click(function(){
        var key = $(this);
        /* GESTION DES NOTES DO */
        if(key.hasClass("c")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./media/0C.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./media/261-C.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./media/523-C.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./media/1046-C.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/4C.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/5C.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./media/6C.mp3");
            }
            if(key.parents().attr("id") == "8"){
                $.playSound("./media/7C.mp3");
            }
        }
        /* GESTION DES NOTES RE */
        if(key.hasClass("d")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./media/0D.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./media/293-D.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./media/587-D.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/4D.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/5D.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./media/6D.mp3");
            }
        }
        /* GESTION DES NOTES MI */
        if(key.hasClass("e")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./media/0E.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./media/329-E.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./media/659-E.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./media/3E.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/4E.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/5E.mp3");
            }
        }
        /* GESTION DES NOTES FA */
        if(key.hasClass("f")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./media/0F.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./media/349-F.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./media/698-F.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./media/3F.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/4F.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/5F.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./media/6F.mp3");
            }
        }
        /* GESTION DES NOTES SOL */
        if(key.hasClass("g")){
            if(key.parents().attr("id") == "2"){
                $.playSound("./media/391-G.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./media/783-G.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./media/3G.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/4G.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/5G.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./media/6G.mp3");
            }
        }
        /* GESTION DES NOTES LA */
        if(key.hasClass("a")){
            if(key.parents().attr("id") == "0"){
                $.playSound("./media/00A.mp3");
            }
            if(key.parents().attr("id") == "1"){
                $.playSound("./media/220-A.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./media/440-A.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./media/880-A.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./media/3A.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/4A.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/5A.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./media/6A.mp3");
            }
        }
        /* GESTION DES NOTES SI */
        if(key.hasClass("b")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./media/246-B.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./media/495-B.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./media/987-B.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./media/3B.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/4B.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/5B.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/6B.mp3");
            }
        }
    });

    $(".black").click(function(){
        var key = $(this);
        /* GESTION DES NOTES DO# */
        if(key.hasClass("cs")){
            if(key.parents().attr("id") == "2"){
                $.playSound("./media/277-C-sharp.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./media/545-C-sharp.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/5Cs.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./media/6Cs.mp3");
            }
        }
        /* GESTION DES NOTES RE# */
        if(key.hasClass("ds")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./media/0Ds.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./media/311-D-sharp.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./media/622-D-sharp.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./media/3Ds.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/4Ds.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/5Ds.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./media/6Ds.mp3");
            }
        }
        /* GESTION DES NOTES RE# */
        if(key.hasClass("fs")){
            if(key.parents().attr("id") == "4"){
                $.playSound("./media/3Fs.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/4Fs.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/5Fs.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./media/6Fs.mp3");
            }
        }
        /* GESTION DES NOTES FA# */
        if(key.hasClass("fs")){
            if(key.parents().attr("id") == "4"){
                $.playSound("./media/3Fs.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/4Fs.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/5Fs.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./media/6Fs.mp3");
            }
        }
        /* GESTION DES NOTES SOL# */
        if(key.hasClass("gs")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./media/0Gs.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./media/415-G-sharp.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./media/830-G-sharp.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./media/3Gs.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/4Gs.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/5Gs.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./media/6Gs.mp3");
            }
        }
        /* GESTION DES NOTES LA# */
        if(key.hasClass("as")){
            if(key.parents().attr("id") == "1"){
                $.playSound("./media/0As.mp3");
            }
            if(key.parents().attr("id") == "2"){
                $.playSound("./media/466-A-sharp.mp3");
            }
            if(key.parents().attr("id") == "3"){
                $.playSound("./media/932-A-sharp.mp3");
            }
            if(key.parents().attr("id") == "4"){
                $.playSound("./media/3As.mp3");
            }
            if(key.parents().attr("id") == "5"){
                $.playSound("./media/4As.mp3");
            }
            if(key.parents().attr("id") == "6"){
                $.playSound("./media/5As.mp3");
            }
            if(key.parents().attr("id") == "7"){
                $.playSound("./media/6As.mp3");
            }
        }
    });

});
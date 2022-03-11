function header(){
    $.ajax({
        url: "pon1010.github.io/header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}

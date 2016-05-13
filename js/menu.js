$(document).ready(function(){

    $("#navigation ul li").click(function(){
        var id=$(this).attr("rel");
        $("section").addClass("hidden");
        $("section#" +id).removeClass("hidden");
    });

});

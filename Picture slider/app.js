$(document).ready(function(){
    
    $('#right').click(function(){
        $('.lsr').hide().prependTo("#firstRow").fadeIn("slow").removeClass("lsr");
        $('.lfr').hide().prependTo("#secondRow").fadeIn("slow").removeClass("lfr"); 
        $("img:eq(4)").addClass("lfr");
        $("img:eq(8)").addClass("lsr");
    })

    $('#left').click(function(){
        $('.ffr').hide().appendTo("#secondRow").fadeIn("slow").removeClass("ffr");
        $('.fsr').hide().appendTo("#firstRow").fadeIn("slow").removeClass("fsr");
        $("img:eq(0)").addClass("ffr");
        $("img:eq(5)").addClass("fsr");
    })
})

$(document).ready(() => {
    $("#right").on("click",() => {
      $("#right").attr("disabled", "disabled");
      $("#left").attr("disabled","disabled");
        $(".lsr").hide(600);
        $(".lfr").hide(600);
        setTimeout(() =>{
          $(".lsr").show(600).prependTo("#firstRow").removeClass("lsr");
          $(".lfr").show(600).prependTo("#secondRow").removeClass("lfr");
          $(".ffr").removeClass("ffr"), $(".fsr").removeClass("fsr");
          $("img:eq(0)").addClass("ffr"), $("img:eq(5)").addClass("fsr"),
          $("img:eq(4)").addClass("lfr"), $("img:eq(8)").addClass("lsr");
  },1000)
         setTimeout(() => {$("#right").removeAttr("disabled");$("#left").removeAttr("disabled")},1400);
    });
  
    $("#left").on("click",() => {
      $("#left").attr("disabled", "disabled"); 
      $("#right").attr("disabled", "disabled");
      $(".ffr").hide(800);
      $(".fsr").hide(800);
      setTimeout(() => {
        $(".ffr").appendTo("#secondRow").show(400).removeClass("ffr");
        $(".fsr").appendTo("#firstRow").show(400).removeClass("fsr");
        $("img:eq(0)").addClass("ffr"), $("img:eq(5)").addClass("fsr"); 
        $(".lfr").removeClass("lfr"), $(".lsr").removeClass("lsr");
        $("img:eq(4)").addClass("lfr"), $("img:eq(8)").addClass("lsr");
      },1000)
       setTimeout(() => {$("#left").removeAttr("disabled");$("#right").removeAttr("disabled");}, 1400);
    });
  });
  
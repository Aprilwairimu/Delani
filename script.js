$("document").ready(function(){
    $(".des").click(function(){
        $("#part1").toggle();  
        $(".des img").toggle();
    })

    $(".dev").click(function(){
        $("#part2").toggle();
        $(".dev img").toggle();
    })

    $(".pro").click(function(){
        $("#part3").toggle();
        $(".pro img").toggle();
    })
})


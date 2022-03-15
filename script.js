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



$("form#form").on('submit',function(event){
    event.preventDefault();
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();

    if ($("input#name").val() && $("input#email").val()){
        alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you... have a great day!");
    }
    else {
        alert("Please provide your correct name and email!");
       

    }

});
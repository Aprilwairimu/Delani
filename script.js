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



$("#form").on('submit',function(event){
    // event.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name && email){
        alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you... have a great day!");
    }
    else {
        alert("Please provide your correct name and email!");
       

    }

});
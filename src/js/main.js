$( document ).ready(function() {
    $(".cost").click(function(){
        $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
        
    })
    
})

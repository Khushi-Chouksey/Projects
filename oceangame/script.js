
var animatekro = function(){
    var tl = gsap.timeline();

    tl
    .from("#dolphine",{
        // y:20,
        y:10,
        ease :Circ.easeInOut,
        duration:1})
   .to("#dolphine",{
        // y:20,
        y:10,
        ease :Circ.easeInOut,
        duration:1})
} 
document.onkeydown = function(e){
   
    if(e.keyCode === 38 ||e.keyCode === 32){
        dolphine = document.querySelector("#dolphine");
    
        // dolphine.classList.add("animate");
        animatekro();

        // setTimeout(() => {
        //     dolphine.classList.remove("animate");
        // }, 700);
       
    }
}






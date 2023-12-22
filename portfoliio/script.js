

 function revealTospan(){
    document.querySelectorAll(".reveal").forEach(function(elem){
        let parentspan = document.createElement("span");
        let childSpan = document.createElement("span");
    
        parentspan.classList.add("parent");
        childSpan.classList.add("child");
        
        childSpan.innerHTML = elem.innerHTML;
    
        parentspan.appendChild(childSpan);
        elem.innerHTML = "";
        elem.appendChild(parentspan);
    
    
    })
 } 

 revealTospan();


 var tl = gsap.timeline();
 tl

.from(".child span",{
    x : "100",
    duration : "1",
    stagger : .2,
    ease: Power3.easeInOut
})
 .to(".parent .child",{
    y : "-100%",
    duration : "1",
    
    ease : Circ.easeInOut
  
 })
 .to("#loader",{
    height : 0,
    duration:1,
    ease:Expo.easeInOut
 })

 .to("#green",{
    height :"100%" ,
    top : 0,
    duration:1,
    delay:-.8,
    ease : Circ.easeInOut,

 })

 .to("#green" ,{
    height:"0",
    delay : -.5,
    duration : 1,
    ease : Circ.easeInOut
 })


 
 function buttonclicking (){
  document.querySelector("#enc-btn").addEventListener("click" , function(){
    document.querySelector("#encryption").style.display = "block";
    document.querySelector("#decryption").style.display = "none";
    document.querySelector("#dec-btn").style.backgroundColor = "#222";
    document.querySelector("#enc-btn").style.backgroundColor = "#333";
   
    document.querySelector("#main >h1 i").style.rotate = "0deg";
     
    // document.querySelector("#result").style.display = "block";
   
   
   });
    document.querySelector("#dec-btn").addEventListener("click" , function(){
    document.querySelector("#decryption").style.display = "block";
    document.querySelector("#encryption").style.display = "none";
    document.querySelector("#enc-btn").style.backgroundColor = "#222";
    document.querySelector("#dec-btn").style.backgroundColor = "#333";
    document.querySelector("#main >h1 i").style.rotate = "180deg";
    // document.querySelector("#result").style.display = "none";

   });
 }


 buttonclicking();


  var clutter = "";
 function encryption(){
   document.querySelector("#Encrypt-button").addEventListener("click" , function(){

    var input = document.getElementById("txtmssg").value
    var passward = document.getElementById("password").value; 
    // console.log(input);

    const str = input.split("");
    str.forEach(element => {
      clutter +=`&#128${element.charCodeAt()}`;
    });
    
    document.querySelector("#result").style.display = "block";
    document.querySelector("#result").innerHTML = clutter

    var dataarr = [];

    if(JSON.parse(localStorage.getItem('data1'))){
      dataarr = JSON.parse(localStorage.getItem('data1'));
      dataarr.push({
        "pass" : passward,
        "input" : input,
        "clutter":clutter
      })
    }
    else{
      dataarr = [
        {
          "pass" : passward,
          "input" : input,
          "clutter":clutter
        } 

      ]
    }
     
    localStorage.setItem('data1' ,JSON.stringify(dataarr));


   })

}

encryption();


function decryption(){
  document.querySelector("#decrypt-button").addEventListener("click" ,function(){
    var clutter2  ="";
    var input2 = document.querySelector("#emojimssg").value
    var pass2 = document.querySelector( "#final-password").value; 
    console.log(input2)


     var user = JSON.parse(localStorage.getItem('data1'));
     console.log(user);

     var str2 = input2.split(" ")
     str2.forEach(element => {
             clutter2 += `&#${(element.codePointAt(0))} `
             // console.log((element.charCodeAt()) * Math.floor(Math.random() * 10))
     });
     console.log(clutter2)
     var found;
     for(let i of user){
         if(i.clutter == clutter2){
             found = i;
             console.log(i)
         }
     }
     if (found.clutter === clutter2) {
         console.log("jay ho")
         document.querySelector("#result").style.display = `block`
         document.querySelector("#result").style.color = `#eee`

         document.querySelector("#result").innerHTML = found.input
     } else {
         document.querySelector("#result").style.display = `block`
         document.querySelector("#result").style.color = `red`
         document.querySelector("#result").innerHTML = "Wrong password!"
     }
 })
       
 
}




decryption();  



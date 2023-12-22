
let choose_img_Button = document.querySelector(".choose_img button");
let choose_input = document.querySelector(".choose_img input");
let imgsrc = document.querySelector(".view_img img");
let filter_buttons = document.querySelectorAll(".icons_room button");
let slider = document.querySelector(".slider input");
let filter_name = document.querySelector(".filter_info .name")
let filter_value = document.querySelector(".filter_info.value")
let slider_value =document.querySelector(".filter_info .value");
let rotate_btns = document.querySelectorAll('.icons_room1 button')
let reset = document.querySelector(".reset");
let save = document.querySelector(".save");


choose_img_Button.addEventListener('click',()=>{
    choose_input.click();
})

let brightness = 100;
let contrast = 100;
let saturate = 100;
let invert = 0;
let blur = 0;
let rotate = 0;
let flip_x = 1;
let flip_y = 1;

choose_input.addEventListener("change" , ()=>{
   let file =choose_input.files[0];
   if(!file) return;
   imgsrc.src = URL.createObjectURL(file);
   imgsrc.addEventListener('load',()=>{
    document.querySelector('.container').classList.remove("disable");
   })
})







filter_buttons.forEach((Element) =>{
   Element.addEventListener('click',()=>{
      document.querySelector(".active").classList.remove('active');
      Element.classList.add("active");
      filter_name.innerText =Element.id;
      if(Element.id === "brightness"){
          slider.max = "200";
          slider.value = brightness;
          slider_value.innerText = `${brightness}`;
      }
      else if(Element.id ==="contrast"){
        slider.max = "200";
        slider.value = contrast;
        slider_value.innerText = `${contrast}`;
      }
      else if(Element.id ==="saturate"){
        slider.max = "200";
        slider.value = saturate;
        slider_value.innerText = `${saturate}`;
      }
      else if(Element.id ==="invert"){
        slider.max = "100";
        slider.value = invert;
        slider_value.innerText = `${invert}`;
      }
      else if(Element.id ==="blur"){
        slider.max = "100";
        slider.value = blur;
        slider_value.innerText = `${blur}`;
      }

      

      
   })
})

slider.addEventListener("input" , ()=>{
    slider_value.innerText = `${slider.value}%`;
    let sliderState = document.querySelector(".icons_room .active");
    if(sliderState.id ===  "brightness"){
        brightness = slider.value;
    }
    else if (sliderState.id === "contrast"){
        contrast = slider.value;
    }
    else if(sliderState.id === "saturate"){
        saturate = slider.value;
    }
    else if(sliderState.id === "invert"){
        invert = slider.value;
    }
    else if(sliderState.id === "blur"){
        blur= slider.value;
    }
    

    imgsrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur}px)`;
})



rotate_btns.forEach((Element)=>{
   Element.addEventListener("click" , ()=>{
    if(Element.id === "rotate_left"){
      rotate -=90;
    }
    else if(Element.id === "rotate_right"){
        rotate +=90;
    }
    else if(Element.id === "flip_x"){
       flip_x =  flip_x===1? -1:1;
    }
    else if(Element.id === "flip_y"){
        flip_y =  flip_y===1? -1:1;
        
    }

    imgsrc.style.transform = `rotate(${rotate}deg) scale(${flip_x} ,${flip_y})`;



   })
})



reset.addEventListener("click",()=>{

 brightness = 100;
 contrast = 100;
 saturate = 100;
 invert = 0;
 blur = 0;
 rotate = 0;
 flip_x = 1;
 flip_y = 1;
 imgsrc.style.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur}px)`;
 imgsrc.style.transform = `rotate(${rotate}deg) scale(${flip_x} ,${flip_y})`;

})

save.addEventListener("click" ,()=>{
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = imgsrc.naturalWidth;
    canvas.height = imgsrc.naturalHeight;
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) invert(${invert}%) blur(${blur}px)`;
    ctx.scale(flip_x , flip_y);
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.drawImage(
        imgsrc ,
        -canvas.width/2,
        -canvas.height/2,
         canvas.width,
         canvas.height
         );

         let link = document.createElement('a');
         link.download = "img.jpg";
         link.href = canvas.toDataURL();
         link.click();

})
var j=document.querySelectorAll("button").length;
for(var i=0;i<j;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var but=this.innerHTML;
        makesound(but);
        buttonanimation(but);
        
    });   
    



    document.addEventListener("keydown",function(e){
        var but=e.key;
        makesound(but);
        buttonanimation(but);
        
   
});   
function makesound(but){
    switch (but) {
            
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
            case "a":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
                case "s":
                    var audio = new Audio('sounds/snare.mp3');
                    audio.play();
                    break;
                    case "d":
                        var audio = new Audio('sounds/tom-1.mp3');
                        audio.play();
                        break;
                        case "j":
                            var audio = new Audio('sounds/tom-2.mp3');
                            audio.play();
                            break;
                            case "k":
                                var audio = new Audio('sounds/tom-3.mp3');
                                audio.play();
                                break;
                                case "l":
                                var audio = new Audio('sounds/tom-4.mp3');
                                audio.play();
                                break;
                                

    
}
}
}

function buttonanimation(but)
{
    var activebutton=document.querySelector("."+but);
    activebutton.classList.add("pressed");
    setTimeout(function()
    {
        activebutton.classList.remove("pressed");

    },100)
}
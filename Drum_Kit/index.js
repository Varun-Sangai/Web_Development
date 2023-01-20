var a=document.querySelectorAll("button");
var i=0;
while(i<a.length)
{
    a[i].addEventListener("click",function(event){
        var b=this.innerHTML;
        console.log(event.target.firstChild);
        makesound(b);
         });
    i++;
}
function makesound(abc)
{
    switch (abc) {
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "s":
                new Audio("sounds/snare.mp3").play();
                break;    
        case "d":
                new Audio("sounds/tom-1.mp3").play();
                break;               
        case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;             
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break;                                  
        default:
            break;
    }

}
document.addEventListener("keypress",function(event)
{
   var b=event.key;
   makesound(b); 
});
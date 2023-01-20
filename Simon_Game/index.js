var gamePattern=[];
var userPattern=[];
var buttonColors=["red","blue","green","yellow"];
function nextSeq()
{
    $("h1").text("level "+(level++));
    var a=Math.floor(Math.random()*4);
    var x= buttonColors[a];
    gamePattern.push(x);
    var temp="sounds"+ "\\"+ x + ".mp3"
    new Audio(temp).play();
    $("#"+x).fadeOut(100).fadeIn(100);
    userPattern=[];
}
function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");
    setTimeout(function()
    {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}
$(".btn").click(function()
{
   var r=this.id;
   userPattern.push(r);
   var tem="sounds"+ "\\"+ r + ".mp3"
   animatePress(r);
    new Audio(tem).play();
    if(userPattern[userPattern.length-1]!=gamePattern[userPattern.length-1])
    {
          $("h1").text("Press any key to restart");
          hasTheGameStarted=false;
    }
    if(userPattern[userPattern.length-1]==gamePattern[userPattern.length-1] && userPattern.length==gamePattern.length)
    {
        setTimeout(function()
        {
        nextSeq();
        }, 1000);
    }
});
var hasTheGameStarted=false;
var level=1;
$(document).keypress(function(){
    if(!hasTheGameStarted)
    {
        hasTheGameStarted=true;
        level=1;
        gamePattern=[];
        nextSeq();
    }
    });
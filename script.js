
let titlt = document.querySelector(".title");
let StoryPart1= document.querySelector(".story-opening");
let Buttonts= document.querySelector(".buttons");
let StoryPart2redgang = document.querySelector(".option-one-screen");
let StoryPart3bluegang = document.querySelector(".option-two-screen");
let StoryPart2redgangend = document.querySelector(".redgang-end");
let StoryPart3bluegangend = document.querySelector(".bluegang-end");
let Clickredgang = document.querySelector(".option-one");
let Clickbluegang = document.querySelector(".option-two");
let Clickredgangend = document.querySelector(".redgang-end");
let Clickbluegangend = document.querySelector(".bluegang-end");






Clickredgang.onclick=function(){
 StoryPart2redgang .style.display="block";
    
};


Clickbluegang.onclick=function(){
 StoryPart3bluegang .style.display="block";
};


Clickredgangend.onclick=function(){
 StoryPart2redgangend.style.display="block";
};

 Clickbluegangend.onclick=function(){
 StoryPart3bluegangend .style.display="block";

};


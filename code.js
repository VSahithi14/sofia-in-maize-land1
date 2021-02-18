var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var cardboard1 = createSprite(10,33,70,15);
var cardboard2 = createSprite(44,61,15,70);
var cardboard3 = createSprite(32,128,70,15);
var cardboard4 = createSprite(60,160,15,70);
var cardboard5 = createSprite(92,154,70,15);
var cardboard6 = createSprite(116,60,90,15);
var cardboard7 = createSprite(106,80,15,25);
var cardboard8 = createSprite(84,0,15,70);
var cardboard9 = createSprite(120,18,70,13);
var cardboard10 = createSprite(10,240,50,15);
var cardboard11 = createSprite(43,238,15,50);
var cardboard12 = createSprite(180,90,70,15);
var cardboard14 = createSprite(208,40,15,85);
var cardboard15= createSprite(221,70,40,15);
var cardboard16= createSprite(262,40,40,15);
var cardboard17 = createSprite(275,23,15,40);
var cardboard18 = createSprite(400,50,70,15);
var cardboard19 = createSprite(358,0,15,180);
var cardboard20 = createSprite(396,152,160,15);
var cardboard21 = createSprite(313,152,15,70);
var cardboard22 = createSprite(380,130,15,60);
var cardboard23 = createSprite(397,217,70,15);
var cardboard24 = createSprite(396,260,300,15);
var cardboard25 = createSprite(397,340,17,70);
var cardboard26= createSprite(300,348,15,50);
var cardboard27 = createSprite(280,350,111,15);
var cardboard28 = createSprite(217,385,15,85);
var cardboard29= createSprite(100,365,150,15);
var cardboard30 = createSprite(94,384,15,50);
var cardboard31 = createSprite(242,254,15,70);
var cardboard32= createSprite(200,226,70,15);
var cardboard33 = createSprite(159,264,15,90);
var cardboard34 = createSprite(131,314,70,15);
var cardboard35 = createSprite(126,326,15,10);
var cardboard36 = createSprite(26,314,70,15);
var cardboard37= createSprite(195,132,70,15);
var cardboard38 = createSprite(235,160,15,70);
var cardboard40 = createSprite(140,270,30,15);
var cardboard41 = createSprite(89,196,15,100);
var cardboard42 = createSprite(325,69,70,15);
var cardboard43 = createSprite(220,170,110,15);
var cardboard44= createSprite(318,260,15,70);
var cardboard45= createSprite(186,288,50,15);
var cardboard46= createSprite(344,28,40,15);
var cardboard47= createSprite(355,244,15,70);

var sofia = createSprite(13,57,10,10);


cardboard17.shapeColor="brown";cardboard1.shapeColor="brown";
cardboard2.shapeColor="brown";
cardboard3.shapeColor="brown";
cardboard4.shapeColor="brown";
cardboard5.shapeColor="brown";
cardboard6.shapeColor="brown";
cardboard7.shapeColor="brown";
cardboard8.shapeColor="brown";
cardboard9.shapeColor="brown";
cardboard10.shapeColor="brown";
cardboard11.shapeColor="brown";
cardboard12.shapeColor="brown";
cardboard14.shapeColor="brown";
cardboard15.shapeColor="brown";
cardboard16.shapeColor="brown";
cardboard18.shapeColor="brown";
cardboard19.shapeColor="brown";
cardboard20.shapeColor="brown";
cardboard21.shapeColor="brown";
cardboard22.shapeColor="brown";
cardboard23.shapeColor="brown";
cardboard24.shapeColor="brown";
cardboard25.shapeColor="yellow";
cardboard26.shapeColor="brown";
cardboard27.shapeColor="brown";
cardboard28.shapeColor="brown";
cardboard29.shapeColor="brown";
cardboard30.shapeColor="brown";
cardboard31.shapeColor="brown";
cardboard32.shapeColor="brown";
cardboard33.shapeColor="brown";
cardboard34.shapeColor="brown";
cardboard35.shapeColor="brown";
cardboard36.shapeColor="brown";
cardboard37.shapeColor="brown";
cardboard38.shapeColor="brown";
cardboard40.shapeColor="brown";
cardboard41.shapeColor="brown";
cardboard42.shapeColor="brown";
cardboard43.shapeColor="brown";
cardboard44.shapeColor="brown";
cardboard45.shapeColor="brown";
cardboard46.shapeColor="brown";
cardboard47.shapeColor="brown";


sofia.shapeColor ="green";




 function draw() {
  background("pink"); 
createEdgeSprites();
 sofia.bounceOff(edges); 

if (keyDown(UP_ARROW)) {
    sofia.velocityX=0;
    sofia.velocityY=-2;
  }
  
  if (keyDown(DOWN_ARROW)) {
    sofia.velocityX=0;
    sofia.velocityY=2;
  }
  
   if (keyDown(LEFT_ARROW)) {
    sofia.velocityX=-2;
    sofia.velocityY=0;
  }
   
  if (keyDown(RIGHT_ARROW)) {
    sofia.velocityX=2;
    sofia.velocityY=0;
  }
  
 
if (sofia.isTouching(cardboard25)) {
sofia.velocityY=0;
sofia.velocityX=0;
 textSize(50);
 textFont("Comic Sans MS");
 fill("BLACK");
 text("YOU WIN!!",100,200);
 

 }

textSize(20);
textFont("Comic Sans MS");
fill("grey");
text("sofia",25,20);

textSize(20);
textFont("Comic Sans MS");
fill("grey");
text("cup",340,314);








if (sofia.isTouching(cardboard1)|| sofia.isTouching(cardboard2)|| sofia.isTouching(cardboard3)|| sofia.isTouching(cardboard4)||sofia.isTouching(cardboard5)|| sofia.isTouching(cardboard6)||sofia.isTouching(cardboard7)||     
      sofia.isTouching(cardboard8)||sofia.isTouching(cardboard9)||     
      sofia.isTouching(cardboard10)||sofia.isTouching(cardboard11)||     
      sofia.isTouching(cardboard12)||sofia.isTouching(cardboard14)||     
      sofia.isTouching(cardboard15)||sofia.isTouching(cardboard16)||     
      sofia.isTouching(cardboard17)||sofia.isTouching(cardboard18)||     
      sofia.isTouching(cardboard19)||sofia.isTouching(cardboard20)||     
      sofia.isTouching(cardboard21)||sofia.isTouching(cardboard22)||     
      sofia.isTouching(cardboard23)||sofia.isTouching(cardboard24)||     
      sofia.isTouching(cardboard25)||sofia.isTouching(cardboard26)||     
      sofia.isTouching(cardboard27)||sofia.isTouching(cardboard28)||     
      sofia.isTouching(cardboard29)||sofia.isTouching(cardboard30)||     
      sofia.isTouching(cardboard31)||sofia.isTouching(cardboard32)||     
         sofia.isTouching(cardboard33)||sofia.isTouching(cardboard34)||     
      sofia.isTouching(cardboard35)||sofia.isTouching(cardboard36)||     
      sofia.isTouching(cardboard37)||sofia.isTouching(cardboard38)||     
      sofia.isTouching(cardboard40)||sofia.isTouching(cardboard41)||     
      sofia.isTouching(cardboard42)||sofia.isTouching(cardboard43)||     
      sofia.isTouching(cardboard44)||sofia.isTouching(cardboard45)||     
    sofia.isTouching(cardboard46)||sofia.isTouching(cardboard47))  {
      
      sofia.x=13;
      sofia.y=57;
    
    }

  drawSprites();
 }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

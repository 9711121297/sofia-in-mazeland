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

//creating the player Sofia
 var Sofia =createSprite(20,25,18,18)
 Sofia.shapeColor="red"
//creating the maze wall (wall1-wall2)
  var wall1 =createSprite(10,70,100,20) 
  wall1.shapeColor="black"
  
  var wall2 = createSprite(100,50,20,100);
  wall2.shapeColor="black"
  
  var wall3 = createSprite(80,130,100,20);
  wall3.shapeColor="black"
  
  var wall4 = createSprite(50,250,20,100);
  wall4.shapeColor="black"
  
  var wall5 =createSprite(50,250,20,100)
  wall5.shapecolor="black"
  
  var wall6 =createSprite(130,210,100,20)
  wall5.shapeColor="black"
  
  var wall7 = createSprite(160,120,20,100)
  wall7.shapeColor = "black"
  
  var wall8 = createSprite(150,20,100,20)
  wall8.shapeColor = "black"
  
  var wall9 = createSprite(250,70,20,100)
  wall9.shapeColor="black"
  
  var wall10 = createSprite(270,150,100,20)
  wall10.shapeColor="black"
  
  var wall11 = createSprite(330,50,100,20)
  wall11.shapeColor="black"
  
  var wall12 = createSprite(340,125,20,100)
  wall12.shapeColor="black"
  
  var wall13 = createSprite(220,250,20,100)
  wall13.shapeColor="black"
  
  var wall14 = createSprite(33,210,150,20)
  wall14.shapeColor="black"
  
  var wall15 = createSprite(100,300,20,100)
  wall15.shapeColor="black"
  
  var wall16 = createSprite(180,310,100,20)
  wall16.shapeColor="black"
  
  var wall17 = createSprite(30,352,20,100)
  wall17.shapeColor="black"
  
  var wall18 = createSprite(175,352,20,100)
  wall18.shapeColor="black"
  
  var wall19 = createSprite(280,290,20,100)
  wall19.shapeColor = "black"
  
  var wall20 = createSprite(350,270,120,20)
  wall20.shapeColor = "black"
  
  var wall21 = createSprite(250,390,100,20)
  wall21.shapeColor="black"
  
  var wall22 = createSprite(330,370,20,100)
  wall22.shapeColor="balck"
  
  
  //create cup
 var cup = createSprite(395,375,10,50)
 cup.shapeColor="purple"
  
function draw() {
  //setting the background color to pink
  background("pink");
  
 if (Sofia.isTouching(wall1)||Sofia.isTouching(wall2)
 ||Sofia.isTouching(wall3)||Sofia.isTouching(wall4)||
 Sofia.isTouching(wall5)||Sofia.isTouching(wall6)||
 Sofia.isTouching(wall7)||Sofia.isTouching(wall8)||
 Sofia.isTouching(wall9)||Sofia.isTouching(wall10)||
 Sofia.isTouching(wall11)||Sofia.isTouching(wall12)
 ||Sofia.isTouching(wall13)||Sofia.isTouching(wall14)
 ||Sofia.isTouching(wall15)||Sofia.isTouching(wall16)||
 Sofia.isTouching(wall17)||Sofia.isTouching(wall18)||
 Sofia.isTouching(wall19)||Sofia.isTouching(wall20)||
 Sofia.isTouching(wall21)||Sofia.isTouching(wall22)){
 Sofia.x=20;
 Sofia.y=20;
 
 
 Sofia.velocityX=0;
 Sofia.velocityY=0;}
 if (Sofia.bounce(cup)){
 
 stroke(rgb(128,128,128));}

 if (keyDown("UP_ARROW")) {
 Sofia.velocityX=0;
 Sofia.velocityY=-2;
 
 }
 if (keyDown("DOWN_ARROW")){ 
 Sofia.velocityX=0;
 Sofia.velocityY=2;
 
 }
 if (keyDown("LEFT_ARROW")){
 Sofia.velocityX=-2;
 Sofia.velocityY=0;
 
 }
 if (keyDown("RIGHT_ARROW")){
 Sofia.velocityX=2;
 Sofia.velocityY=0;
 }
 
 

function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(19);
  stroke("red");
  text("You Win", 200,200);
  }
}
 Sofia.collide(cup)
 
 createEdgeSprites();
 Sofia.bounceOff(edges);
 
 textSize(19);
 textFont("Poppins")
 text ("cup",360,340);
 textSize(19);
 text("Sofia",30,43);
 
 drawSprites();
 }
 
 
 
 
 

createSprite(100,50,20,100);

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

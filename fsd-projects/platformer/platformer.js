$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);
  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 720, 200, 20, "hotpink");
createPlatform(250, 600, 250, 20, "hotpink");
createPlatform(250, 360, 100, 50, "hotpink");
createPlatform(1150, 400, 25, 270, "hotpink"); 
 createPlatform(900, 135, 300, 10, "red");
createPlatform(450, 470, 50, 10, "hotpink");
createPlatform(400, 250, 150, 20, "red");
createPlatform(1350, 400, 50, 50, "red");
createCannon("top", 200, 1000)
createCannon("right", 300, 1000);
createBadPlatform(200, 725, 1400, 15);
createCannon("right", 115, 4000);
createPlatform(900, 650, 250, 20, "hotpink");
createPlatform(720, 600, 50, 20, "hotpink");
createPlatform(1200, 0, 15, 145, "red");
createPlatform(600, 150, 100, 15,"red");
createCannon("top", 400, 3000);

    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50);
createCollectable("database", 1150, 100, 0.7, 0.7);
createCollectable("database", 1100, 600, 0.5, 0.5);

    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

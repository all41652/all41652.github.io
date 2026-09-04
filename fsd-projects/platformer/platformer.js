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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(255, 254, 254)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 720, 200, 20, "white");
createPlatform(250, 600, 250, 20, "white");
createPlatform(250, 360, 100, 20, "white");
createPlatform(1150, 400, 25, 270, "white"); 
 createPlatform(900, 150, 300, 10, "white");
createPlatform(450, 470, 50, 10, "white");
createPlatform(400, 250, 150, 20, "white");
createPlatform(1350, 400, 50, 50, "white");
createCannon("top", 200, 2000)
createCannon("right", 300, 2000);
createBadPlatform(200, 725, 1400, 15);
createCannon("right", 200, 5000);
createPlatform(900, 650, 250, 20, "white");
createPlatform(720, 600, 50, 20, "white");
createPlatform(1200, 10, 15, 150, "white");
createPlatform(600, 190, 100, 15,"white");
createCannon("top", 500, 2000);
createPlatform(100, 200, 100, 20,"white");
createCannon("right", 600, 2000);
    // TODO 3 - Create Collectables
createCollectable("steve", 100, 700);
createCollectable("database", 1150, 100, 0.7, 0.7);
createCollectable("database", 1100, 600, 0.5, 0.5);
createCollectable("steve", 150, 150);
    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

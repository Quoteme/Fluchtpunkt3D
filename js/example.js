key_id = new Array();
key_speed = 3;

document.addEventListener("keydown", function key_down(e){key_id[e.keyCode] = true;}, false);
document.addEventListener("keyup", function key_down(e){key_id[e.keyCode] = false;}, false);

playerMaterial = new sampleMaterial(true, true, "#000", "", ["#00f", "#00f", "#00f", "#00f", "#00f", "#00f"], [true,true,true,true,true,true]);
wallMaterial = new sampleMaterial(true, true, "#000", "", ["#eee", "#eee", "#eee", "#eee", "#eee", "#eee"], [true,true,true,true,true,true]);

loadMesh("meshes/teetasse.obj", "mesh", true);

function startScene() {
    scene.func.addBox("wall", [canvas.width / 2 - 300,canvas.width / 2 + 300], [canvas.height * 0.75 - 50, canvas.height * 0.75 + 50], [40, -60], wallMaterial);
    scene.func.addBox("player", [canvas.width / 4 - 50,canvas.width / 4 + 50], [canvas.height / 3 - 50,canvas.height / 3 + 50], [20, -10], playerMaterial);

    scene.func.addMesh("meshDisplay", canvas.width / 2, canvas.height / 2, 20, "#f00", "mesh", 50);

    scene.obj["player"].speed.x = 3;
    scene.obj["player"].speed.y = 3;
    scene.obj["player"].speed.z = 3;

    framelimit = false;
    function loop() {
        if (framelimit == false){
            if (!detectcollision("player", "wall")){
                if (scene.obj.player.velocity.y < 8.9)
                scene.obj.player.velocity.y += 0.1;
            }else{
                scene.obj.player.velocity.y = 0;
            }
            if (detectcollision("player", "wall")){
                friction("player", "wall", "x", 0.1);
                friction("player", "wall", "z", 0.1);
        	 }
            playerControle();
            sceneControle();

            calcMoves("player");
            drawFP3D();
            //gui();
            framelimit = true;
        }
        else {
            framelimit = false;
        }
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    function gui() {
        ctx.font="20px Georgia";
        ctx.fillStyle= "#fff";
        ctx.fillText("collision: " + detectcollision("player", "wall"),10,50);
        ctx.fillText("P. x[0]: " + Math.round(scene.obj.player.x[0]) + " x[1]: " + Math.round(scene.obj.player.x[1]) ,10,80);
        ctx.fillText("P. y[0]: " + Math.round(scene.obj.player.y[0]) + " y[1]: " + Math.round(scene.obj.player.y[1]) ,10,110);
        ctx.fillText("P. z[0]: " + Math.round(scene.obj.player.z[0]) + " z[1]: " + Math.round(scene.obj.player.z[1]) ,10,140);

        ctx.fillText("W. x[0]: " + Math.round(scene.obj.wall.x[0]) + " x[1]: " + Math.round(scene.obj.wall.x[1]) ,250,80);
        ctx.fillText("W. y[0]: " + Math.round(scene.obj.wall.y[0]) + " y[1]: " + Math.round(scene.obj.wall.y[1]) ,250,110);
        ctx.fillText("W. z[0]: " + Math.round(scene.obj.wall.z[0]) + " z[1]: " + Math.round(scene.obj.wall.z[1]) ,250,140);

        ctx.fillText("WASD to move scene, r to reset",10,200);
    }

    function playerControle() {
        if (key_id[40]) //down key
            scene.obj.player.velocity.y = 1;
        if (key_id[38] && detectcollision("player", "wall")) //up key
            scene.obj.player.velocity.y = -3;
        if (key_id[37]) //left key
            scene.obj.player.velocity.x = -2;
        if (key_id[39]) //right key
            scene.obj.player.velocity.x = 2;
        if (key_id[78]) //n
            scene.obj.player.velocity.z = -2;
        if (key_id[77]) //m
            scene.obj.player.velocity.z = 2;

        if (key_id[82]){
            scene.obj.player.y[0] = 100;
            scene.obj.player.y[1] = 200;
            scene.obj.player.velocity.y = 0;
        }
    }

    function sceneControle() {
        if (key_id[87]) //w
            scene.y -= key_speed;
        if (key_id[83]) //a
            scene.y += key_speed;
        if (key_id[65]) //a
            scene.x -= key_speed;
        if (key_id[68]) //d
            scene.x += key_speed;
    }
}

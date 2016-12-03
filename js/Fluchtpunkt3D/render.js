/*
    # =========================
    # @author: Luca Leon Happel
    # @date: 06.11.2016
    # =========================
*/

console.log("%c Fluchtpunkt3D started!", 'background: #222; color: #dcdc65');

function drawFP3D() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // this will draw all the boxes on the screen
    // scene.obj[scene.objNames[i]] is the default way to call the currently drawn box
    for (var i = 0; i < scene.objNames.length; i++) {
        ctx.strokeStyle = scene.obj[scene.objNames[i]].material.color;
        ctx.lineWidth = scene.obj[scene.objNames[i]].material.lineWidth;
        if (scene.obj[scene.objNames[i]].useMesh == false)
            drawCube(i);
        else
            drawMesh(i);
    }
}

function drawMesh(i) {
    ctx.fillStyle = scene.obj[scene.objNames[i]].material;
    for (var j = 0; j < meshes["mesh"].v.length; j++) {
        var scale = scene.fov / (( -scene.obj[scene.objNames[i]].z + scene.obj[scene.objNames[i]].node[j].z + scene.z) + scene.fov);
        var tempX = ((scene.obj[scene.objNames[i]].x + scene.obj[scene.objNames[i]].node[j].x + scene.x - scene.fluchtpunkt.x) * scale) + scene.fluchtpunkt.x;
        var tempY = ((scene.obj[scene.objNames[i]].y + scene.obj[scene.objNames[i]].node[j].y + scene.y - scene.fluchtpunkt.y) * scale) + scene.fluchtpunkt.y;
        ctx.fillRect(tempX - 1, tempY - 1, 1, 1);

    }
}

function drawCube(i){
    if (typeof scene.obj[scene.objNames[i]].material.texture === undefined || scene.obj[scene.objNames[i]].material.texture !== "" || scene.obj[scene.objNames[i]].material.grid == true){
        function drawFront() {
            ctx.beginPath();
            ctx.moveTo(scene.obj[scene.objNames[i]].node[0][0][0].x(), scene.obj[scene.objNames[i]].node[0][0][0].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[1][0][0].x(), scene.obj[scene.objNames[i]].node[1][0][0].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[1][1][0].x(), scene.obj[scene.objNames[i]].node[1][1][0].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[0][1][0].x(), scene.obj[scene.objNames[i]].node[0][1][0].y());
            ctx.closePath();

            if (scene.obj[scene.objNames[i]].material.useFaces == true){
                ctx.fillStyle = scene.obj[scene.objNames[i]].material.faces[0].c;
                ctx.fill();
            }
            if (scene.obj[scene.objNames[i]].material.grid == true)
                ctx.stroke();
        }

        function drawBack() {
            ctx.beginPath();
            ctx.moveTo(scene.obj[scene.objNames[i]].node[0][0][1].x(), scene.obj[scene.objNames[i]].node[0][0][1].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[1][0][1].x(), scene.obj[scene.objNames[i]].node[1][0][1].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[1][1][1].x(), scene.obj[scene.objNames[i]].node[1][1][1].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[0][1][1].x(), scene.obj[scene.objNames[i]].node[0][1][1].y());
            ctx.closePath();

            if (scene.obj[scene.objNames[i]].material.useFaces == true){
                ctx.fillStyle = scene.obj[scene.objNames[i]].material.faces[1].c;
                ctx.fill();
            }
            if (scene.obj[scene.objNames[i]].material.grid == true)
                ctx.stroke();
        }

        function drawTop() {
            ctx.beginPath();
            ctx.moveTo(scene.obj[scene.objNames[i]].node[0][0][0].x(), scene.obj[scene.objNames[i]].node[0][0][0].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[1][0][0].x(), scene.obj[scene.objNames[i]].node[1][0][0].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[1][0][1].x(), scene.obj[scene.objNames[i]].node[1][0][1].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[0][0][1].x(), scene.obj[scene.objNames[i]].node[0][0][1].y());
            ctx.closePath();

            if (scene.obj[scene.objNames[i]].material.useFaces == true){
                ctx.fillStyle = scene.obj[scene.objNames[i]].material.faces[2].c;
                ctx.fill();
            }
            if (scene.obj[scene.objNames[i]].material.grid == true)
                ctx.stroke();
        }
        function drawBottom() {
            ctx.beginPath();
            ctx.moveTo(scene.obj[scene.objNames[i]].node[0][1][0].x(), scene.obj[scene.objNames[i]].node[0][1][0].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[1][1][0].x(), scene.obj[scene.objNames[i]].node[1][1][0].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[1][1][1].x(), scene.obj[scene.objNames[i]].node[1][1][1].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[0][1][1].x(), scene.obj[scene.objNames[i]].node[0][1][1].y());
            ctx.closePath();

            if (scene.obj[scene.objNames[i]].material.useFaces == true){
                ctx.fillStyle = scene.obj[scene.objNames[i]].material.faces[3].c;
                ctx.fill();
            }
            if (scene.obj[scene.objNames[i]].material.grid == true)
                ctx.stroke();
        }

        function drawLeft() {
            ctx.beginPath();
            ctx.moveTo(scene.obj[scene.objNames[i]].node[0][0][0].x(), scene.obj[scene.objNames[i]].node[0][0][0].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[0][1][0].x(), scene.obj[scene.objNames[i]].node[0][1][0].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[0][1][1].x(), scene.obj[scene.objNames[i]].node[0][1][1].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[0][0][1].x(), scene.obj[scene.objNames[i]].node[0][0][1].y());
            ctx.closePath();

            if (scene.obj[scene.objNames[i]].material.useFaces == true){
                ctx.fillStyle = scene.obj[scene.objNames[i]].material.faces[4].c;
                ctx.fill();
            }
            if (scene.obj[scene.objNames[i]].material.grid == true)
                ctx.stroke();
        }
        function drawRight() {
            ctx.beginPath();
            ctx.moveTo(scene.obj[scene.objNames[i]].node[1][0][0].x(), scene.obj[scene.objNames[i]].node[1][0][0].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[1][1][0].x(), scene.obj[scene.objNames[i]].node[1][1][0].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[1][1][1].x(), scene.obj[scene.objNames[i]].node[1][1][1].y());
            ctx.lineTo(scene.obj[scene.objNames[i]].node[1][0][1].x(), scene.obj[scene.objNames[i]].node[1][0][1].y());
            ctx.closePath();

            if (scene.obj[scene.objNames[i]].material.useFaces == true){
                ctx.fillStyle = scene.obj[scene.objNames[i]].material.faces[5].c;
                ctx.fill();
            }
            if (scene.obj[scene.objNames[i]].material.grid == true)
                ctx.stroke();
        }
    }
    if (scene.obj[scene.objNames[i]].material.useFaces == true){
        if (scene.obj[scene.objNames[i]].material.faces[1].use == true)
            drawBack();
        if (scene.obj[scene.objNames[i]].node[0][0][0].y() >= scene.obj[scene.objNames[i]].node[0][0][1].y())
            if (scene.obj[scene.objNames[i]].material.faces[2].use == true)
                drawTop();
        if (scene.obj[scene.objNames[i]].node[0][1][0].y() <= scene.obj[scene.objNames[i]].node[0][1][1].y())
            if (scene.obj[scene.objNames[i]].material.faces[3].use == true)
                drawBottom();
        if (scene.obj[scene.objNames[i]].node[0][0][0].x() >= scene.obj[scene.objNames[i]].node[0][0][1].x())
            if (scene.obj[scene.objNames[i]].material.faces[4].use == true)
                drawLeft();
        if (scene.obj[scene.objNames[i]].node[1][0][0].x() <= scene.obj[scene.objNames[i]].node[1][0][1].x())
            if (scene.obj[scene.objNames[i]].material.faces[5].use == true)
                drawRight();
        if (scene.obj[scene.objNames[i]].material.faces[0].use == true)
            drawFront();
    }
    else{
        drawBack();
        drawLeft();
        drawRight();
        drawTop();
        drawBottom();
        drawFront();
    }
}

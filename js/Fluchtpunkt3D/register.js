/*
    # =========================
    # @author: Luca Leon Happel
    # @date: 06.11.2016
    # =========================
*/


// all of this code is used to register new elements and manage them

scene = new Object();
scene.x = 0;
scene.y = 0;
scene.z = 0;
scene.fov = 250;

scene.fluchtpunkt = new Object();
scene.fluchtpunkt.x = canvas.width / 2;
scene.fluchtpunkt.y = canvas.height / 2;

scene.obj = new Object();
scene.objNames = new Array();
scene.func = new Array();

scene.func.addBox = function(name, x, y, z, material) {
    // create the Object and register it inside the scene.objNames
    scene.obj[name] = new Object();
    scene.objNames.push(name);
    scene.obj[name].id = scene.objNames.length;

    // add the material to the box
    scene.obj[name].material = material;

    // save the x, y and z coordinates for future modification
    scene.obj[name].x = x;
    scene.obj[name].y = y;
    scene.obj[name].z = z;

    scene.obj[name].velocity = new Object();
    scene.obj[name].velocity.x = 0;
    scene.obj[name].velocity.y = 0;
    scene.obj[name].velocity.z = 0;

    scene.obj[name].speed = new Object();
    scene.obj[name].speed.x = 0;
    scene.obj[name].speed.y = 0;
    scene.obj[name].speed.z = 0;


    scene.obj[name].useMesh = false;

    // this is so the following code works as intended and the loop count variables are bound to the functions:
    function createfuncX(i, j, k) {
        if (!legacyRender)
            return function() {
                var scale = scene.fov / (( -scene.obj[name].z[k] + scene.z) + scene.fov);
                return ((scene.obj[name].x[i] + scene.x - scene.fluchtpunkt.x) * scale) + scene.fluchtpunkt.x;
            }
        else
            return function() {return (scene.obj[name].x[i] + scene.x) + Math.sign((scene.obj[name].x[i] + scene.x) - scene.fluchtpunkt.x) * scene.obj[name].z[k] * Math.cos(Math.atan(((scene.obj[name].y[j] + scene.y) - scene.fluchtpunkt.y) / ((scene.obj[name].x[i] + scene.x) - scene.fluchtpunkt.x)))};
    }
    function createfuncY(i, j, k) {
        if(!legacyRender)
            return function() {
                var scale = scene.fov / (( -scene.obj[name].z[k] + scene.z) + scene.fov);
                return ((scene.obj[name].y[j] + scene.y - scene.fluchtpunkt.y) * scale) + scene.fluchtpunkt.y;
            }
        else
            return function() { return (scene.obj[name].y[j] + scene.y) + Math.sign((scene.obj[name].x[i] + scene.x) - scene.fluchtpunkt.x) * scene.obj[name].z[k] * Math.sin(Math.atan(((scene.obj[name].y[j] + scene.y) - scene.fluchtpunkt.y) / ((scene.obj[name].x[i] + scene.x) - scene.fluchtpunkt.x)))};
    }


    // set all the x y and z coordinates
    // at the end it will work like scene.box[name].node[x][y][z].x/.y
    scene.obj[name].node = new Array(x.length);
    for (var i = 0; i < scene.obj[name].node.length; i++) {
        scene.obj[name].node[i] = new Array(y.length);
        for (var j = 0; j < scene.obj[name].node[i].length; j++) {
            scene.obj[name].node[i][j] = new Array(z.length);
            for (var k = 0; k < scene.obj[name].node[i][j].length; k++) {
                scene.obj[name].node[i][j][k] = new Object;

                scene.obj[name].node[i][j][k].x = createfuncX(i, j, k);
                scene.obj[name].node[i][j][k].y = createfuncY(i, j, k);
            }
        }
    }
    return scene.obj[name];
}

scene.func.delete = function (name){
    scene.objNames.splice(scene.obj[name].id, 1);
    delete scene.obj[name];
}

scene.func.addMesh = function(name, x, y, z, material, meshToUse, scale) {
    // create the Object and register it inside the scene.objNames
    scene.obj[name] = new Object();
    scene.objNames.push(name);
    scene.obj[name].id = scene.objNames.length;

    // add the material to the box
    scene.obj[name].material = material;

    // save the x, y and z coordinates for future modification
    scene.obj[name].x = x;
    scene.obj[name].y = y;
    scene.obj[name].z = z;

    scene.obj[name].velocity = new Object();
    scene.obj[name].velocity.x = 0;
    scene.obj[name].velocity.y = 0;
    scene.obj[name].velocity.z = 0;

    scene.obj[name].speed = new Object();
    scene.obj[name].speed.x = 0;
    scene.obj[name].speed.y = 0;
    scene.obj[name].speed.z = 0;

    scene.obj[name].useMesh =  true;
    scene.obj[name].node = new Array();

    for (var i = 0; i < meshes[meshToUse].v.length; i++) {
        scene.obj[name].node[i] = new Object();
        scene.obj[name].node[i].x = parseFloat(meshes[meshToUse].v[i].x) * scale;
        scene.obj[name].node[i].y = -1 * parseFloat(meshes[meshToUse].v[i].y) * scale;
        scene.obj[name].node[i].z = parseFloat(meshes[meshToUse].v[i].z) * scale;
    }
}

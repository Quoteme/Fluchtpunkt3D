function calcMoves(name) {
    if (scene.obj[name].speed.x > 0)
        for (var i = 0; i < scene.obj[name].x.length; i++) {
            scene.obj[name].x[i] += scene.obj[name].speed.x * scene.obj[name].velocity.x;
        }
    if (scene.obj[name].speed.y > 0)
        for (var i = 0; i < scene.obj[name].y.length; i++) {
            scene.obj[name].y[i] += scene.obj[name].speed.y * scene.obj[name].velocity.y;
        }
    if (scene.obj[name].speed.z > 0)
        for (var i = 0; i < scene.obj[name].z.length; i++) {
            scene.obj[name].z[i] += scene.obj[name].speed.z * scene.obj[name].velocity.z;
        }
}

function calcRotation() {
    // here needs to be code
}

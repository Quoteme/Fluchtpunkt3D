function detectcollision(one, two) {
    if (scene.obj[one].y[0] >= scene.obj[two].y[0] &&
        scene.obj[one].y[0] <= scene.obj[two].y[1] ||
        scene.obj[one].y[1] >= scene.obj[two].y[0] &&
        scene.obj[one].y[1] <= scene.obj[two].y[1]){
        if (scene.obj[one].x[0] >= scene.obj[two].x[0] &&
            scene.obj[one].x[0] <= scene.obj[two].x[1] ||
            scene.obj[one].x[1] >= scene.obj[two].x[0] &&
            scene.obj[one].x[1] <= scene.obj[two].x[1])
            if (scene.obj[one].z[0] <= scene.obj[two].z[0] &&
                scene.obj[one].z[0] >= scene.obj[two].z[1] ||
                scene.obj[one].z[1] <= scene.obj[two].z[0] &&
                scene.obj[one].z[1] >= scene.obj[two].z[1])
            temp = true;
    }else
        temp = false;

    return temp;
}

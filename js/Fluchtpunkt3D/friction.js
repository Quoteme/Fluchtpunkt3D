function friction(obj1, obj2, direction, amount){
	if (Math.abs(scene.obj[obj1].velocity[direction]) < amount)
		scene.obj[obj1].velocity[direction] = 0;
	else
		scene.obj[obj1].velocity[direction] = scene.obj[obj1].velocity[direction] + -1 * Math.sign(scene.obj[obj1].velocity[direction]) * amount;
}

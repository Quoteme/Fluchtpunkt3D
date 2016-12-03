// Insert the name of the canvas you want to use here:
canvas = document.getElementById("FP3D");
ctx = canvas.getContext("2d");

legacyRender = false;

// These lines make including Fluchtpunkt3D easier by reducing the
// amount of lines needed to include it.
// It also allows for an easy to understand and modify list of all libraries used
document.write('<script src="js/Fluchtpunkt3D/loadMesh.js" charset="utf-8"></script>');
document.write('<script src="js/Fluchtpunkt3D/generateMaterial.js" charset="utf-8"></script>');
document.write('<script src="js/Fluchtpunkt3D/register.js" charset="utf-8"></script>');
document.write('<script src="js/Fluchtpunkt3D/collision.js" charset="utf-8"></script>');
document.write('<script src="js/Fluchtpunkt3D/movement.js" charset="utf-8"></script>');
document.write('<script src="js/Fluchtpunkt3D/friction.js" charset="utf-8"></script>');
document.write('<script src="js/Fluchtpunkt3D/render.js" charset="utf-8"></script>');

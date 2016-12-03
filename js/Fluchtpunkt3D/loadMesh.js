meshes = new Object();

function loadMesh(url, name, setFlagLoadScene){
    var client = new XMLHttpRequest();
    client.open('GET', url);
    client.onreadystatechange = function() {
        var tempMesh = client.responseText;
        var outputMesh = new Object();
        outputMesh.v = new Array();
        for (var i = 0; i <= (tempMesh.match(/0.999999/g) || []).length; i++) {
            tempMesh = tempMesh.replace("0.999999", "1.000000");
        }
        var vertexes = (tempMesh.match(/v /g) || []).length;
        tempMesh = tempMesh.slice(tempMesh.indexOf("v "), tempMesh.length);
        for (var i = 0; i <= vertexes; i++) {
            if (i > 0){
                if (i < vertexes ){
                    var temp = tempMesh.slice(tempMesh.split("v ", i).join("v ").length + 2, tempMesh.split("v ", i + 1).join("v ").length);
                    outputMesh.v[i-1] = new Array();
                    outputMesh.v[i-1].x = temp.split(" ")[0];
                    outputMesh.v[i-1].y = temp.split(" ")[1];
                    outputMesh.v[i-1].z = temp.split(" ")[2];
                }else{
                    var temp = tempMesh.slice(tempMesh.split("v ", i).join("v ").length + 2, tempMesh.indexOf("vn "));
                    outputMesh.v[i-1] = new Array();
                    outputMesh.v[i-1].x = temp.split(" ")[0];
                    outputMesh.v[i-1].y = temp.split(" ")[1];
                    outputMesh.v[i-1].z = temp.split(" ")[2];
                }
            }
        }

        outputMesh.f = new Array();
        var faces = (tempMesh.match(/f /g) || []).length;
        tempMesh = tempMesh.slice(tempMesh.indexOf("f "), tempMesh.length);
        for (var i = 0; i <= faces; i++) {
            if (i > 0){
                if (i < faces )
                    outputMesh.f[i-1] = tempMesh.slice(tempMesh.split("f ", i).join("f ").length + 2, tempMesh.split("f ", i + 1).join("f ").length);
                else
                    outputMesh.f[i-1] = tempMesh.slice(tempMesh.split("f ", i).join("f ").length + 2, tempMesh.length);
            }
        }
        meshes[name] = outputMesh;

        if (setFlagLoadScene)
            startScene();
    }
    client.send();


}

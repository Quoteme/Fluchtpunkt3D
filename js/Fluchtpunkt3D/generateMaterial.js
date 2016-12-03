function sampleMaterial(grid, useFaces, color, texture, c, facesToDraw) {
    this.grid = grid;
    this.lineWidth = 1;
    this.useFaces = useFaces;
    this.color = color;
    if (useFaces){
        this.faces = new Array(6);
        for (var i = 0; i < this.faces.length; i++) {
            this.faces[i] = new Object;
            this.faces[i].c = c[i];
            this.faces[i].use = facesToDraw[i];
        }
    }
}

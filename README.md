# Fluchtpunkt3D
An ultra minimalist JavaScript 3D engine using vanishing points for 3D calculation.
![Fluchtpunkt3D in action](https://raw.githubusercontent.com/Quoteme/Fluchtpunkt3D/master/demo/test.gif "Fluchtpunkt3D in action")

(The glitches seen in the .gif were caused by the screen recorder)

## How to use it
First you need to currently include Fluchtpunkt3D into your project:
1. Paste the "Fluchtpunkt3D/" folder into your "js/" folder
2. Call the "js/Fluchtpunkt3D/setup.js" at the end of your .html file:

        (...)
        <script src="js/Fluchtpunkt3D/setup.js" charset="utf-8"></script>
        <script src="js/example.js" charset="utf-8"></script>
        </body>
        </html>

3. Add a box to your scene:

        scene.func.addBox("test", [10,100], [10,100], [20, -10], testMaterial);
        // scene.func.addBox(name, [x,width], [y,height], [z, depth], material);

4. Optionally edit the "js/Fluchtpunkt3D/setup.js"

        // Insert the name of the canvas you want to use here:
        canvas = document.getElementById( /!\ HERE /!\ );

## Disclamber
This project has been rewritten completely, due to a bug that caused the
computer to overheat after just a few seconds of running Fluchtpunkt3D

## How to use the example
If you want to see the the engine in action just start up the index.html and use
the directional arrows to move the box. "N" and "M" elongate / shorten the box.
"V" and "B" change the boxes point on the Z-axis.
"I", "J", "K" and "L" also move the vanishing point (currently buggy)

increase the FPS by changing the interval inside "js/example.js"

## Boring license
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
        Version 2, December 2004

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.

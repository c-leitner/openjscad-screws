// -M3-Nut without tollerances

function main() {
    var h = hull(polygon([ [0,0],[3,0],[4.505,5.5/2],[3,5.5],[0,5.5],[-1.505,5.5/2] ]));
    linear_extrude({ height: 10 }, h);
}

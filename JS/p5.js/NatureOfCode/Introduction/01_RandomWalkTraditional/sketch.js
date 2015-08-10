/**
 * Created by hide on 2015/08/11.
 */

function setup() {
    createCanvas(640, 360);
    walker = new Walker();
    background(127);
}

function draw(){
    walker.step();
    walker.render();
}

function Walker(){
    this.x = width/2;
    this.y = height/2;

    this.render = function(){
        stroke(0);
        point(this.x,this.y);
    };

    this.step = function(){
        var choice = floor(random(4));

        if (choice == 0){
            this.x++;
        } else if (choice == 1){
            this.x--;
        } else if (choice == 2){
            this.y++;
        } else {
            this.y--;
        }
    }
}
class Ground {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        };

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);

    }
    display() {

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("yellow");
        rect(15,20,800,20)
        pop();



    }

}

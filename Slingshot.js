class Slingshot {
    constructor(BodyA, BodyB) {

        var options ={
            BodyA:BodyA,
            BodyB:BodyB,
            stiffness:0.04,
            length:10

        }
        this.ss = Constraint.create(options);
        World.add(world, this.ss)
    }

    display() {

    }
}
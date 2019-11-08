class Bird extends MyAnimation {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        this.gy = 10
        this.vy = 0
    }

    update() {
        super.update();
        // 更新掉落重力
        if (this.rotation < 45) {
            this.rotation += 5
        }
        this.y += this.vy
        this.vy += this.gy * 0.2
    }


    // moveLeft() {
    //     this.move(this.x -= this.speed)
    // }
    //
    // moveRight() {
    //     this.move(this.x += this.speed)
    // }

    jump() {
        this.vy = -10
        this.rotation = -45
    }
}


class Pipe {
    constructor(game) {
        this.game = game
        this.pipes = []
        for (let i = 0; i < 3; i++) {
            var p1 = new NikuImage(game, 'pipe')
            p1.x = 500 + i * 200
            p1.y = randomBetween(200, 400)

            var p2 = new NikuImage(game, 'pipe')
            p2.x = p1.x
            p2.y = p1.y - 800

            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }


    update() {
        for (let i = 0; i < this.pipes.length; i++) {
            var p = this.pipes[i]
            p.x -= 5
            if (p.x < -100) {
                p.x += 600
                if (p.y > 0) {
                    p.y = randomBetween(200, 500)
                    this.pipes[i + 1].y = p.y - 800
                }
                if (p.y < 0) {
                    var y = randomBetween(200, 400)
                    p.y = y - 800
                    this.pipes[i - 1].y = y
                }
            }
        }
    }

    draw() {
        for (var p of this.pipes) {
            p.draw()
        }
    }
}


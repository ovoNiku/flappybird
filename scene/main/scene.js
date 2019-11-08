class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.bg = new NikuImage(this.game, 'bg')
        this.bg.w = 400
        this.bg.h = 600
        this.bird = new Bird(this.game)
        this.ground = new Ground(this.game)
        this.pipe = new Pipe(this.game)
        this.addElements(this.bg)
        this.addElements(this.bird)
        this.addElements(this.pipe)
        this.addElements(this.ground)
    }

    setupInputs() {
        this.game.registerAction(' ', () => {
            this.bird.jump()
        })
    }


    update() {
        super.update()
        this.ground.move()
        for (var p of this.pipe.pipes) {
            if (p.collide(this.bird)) {
                var s = new EndScene(this.game)
                this.game.replaceScene(s)
            }
        }
    }
}



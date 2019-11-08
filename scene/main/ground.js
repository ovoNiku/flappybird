class Ground extends NikuImage {
    constructor(game) {
        super(game, 'ground')
        this.setup()
    }

    setup() {
        this.skipCount = 4
        this.x = 0
        this.y = 500
        this.w = 430
    }

    move() {
        this.skipCount--
        var offset = -5
        if (this.skipCount === 0) {
            this.skipCount = 4
            offset = 15
        }
        this.x += offset
    }
}

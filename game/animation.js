class MyAnimation {
    constructor(game) {
        this.game = game
        this.frames = []
        for (let i = 0; i < 3; i++) {
            var name = `bird${i}`
            var t = game.texttureByname(name)
            this.frames.push(t)
        }
        this.texture = this.frames[0]
        this.x = 150
        this.y = 300
        this.w = this.texture.width
        this.h = this.texture.height
        this.rotation = 0
        this.frameIndex = 0
        this.frameCount = 3
    }

    update() {
        this.frameCount--
        if (this.frameCount === 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
        }
    }

    draw() {
        var context = this.game.context
        context.save()

        var w2 = this.w / 2
        var h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)

        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)

        context.drawImage(this.texture, 0, 0)

        context.restore()
    }
}
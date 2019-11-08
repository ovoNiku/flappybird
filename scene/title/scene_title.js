class TitleScene extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('Enter', () => {
            var s = new Scene(game)
            game.replaceScene(s)
        })
        this.ground = []
        for (let i = 0; i < 3; i++) {

        }
        this.setup()
    }

    setup() {
        this.bg = new NikuImage(this.game, 'bg')
        this.title = new NikuImage(this.game, 'title')
        this.bg.w = 400
        this.bg.h = 600
        this.title.x = 70
        this.title.y = 70
        this.title.w = 250
        this.title.h = 150
        this.addElements(this.bg)
        this.addElements(this.title)
    }

    draw() {
        super.draw()
        this.game.context.font = "small-caps bold 15pt arial";            //设置文本大小 + 字体
        this.game.context.fillStyle = "white";
        this.game.context.fillText("按 Enter 开始游戏", 100, 260, 300)
    }
}
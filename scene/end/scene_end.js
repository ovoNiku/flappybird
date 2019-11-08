class EndScene extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('r', () => {
            var s = new TitleScene(game)
            game.replaceScene(s)
        })
        this.setup()
    }

    setup() {
        this.bg = new NikuImage(this.game, 'bg')
        this.title = new NikuImage(this.game, 'title1')
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
        this.game.context.fillText("按 R 返回标题界面", 100, 260, 300)
    }
}
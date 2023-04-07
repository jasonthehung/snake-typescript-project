import Snake from "./Snake"
import ScorePanel from "./ScorePanel"
import Food from "./Food"

class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel

    // 存儲蛇移動的方向
    direction: string = "ArrowRight"

    isLive: boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.init()
    }

    //對遊戲初始化
    init() {
        // 讓上下左右可以移動蛇（綁定鍵盤按下事件）
        document.addEventListener("keydown", this.keydownHandler.bind(this))

        // 調用run方法，使蛇移動
        this.run()
    }

    // 創建一個鍵盤按下的響應函式
    keydownHandler(event: KeyboardEvent) {
        console.log(event.key)
        if (
            this.direction === "ArrowDown" ||
            "ArrowUp" ||
            "ArrowLeft" ||
            "ArrowRight"
        ) {
            this.direction = event.key
        }
    }

    // 讓蛇移動的方法
    run() {
        let x = this.snake.x
        let y = this.snake.y

        switch (this.direction) {
            case "ArrowUp":
                y -= 10
                break
            case "ArrowDown":
                y += 10
                break
            case "ArrowLeft":
                x -= 10
                break
            case "ArrowRight":
                x += 10
                break
        }

        this.checkEat(x, y)

        try {
            this.snake.x = x
            this.snake.y = y
        } catch (e: any) {
            alert(e.message)

            this.isLive = false
        }

        // 開啟一個定時調用
        this.isLive &&
            setTimeout(
                this.run.bind(this),
                50 - (this.scorePanel.level - 1) * 2
            )
    }

    checkEat(x: number, y: number) {
        if (x === this.food.x && y === this.food.y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl

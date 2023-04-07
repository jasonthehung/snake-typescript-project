// 定義計分牌的類
class ScorePanel {
    score: number = 0
    level: number = 1

    // 設置變量來限制等級
    maxLevel: number

    // 設置變量來表示多少分數可升級
    upScore: number

    scoreElement: HTMLElement
    levelElement: HTMLElement

    // maxLevel 如果不傳進來，預設是10
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreElement = document.getElementById("score")!
        this.levelElement = document.getElementById("level")!

        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 設置一個加分的方法
    addScore() {
        this.scoreElement.innerHTML = ++this.score + ""

        // 判斷當前分數是多少
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 提升等級的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelElement.innerHTML = (++this.level).toString()
        }
    }
}

export default ScorePanel

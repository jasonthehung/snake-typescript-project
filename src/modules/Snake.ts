class Snake {
    head: HTMLElement
    bodies: HTMLCollection
    // 蛇的容器（使用上比較方便）
    element: HTMLElement

    constructor() {
        this.head = document.querySelector("#snake > div")!
        this.bodies = document
            .getElementById("snake")!
            .getElementsByTagName("div")

        this.element = document.getElementById("snake")!
    }

    // 獲取蛇頭的座標
    get x() {
        return this.head.offsetLeft
    }

    get y() {
        return this.head.offsetTop
    }

    set x(value: number) {
        // 若沒有輸入方向鍵，則不做事情
        if (this.x === value) {
            return
        }

        if (value < 0 || value > 290) {
            throw new Error("Game over!")
        }

        if (
            this.bodies[1] &&
            (this.bodies[1] as HTMLElement).offsetLeft === value
        ) {
            // 不允許掉頭
            if (value > this.x) {
                value = this.x - 10
            } else {
                value = this.x + 10
            }
        }
        this.checkHeadBody()
        this.moveBody()

        this.head.style.left = value + "px"
    }

    set y(value: number) {
        if (this.y === value) {
            return
        }

        if (value < 0 || value > 290) {
            throw new Error("Game over!")
        }

        if (
            this.bodies[1] &&
            (this.bodies[1] as HTMLElement).offsetTop === value
        ) {
            // 不允許掉頭
            if (value > this.y) {
                value = this.y - 10
            } else {
                value = this.y + 10
            }
        }
        this.checkHeadBody()
        this.moveBody()

        this.head.style.top = value + "px"
    }

    // 蛇增加身體的方法
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    // 移動蛇的身體
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 取得前面一位身體的位置
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop

            ;(this.bodies[i] as HTMLElement).style.left = x + "px"
            ;(this.bodies[i] as HTMLElement).style.top = y + "px"
        }
    }

    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; ++i) {
            let bd = this.bodies[i] as HTMLElement
            if (this.x === bd.offsetLeft && this.y === bd.offsetTop) {
                throw new Error("撞到自己囉")
            }
        }
    }
}

export default Snake

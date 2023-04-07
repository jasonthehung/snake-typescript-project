// 定義食物類
class Food {
    // 定義一個屬性表示食物所對應的元素
    element: HTMLElement

    constructor() {
        // `!` 表示一定會有值，不會是null
        this.element = document.getElementById("food")!
    }

    // 獲取食物x軸座標的方法
    get x() {
        return this.element.offsetLeft
    }

    // 獲取食物y軸座標的方法
    get y() {
        return this.element.offsetTop
    }

    // 修改食物的位置（隨機）
    change() {
        // 生成一個隨機的位置 left = 0 ~ 290 & 10的倍數
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10

        this.element.style.left = left + "px"
        this.element.style.top = top + "px"
    }
}

export default Food

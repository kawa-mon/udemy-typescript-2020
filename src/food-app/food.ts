class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEventHandler)
  }
  clickEventHandler = () => {
    this.element.classList.toggle('food--active')
    const score = Score.getInstance()
    score.render()
  }
}

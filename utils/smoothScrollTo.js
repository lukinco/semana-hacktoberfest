export const smoothScrollTo = (endX, endY) => {
  const startX = window.scrollX || window.pageXOffset
  const startY = window.scrollY || window.pageYOffset
  const distanceX = endX - startX
  const distanceY = endY - startY
  const startTime = new Date().getTime()

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from
  }

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime
    const newX = easeInOutQuart(time, startX, distanceX, 600)
    const newY = easeInOutQuart(time, startY, distanceY, 600)
    if (time >= 600) {
      clearInterval(timer)
    }
    window.scroll(newX, newY)
  }, 1000 / 60)
}

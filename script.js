document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  const pages = document.querySelectorAll(".page")
  const prevButton = document.querySelector(".prev-button")
  const nextButton = document.querySelector(".next-button")
  const indicators = document.querySelectorAll(".indicator")

  let currentPageIndex = 0
  const totalPages = pages.length

  // Function to update the active page
  function goToPage(index) {
    // Remove active class from all pages and indicators
    pages.forEach((page) => page.classList.remove("active"))
    indicators.forEach((indicator) => indicator.classList.remove("active"))

    // Add active class to current page and indicator
    pages[index].classList.add("active")
    indicators[index].classList.add("active")

    // Update current page index
    currentPageIndex = index
  }

  // Next button click handler
  nextButton.addEventListener("click", () => {
    const nextIndex = (currentPageIndex + 1) % totalPages
    goToPage(nextIndex)
  })

  // Previous button click handler
  prevButton.addEventListener("click", () => {
    const prevIndex = (currentPageIndex - 1 + totalPages) % totalPages
    goToPage(prevIndex)
  })

  // Indicator click handlers
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      goToPage(index)
    })
  })

  // Keyboard navigation
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      const nextIndex = (currentPageIndex + 1) % totalPages
      goToPage(nextIndex)
    } else if (event.key === "ArrowLeft") {
      const prevIndex = (currentPageIndex - 1 + totalPages) % totalPages
      goToPage(prevIndex)
    }
  })

  // Touch/swipe support
  let touchStartX = 0
  let touchEndX = 0

  document.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX
  })

  document.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX
    handleSwipe()
  })

  function handleSwipe() {
    const swipeThreshold = 50 // Minimum distance for a swipe

    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - go to next page
      const nextIndex = (currentPageIndex + 1) % totalPages
      goToPage(nextIndex)
    }

    if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - go to previous page
      const prevIndex = (currentPageIndex - 1 + totalPages) % totalPages
      goToPage(prevIndex)
    }
  }
})


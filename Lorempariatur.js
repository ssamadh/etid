/**
 * Scroller class can be used to scroll in a variety of ways.
 */
class Scroller {
  constructor(element) {
    this.element = element;
  }

  /**
   * Scrolls to a specific position.
   * @param {number} x - The horizontal pixel value to scroll to.
   * @param {number} y - The vertical pixel value to scroll to.
   */
  scrollToPosition(x, y) {
    this.element.scrollTo(x, y);
  }

  /**
   * Scrolls by a certain amount.
   * @param {number} deltaX - The amount of pixels to scroll horizontally.
   * @param {number} deltaY - The amount of pixels to scroll vertically.
   */
  scrollByAmount(deltaX, deltaY) {
    this.element.scrollBy(deltaX, deltaY);
  }

  /**
   * Scrolls to the top of the element.
   */
  scrollToTop() {
    this.element.scrollTo(0, 0);
  }

  /**
   * Scrolls to the bottom of the element.
   */
  scrollToBottom() {
    this.element.scrollTo(0, this.element.scrollHeight);
  }

  /**
   * Smoothly scrolls to a specific position.
   * @param {number} x - The horizontal pixel value to scroll to.
   * @param {number} y - The vertical pixel value to scroll to.
   */
  smoothScrollTo(x, y) {
    this.element.scrollTo({
      top: y,
      left: x,
      behavior: 'smooth'
    });
  }

  /**
   * Smoothly scrolls to the top of the element.
   */
  smoothScrollToTop() {
    this.smoothScrollTo(0, 0);
  }

  /**
   * Smoothly scrolls to the bottom of the element.
   */
  smoothScrollToBottom() {
    this.smoothScrollTo(0, this.element.scrollHeight);
  }
}

// Usage example:
// Assuming you have an element with the ID 'scrollable-element'
const element = document.getElementById('scrollable-element');
const scroller = new Scroller(element);

// Scroll to a specific position
scroller.scrollToPosition(100, 200);

// Scroll by a certain amount
scroller.scrollByAmount(50, 50);

// Scroll to the top
scroller.scrollToTop();

// Scroll to the bottom
scroller.scrollToBottom();

// Smoothly scroll to a specific position
scroller.smoothScrollTo(100, 200);

// Smoothly scroll to the top
scroller.smoothScrollToTop();

// Smoothly scroll to the bottom
scroller.smoothScrollToBottom();

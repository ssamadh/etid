function generateDateRange(start, stop, step) {
  const range = [];
  let current = new Date(+start);

  // Helper functions to offset the date and floor the date.
  function offsetDate(date, step) {
    date.setDate(date.getDate() + step);
  }

  function floorDate(date) {
    // This example floors the date to midnight.
    date.setHours(0, 0, 0, 0);
  }

  do {
    range.push(new Date(current));
    offsetDate(current, step);
    floorDate(current);
  } while (current < stop);

  return range;
}

// Example usage:
const start = new Date("2024-01-01");
const stop = new Date("2024-01-10");
const step = 1; // Step size in days

const dateRange = generateDateRange(start, stop, step);
console.log(dateRange);

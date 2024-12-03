# Table-dynimc using js, rendered dynamically from a JavaScript array

## Interactive Reveal Animation: Clicking on an employee's name progressively displays their

# example entering Data
```javascript
 const employees = [ { name: 'Nurra', position: 'Software Engineer', 
  department: 'Development', salary: '$100,000' }, { name: 'Janyy', 
  position: 'Web Developer', department: 'Product', salary: '$120,000' 
  }, ...];
```

# the code in clicks file has something has to be clearfiyed 

### Redundancy: Each cell (position, department, and salary) is handled explicitly, leading to repetitive code.

###  Delay values (200ms, 500ms, 800ms) are manually repeated, making it harder to adjust if needed.

## I prefere using this block of code instead;

```javascript 
//clicks.js

function showupData(row) {
  const dataCells = row.querySelectorAll('.employee-data');
  
  dataCells.forEach((cell, index) => {
    setTimeout(() => {
      cell.classList.add('revealed');
    }, index * 300); //  delay (300ms per cell)
  });
}
document.querySelectorAll('.employee-name').forEach(cell => {
  cell.addEventListener('click', function () {
    const row = this.parentElement;
    
    // Reset all cells in the row
    row.querySelectorAll('.employee-data').forEach(cell => cell.classList.remove('revealed'));
    
    // Revealing data 
    showupData(row);
  });
});
```
# screeenshots

## Showing Any Data

![theme settings](https://github.com/Zu34/dynamic-js-animation-/blob/main/screencapture-127-0-0-1-5500-test-html-2024-12-03-12_27_10.png)

![theme settings](https://github.com/Zu34/dynamic-js-animation-/blob/main/screencapture-127-0-0-1-5500-test-html-2024-12-03-12_29_26.png)

# Dynamic JS Animation

This is a demo of the dynamic JS animation. Below is a preview of how it looks in action:

![Demo](./Recording%202024-12-03%20150209.gif)

Feel free to check the code and explore the project.


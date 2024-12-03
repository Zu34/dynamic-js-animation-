// Add click event;
function addClickEvents() {
    const nameCells = document.querySelectorAll('.employee-name');
    nameCells.forEach(cell => {
      cell.addEventListener('click', function () {
        const row = this.parentElement;
        const position = row.querySelector('td:nth-child(2)');
        const department = row.querySelector('td:nth-child(3)');
        const salary = row.querySelector('td:nth-child(4)');
        
        // Reset the visibility and opacity data cells
        position.classList.remove('revealed');
        department.classList.remove('revealed');
        salary.classList.remove('revealed');
        
        // Reveal position, department, and salary
        setTimeout(() => {
          position.classList.add('revealed');
        }, 200);  // Delay for Position (0.2s)
  
        setTimeout(() => {
          department.classList.add('revealed');
        }, 500);  // Delay for Department (0.5s)
        
        setTimeout(() => {
          salary.classList.add('revealed');
        }, 800);  // Delay for Salary (0.8s)
      });
    });
  }
  addClickEvents();
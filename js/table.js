// JavaScript for sorting the table
document.addEventListener("DOMContentLoaded", function() {
  const table = document.querySelector("table");
  const headers = table.querySelectorAll("th");
  headers.forEach(function(header) {
    header.addEventListener("click", function() {
      const sortOrder = this.dataset.sort === "asc" ? "desc" : "asc";
      const columnIndex = this.cellIndex;

      sortTable(columnIndex, sortOrder);
      this.dataset.sort = sortOrder;
    });
  });

  function sortTable(columnIndex, sortOrder) {
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    rows.sort(function(a, b) {
      const aValue = a.cells[columnIndex].textContent.trim();
      const bValue = b.cells[columnIndex].textContent.trim();

      if (sortOrder === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    rows.forEach(function(row) {
      tbody.appendChild(row);
    });
  }

  // JavaScript for searching the table
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const rows = table.querySelectorAll("tbody tr");

    rows.forEach(function(row) {
      const cells = row.querySelectorAll("td");
      let found = false;

      cells.forEach(function(cell) {
        const cellValue = cell.textContent.toLowerCase();

        if (cellValue.includes(searchTerm)) {
          found = true;
        }
      });

      if (found) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});
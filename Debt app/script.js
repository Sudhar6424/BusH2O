// script.js

// Select the form and table elements
const debtForm = document.getElementById('debtForm');
const debtTable = document.getElementById('debtTable').getElementsByTagName('tbody')[0];

// Handle form submission
debtForm.addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent form from submitting and refreshing the page

  // Get the values from the form inputs
  const debtorName = document.getElementById('debtorName').value;
  const debtAmount = document.getElementById('debtAmount').value;
  const debtDescription = document.getElementById('debtDescription').value;
  const dueDate = document.getElementById('dueDate').value;

  // Create a new row for the debt table
  const newRow = debtTable.insertRow();

  // Insert cells into the new row
  const nameCell = newRow.insertCell(0);
  const amountCell = newRow.insertCell(1);
  const descriptionCell = newRow.insertCell(2);
  const dueDateCell = newRow.insertCell(3);

  // Set the text content of each cell
  nameCell.textContent = debtorName;
  amountCell.textContent = `$${debtAmount}`;
  descriptionCell.textContent = debtDescription;
  dueDateCell.textContent = dueDate;

  // Clear the form fields after submission
  debtForm.reset();
});

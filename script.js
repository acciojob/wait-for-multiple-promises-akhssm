//your JS code here. If required.

const output = document.getElementById("output");

output.innerHTML = `
  <tr>
    <td colspan="2" class="text-center fw-bold">Loading...</td>
  </tr>
`;

function createPromise(promiseName) {
  return new Promise((resolve) => {
    const delay = (Math.random() * 2 + 1).toFixed(3); 
    setTimeout(() => {
      resolve({ name: promiseName, time: parseFloat(delay) });
    }, delay * 1000);
  });
}

const startTime = performance.now();

const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

Promise.all(promises).then((results) => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);

  output.innerHTML = "";

  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${result.name}</td>
      <td>${result.time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalTime}</strong></td>
  `;
  output.appendChild(totalRow);
});


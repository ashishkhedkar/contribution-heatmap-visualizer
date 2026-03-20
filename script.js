document.addEventListener("DOMContentLoaded", () => {
  const heatmap = document.getElementById("heatmap");
  const monthsContainer = document.getElementById("months");

  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);

  function getColor(count) {
  if (count === 0) return "#f0f4ff";
  if (count < 2) return "#99bbff";
  if (count < 5) return "#4d88ff";
  if (count < 10) return "#1a66ff";
  return "#003cb3";

  }

  let lastMonth = "";

  for (let i = 0; i < 365; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    const day = date.getDay();
    const week = Math.floor(i / 7);

    const key = date.toISOString().split("T")[0];
    const count = contributionData[key] || 0;

    // Create cell
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.style.backgroundColor = getColor(count);
    cell.style.gridColumn = week + 1;
    cell.style.gridRow = day + 1;

    heatmap.appendChild(cell);

    // Add month labels
    const month = date.toLocaleString("default", { month: "short" });

    if (month !== lastMonth && day === 0) {
      const monthLabel = document.createElement("div");
      monthLabel.innerText = month;
      monthLabel.style.gridColumn = week + 1;
      monthsContainer.appendChild(monthLabel);

      lastMonth = month;
    }
  }
});
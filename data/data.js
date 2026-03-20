const startDate = new Date();
startDate.setFullYear(startDate.getFullYear() - 1);

const contributionData = {};

for (let i = 0; i < 365; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);

  const key = date.toISOString().split("T")[0];
  contributionData[key] = Math.floor(Math.random() * 12);
}
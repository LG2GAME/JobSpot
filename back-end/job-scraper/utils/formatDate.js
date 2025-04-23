function formatDateDifference(dateText) {
  if (!dateText) return null;

  const months = {
    stycznia: 0,
    lutego: 1,
    marca: 2,
    kwietnia: 3,
    maja: 4,
    czerwca: 5,
    lipca: 6,
    sierpnia: 7,
    września: 8,
    października: 9,
    listopada: 10,
    grudnia: 11,
  };

  const match = dateText.match(/(\d+)\s+(\w+)\s+(\d{4})/);
  if (!match) return null;

  const [, day, monthName, year] = match;
  const parsedDate = new Date(
    parseInt(year),
    months[monthName.toLowerCase()],
    parseInt(day)
  );
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  parsedDate.setHours(0, 0, 0, 0);

  const diffDays = Math.floor((today - parsedDate) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "dzisiaj";
  if (diffDays < 7) return `${diffDays} ${diffDays === 1 ? "dzień" : "dni"}`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} tyg`;
  return `${Math.floor(diffDays / 30)} mies`;
}

module.exports = formatDateDifference;

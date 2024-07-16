export const getCurrentDate = (): string => {
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${date.getDate()} ${currentMonth} ${year}`;
};

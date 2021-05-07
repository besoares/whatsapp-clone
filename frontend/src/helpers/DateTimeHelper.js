export const formatDateContacts = (date, i18n) => {
  const diff = diffDates(date, new Date());

  switch (diff) {
    case 0:
      return date.toLocaleTimeString().slice(0, -3);
    case 1:
      return i18n.t("Yesterday");
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return i18n.t(daysOfWeek[date.getDay()]);
    default:
      return date.toLocaleDateString();
  }
};

export const diffDates = (date1, date2) => {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

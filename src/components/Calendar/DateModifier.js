export const formatDate = (eventStartDate) => {
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();
  let currentYear = currentDate.getFullYear();

  let eventYear = Number(eventStartDate.substring(4, 0));
  let eventMonth = Number(eventStartDate.substring(7, 5));
  let eventDay = Number(eventStartDate.substring(10, 8));

  if (
    (currentYear === eventYear) &
    ((currentMonth === eventMonth) &
      ((eventDay - currentDay <= 7) & (eventDay - currentDay > 0)))
  ) {
    return "in " + (eventDay - currentDay) + " days";
  } else {
    return eventDay + "/" + eventMonth + "/" + eventYear;
  }
};

export const getMonthNumber = (eventStartDate) => {
  let eventMonth = Number(eventStartDate.substring(7, 5));
  if (eventMonth <= 10) {
    return "0" + eventMonth;
  } else {
    return eventMonth;
  }
};

export const getMonthShortName = (eventStartDate) => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  let eventMonth = Number(eventStartDate.substring(7, 5) - 1);
  let monthShortName = monthNames[eventMonth];
  return monthShortName;
};

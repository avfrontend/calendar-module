export const dateFriendly = (givenDate) => {
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();
  let currentYear = currentDate.getFullYear();

  let eventYear = Number(givenDate.substring(4, 0));
  let eventMonth = Number(givenDate.substring(7, 5));
  let eventDay = Number(givenDate.substring(10, 8));

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

export const getMonthNumber = (givenDate) => {
  let eventMonth = Number(givenDate.substring(7, 5));
  if (eventMonth < 10) {
    return "0" + eventMonth;
  } else {
    return eventMonth;
  }
};

export const getDayNumber = (givenDate) => {
  let eventDay = Number(givenDate.substring(10, 8));
  if (eventDay < 10) {
    return "0" + eventDay;
  } else {
    return eventDay;
  }
};

export const getMonthShortName = (givenDate) => {
  let month = new Date(givenDate);
  const monthShortName = month.toLocaleString("default", { month: "short" });
  return monthShortName;
};

export const getDayShortName = (givenDate) => {
  let date = new Date(givenDate);
  let eventDay = date.toLocaleDateString("default", { weekday: "short" });
  return eventDay;
};

export const getYear = (givenDate) => {
  let eventYear = Number(givenDate.substring(4, 0));
  return eventYear;
};

export const formatTime = (givenDate) => {
  let formattedTime = givenDate.substring(16, 11);
  return formattedTime;
};

export const formatDate = (givenDate) => {
  let eventYear = Number(givenDate.substring(4, 0));
  let eventMonth = Number(givenDate.substring(7, 5));
  let eventDay = Number(givenDate.substring(10, 8));
  return eventDay + "/" + eventMonth + "/" + eventYear;
};

export const removeSymbolsDate = (givenDate) => {
  let eventDate = givenDate.replace(/-/g, "").replace(/:/g, "");
  return eventDate;
};

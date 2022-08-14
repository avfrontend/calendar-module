export const saveCallInvite = (props) => {
  let url = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//hacksw/handcal//NONSGML v1.0//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "DTSTART:" + props.fullStartDate,
    "DTEND:" + props.fullEndDate,
    "CREATED:" + props.fullCreatedDate,
    "DTSTAMP:" + props.fullCreatedDate,
    "SUMMARY:" + props.title,
    "DESCRIPTION:",
    "LOCATION:" + props.addressLine1,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n");

  let blob = new Blob([url], { type: "text/calendar;charset=utf-8" });

  if (/msie\s|trident\/|edge\//i.test(window.navigator.userAgent)) {
    // Open/Save link in IE and Edge
    window.navigator.msSaveBlob(blob, `.ics`);
  } else {
    // Open/Save link in Modern Browsers
    window.open(encodeURI("data:text/calendar;charset=utf8," + url));
  }
};

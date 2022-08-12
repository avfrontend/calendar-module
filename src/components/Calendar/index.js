import React from "react";
import { Calendar, CalendarTitle, CalendarHeader } from "./CalendarStyles";
import FetchEvents from "./Events";
import { AiOutlineCalendar } from "react-icons/ai";

function index() {
  return (
    <>
      <Calendar>
        <CalendarHeader>
          <AiOutlineCalendar />
          <CalendarTitle>Upcoming Events</CalendarTitle>
        </CalendarHeader>
        <FetchEvents />
      </Calendar>
    </>
  );
}

export default index;

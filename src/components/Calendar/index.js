import React from "react";
import { Calendar, CalendarTitle, CalendarHeader } from "./CalendarStyles";
import FetchData from "./Events";
import { AiOutlineCalendar } from "react-icons/ai";

function index() {
  return (
    <>
      <Calendar>
        <CalendarHeader>
          <AiOutlineCalendar />
          <CalendarTitle>Upcoming Events</CalendarTitle>
        </CalendarHeader>
        <FetchData />
      </Calendar>
    </>
  );
}

export default index;

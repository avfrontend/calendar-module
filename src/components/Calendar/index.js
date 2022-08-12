import React from "react";
import { Calendar, CalendarTitle, CalendarHeader } from "./CalendarStyles";
import CalendarEvents from "./CalendarEvents";
import { AiOutlineCalendar } from "react-icons/ai";

function index() {
  return (
    <>
      <Calendar>
        <CalendarHeader>
          <AiOutlineCalendar />
          <CalendarTitle>Upcoming Events</CalendarTitle>
        </CalendarHeader>
        <CalendarEvents />
      </Calendar>
    </>
  );
}

export default index;

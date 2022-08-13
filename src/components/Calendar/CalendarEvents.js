import React, { useState, useEffect } from "react";
import { Events, EventsItem, EventLink } from "./CalendarStyles";
import Dialog from "./Dialog";
import { formatDate, getMonthNumber, getMonthShortName } from "./DateModifier";

const url =
  "https://prod-179.westeurope.logic.azure.com/workflows/7c84997dd6894507a60796acb06e5c43/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=6hFoizfo2w62d0iQK_Zyt7a3Ycr9akAkXdCPAG0ecwQ&usr=41767261616d";

const CalendarEvents = () => {
  const [events, setEvents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogData, setDialogData] = useState(null);

  const getEvents = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Calendar events" }),
    });
    const events = await response.json();
    setEvents(events.value);
    console.log(events.value);
  };

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
      <Events>
        {events.map((event) => {
          const { ID, Title, EventStartDate } = event;
          return (
            <EventsItem key={ID}>
              <EventLink
                to="/"
                onClick={() => {
                  setOpenDialog(true);
                  setDialogData(event);
                }}
              >
                {Title} - {formatDate(EventStartDate)}
              </EventLink>
            </EventsItem>
          );
        })}
      </Events>
      {dialogData && (
        <Dialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          city={dialogData.City}
          title={dialogData.Title}
          src={dialogData.BannerUrl}
          srcDummy={require("../../images/placeholder-image.png")}
          alt={dialogData.Title}
          category={dialogData.Category}
          monthNumber={getMonthNumber(dialogData.EventStartDate)}
          monthShortName={getMonthShortName(dialogData.EventStartDate)}
          description={dialogData.Description}
        />
      )}
    </>
  );
};

export default CalendarEvents;

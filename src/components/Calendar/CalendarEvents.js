import React, { useState, useEffect } from "react";
import { Events, EventsItem, EventLink } from "./CalendarStyles";
import Dialog from "./Dialog";
import {
  dateFriendly,
  getMonthShortName,
  getDayNumber,
  getYear,
  getDayShortName,
  formatTime,
  formatDate,
  removeSymbolsDate,
} from "./DateModifiers";

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
                {Title} - {dateFriendly(EventStartDate)}
              </EventLink>
            </EventsItem>
          );
        })}
      </Events>

      {dialogData && (
        <Dialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          id={dialogData.ID}
          title={dialogData.Title}
          src={dialogData.BannerUrl}
          srcDummy={require("../../images/placeholder-image.png")}
          category={dialogData.Category}
          fullStartDate={removeSymbolsDate(dialogData.EventStartDate)}
          fullEndDate={removeSymbolsDate(dialogData.EventEndDate)}
          fullCreatedDate={removeSymbolsDate(dialogData.Created)}
          dayNumber={getDayNumber(dialogData.EventStartDate)}
          monthShortName={getMonthShortName(dialogData.EventStartDate)}
          dayShortName={getDayShortName(dialogData.EventStartDate)}
          yearNumber={getYear(dialogData.EventStartDate)}
          description={dialogData.Description}
          fullDayEvent={dialogData.FullDayEvent}
          addressLine1={dialogData.AddressLine1}
          addressLine2={dialogData.AddressLine2}
          city={dialogData.City}
          postCode={dialogData.PostCode}
          country={dialogData.Country}
          author={dialogData.Author}
          editor={dialogData.Editor}
          createdTime={formatTime(dialogData.Created)}
          modifiedTime={formatTime(dialogData.Modified)}
          createdDate={formatDate(dialogData.Created)}
          modifiedDate={formatDate(dialogData.Modified)}
        />
      )}
    </>
  );
};

export default CalendarEvents;

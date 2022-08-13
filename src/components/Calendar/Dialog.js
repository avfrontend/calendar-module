import { Dialog } from "@material-ui/core";
import {
  DialogHeader,
  DialogImageWrapper,
  DialogImage,
  DialogGrayBox,
  DialogDescWrapper,
  DialogEventDetailsWrapper,
  DialogDescPar,
  DialogBody,
  DialogAddCalendarLink,
  DialogFooter,
  DialogFooterSeparator,
} from "./CalendarStyles";
import { FaTimes } from "react-icons/fa";

function DialogBox(props) {
  return (
    <>
      <Dialog
        open={props.openDialog}
        onClose={() => props.setOpenDialog(false)}
        maxWidth="lg"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogHeader>
          <DialogImageWrapper>
            {props.src ? (
              <DialogImage src={props.src} alt={props.title} />
            ) : (
              <DialogImage src={props.srcDummy} alt={props.title} />
            )}
          </DialogImageWrapper>
          <DialogGrayBox>
            <FaTimes onClick={() => props.setOpenDialog(false)} />
            <p>
              {props.monthShortName} <br></br>
              {props.dayNumber}
            </p>
            <h4>{props.title}</h4>
            <small>{props.category}</small>
          </DialogGrayBox>
        </DialogHeader>
        <DialogBody>
          <DialogDescWrapper>
            <DialogDescPar>DESCRIPTION</DialogDescPar>
            {props.description && (
              <div
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></div>
            )}
          </DialogDescWrapper>
          <DialogEventDetailsWrapper>
            <h4>DATE AND TIME</h4>
            <div>
              <p>
                {props.dayShortName}, {props.dayNumber} {props.monthShortName}{" "}
                {props.yearNumber}
                {props.fullDayEvent === "TRUE" ? " - Full Day Event" : ""}
              </p>
            </div>
            <DialogAddCalendarLink to="/">
              Add to Calendar
            </DialogAddCalendarLink>
            <h4>LOCATION</h4>
            <div>
              <p>{props.addressLine1} </p>
              {props.addressLine2 && <p>{props.addressLine2} </p>}
              <p> {props.city} </p>
              <p> {props.postCode} </p>
              <p> {props.country} </p>
            </div>
            <DialogAddCalendarLink to="/">View Map</DialogAddCalendarLink>
          </DialogEventDetailsWrapper>
        </DialogBody>
        <DialogFooter>
          <DialogFooterSeparator />
          <p>
            Created by {props.author} on {props.createdDate} at{" "}
            {props.createdTime}
          </p>
          <p>
            Modified by {props.editor} on {props.modifiedDate} at{" "}
            {props.modifiedTime}
          </p>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default DialogBox;

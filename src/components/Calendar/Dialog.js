import { Dialog } from "@material-ui/core";
import {
  DialogHeader,
  DialogImageWrapper,
  DialogImage,
  DialogGrayBox,
  DialogDescWrapper,
  DialogEventDetailsWrapper,
  DialogEventDetailsDiv,
  DialogDescPar,
  DialogBody,
  DialogAddCalendarLink,
  DialogFooter,
  DialogFooterPar,
  DialogFooterSeparator,
} from "./CalendarStyles";
import { FaTimes } from "react-icons/fa";
import { saveCallInvite } from "./saveEvent";

function DialogBox(props) {
  return (
    <>
      <Dialog
        open={props.openDialog}
        onClose={() => props.setOpenDialog(false)}
        maxWidth="lg"
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
              {props.monthShortName} <br />
              <span>{props.dayNumber}</span>
            </p>
            <h4>{props.title}</h4>
            <small>{props.category}</small>
          </DialogGrayBox>
        </DialogHeader>
        <DialogBody>
          <DialogDescWrapper>
            <DialogDescPar>DESCRIPTION</DialogDescPar>
            {props.description ? (
              <div
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></div>
            ) : (
              <p>There is no description for this event</p>
            )}
          </DialogDescWrapper>
          <DialogEventDetailsWrapper>
            <DialogEventDetailsDiv>
              <h4>DATE AND TIME</h4>
              <p>
                {props.dayShortName}, {props.dayNumber} {props.monthShortName}{" "}
                {props.yearNumber}
                {props.fullDayEvent === "TRUE" ? " - Full Day Event" : ""}
              </p>
              <DialogAddCalendarLink
                to="/"
                onClick={() => {
                  saveCallInvite(props);
                }}
              >
                Add to Calendar
              </DialogAddCalendarLink>
            </DialogEventDetailsDiv>
            <DialogEventDetailsDiv>
              <h4>LOCATION</h4>
              <p>{props.addressLine1} </p>
              {props.addressLine2 && <p>{props.addressLine2} </p>}
              <p> {props.city} </p>
              <p> {props.postCode} </p>
              <p> {props.country} </p>
              <DialogAddCalendarLink to="/">View Map</DialogAddCalendarLink>
            </DialogEventDetailsDiv>
          </DialogEventDetailsWrapper>
        </DialogBody>
        <DialogFooter>
          <DialogFooterSeparator />
          <DialogFooter>
            <DialogFooterPar>
              Created by {props.author} on {props.createdDate} at{" "}
              {props.createdTime}
            </DialogFooterPar>
            <DialogFooterPar>
              Modified by {props.editor} on {props.modifiedDate} at{" "}
              {props.modifiedTime}
            </DialogFooterPar>
          </DialogFooter>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default DialogBox;

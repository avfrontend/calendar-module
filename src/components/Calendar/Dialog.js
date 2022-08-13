import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import {
  DialogRow,
  DialogImageWrapper,
  DialogImage,
  DialogGrayBox,
  DialogDescWrapper,
  DialogEventDetailsWrapper,
} from "./CalendarStyles";
import { FaTimes } from "react-icons/fa";

function DialogBox(props) {
  return (
    <>
      <Dialog
        open={props.openDialog}
        onClose={() => props.setOpenDialog(false)}
        maxWidth="xl"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogRow>
          <DialogImageWrapper>
            <DialogImage src={props?.src} alt={props.title} />
          </DialogImageWrapper>
          <DialogGrayBox>
            <FaTimes onClick={() => props.setOpenDialog(false)} />
            <p>Aug 09</p>
            <h4>{props.title}</h4>
            <small>{props.category}</small>
          </DialogGrayBox>
        </DialogRow>
        <DialogRow>
          <DialogDescWrapper>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              nemo quam laboriosam alias voluptatum soluta accusantium, suscipit
              praesentium eaque necessitatibus. Officia mollitia voluptatum,
              rerum eius voluptatibus quisquam nam deserunt iure?
            </p>
          </DialogDescWrapper>
          <DialogEventDetailsWrapper>Details</DialogEventDetailsWrapper>
        </DialogRow>
        <DialogTitle id="dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            City: {props.city}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setOpenDialog(false)}>Cancel</Button>
          <Button autoFocus onClick={() => props.setOpenDialog(false)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogBox;

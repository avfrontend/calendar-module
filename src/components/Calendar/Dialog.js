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
} from "./CalendarStyles";

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
            <p>Aug 09</p>
            <h4>{props.title}</h4>
            <small>{props.category}</small>
          </DialogGrayBox>
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

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

function DialogBox(props) {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={() => props.setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the test? 
            {props.city}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setOpen(false)}>Cancel</Button>
          <Button autoFocus onClick={() => props.setOpen(false)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogBox;

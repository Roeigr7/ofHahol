import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ open, setOpen }) {
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>תקנון</h2>
            <p id='transition-modal-description'>1. מדיניות אספקת מוצר</p>
            <p id='transition-modal-description'>2. אחריות בית עסק</p>
            <p id='transition-modal-description'>3. הגבלת גיל(בעת הצורך)</p>
            <p id='transition-modal-description'>4. מדיניות ביטול עסקה</p>
            <p id='transition-modal-description'>
              5. הגבלת פרטיות - סעיף התחייבות שפרטי הלקוח לא יועברו לצד שלישי
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

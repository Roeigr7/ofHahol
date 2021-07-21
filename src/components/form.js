import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, makeStyles } from '@material-ui/core';
import TermsModal from '../components/TermsModal';

const PaymentForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const [details, setDetails] = useState({
    name: '',
    number: '',
    cvv: '',
    expiry: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setDetails({ ...details, [e.target.name]: value });
  };
  return (
    <FormControl>
      <TextField
        style={{ margin: '10px', display: 'inline' }}
        size='small'
        id='outlined-basic'
        label='מספר אשראי'
        variant='outlined'
      />
      <TextField
        style={{ margin: '10px', display: 'inline' }}
        size='small'
        id='outlined-basic'
        label='תאריך תפוגה'
        variant='outlined'
      />
      <TextField
        style={{ margin: '10px', display: 'inline' }}
        size='small'
        id='outlined-basic'
        label='שלוש ספרות (CVV)'
        variant='outlined'
      />
      <FormControlLabel
        control={
          <Checkbox
            mr={0}
            ml={0}
            m={0}
            color='primary'
            checked={details.terms}
            onChange={(e) =>
              setDetails({ ...details, terms: e.target.checked })
            }
            name='terms'
          />
        }
        label={
          <span>
            קראתי ואני מאשר{' '}
            <span
              onClick={() => setOpenModal(true)}
              style={{ color: 'red', fontWeight: '' }}
            >
              את התקנון
            </span>
          </span>
        }
      />

      <Button variant='contained' color='primary'>
        למעבר לתשלום
      </Button>
      <TermsModal open={openModal} setOpen={setOpenModal} />
    </FormControl>
  );
};

export default PaymentForm;

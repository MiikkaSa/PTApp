import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import CustomerList from './Customerlist';
 
function CustomerDialog({ customer, handleChange }) {
  return(
    <DialogContent>
      <TextField
        margin="dense"
        label="First name"
        name="firstname"
        fullWidth
        variant="standard"
        value={customer.firstname}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        label="Last name"
        name="lastname"
        fullWidth
        variant="standard"
        value={customer.lastname}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        label="Street address"
        name="streetaddress"
        fullWidth
        variant="standard"
        value={customer.streetaddress}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        label="Post code"
        name="postcode"
        fullWidth
        variant="standard"
        value={customer.postcode}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        label="City"
        name="city"
        fullWidth
        variant="standard"
        value={customer.city}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        label="Email"
        name="email"
        fullWidth
        variant="standard"
        value={customer.email}
        onChange={handleChange}
      />
        <TextField
        margin="dense"
        label="Phone"
        name="phone"
        fullWidth
        variant="standard"
        value={customer.phone}
        onChange={handleChange}
      />
    </DialogContent>
  );
}
export default CustomerDialog;
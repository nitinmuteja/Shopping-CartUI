import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';



class AddressDetailsContainer extends React.Component {


    render() {
        return (
        <Container fixed>
        <Box mt={4}>
        <Box component="div" display="inline" fontWeight="fontWeightBold" fontSize="h4.fontSize">Select delivery details to continue.</Box>
        </Box>
          <Box mt={4} >
            <TextField id="customer-name" label="Name" margin="normal" fullWidth />
          </Box>

          <TextField id="customer-address" label="Address" multiline rowsMax="4" fullWidth /> <br/>

          <Box mt={4}>
          <FormControl fullWidth>
            <InputLabel htmlFor="age-simple">Country</InputLabel>
            <Select  value="india" inputProps={{ name: 'age', id: 'age-simple', }} >
              <MenuItem value={"india"}>India</MenuItem>
              <MenuItem value={"nepal"}>Nepal</MenuItem>
              <MenuItem value={"bhutan"}>Bhutan</MenuItem>
            </Select>

            <Box mt={4}>
            <Button variant="contained" color="primary"  fullWidth> Continue </Button>
            </Box>

          </FormControl>
          </Box>

        </Container>
      )
    }

}
export default AddressDetailsContainer;

import React from 'react';
import { Box, TextField, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './sign.css';
function Box2() {
  const nav =useNavigate();
  const gotologin=()=> nav('/');
  return (
    <div id='ba'>
      {/* <div> */}
        <Box
          height={500}
          width={344}
          ml={75}
          mx={70}
          sx={{
            border: '1px solid darkblue',
            boxShadow: '5px 5px 2px rgba(50, 50, 50, 0.9)', // Adjusted shadow color
            p: 2, 
            backgroundColor: 'lightgrey',
            borderRadius: '20px',
            opacity: '0.8',
          }}
          >
          <Typography align="center">
            <Box>
              <h2>Sign Up</h2>
            </Box>
            <TextField label='UserName' variant='outlined' margin='normal'></TextField>
            <TextField label='Email' variant='outlined' margin='normal' type='email'></TextField>
            <TextField label='Password' variant='outlined' margin='normal' type='password'></TextField>
            <TextField label='Confirm Password' variant='outlined' margin='normal' type='password'></TextField>
            <Box my={1} display="flex" justifyContent="space-between" alignItems="center" flexDirection={"column"}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  '&.Mui-checked': {
                    color: "darkblue", // checked color
                  },
                }}
              />
            }
            label="Remember me"
          />

              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: 'darkblue', 
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'gray',
                  },
                }}
                onClick={gotologin}
                >
                Submit
              </Button>
            </Box>
          </Typography>
        </Box>
                  {/* </div> */}
    </div>
  );
}
export default Box2;

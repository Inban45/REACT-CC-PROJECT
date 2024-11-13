import React from 'react';
import './Login.css';
import { Box, TextField, Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom'
function Box1() {
  const navigate=useNavigate();
  const gotosignup=()=> navigate('/Sign');
  const gotohome=()=> navigate('/Home');
  return (
    <div id='pa'>
        <Box
          height={400}
          width={300}
          my={35}
          ml={3}
          mx={70}
          sx={{
            border: '1px solid blue',
            boxShadow: '2px 2px 7px rgba(50, 50, 50, 0.7)',
            p: 2, 
            backgroundColor:"lightgray",
            borderRadius: '20px',
            opacity: '0.8',
          }}
          >
          <Typography align="center">
            <Box sx={{borderRadius:'20px'}}>
              <h3>Login</h3>
            </Box>
            <TextField label='UserName' variant='outlined' margin='normal' />
            <TextField label='Password' variant='filled' margin='normal' type='password' />
            <Box my={2}>
            <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: 'darkblue', 
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'gray',
                  },
                }}
                onClick={gotohome}
                >
                Submit
              </Button>
              <p  sx={{ 
                backgroundColor: 'red', 
                color: 'red',
                '&:hover': {
                  backgroundColor: 'yellow',
                },
              }}>Don't have an account?</p>
              <div id='si'>
              <p onClick={gotosignup} id='ss'>Sign up here</p>
              </div>
            </Box>
          </Typography>
        </Box>
    </div>
  );
}
export default Box1;
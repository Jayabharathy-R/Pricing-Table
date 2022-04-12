import React from 'react';
import './App.css';
import { styled } from '@mui/material';
import {
  Box,
  Paper,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography 

} from '@mui/material';

  
function PricingTable() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
     

    return (
      <div>
        <h2>Pricing Table</h2>
        <div id="body">

        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item class="card" xs={4}>
          <Item> <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          FREE
        </Typography>
        <Typography variant="h5" component="div">
          $0/month
        </Typography>
        <hr/>
       <ul>
         <li><b>Unlimited Users</b></li>
         <li>150GB Storage</li>
         <li>Unlimited Public Projects</li>
         <li className='cross'>Community Access</li>
         <li className='cross'>Unlimited Private Projects</li>
        <li className='cross'>Dedicated Phone Support</li>
        <li className='cross'>Free Subdomains</li>
        <li className='cross'>Monthly Status Reports</li>
       </ul>
      </CardContent>
      <CardActions>
      <Button variant="contained">BUTTON</Button>
      </CardActions>
    </Card></Item>
        </Grid>
        <Grid item class="card" xs={4}>
          <Item> <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          PLUS
        </Typography>
        <Typography variant="h5" component="div">
          $9/month
        </Typography>
        <hr/>
       <ul>
         <li><b>Unlimited Users</b></li>
         <li>150GB Storage</li>
         <li>Unlimited Public Projects</li>
         <li>Community Access</li>
         <li>Unlimited Private Projects</li>
        <li>Dedicated Phone Support</li>
        <li>Free Subdomains</li>
        <li className='cross'>Monthly Status Reports</li>
       </ul>
      </CardContent>
      <CardActions>
      <Button variant="contained">BUTTON</Button>
      </CardActions>
    </Card></Item>
        </Grid>
        <Grid item xs={4} class="card">
          <Item> <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         PRO
        </Typography>
        <Typography variant="h5" component="div">
          $49/month
        </Typography>
        <hr/>
       <ul>
         <li><b>Unlimited Users</b></li>
         <li>150GB Storage</li>
         <li>Unlimited Public Projects</li>
         <li>Community Access</li>
         <li>Unlimited Private Projects</li>
        <li>Dedicated Phone Support</li>
        <li><b>Unlimited</b> Free Subdomains</li>
        <li>Monthly Status Reports</li>
       </ul>
      </CardContent>
      <CardActions>
      <Button variant="contained">BUTTON</Button>
      </CardActions>
    </Card></Item>
        </Grid>
      </Grid>
    </Box>

          
       
        </div>
      
        
      </div>
    );
  }


export default PricingTable;

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

// material ui
import Container from "@material-ui/core/Container"
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const useStyles = makeStyles(() =>{
  return{
    fieled:{
      marginTop:20,
      marginBottom:20,
      display:'block'
    },
  }
})


function DashboardScreen() {
  const navigate = useNavigate()

 const classes =useStyles()
 const[carReg, setCarReg] =useState()
 const[carOwner, setcarOwner] =useState()
 const[carRegerror, setCarRegerror] =useState(false)
 const[carOwnererror, setcarOwnererror] =useState(false)
 const[vehicleCategory,setVehicleCategory] =useState('private')


 const handleSubmit =(e) =>{
    e.preventDefault()
    setCarRegerror(false)
    setcarOwnererror(false)

    if (carReg == '') {
      setCarRegerror(true)
    }
    if (carOwner == '') {
     setcarOwnererror(true)
    }
    if (carReg && carOwner) {
      fetch('http://localhost:8000/vehicles' ,{
        method:'POST',
        headers:{"content-type":"application/json"},
        body:JSON.stringify({carReg ,carOwner,vehicleCategory})
      }) .then(() =>navigate('/home'))
    }
   
 }

  return (
    <Container>
     <Typography
       variant='h6'
       color='textSecondary'
       component='h2'
       gutterBottom
       >
       Add Vehicle
     </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          label='Car Reg'
          variant='outlined'
          required
          className={classes.fieled}
          onChange={(e) =>setCarReg(e.target.value)}
          error={carRegerror}
          />
        <TextField
          label='owner name'
          variant='outlined'
          required
          className={classes.fieled}
          onChange={(e) =>setcarOwner(e.target.value)}
          error={carOwnererror}
          />
          <FormControl> 
            <FormLabel>Vehicle Type</FormLabel>
            <RadioGroup value={vehicleCategory} onChange={(e) =>setVehicleCategory(e.target.value)}>
              <FormControlLabel value="private" control={<Radio />} label="Private Vehicle"/>
              <FormControlLabel value="public" control={<Radio />} label="Public vehicle (psv)"/>
              <FormControlLabel value="Company" control={<Radio />} label="Company Vehicle"/>
            </RadioGroup>
          </FormControl>

          <Button 
         type='submit'
         variant='conatined'
         color='primary' 
         >Submit</Button>
      </form>

    </Container>
  )
}

export default DashboardScreen
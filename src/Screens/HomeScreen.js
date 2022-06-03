import React, {useEffect, useState} from 'react'

import Typography from '@mui/material/Typography'

function HomeScreen() {
  const[vehicles, setVehicles] =useState([])
  useEffect(() =>{
     fetch('http://localhost:8000/vehicles')
     .then(res => res.json())
     .then(Data => setVehicles(Data))
  },[])

  return (
    <div>
        {vehicles.map(vehicle => (
              <Typography key={vehicle.id}>{vehicle.CarReg}</Typography>
        ))}

    </div>
  )
}

export default HomeScreen
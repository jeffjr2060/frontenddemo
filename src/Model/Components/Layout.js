import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useLocation,useNavigate } from 'react-router-dom'


// material ui
import Drawer  from '@material-ui/core/Drawer'
import Appbar  from '@material-ui/core/Appbar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography  from '@material-ui/core/Typography'
import  List  from '@material-ui/core/List'
import  ListItem  from '@material-ui/core/ListItem'
import  ListItemText  from '@material-ui/core/ListItemText'
import  ListItemIcon  from '@material-ui/core/ListItemIcon'

// material icons
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ReportIcon from '@mui/icons-material/Report';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';



const drawerWidth = 200 

function Layout( {children} ) {
     const classes = useStyles()
     const location = useLocation()
     const navigate = useNavigate()

     

      const menuItems =[
          {
            text:'Home',
            icon:<HomeIcon />,
            path:'/home',
          },
          {
            text:'Dashboard',
            icon:<DashboardIcon />,
            path:'/dashboard',
          },
          {
            text:'LiveTracking',
            icon:<LiveTvIcon />,
            path:'/livetracking',
          },
          {
            text:'SafetyReports',
            icon:<ReportIcon />,
            path:'/safetyreports',
          },
          {
            text:'Alerts',
            icon:<ReportProblemIcon />,
            path:'/alertScreen',
          },
      ]
  return ( 
      <div className={classes.root}>
       {/* Appbar */}
       <Appbar className={classes.appbar}
        elevation={3}
        >
           <Toolbar className={classes.topbar}>
             <div>
             <Typography>Jeff</Typography>
             </div>
              
           </Toolbar>
       </Appbar>


       
       {/* side drawer // parmanent */}
         <Drawer 
             className={classes.drawer}
             variant="permanent"
             anchor="left"
             classes={{paper: classes.paperdrawer}}
            >
             <div>
                 <Typography variant='h5' color='primary'>Fleet Co.</Typography>
             </div>
              
              <List>
                  {menuItems.map(item =>(
                      <ListItem 
                        button
                        key ={item.text}
                        onClick={() =>navigate(item.path)}
                        className={location.pathname == item.path ? classes.active:null}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>

                      </ListItem>
                  ))}
              </List>
         </Drawer>

        <div className={classes.page}>
          <div className={classes.toolbar}></div>
            {children}
        </div>
      </div>

    
  )
}

export default Layout


const useStyles = makeStyles((theme) => {
    return{
        root:{
            display:'flex',
        },
        page:{
            width:'100%',
            padding:theme.spacing(2)
        },
        drawer:{
            width:drawerWidth,
           
        },
        paperdrawer:{
            width:drawerWidth,
            background:'#fff'
        },
        
        active:{
             background:'#f9f9f9'
        },
        appbar:{
            width:`calc(100% -${drawerWidth})`,
            
        },

        toolbar:theme.mixins.toolbar,

        name:{
            fontSize:'26px',
            textTransform:'capitalize',
        },
        topbar:{
            background:'#ffffff'
        },
    }
})
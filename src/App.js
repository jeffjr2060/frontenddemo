import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

//Screens
import HomeScreen from "./Screens/HomeScreen";
import DashboardScreen from "./Screens/DashboardScreen"
import LiveTrackingScreen from "./Screens/LiveTrackingScreen"
import SafetyReportScreen from "./Screens/SafetyReports"
import AlertScreen from "./Screens/AlertScreen"

//material ui
import {createTheme, ThemeProvider} from '@material-ui/core'


// components
import Layout from "./Model/Components/Layout";


function App() {

  const theme = createTheme({
        palette:{
           primary:{
             main:'#ffffff'
           }
        }
  })
  return (
    <ThemeProvider theme={theme}>
       <Layout>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/livetracking" element={<LiveTrackingScreen />} />
          <Route path="/safetyreports" element={<SafetyReportScreen />} />
          <Route path="/alertScreen" element={<AlertScreen />} />
      </Routes>
      </Layout>
   </ThemeProvider>
  );
}

export default App;

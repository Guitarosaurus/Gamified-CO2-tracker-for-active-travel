import * as Location from 'expo-location';
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errMsg, setErrMsg] = useState<string | null>(null);
    
    useEffect(() => {
      async function getCurrentLocation() {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted'){  // !== checks both type and value instead of just value
          setErrMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync();
        setLocation(location);
      }
  
      getCurrentLocation();
    }, []);
  
    let text = 'Waiting...'
    if(errMsg){
      text = errMsg; 
    } else if (location){
      text = JSON.stringify(location);
    }
  
  return (<Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
  </Stack>);
}

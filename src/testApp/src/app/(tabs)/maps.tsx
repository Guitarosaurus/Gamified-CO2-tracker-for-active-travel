import { GoogleMaps } from 'expo-maps';
import { Platform, StyleSheet } from "react-native";

export default function MapScreen(){
  

  if(Platform.OS === 'android') return <GoogleMaps.View style={styles.container} cameraPosition={{
    coordinates: {
      latitude: 55.86515,
      longitude: -4.25763,
    },
    zoom: 12,
  }}/> // userLocation={}/>
  else {
    return <text>The map cannot be loaded for this platform</text>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 170,
    resizeMode: "cover",
  },
  logo: {
    alignSelf: 'center',
  },
  mask: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255, 0.7)',
  },
  text : {
    color: "#343a40",
    fontSize: 15,
    textAlign: 'center',
  },
  smallText: {
    color: "#343a40",
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

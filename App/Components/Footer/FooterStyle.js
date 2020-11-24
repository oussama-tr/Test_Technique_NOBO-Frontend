import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    height: 310,
    backgroundColor: "#434347",
    padding: 20,
  },
  logo: {
    alignSelf: 'center',
  },
  socialButton: {
    borderWidth: 1,
    borderColor: Colors.light,
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  },
  text : {
    color: "#343a40",
    fontSize: 15,
    textAlign: 'center',
  },
  logo: {
    width: 120,
    height: 80
  }
})

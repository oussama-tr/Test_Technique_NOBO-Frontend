import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    paddingVertical: 40,
    paddingHorizontal: 30,
    justifyContent: 'space-around'
  },
  logo: {
    alignSelf: 'center'
  },
  form: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10
  },
  button: {
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 2,
    height: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center'
  },
  smallText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 13,
    color: Colors.white,
    marginVertical: 10,
  },
  largeText: {
    textAlign: 'center',
    color: Colors.light,
    fontWeight: 'bold',
    fontSize: 18,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
})

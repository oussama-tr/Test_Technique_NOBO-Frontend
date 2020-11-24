import Colors from './Colors'
import { DefaultTheme } from 'react-native-paper'

export default {
  paperStyle: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      placeholder: Colors.grey,
      text: Colors.grey,
      error: Colors.danger,
    },
  },

}

import { StyleSheet, Platform } from 'react-native'
const styles = StyleSheet.create({

  animatedToastView:
    {
      marginHorizontal: 30,
      paddingHorizontal: 25,
      paddingVertical: 10,
      borderRadius: 25,
      zIndex: 9999,
      position: 'absolute',
      justifyContent: 'center'
    },

  ToastBoxInsideText:
    {
      fontSize: 15,
      alignSelf: 'stretch',
      textAlign: 'center'
    }

});

export default styles
import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2443DA',
  },
  content: {
    height: height / 1.5,
  },
  logoContainer: {
    flex: 2.3,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    height: 320,
    width: 320,
  },
  titleContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: 'white',
    fontSize: 27,
    fontWeight: 'bold',
  },
  touchableContainer: {
    flex: 2,
    alignItems: 'center',
    marginTop: 5,
  },
  touchableStyle: {
    backgroundColor: 'white',
    borderRadius: 2,
    flexDirection: 'row',
    height: 37,
    alignItems: 'center',
  },
  touchableImageContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  touchableImage: {
    height: 23,
    width: 23,
  },
  touchableDivider: {
    borderLeftWidth: 1,
    borderLeftColor: 'grey',
    height: 37,
  },
  touchableTextContainer: {
    paddingHorizontal: 10,
  },
  touchableText: {
    color: 'grey',
    fontSize: 10,
  },
})

export default styles

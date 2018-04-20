import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 0.30,
    paddingTop: Platform.OS === 'ios' ? 30 : 10,
    backgroundColor: '#2443DA',
    flexDirection: 'column',
  },
  headerContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  profileStyle: {
    flex: 0.9,
    flexDirection: 'column',
    marginStart: 15,
    paddingTop: 10,
  },
  avatarStyle: {
    height: 90,
    width: 90,
    borderRadius: 45,
    resizeMode: 'cover',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 30,
  },
  mailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 5,
  },
  mailText: {
    color: 'white',
    fontSize: 15,
  },
  iconStyle: {
    color: 'white',
    marginStart: 15,
  },
  iconRotate: {
    transform: [{ rotate: '180deg' }],
  },
  navContainer: {
    flex: 0.70,
    marginTop: 10,
    marginStart: 20,
  },
  partnersNav: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  partnersLabel: {
    color: '#4285f4',
    fontSize: 15,
    fontWeight: 'bold',
    marginStart: 20,
    alignSelf: 'center',
  },
  partnersAvatar: {
    backgroundColor: '#2443DA',
    height: 45,
    width: 45,
    borderWidth: 1,
    borderColor: '#2443DA',
    borderRadius: 5,
  },
  newCheckinNav: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  newCheckinAvatar: {
    backgroundColor: '#2443DA',
    height: 45,
    width: 45,
    borderWidth: 1,
    borderColor: '#2443DA',
    borderRadius: 5,
  },
  newCheckinLabel: {
    color: '#4285f4',
    fontSize: 15,
    fontWeight: 'bold',
    marginStart: 20,
    alignSelf: 'center',
  },
})

export default styles

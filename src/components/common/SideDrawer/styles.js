import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 150,
    paddingTop: Platform.OS === 'ios' ? 15 : 10,
    backgroundColor: '#2443DA',
  },
  headerContent: {
    flex: 1,
    flexDirection: 'column',
    marginStart: 15,
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  avatarStyle: {
    height: 70,
    width: 70,
    borderRadius: 35,
    resizeMode: 'cover',
  },
  profileContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
  nameContainer: {
    justifyContent: 'flex-end',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  mailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mailTextContainer: {
    alignItems: 'flex-start',
  },
  mailText: {
    color: 'white',
    fontSize: 15,
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  iconStyle: {
    color: 'white',
    marginStart: 15,
  },
  iconRotate: {
    transform: [{ rotate: '180deg' }],
  },
  navContainer: {
    flex: 0.78,
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
  partnersIcon: {
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
  newCheckinIcon: {
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
  logoutNav: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  logoutIcon: {
    backgroundColor: '#2443DA',
    height: 45,
    width: 45,
    borderWidth: 1,
    borderColor: '#2443DA',
    borderRadius: 5,
  },
  logoutLabel: {
    color: '#4285f4',
    fontSize: 15,
    fontWeight: 'bold',
    marginStart: 20,
    alignSelf: 'center',
  },
})

export default styles

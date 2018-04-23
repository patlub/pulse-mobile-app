import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Icon, Avatar } from 'react-native-elements'
import PropTypes from 'prop-types'

import styles from './styles'

class SideDrawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogout: false,
    }
  }

  toggleShowLogout(showLogout) {
    this.setState({ showLogout: !showLogout })
  }

  render() {
    return (
      <View style={styles.drawer}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.profileStyle}>
              <Image
                style={styles.avatarStyle}
                source={{
                  uri: 'https://raw.githubusercontent.com/sirjmkitavi/gui/master/static/profile.jpg',
              }}
              />
              <Text style={styles.titleStyle}>
                  Test Admin
              </Text>
            </View>
            <TouchableOpacity
              style={styles.mailContainer}
              activeOpacity={0.6}
              onPress={() => this.toggleShowLogout(this.state.showLogout)}
            >
              <Text style={styles.mailText}>
                  test-user-admin@andela.com
              </Text>
              <Icon
                name="arrow-drop-down"
                iconStyle={[styles.iconStyle, this.state.showLogout ? styles.iconRotate : null]}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.navContainer}>

          {!this.state.showLogout ? (
            <View>
              <TouchableOpacity
                style={styles.partnersNav}
                activeOpacity={0.6}
                onPress={() =>
                  this.props.navigation.navigate('PartnerList')
                }
              >
                <Avatar
                  medium
                  icon={{
                    name: 'people',
                    type: 'simple-line-icon',
                  }}
                  overlayContainerStyle={styles.partnersIcon}
                />
                <Text style={styles.partnersLabel}>
                  Partners
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.newCheckinNav}
                activeOpacity={0.6}
                onPress={() =>
                  this.props.navigation.navigate('NewCheckIn')
                }
              >
                <Avatar
                  medium
                  icon={{
                    name: 'plus',
                    type: 'feather',
                  }}
                  overlayContainerStyle={styles.newCheckinIcon}
                />
                <Text style={styles.newCheckinLabel}>
                  New Checkin
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                style={styles.logoutNav}
                activeOpacity={0.6}
                onPress={() =>
                  this.props.navigation.navigate('Login')
                }
              >
                <Avatar
                  medium
                  icon={{
                    name: 'logout-variant',
                    type: 'material-community',
                  }}
                  overlayContainerStyle={styles.logoutIcon}
                />
                <Text style={styles.logoutLabel}>
                  Log Out
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    )
  }
}

SideDrawer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default SideDrawer

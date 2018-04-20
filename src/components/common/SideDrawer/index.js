import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Icon, Avatar } from 'react-native-elements'


import styles from './styles'

class SideDrawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogout: true,
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
                  cache: 'only-if-cached',
              }}
              />
              <Text style={styles.titleStyle}>
                  Test Admin
              </Text>
            </View>
            <TouchableOpacity
              style={styles.mailContainer}
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
              <TouchableOpacity style={styles.partnersNav}>
                <Avatar
                  medium
                  icon={{
                    name: 'people',
                    type: 'simple-line-icon',
                  }}
                  overlayContainerStyle={styles.partnersAvatar}
                />
                <Text style={styles.partnersLabel}>
                  Partners
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.newCheckinNav}>
                <Avatar
                  medium
                  icon={{
                    name: 'plus',
                    type: 'feather',
                  }}
                  overlayContainerStyle={styles.newCheckinAvatar}
                />
                <Text style={styles.newCheckinLabel}>
                  New Checkin
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity style={styles.partnersNav}>
                <Avatar
                  medium
                  icon={{
                    name: 'logout-variant',
                    type: 'material-community',
                  }}
                  overlayContainerStyle={styles.partnersAvatar}
                />
                <Text style={styles.partnersLabel}>
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

export default SideDrawer

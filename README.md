[![CircleCI](https://circleci.com/gh/andela/pulse-mobile-app/tree/develop.svg?style=svg)](https://circleci.com/gh/andela/pulse-mobile-app/tree/develop)
[![Coverage Status](https://coveralls.io/repos/github/andela/pulse-mobile-app/badge.svg?branch=ch-circle-ci-setup-156371632)](https://coveralls.io/github/andela/pulse-mobile-app?branch=ch-circle-ci-setup-156371632)

## Pulse Mobile
Pulse Mobile is a mobile version of the Pulse app. This is used by managers to rate developers etc.
View [pulse.andela.com](https://pulse.andela.com) for more.

## Installation

Install React Native dependencies as described in the official [React Native documentation](http://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies) depending on your Developement OS and Target OS. You will need to install `Node`, `Watchman` and the `React Native command line interface` for both Target OS. For Android a `JDK` and `Android Studio` in order to setup the necessary tooling for Android, while for iOS `Xcode` is needed to setup the necassary tooling.

After that clone this repository and install all the necessary dependencies:

```
git clone git@github.com:andela/pulse-mobile-app.git
cd pulse-mobile-app
yarn install
```

### Run
#### iOS
- Run:
```
react-native run-ios
```
If you have Xcode installed running this command will open the app in the iOS Simulator 

####  Android 
- Open an emulator (Genymotion or `run android avd`)
- Run:
```
react-native run-android
```
If you have everything installed correctly this command will open your app in the Android emulator.


### Testing
To the run the tests simply run:
```
yarn test
```

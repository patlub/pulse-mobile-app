import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking
} from 'reactotron-react-native'


console.disableYellowBox = true
console.ignoredYellowBox = ['Warning: `flexWrap: `wrap``'];
Reactotron
  .configure({
    name: 'pulsemobile'
  })
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(overlay())
  .use(asyncStorage())
  .use(networking())
  .connect()

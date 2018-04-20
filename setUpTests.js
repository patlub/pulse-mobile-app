import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NativeModules } from "react-native";


Enzyme.configure({ adapter: new Adapter() })


NativeModules.BlobModule = {
  ...NativeModules.BlobModule,
  addNetworkingHandler: jest.fn()
};

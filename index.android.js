import {
  AppRegistry,
  StatusBar,
} from "react-native";
import { App } from "./lib/App";

StatusBar.setBackgroundColor("rgba(0,0,0,0.2)");
StatusBar.setTranslucent(true);

AppRegistry.registerComponent('SampleApp', () => App);
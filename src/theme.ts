import { isIOS } from "./constants";

export const icons = {
  badge: isIOS ? require("../assets/ios-badge.png") : require("../assets/android-badge.png")
};

export const colors = {
  bg: "#fff",
  text: "#000",
}
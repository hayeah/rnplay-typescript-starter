const { Platform } = require("react-native");

export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

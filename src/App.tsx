import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

import {
  isAndroid,
  isIOS,
} from "./constants";

interface Props {
  // a?: number;
  // b?: string;
}

interface State {
  // a?: number;
  // b?: string;
}

import {
  icons,
  colors,
} from "./theme";

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      // a: 1,
      // b: "abc",
    }
  }

  render() {
    // const { a, b } = this.props;
    // const { a, b } = this.state;
    return (
      <View style={jss.container}>
        <Image source={icons.badge}/>
        <Text style={jss.label}>
          Hello TypeScript!
        </Text>
      </View>
    );
  }
}

const jss = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bg,
  },

  label: {
    marginTop: 15,
    color: colors.text,
  },
});
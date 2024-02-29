import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Image } from "react-native";
import ellipse50 from '../assets/ellipse53.png'

const EllipseIcon4 = ({ style }) => {
  return (
    <Image
      style={[styles.ellipseIcon, style]}
      contentFit="cover"
      source={ellipse50}
    />
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    width: 47,
    height: 47,
  },
});

export default EllipseIcon4;

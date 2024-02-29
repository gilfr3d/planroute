import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Image } from "react-native";
import sampleidgreen from '../assets/sampleidgreen3.png'

const EllipseIcon = ({ style }) => {
  return (
    <Image
      style={[styles.ellipseIcon, style]}
      contentFit="cover"
      source={sampleidgreen}
    />
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    width: 47,
    height: 47,
  },
});

export default EllipseIcon;

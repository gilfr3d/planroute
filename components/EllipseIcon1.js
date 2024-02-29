import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Image } from "react-native";
import sampleidyellow from '../assets/sampleidyellow3.png'

const EllipseIcon1 = ({ style }) => {
  return (
    <Image
      style={[styles.ellipseIcon, style]}
      contentFit="cover"
      source={sampleidyellow}
    />
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    width: 47,
    height: 47,
  },
});

export default EllipseIcon1;

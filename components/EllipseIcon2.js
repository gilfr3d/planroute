import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Image } from "react-native";
import sampleid from '../assets/sampleid3.png'

const EllipseIcon2 = ({ style }) => {
  return (
    <Image
      style={[styles.ellipseIcon, style]}
      contentFit="cover"
      source={sampleid}
    />
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    width: 47,
    height: 47,
  },
});

export default EllipseIcon2;

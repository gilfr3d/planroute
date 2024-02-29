import * as React from "react";
import { Pressable, StyleProp, ViewStyle, StyleSheet, Image } from "react-native";
import { Border } from "../GlobalStyles";
import frame281 from '../assets/frame2813.png'

const FrameIcon4 = ({ style }) => {
  return (
    <Image
      style={[styles.frameIcon, style]}
      contentFit="cover"
      source={frame281}
    />
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    borderRadius: Border.br_21xl,
    width: 36,
    height: 34,
  },
});

export default FrameIcon4;

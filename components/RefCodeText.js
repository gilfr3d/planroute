import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const RefCodeText = ({ style }) => {
  return <Text style={[styles.refcode, style]}>RefCode</Text>;
};

const styles = StyleSheet.create({
  refcode: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorGray,
    textAlign: "left",
    width: 172,
  },
});

export default RefCodeText;

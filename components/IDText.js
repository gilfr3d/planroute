import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const IDText = ({ style }) => {
  return <Text style={[styles.id, style]}>ID</Text>;
};

const styles = StyleSheet.create({
  id: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 137,
  },
});

export default IDText;

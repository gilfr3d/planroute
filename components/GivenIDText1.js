import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GivenIDText1 = ({ style }) => {
  return <Text style={[styles.givenId, style]}>Given ID</Text>;
};

const styles = StyleSheet.create({
  givenId: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 137,
  },
});

export default GivenIDText1;

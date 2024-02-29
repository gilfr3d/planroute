import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DateDgrText = ({ style }) => {
  return <Text style={[styles.datedgr, style]}>dateDgr</Text>;
};

const styles = StyleSheet.create({
  datedgr: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorGray,
    textAlign: "left",
    width: 172,
  },
});

export default DateDgrText;

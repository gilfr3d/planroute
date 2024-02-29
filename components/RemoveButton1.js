import * as React from 'react';
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {Border, Color} from '../GlobalStyles';
import vector from '../assets/vector13.png'

const RemoveButton1 = ({style}) => {
  return (
    <Pressable style={[styles.removeLayout, style]}>
      <View style={[styles.removeButtonChild, styles.removeLayout]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={vector}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  removeLayout: {
    height: 34,
    width: 36,
  },
  removeButtonChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorMistyrose,
    position: 'absolute',
  },
  vectorIcon: {
    top: 9,
    left: 9,
    width: 17,
    height: 17,
    position: 'absolute',
  },
});

export default RemoveButton1;

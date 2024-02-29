import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, SectionList, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import circles from '../assets/circles.png'
import rectangle593 from '../assets/rectangle593.png'
import wifi3 from '../assets/wifi3.png'
import group13 from '../assets/group13.png'
import group33 from '../assets/group33.png'
import vector2 from '../assets/vector23.png'
import circles1 from '../assets/circles1.png'
import duplicate from '../assets/duplicate.png'
import ellipse513 from '../assets/ellipse513.png'
import ellipse5013 from '../assets/ellipse5013.png'
import vector from '../assets/vector3.png'

const Identity2 = () => {
  const [frameSectionListData, setFrameSectionListData] = useState([]);
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState();
  const [frameDropdownItems, setFrameDropdownItems] = useState([
    { value: "RefCode", label: "RefCode" },
    { value: "dateDgr", label: "dateDgr" },
    { value: "ID", label: "ID" },
  ]);

  return (
    <View style={styles.identity2}>
      <Image
        style={styles.circlesIcon}
        contentFit="cover"
        source={circles}
      />
      <Image
        style={styles.identity2Child}
        contentFit="cover"
        source={rectangle593}
      />
      <View style={[styles.notifBar, styles.notifBarLayout]}>
        <Text style={[styles.text, styles.textLayout]}>9:41</Text>
        <Image
          style={[styles.wifiIcon, styles.notifBarLayout]}
          contentFit="cover"
          source={wifi3}
        />
        <Image
          style={[styles.notifBarChild, styles.notifLayout]}
          contentFit="cover"
          source={group13}
        />
        <Image
          style={[styles.notifBarItem, styles.notifLayout]}
          contentFit="cover"
          source={group33}
        />
      </View>
      <Text style={[styles.companyId, styles.textTypo]}>Company ID</Text>
      <Text style={[styles.lineItemDetails, styles.frameInnerPosition]}>
        Line Item Details
      </Text>
      <Pressable style={styles.returnParent}>
        <Text style={[styles.return, styles.addTypo]}>Return</Text>
        <Image
          style={[styles.vectorIcon, styles.notifLayout]}
          contentFit="cover"
          source={vector2}
        />
      </Pressable>
      <Image
        style={styles.circlesIcon1}
        contentFit="cover"
        source={circles1}
      />
      <Pressable style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Image
          style={styles.duplicateIcon}
          contentFit="cover"
          source={duplicate}
        />
        <Text style={[styles.add, styles.addTypo]}>Add</Text>
      </Pressable>
      <View style={styles.frameParent}>
        <SectionList
          style={[styles.frameItem, styles.frameItemLayout]}
          sections={frameSectionListData}
          renderItem={(props) => props.item}
          renderSectionHeader={(props) => props.section.headerComponent}
        />
        <View style={[styles.givenIdParent, styles.frameItemLayout]}>
          <Text style={styles.givenId}>Given ID</Text>
          <Text style={[styles.refcode, styles.refcodeTypo]}>RefCode</Text>
          <Text style={[styles.datedgr, styles.datedgrPosition]}>dateDgr</Text>
          <Image
            style={[styles.frameInner, styles.frameInnerPosition]}
            contentFit="cover"
            source={ellipse513}
          />
          <Pressable style={[styles.removeButton, styles.removeLayout]}>
            <View style={[styles.removeButtonChild, styles.removeLayout]} />
            <Image
              style={[styles.vectorIcon1, styles.textLayout]}
              contentFit="cover"
              source={vector}
            />
          </Pressable>
        </View>
        <View style={[styles.givenIdParent, styles.frameItemLayout]}>
          <Text style={styles.givenId}>Given ID</Text>
          <Text style={[styles.refcode, styles.refcodeTypo]}>RefCode</Text>
          <Text style={[styles.datedgr, styles.datedgrPosition]}>dateDgr</Text>
          <Image
            style={[styles.frameInner, styles.frameInnerPosition]}
            contentFit="cover"
            source={ellipse5013}
          />
          <Pressable style={[styles.removeButton, styles.removeLayout]}>
            <View style={[styles.removeButtonChild, styles.removeLayout]} />
            <Image
              style={[styles.vectorIcon1, styles.textLayout]}
              contentFit="cover"
              source={vector}
            />
          </Pressable>
        </View>
        <View style={[styles.givenIdParent, styles.frameItemLayout]}>
          <Text style={styles.givenId}>Given ID</Text>
          <Text style={[styles.refcode, styles.refcodeTypo]}>RefCode</Text>
          <Text style={[styles.datedgr, styles.datedgrPosition]}>dateDgr</Text>
          <Image
            style={[styles.frameInner, styles.frameInnerPosition]}
            contentFit="cover"
            source={ellipse513}
          />
          <Pressable style={[styles.removeButton, styles.removeLayout]}>
            <View style={[styles.removeButtonChild, styles.removeLayout]} />
            <Image
              style={[styles.vectorIcon1, styles.textLayout]}
              contentFit="cover"
              source={vector}
            />
          </Pressable>
        </View>
        <View style={[styles.givenIdParent, styles.frameItemLayout]}>
          <Text style={styles.givenId}>Given ID</Text>
          <Text style={[styles.refcode, styles.refcodeTypo]}>RefCode</Text>
          <Text style={[styles.datedgr, styles.datedgrPosition]}>dateDgr</Text>
          <Image
            style={[styles.frameInner, styles.frameInnerPosition]}
            contentFit="cover"
            source={ellipse5013}
          />
          <Pressable style={[styles.removeButton, styles.removeLayout]}>
            <View style={[styles.removeButtonChild, styles.removeLayout]} />
            <Image
              style={[styles.vectorIcon1, styles.textLayout]}
              contentFit="cover"
              source={vector}
            />
          </Pressable>
        </View>
        <View style={[styles.givenIdParent, styles.frameItemLayout]}>
          <Text style={styles.givenId}>Given ID</Text>
          <Text style={[styles.refcode, styles.refcodeTypo]}>RefCode</Text>
          <Text style={[styles.datedgr, styles.datedgrPosition]}>dateDgr</Text>
          <Pressable style={[styles.removeButton, styles.removeLayout]}>
            <View style={[styles.removeButtonChild, styles.removeLayout]} />
            <Image
              style={[styles.vectorIcon1, styles.textLayout]}
              contentFit="cover"
              source={vector}
            />
          </Pressable>
          <Image
            style={[styles.frameInner, styles.frameInnerPosition]}
            contentFit="cover"
            source={ellipse5013}
          />
        </View>
      </View>
      <View
        style={[styles.wrapper, styles.datedgrPosition]}
        disableBorderRadius="true"
        showArrowIcon="true"
      >
        <DropDownPicker
          open={frameDropdownOpen}
          setOpen={setFrameDropdownOpen}
          value={frameDropdownValue}
          setValue={setFrameDropdownValue}
          placeholder="Sort by:"
          items={frameDropdownItems}
          labelStyle={styles.frameDropdownValue}
          textStyle={styles.frameDropdownText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: "#949494",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Inter-Light",
  },
  frameDropdownText: {
    color: "#a4a4a4",
    fontFamily: "Inter-Regular",
  },
  notifBarLayout: {
    height: 21,
    position: "absolute",
  },
  textLayout: {
    height: 17,
    position: "absolute",
  },
  notifLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  frameInnerPosition: {
    left: 30,
    position: "absolute",
  },
  addTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  frameChildLayout: {
    width: 122,
    height: 36,
    position: "absolute",
  },
  frameItemLayout: {
    width: 349,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  refcodeTypo: {
    width: 172,
    color: Color.colorGray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 92,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  datedgrPosition: {
    top: 52,
    position: "absolute",
  },
  removeLayout: {
    width: 36,
    height: 34,
    position: "absolute",
  },
  circlesIcon: {
    top: -86,
    left: 283,
    width: 256,
    height: 249,
    position: "absolute",
  },
  identity2Child: {
    width: 360,
    height: 34,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mini,
    width: 41,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 0,
    height: 17,
    top: 0,
  },
  wifiIcon: {
    left: 313,
    width: 20,
    top: 0,
    height: 21,
    overflow: "hidden",
  },
  notifBarChild: {
    height: "47.62%",
    width: "6.01%",
    top: "28.57%",
    right: "9.31%",
    bottom: "23.81%",
    left: "84.68%",
  },
  notifBarItem: {
    height: "66.67%",
    width: "5.41%",
    top: "14.29%",
    right: "19.22%",
    bottom: "19.05%",
    left: "75.38%",
  },
  notifBar: {
    top: 11,
    left: 18,
    width: 333,
  },
  companyId: {
    height: "1.63%",
    marginLeft: 2458,
    top: "213.5%",
    left: "50%",
    fontSize: FontSize.size_smi,
    width: 118,
    textAlign: "left",
    position: "absolute",
  },
  lineItemDetails: {
    top: 50,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorSandybrown,
    width: 241,
    textAlign: "left",
  },
  return: {
    left: 49,
    color: "#ff9e9e",
    top: 9,
    width: 118,
  },
  vectorIcon: {
    height: "61.11%",
    width: "18.33%",
    top: "19.44%",
    right: "69.17%",
    bottom: "19.44%",
    left: "12.5%",
  },
  returnParent: {
    top: 678,
    left: 32,
    width: 120,
    height: 36,
    backgroundColor: Color.colorMistyrose,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  circlesIcon1: {
    left: 232,
    width: 261,
    height: 255,
    top: 677,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorMintcream,
    borderRadius: Border.br_21xl,
    width: 122,
    left: 0,
    top: 0,
  },
  duplicateIcon: {
    left: 13,
    width: 22,
    height: 22,
    top: 8,
    position: "absolute",
    overflow: "hidden",
  },
  add: {
    top: 10,
    left: 48,
    color: Color.colorSeagreen,
    width: 44,
  },
  rectangleParent: {
    left: 209,
    top: 677,
  },
  frameItem: {
    maxWidth: 349,
    flex: 1,
    width: 349,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
  },
  givenId: {
    width: 137,
    left: 92,
    top: 8,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  refcode: {
    top: 30,
    position: "absolute",
  },
  datedgr: {
    width: 172,
    color: Color.colorGray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 92,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  frameInner: {
    top: 15,
    width: 47,
    height: 47,
  },
  removeButtonChild: {
    backgroundColor: Color.colorMistyrose,
    width: 36,
    borderRadius: Border.br_21xl,
    left: 0,
    top: 0,
  },
  vectorIcon1: {
    left: 9,
    width: 17,
    top: 9,
  },
  removeButton: {
    top: 18,
    left: 305,
  },
  givenIdParent: {
    height: 81,
    marginTop: 8,
  },
  frameParent: {
    top: 111,
    left: 5,
    position: "absolute",
  },
  wrapper: {
    left: 221,
    width: 99,
    height: 27,
    borderRadius: 0,
  },
  identity2: {
    backgroundColor: Color.colorWhitesmoke,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
  },
});

export default Identity2;

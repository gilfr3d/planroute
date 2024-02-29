import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Switch, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import circles from '../assets/circles.png'
import rectangle593 from '../assets/rectangle593.png'
import wifi3 from '../assets/wifi3.png'
import group13 from '../assets/group13.png'
import group33 from '../assets/group33.png'
import vector from '../assets/vector3.png'
import ellipse503 from '../assets/ellipse503.png'
import ellipse513 from '../assets/ellipse513.png'
import circles1 from '../assets/circles1.png'
import vector1 from '../assets/vector13.png'
import frame73 from '../assets/frame73.png'

const Identity = () => {
  const [toogleSwitchValueState, setToogleSwitchValueState] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.identity3}>
      <Image
        style={styles.circlesIcon}
        contentFit="cover"
        source={circles}
      />
      <Image
        style={[styles.identity3Child, styles.childPosition]}
        contentFit="cover"
        source={rectangle593}
      />
      <View style={[styles.notifBar, styles.notifBarLayout]}>
        <Text style={[styles.text, styles.textTypo]}>9:41</Text>
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
      <Text style={[styles.companyId, styles.companyIdPosition]}>
        Company ID
      </Text>
      <Text style={styles.availableRoutes}>Available Routes</Text>
      <Text style={[styles.useGps, styles.useGpsTypo]}>Use GPS</Text>
      <Text style={[styles.orderId, styles.text1Position]}>Order ID:</Text>
      <Text style={[styles.text1, styles.text1Typo]}>99999</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.rectangleLayout]} />
        <Text style={[styles.id, styles.idTypo]}>ID</Text>
        <Text style={[styles.refcode, styles.refcodeTypo]}>RefCode</Text>
        <Text style={[styles.datedgr, styles.datedgrTypo]}>dateDgr</Text>
        <Pressable style={[styles.removeButton, styles.removePosition]}>
          <View
            style={[styles.removeButtonChild, styles.removeButtonChildLayout]}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={vector}
          />
        </Pressable>
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          contentFit="cover"
          source={ellipse503}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.frameChild, styles.rectangleLayout]} />
        <Text style={[styles.id1, styles.idTypo]}>ID</Text>
        <Text style={[styles.refcode1, styles.refcodeTypo]}>RefCode</Text>
        <Text style={[styles.datedgr1, styles.datedgrTypo]}>dateDgr</Text>
        <Image
          style={[styles.ellipseIcon, styles.frameItemLayout]}
          contentFit="cover"
          source={ellipse513}
        />
        <Pressable style={[styles.removeButton1, styles.removePosition]}>
          <View
            style={[styles.removeButtonChild, styles.removeButtonChildLayout]}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={vector}
          />
        </Pressable>
      </View>
      <Image
        style={styles.circlesIcon1}
        contentFit="cover"
        source={circles1}
      />
      <Pressable
        style={[styles.viewLineItemsParent, styles.removeButtonChildLayout]}
        onPress={() => navigation.navigate("Identity2")}
      >
        <Text style={[styles.viewLineItems, styles.vectorIconPosition]}>
          View Line Items
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.notifLayout]}
          contentFit="cover"
          source={vector1}
        />
      </Pressable>
      <Switch
        style={styles.toogle}
        value={toogleSwitchValueState}
        onValueChange={setToogleSwitchValueState}
        thumbColor="#fa8802"
        trackColor={{ false: "#939393", true: "#a3a1b1" }}
      />
      <Pressable
        style={styles.startTheJourneyWrapper}
        onPress={() => navigation.navigate("SO")}
      >
        <Text style={[styles.startTheJourney, styles.vectorIconPosition]}>
          Start the Journey
        </Text>
      </Pressable>
      <Image
        style={[styles.identity3Item, styles.companyIdPosition]}
        contentFit="cover"
        source={frame73}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    height: 34,
    left: 0,
    top: 0,
  },
  notifBarLayout: {
    height: 21,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
  },
  notifLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  companyIdPosition: {
    left: "50%",
    position: "absolute",
  },
  useGpsTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  text1Position: {
    width: 137,
    top: 595,
    color: Color.colorBlack,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  rectangleLayout: {
    height: 86,
    width: 348,
    position: "absolute",
  },
  idTypo: {
    left: 84,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    width: 137,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  refcodeTypo: {
    width: 172,
    color: Color.colorGray,
    left: 84,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  datedgrTypo: {
    left: 83,
    width: 172,
    color: Color.colorGray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  removePosition: {
    left: 297,
    width: 36,
    height: 34,
    position: "absolute",
  },
  removeButtonChildLayout: {
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  vectorIconPosition: {
    top: 9,
    position: "absolute",
  },
  frameItemLayout: {
    height: 47,
    width: 47,
    left: 22,
    position: "absolute",
  },
  circlesIcon: {
    top: -86,
    left: 283,
    width: 256,
    height: 249,
    position: "absolute",
  },
  identity3Child: {
    width: 360,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mini,
    width: 41,
    height: 17,
    textAlign: "left",
    color: Color.colorBlack,
    left: 0,
    top: 0,
    position: "absolute",
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
    left: 18,
    width: 333,
    top: 11,
  },
  companyId: {
    height: "1.63%",
    marginLeft: 2458,
    top: "213.5%",
    fontSize: FontSize.size_smi,
    width: 118,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  availableRoutes: {
    top: 368,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorSandybrown,
    width: 241,
    left: 29,
    textAlign: "left",
    position: "absolute",
  },
  useGps: {
    top: 370,
    left: 280,
    width: 132,
    color: Color.colorBlack,
    position: "absolute",
  },
  orderId: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 29,
  },
  text1: {
    left: 92,
    width: 137,
    top: 595,
    color: Color.colorBlack,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  id: {
    top: 11,
  },
  refcode: {
    top: 33,
  },
  datedgr: {
    top: 55,
  },
  removeButtonChild: {
    backgroundColor: Color.colorMistyrose,
    width: 36,
    height: 34,
    left: 0,
    top: 0,
  },
  vectorIcon: {
    left: 9,
    width: 17,
    height: 17,
  },
  removeButton: {
    top: 25,
    width: 36,
  },
  frameItem: {
    top: 22,
  },
  rectangleParent: {
    top: 409,
    left: 6,
    width: 348,
  },
  id1: {
    top: 12,
  },
  refcode1: {
    top: 34,
  },
  datedgr1: {
    top: 56,
  },
  ellipseIcon: {
    top: 19,
  },
  removeButton1: {
    top: 26,
    width: 36,
  },
  rectangleGroup: {
    top: 501,
    left: 6,
    width: 348,
  },
  circlesIcon1: {
    top: 677,
    left: 232,
    width: 261,
    height: 255,
    position: "absolute",
  },
  viewLineItems: {
    left: 49,
    color: Color.colorSeagreen,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    width: 118,
  },
  vectorIcon2: {
    height: "61.11%",
    width: "12.29%",
    top: "19.44%",
    right: "78.77%",
    bottom: "19.44%",
    left: "8.94%",
  },
  viewLineItemsParent: {
    left: 166,
    backgroundColor: Color.colorMintcream,
    width: 179,
    height: 36,
    top: 595,
    borderRadius: Border.br_21xl,
  },
  toogle: {
    top: 372,
    left: 238,
    height: 14,
    width: 36,
    position: "absolute",
  },
  startTheJourney: {
    left: 60,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorWhite,
    textAlign: "center",
  },
  startTheJourneyWrapper: {
    top: 676,
    left: 56,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 253,
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  identity3Item: {
    marginLeft: -180,
    top: 35,
    width: 358,
    height: 318,
  },
  identity3: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Identity;

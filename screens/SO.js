import * as React from "react";
import { StyleSheet, Pressable, Text, View, TextInput, Image } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import arrowschevronleft from '../assets/arrowschevronleft.png'
import vector from '../assets/vector3.png'
import ellipse503 from '../assets/ellipse503.png'
import ellipse513 from '../assets/ellipse513.png'

const SO = () => {
  return (
    <View style={styles.so4}>
      <Image
        style={styles.arrowsChevronLeft}
        contentFit="cover"
        source={arrowschevronleft}
      />
      <Pressable
        style={[styles.generateRouteForThisOrderWrapper, styles.wrapperBg]}
      >
        <Text style={styles.generateRouteFor}>
          Generate Route for this Order
        </Text>
      </Pressable>
      <Text style={styles.selectYourDelivery}>
        Select your Delivery Plan Date below
      </Text>
      <Text style={[styles.date, styles.pmTypo]}>Date</Text>
      <Text style={[styles.time, styles.pmTypo]}>Time</Text>
      <Text style={styles.total}>Total</Text>
      <View style={styles.customerDeliveryDetailsWrapper}>
        <Text style={styles.customerDeliveryDetails}>
          CUSTOMER DELIVERY DETAILS
        </Text>
      </View>
      <Text style={[styles.customerName, styles.orderIdTypo]}>
        CUSTOMER NAME
      </Text>
      <Text style={[styles.orderId, styles.orderIdTypo]}>Order ID</Text>
      <TextInput
        style={styles.so4Child}
        autoCapitalize="characters"
        placeholderTextColor="#a9a9a9"
      />
      <View style={[styles.so4Item, styles.so4Layout]} />
      <TextInput style={[styles.so4Inner, styles.so4Layout]} />
      <Text style={[styles.pm, styles.pmTypo]}>4:56:20 PM</Text>
      <TextInput
        style={[styles.rectangleTextinput, styles.so4Child1Layout]}
        placeholder="sample name"
        autoCapitalize="words"
        placeholderTextColor="#cacaca"
      />
      <TextInput
        style={[styles.so4Child1, styles.so4Child1Layout]}
        keyboardType="number-pad"
        autoCapitalize="characters"
        placeholderTextColor="#d7d7d7"
      />
      <Pressable style={[styles.viewLineItemsWrapper, styles.so4Child1Layout]}>
        <Text style={styles.viewLineItems}>View Line Items</Text>
      </Pressable>
      <View style={styles.frameParent}>
        <View style={[styles.givenIdParent, styles.givenParentLayout]}>
          <Text style={styles.givenId}>Given ID</Text>
          <Text style={[styles.refcode, styles.refcodeTypo]}>RefCode</Text>
          <Text style={[styles.datedgr, styles.refcodeTypo]}>dateDgr</Text>
          <View style={styles.frameChild} />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={vector}
          />
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={ellipse503}
          />
        </View>
        <View style={[styles.givenIdGroup, styles.givenParentLayout]}>
          <Text style={styles.givenId}>Given ID</Text>
          <Text style={[styles.refcode, styles.refcodeTypo]}>RefCode</Text>
          <Text style={[styles.datedgr, styles.refcodeTypo]}>dateDgr</Text>
          <View style={styles.frameChild} />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={vector}
          />
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={ellipse513}
          />
        </View>
        <View style={[styles.givenIdContainer, styles.givenParentLayout]}>
          <Text style={styles.givenId}>Given ID</Text>
          <Text style={[styles.refcode, styles.refcodeTypo]}>RefCode</Text>
          <Text style={[styles.datedgr, styles.refcodeTypo]}>dateDgr</Text>
          <View style={styles.frameChild} />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={vector}
          />
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={ellipse503}
          />
        </View>
        <View style={[styles.frameView, styles.givenParentLayout]}>
          <Text style={styles.givenId}>Given ID</Text>
          <Text style={[styles.refcode, styles.refcodeTypo]}>RefCode</Text>
          <Text style={[styles.datedgr, styles.refcodeTypo]}>dateDgr</Text>
          <View style={styles.frameChild} />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={vector}
          />
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={ellipse513}
          />
        </View>
        <View style={[styles.givenIdParent1, styles.givenParentLayout]}>
          <Text style={styles.givenId}>Given ID</Text>
          <Text style={[styles.refcode, styles.refcodeTypo]}>RefCode</Text>
          <Text style={[styles.datedgr, styles.refcodeTypo]}>dateDgr</Text>
          <View style={styles.frameChild} />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={vector}
          />
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={ellipse503}
          />
        </View>
        <View style={[styles.givenIdParent2, styles.givenParentLayout]}>
          <Text style={styles.givenId}>Given ID</Text>
          <Text style={[styles.refcode, styles.refcodeTypo]}>RefCode</Text>
          <Text style={[styles.datedgr, styles.refcodeTypo]}>dateDgr</Text>
          <View style={styles.frameChild} />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={vector}
          />
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={ellipse503}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperBg: {
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  pmTypo: {
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
  },
  orderIdTypo: {
    marginLeft: -169,
    fontSize: FontSize.size_sm,
    left: "50%",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  so4Layout: {
    height: 23,
    width: 89,
    top: 652,
    borderColor: Color.colorGainsboro,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  so4Child1Layout: {
    height: 19,
    position: "absolute",
  },
  givenParentLayout: {
    height: 81,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 349,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    overflow: "hidden",
  },
  refcodeTypo: {
    width: 172,
    color: Color.colorGray,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    left: 92,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  arrowsChevronLeft: {
    height: "5%",
    width: "11.11%",
    top: "4.88%",
    right: "88.89%",
    bottom: "90.13%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  generateRouteFor: {
    top: 9,
    left: 10,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  generateRouteForThisOrderWrapper: {
    top: 696,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 246,
    height: 38,
    left: 3,
    position: "absolute",
  },
  selectYourDelivery: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 607,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: 3,
    position: "absolute",
  },
  date: {
    top: 633,
    fontFamily: FontFamily.interRegular,
    left: 3,
  },
  time: {
    left: 131,
    top: 633,
    fontFamily: FontFamily.interRegular,
  },
  total: {
    left: 245,
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 607,
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  customerDeliveryDetails: {
    marginLeft: -108,
    backgroundColor: "#350F9F",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    top: 27,
    left: "50%",
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  customerDeliveryDetailsWrapper: {
    marginLeft: -180,
    backgroundColor: Color.colorDarkblue,
    width: 360,
    height: 70,
    left: "50%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  customerName: {
    top: 79,
  },
  orderId: {
    top: 105,
  },
  so4Child: {
    top: 629,
    backgroundColor: Color.colorGainsboro,
    borderColor: "#a3a1b0",
    width: 111,
    height: 28,
    fontWeight: "bold",
    fontFamily: "Inter",
    borderWidth: 1,
    borderStyle: "solid",
    left: 245,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  so4Item: {
    left: 3,
  },
  so4Inner: {
    left: 133,
  },
  pm: {
    top: 656,
    left: 144,
  },
  rectangleTextinput: {
    width: 212,
    left: 144,
    borderColor: Color.colorGainsboro,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xs,
    height: 19,
    fontWeight: "bold",
    fontFamily: "Inter",
    borderWidth: 1,
    borderStyle: "solid",
    top: 79,
  },
  so4Child1: {
    left: 75,
    width: 69,
    borderColor: Color.colorGainsboro,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xs,
    height: 19,
    fontWeight: "bold",
    fontFamily: "Inter",
    borderWidth: 1,
    borderStyle: "solid",
    top: 105,
  },
  viewLineItems: {
    top: 1,
    left: 43,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  viewLineItemsWrapper: {
    left: 180,
    width: 176,
    top: 105,
    backgroundColor: Color.colorMediumseagreen,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  givenId: {
    top: 8,
    width: 137,
    textAlign: "left",
    left: 92,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    position: "absolute",
  },
  refcode: {
    top: 30,
  },
  datedgr: {
    top: 52,
  },
  frameChild: {
    top: 18,
    left: 305,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorMistyrose,
    width: 36,
    height: 34,
    position: "absolute",
  },
  vectorIcon: {
    left: 314,
    width: 17,
    height: 17,
    top: 27,
    position: "absolute",
  },
  frameItem: {
    top: 15,
    left: 30,
    width: 47,
    height: 47,
    position: "absolute",
  },
  givenIdParent: {
    top: 0,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  givenIdGroup: {
    top: 89,
  },
  givenIdContainer: {
    top: 177,
  },
  frameView: {
    top: 266,
  },
  givenIdParent1: {
    top: 355,
  },
  givenIdParent2: {
    top: 444,
  },
  frameParent: {
    top: 144,
    left: 5,
    height: 452,
    width: 349,
    position: "absolute",
    overflow: "hidden",
  },
  so4: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SO;

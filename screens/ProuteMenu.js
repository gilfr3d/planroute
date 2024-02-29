import * as React from "react";
import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import frame83 from '../assets/frame83.png'
import ellipse103 from '../assets/ellipse103.png'
import ellipse123 from '../assets/ellipse123.png'
import ellipse113 from '../assets/ellipse113.png'
import ellipse73 from '../assets/ellipse73.png'
import ellipse133 from '../assets/ellipse133.png'
import ellipse53 from '../assets/ellipse53.png'
import ellipse83 from '../assets/ellipse83.png'
import ellipse93 from '../assets/ellipse93.png'
import ellipse63 from '../assets/ellipse63.png'
import ellipse43 from '../assets/ellipse43.png'

const ProuteMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.prouteMenu}>
      <Image
        style={styles.prouteMenuChild}
        contentFit="cover"
        source={frame83}
      />
      <Image
        style={[styles.prouteMenuItem, styles.childLayout]}
        contentFit="cover"
        source={ellipse103}
      />
      <Image
        style={[styles.prouteMenuInner, styles.prouteChildPosition1]}
        contentFit="cover"
        source={ellipse123}
      />
      <Image
        style={[styles.ellipseIcon, styles.childLayout]}
        contentFit="cover"
        source={ellipse113}
      />
      <Image
        style={[styles.prouteMenuChild1, styles.prouteChildPosition1]}
        contentFit="cover"
        source={ellipse133}
      />
      <Image
        style={[styles.prouteMenuChild2, styles.prouteChildPosition]}
        contentFit="cover"
        source={ellipse73}
      />
      <Image
        style={[styles.prouteMenuChild3, styles.prouteChildLayout]}
        contentFit="cover"
        source={ellipse53}
      />
      <Image
        style={[styles.prouteMenuChild4, styles.prouteChildLayout]}
        contentFit="cover"
        source={ellipse83}
      />
      <Image
        style={[styles.prouteMenuChild5, styles.childLayout]}
        contentFit="cover"
        source={ellipse93}
      />
      <Text style={[styles.startOfDay, styles.dashboardTypo]}>
        Start of Day
      </Text>
      <Text style={[styles.geofencing, styles.geofencingTypo]}>Geofencing</Text>
      <Text style={[styles.driversManagement, styles.managementTypo]}>
        Drivers Management
      </Text>
      <Text style={[styles.routeManagement, styles.geofencingTypo]}>
        Route Management
      </Text>
      <Text style={[styles.usersManagement, styles.managementTypo]}>
        Users Management
      </Text>
      <Text
        style={[styles.notifications, styles.notificationsPosition]}
      >{`Notifications
`}</Text>
      <Text style={[styles.dashboard, styles.dashboardTypo]}>Dashboard</Text>
      <Text style={[styles.manageVehicles, styles.geofencingTypo]}>
        Manage Vehicles
      </Text>
      <Text style={[styles.addDriver, styles.addTypo]}>Add Driver</Text>
      <Text style={[styles.planRoutes, styles.planRoutesTypo]}>
        Plan Routes
      </Text>
      <Text style={[styles.addUser, styles.addTypo]}>Add User</Text>
      <Text style={[styles.routeNotifications, styles.addTypo]}>
        Route Notifications
      </Text>
      <Text style={[styles.ordersByTerritory, styles.addTypo]}>
        Orders by Territory
      </Text>
      <Text style={[styles.zoneAlerts, styles.routesMapTypo]}>Zone Alerts</Text>
      <Text style={[styles.zoneRestriction, styles.planRoutesTypo]}>
        Zone Restriction
      </Text>
      <Text style={[styles.addupdateremove, styles.planRoutesTypo]}>
        Add/Update/Remove
      </Text>
      <Text style={[styles.updateDriver, styles.updateTypo]}>
        Update Driver
      </Text>
      <Text style={[styles.routesMap, styles.routesMapTypo]}>Routes Map</Text>
      <Text style={[styles.updateUser, styles.updateTypo]}>Update User</Text>
      <Text style={[styles.dispatchRoutes, styles.addTypo]}>
        Dispatch Routes
      </Text>
      <Text style={[styles.completedNotifications, styles.addTypo]}>
        Completed Notifications
      </Text>
      <Pressable
        style={styles.vectorParent}
        onPress={() => navigation.navigate("Identity1")}
      >
        <Image
          style={[styles.frameChild, styles.childLayout]}
          contentFit="cover"
          source={ellipse63}
        />
        <View style={styles.deliveryManagementParent}>
          <Text style={[styles.deliveryManagement, styles.loadUnloadPosition]}>
            Delivery Management
          </Text>
          <Text style={[styles.listOfOrders, styles.loadUnloadPosition]}>
            List of Orders
          </Text>
          <Text
            style={[styles.loadUnload, styles.loadUnloadPosition]}
          >{`Load & Unload Orders`}</Text>
          <Text style={[styles.manualOrderCreation, styles.loadUnloadPosition]}>
            Manual Order Creation
          </Text>
        </View>
      </Pressable>
      <Text style={[styles.customerNotifications, styles.addTypo]}>
        Customer Notifications
      </Text>
      <Text style={[styles.geofenceNotifications, styles.addTypo]}>
        Geofence Notifications
      </Text>
      <Text style={[styles.despatchNotifications, styles.addTypo]}>
        Despatch Notifications
      </Text>
      <Text style={[styles.history, styles.addTypo]}>History</Text>
      <Image
        style={[styles.prouteMenuChild6, styles.prouteChildLayout]}
        contentFit="cover"
        source={ellipse43}
      />
      <Text style={[styles.manageTerritories, styles.dashboardTypo]}>
        Manage Territories
      </Text>
      <Text
        style={[styles.planRoute, styles.addTypo]}
      >{`Plan & Route Territories`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  prouteChildPosition1: {
    bottom: "60%",
    top: "31.25%",
  },
  prouteChildPosition: {
    bottom: "39.5%",
    top: "51.75%",
  },
  prouteChildLayout: {
    left: "70.28%",
    right: "10.28%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "19.44%",
    height: "8.75%",
    position: "absolute",
    overflow: "hidden",
  },
  dashboardTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  geofencingTypo: {
    top: 323,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  managementTypo: {
    top: 487,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  notificationsPosition: {
    left: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  addTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  planRoutesTypo: {
    top: 339,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  routesMapTypo: {
    top: 354,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  updateTypo: {
    top: 518,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  loadUnloadPosition: {
    left: 0,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  prouteMenuChild: {
    left: -35,
    width: 407,
    height: 60,
    top: 0,
    position: "absolute",
  },
  prouteMenuItem: {
    left: "5.28%",
    right: "75.28%",
    maxWidth: "100%",
    width: "19.44%",
    height: "8.75%",
    bottom: "76.5%",
    top: "14.75%",
  },
  prouteMenuInner: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    left: "5.28%",
    right: "75.28%",
    width: "19.44%",
    height: "8.75%",
  },
  ellipseIcon: {
    right: "42.5%",
    left: "38.06%",
    bottom: "76.5%",
    top: "14.75%",
    width: "19.44%",
    height: "8.75%",
    maxWidth: "100%",
  },
  prouteMenuChild1: {
    right: "43.06%",
    left: "37.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "19.44%",
    height: "8.75%",
  },
  prouteMenuChild2: {
    right: "41.67%",
    left: "38.89%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "19.44%",
    height: "8.75%",
  },
  prouteMenuChild3: {
    bottom: "60%",
    top: "31.25%",
  },
  prouteMenuChild4: {
    bottom: "39.5%",
    top: "51.75%",
  },
  prouteMenuChild5: {
    top: "71.75%",
    right: "75.56%",
    bottom: "19.5%",
    left: "5%",
    width: "19.44%",
    height: "8.75%",
    maxWidth: "100%",
  },
  startOfDay: {
    left: 25,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 190,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
  },
  geofencing: {
    left: 22,
  },
  driversManagement: {
    left: 143,
  },
  routeManagement: {
    left: 246,
  },
  usersManagement: {
    left: 256,
  },
  notifications: {
    top: 647,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  dashboard: {
    left: 145,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 190,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
  },
  manageVehicles: {
    left: 139,
  },
  addDriver: {
    top: 503,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
    left: 143,
  },
  planRoutes: {
    left: 246,
  },
  addUser: {
    top: 503,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
    left: 256,
  },
  routeNotifications: {
    top: 663,
    left: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  ordersByTerritory: {
    top: 220,
    left: 246,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  zoneAlerts: {
    left: 22,
  },
  zoneRestriction: {
    left: 22,
  },
  addupdateremove: {
    left: 139,
  },
  updateDriver: {
    left: 143,
  },
  routesMap: {
    left: 246,
  },
  updateUser: {
    left: 256,
  },
  dispatchRoutes: {
    top: 369,
    left: 246,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  completedNotifications: {
    top: 678,
    left: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  frameChild: {
    height: "54.24%",
    width: "63.03%",
    top: "0.76%",
    right: "34.45%",
    bottom: "45%",
    left: "2.52%",
  },
  deliveryManagement: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 0,
  },
  listOfOrders: {
    top: 16,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  loadUnload: {
    top: 44,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  manualOrderCreation: {
    top: 31,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  deliveryManagementParent: {
    top: 73,
    left: 3,
    width: 108,
    height: 56,
    position: "absolute",
  },
  vectorParent: {
    top: 411,
    left: 14,
    borderRadius: Border.br_3xs,
    width: 119,
    height: 132,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  customerNotifications: {
    top: 691,
    left: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  geofenceNotifications: {
    top: 706,
    left: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  despatchNotifications: {
    top: 721,
    left: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  history: {
    top: 736,
    left: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  prouteMenuChild6: {
    bottom: "76.5%",
    top: "14.75%",
  },
  manageTerritories: {
    left: 246,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 190,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
  },
  planRoute: {
    top: 205,
    left: 246,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  prouteMenu: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default ProuteMenu;

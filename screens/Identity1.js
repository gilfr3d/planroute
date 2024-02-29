import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, Pressable, Image, FlatList} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';
import {FontFamily, FontSize, Color, Border} from '../GlobalStyles';
import {Searchbar} from 'react-native-paper';
import circles2 from '../assets/circles2.png';
import rectangle59 from '../assets/rectangle593.png';
import wifi from '../assets/wifi3.png';
import group13 from '../assets/group13.png';
import group33 from '../assets/group33.png';
import circles3 from '../assets/circles3.png';
import ellipse513 from '../assets/ellipse513.png';
import ellipse5013 from '../assets/ellipse5013.png';
import vector from '../assets/vector3.png';

const Identity1 = () => {
  const [salesOrders, setSalesOrders] = useState([]);
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState();
  const [frameDropdownItems, setFrameDropdownItems] = useState([
    {value: 'RefCode', label: 'RefCode'},
    {value: 'dateDgr', label: 'dateDgr'},
    {value: 'ID', label: 'ID'},
  ]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchSalesOrders();
  }, []);

  const fetchSalesOrders = async () => {
    try {
      const response = await axios.get(
        'http://gs1ksa.org:4091/api/v1/salesOrder',
      );
      console.log('Response data:', response.data); // Log response data
      if (response.status === 200) {
        setSalesOrders(response.data);
      } else {
        console.error('Failed to fetch sales orders:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching sales orders:', error);
    }
  };


  return (
    <FlatList 
      data={salesOrders} 
      renderItem={({ item }) => <Text style={{ fontSize: 30 }}>{item}</Text>} 
      keyExtractor={(item, index) => index.toString()} 
    />
    // <View style={styles.identity1}>
    //   <Image style={styles.circlesIcon} contentFit="cover" source={circles2} />

    //   {/* Place elements for displaying the list of available sales orders outside the loop */}
    //   <View style={styles.header}>

    //   <Text style={[styles.listOfAvailable, styles.frameChildPosition]}>
    //     List of Available sales Order from ERP
    //   </Text>
    //   <Text style={styles.totalPrice}>Total Price</Text>
    //   <Text style={[styles.text1, styles.textTypo]}>770$</Text>
    //   <Text style={[styles.text2, styles.textTypo]}>4</Text>
    //   <Text style={styles.totalProducts}>Total Products</Text>
    //   </View>

    //   {/* Loop through salesOrders to display individual sales orders */}
    //   {salesOrders.map(order => (
    //     <View style={styles.frameParent} key={order.OrderId}>
    //       <Text>{order.CustomerId}</Text>
    //       <Text>{order.CustomerName}</Text>
    //       <Text>{order.OrderDate}</Text>

    //       <Pressable style={[styles.removeButton, styles.removeLayout]}>
    //         <View style={[styles.removeButtonChild, styles.removeLayout]} />
    //         <Image
    //           style={[styles.vectorIcon, styles.textLayout]}
    //           contentFit="cover"
    //           source={vector}
    //         />
    //       </Pressable>
    //     </View>
    //   ))}

    //   <Pressable
    //     style={styles.viewLineItemsWrapper}
    //     onPress={() => navigation.navigate('Identity2')}>
    //     <Text style={styles.viewLineItems}>View Line Items</Text>
    //   </Pressable>
    //   <Image style={styles.circlesIcon1} contentFit="cover" source={circles3} />
    // </View>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: '#949494',
    fontSize: 14,
    fontWeight: '300',
    fontFamily: 'Inter-Light',
  },
  frameDropdownText: {
    color: '#a4a4a4',
    fontFamily: 'Inter-Regular',
  },
  notifBarLayout: {
    height: 21,
    position: 'absolute',
  },
  textLayout: {
    height: 17,
    position: 'absolute',
  },
  notifLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  frameChildPosition: {
    left: 30,
    position: 'absolute',
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    fontSize: FontSize.size_13xl,
    top: 138,
    textAlign: 'left',
    color: Color.colorBlack,
    position: 'absolute',
  },
  refcodeTypo: {
    width: 172,
    color: Color.colorGray,
    left: 92,
    fontFamily: FontFamily.interLight,
    fontWeight: '300',
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    position: 'absolute',
  },
  removeLayout: {
    width: 36,
    height: 34,
    position: 'absolute',
  },
  frameViewLayout: {
    marginTop: 8,
    width: 349,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    overflow: 'hidden',
  },
  circlesIcon: {
    top: -86,
    left: 283,
    width: 256,
    height: 249,
    position: 'absolute',
  },
  identity1Child: {
    width: 360,
    height: 34,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  text: {
    fontSize: FontSize.size_mini,
    width: 41,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    height: 17,
    left: 0,
    top: 0,
  },
  wifiIcon: {
    left: 313,
    width: 20,
    top: 0,
    height: 21,
    overflow: 'hidden',
  },
  notifBarChild: {
    height: '47.62%',
    width: '6.01%',
    top: '28.57%',
    right: '9.31%',
    bottom: '23.81%',
    left: '84.68%',
  },
  notifBarItem: {
    height: '66.67%',
    width: '5.41%',
    top: '14.29%',
    right: '19.22%',
    bottom: '19.05%',
    left: '75.38%',
  },
  notifBar: {
    top: 11,
    width: 333,
    left: 18,
  },
  companyId: {
    height: '1.63%',
    marginLeft: 2458,
    top: '213.5%',
    left: '50%',
    fontSize: FontSize.size_smi,
    width: 118,
    textAlign: 'left',
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    position: 'absolute',
  },
  listOfAvailable: {
    top: 50,
    fontSize: FontSize.size_xl,
    fontWeight: '800',
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorDarkblue,
    width: 241,
    textAlign: 'left',
  },
  totalPrice: {
    left: 219,
    width: 132,
    fontFamily: FontFamily.interLight,
    fontWeight: '300',
    fontSize: FontSize.size_sm,
    top: 116,
    textAlign: 'left',
    color: Color.colorBlack,
    position: 'absolute',
  },
  text1: {
    left: 222,
    width: 109,
  },
  text2: {
    left: 32,
    width: 75,
  },
  totalProducts: {
    left: 31,
    width: 137,
    fontFamily: FontFamily.interLight,
    fontWeight: '300',
    fontSize: FontSize.size_sm,
    top: 116,
    textAlign: 'left',
    color: Color.colorBlack,
    position: 'absolute',
  },
  viewLineItems: {
    color: Color.colorSeagreen,
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    fontSize: FontSize.size_sm,
    width: 118,
    textAlign: 'left',
  },
  viewLineItemsWrapper: {
    top: 631,
    left: 17,
    backgroundColor: Color.colorMintcream,
    width: 142,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 12,
    borderRadius: Border.br_21xl,
    fontWeight: 'bold',
    position: 'absolute',
  },
  wrapper: {
    top: 188,
    width: 99,
    height: 27,
    borderRadius: 0,
    backfaceVisibility: 'hidden',
    left: 18,
    position: 'absolute',
  },
  circlesIcon1: {
    top: 677,
    left: 232,
    width: 261,
    height: 255,
    position: 'absolute',
  },
  givenIdParent: {
    marginBottom: 10, // Add margin bottom for spacing between elements
  },
  givenId: {
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  refcode: {
    fontFamily: FontFamily.interLight,
    fontWeight: '300',
    fontSize: FontSize.size_sm,
    color: Color.colorGray,
  },
  datedgr: {
    fontFamily: FontFamily.interLight,
    fontWeight: '300',
    fontSize: FontSize.size_sm,
    color: Color.colorGray,
  },
  frameChild: {
    width: 47,
    height: 47,
  },
  removeButtonChild: {
    backgroundColor: Color.colorMistyrose,
    borderRadius: Border.br_21xl,
    width: 36,
    height: 34,
  },
  vectorIcon: {
    width: 17,
    height: 17,
  },
  removeButton: {
    top: 18,
    left: 305,
  },
  givenIdGroup: {
    height: 81,
  },
  frameView: {
    height: 89,
  },
  frameParent: { // Adjust the margin top as needed
    marginLeft: 10, // Adjust the margin left as needed
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    overflow: 'hidden',
    padding: 10, // Add padding for spacing between elements
  },
  identity1: {
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
  header: {
    marginTop: 50,
  }
});

export default Identity1;

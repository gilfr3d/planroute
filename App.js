import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ProuteMenu from './screens/ProuteMenu';
import IDText from './components/IDText';
import RefCodeText from './components/RefCodeText';
import DateDgrText from './components/DateDgrText';
import FrameIcon from './components/FrameIcon';
import EllipseIcon from './components/EllipseIcon';
import IDText1 from './components/IDText1';
import RefCodeText1 from './components/RefCodeText1';
import DateDgrText1 from './components/DateDgrText1';
import FrameIcon1 from './components/FrameIcon1';
import EllipseIcon1 from './components/EllipseIcon1';
import IDText2 from './components/IDText2';
import RefCodeText2 from './components/RefCodeText2';
import DateDgrText2 from './components/DateDgrText2';
import FrameIcon2 from './components/FrameIcon2';
import EllipseIcon2 from './components/EllipseIcon2';
import IDText3 from './components/IDText3';
import RefCodeText3 from './components/RefCodeText3';
import DateDgrText3 from './components/DateDgrText3';
import FrameIcon3 from './components/FrameIcon3';
import EllipseIcon3 from './components/EllipseIcon3';
import Identity from './screens/Identity';
import IDText4 from './components/IDText4';
import RefCodeText4 from './components/RefCodeText4';
import DateDgrText4 from './components/DateDgrText4';
import FrameIcon4 from './components/FrameIcon4';
import EllipseIcon4 from './components/EllipseIcon4';
import IDText5 from './components/IDText5';
import RefCodeText5 from './components/RefCodeText5';
import DateDgrText5 from './components/DateDgrText5';
import FrameIcon5 from './components/FrameIcon5';
import EllipseIcon5 from './components/EllipseIcon5';
import SO from './screens/SO';
import GivenIDText from './components/GivenIDText';
import RefCodeText6 from './components/RefCodeText6';
import DateDgrText6 from './components/DateDgrText6';
import EllipseIcon6 from './components/EllipseIcon6';
import RemoveButton from './components/RemoveButton';
import Identity1 from './screens/Identity1';
import Identity2 from './screens/Identity2';
import GivenIDText1 from './components/GivenIDText1';
import RefCodeText7 from './components/RefCodeText7';
import DateDgrText7 from './components/DateDgrText7';
import EllipseIcon7 from './components/EllipseIcon7';
import RemoveButton1 from './components/RemoveButton1';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="ProuteMenu"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="ProuteMenu"
              component={ProuteMenu}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Identity"
              component={Identity}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SO"
              component={SO}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Identity1"
              component={Identity1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Identity2"
              component={Identity2}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

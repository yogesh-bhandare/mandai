import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RatesScreen from './screens/RatesScreen';
import VendorsScreen from './screens/VendorsScreen';
import MarketScreen from './screens/MarketScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ChangeLang from './screens/ChangeLang';
import MoreScreen from './screens/MoreScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './AdditionalScreens/SettingsScreen';
import InviteFriendScreen from './AdditionalScreens/InviteFriendScreen';
import MyOrders from './AdditionalScreens/MyOrders';
import CommmingSoonScreen from './AdditionalScreens/CommingSoonScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000); 
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {splashVisible ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            {/* <Stack.Screen name="VerifyNumScreen" component={SignIn} />
            <Stack.Screen name="LangScreen" component={ChangeLang} />
            <Stack.Screen name="VerifyOTPScreen" component={SignUp} /> */}
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="RatesScreen" component={RatesScreen} />
            <Stack.Screen name="VendorsScreen" component={VendorsScreen} />
            <Stack.Screen name="MarketScreen" component={MarketScreen} />
            <Stack.Screen name="MoreScreen" component={MoreScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="SettingScreen" component={SettingsScreen} />

            {/* Additional Screens */}
            <Stack.Screen name='CommingSoon' component={CommmingSoonScreen} />
            <Stack.Screen name="InviteFriendScreen" component={InviteFriendScreen} />
            <Stack.Screen name="MyOrderScreen" component={MyOrders} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

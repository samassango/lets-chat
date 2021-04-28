import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import ForgotPassword from './screens/forgotpassword';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
}

export default AppNavigator;
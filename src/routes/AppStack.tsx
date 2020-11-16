import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import SignUp from '../pages/signup';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Login" component={Login} />
                <Screen name="SignUp" component={SignUp} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import { MPLUSRounded1c_400Regular, MPLUSRounded1c_700Bold, useFonts } from '@expo-google-fonts/m-plus-rounded-1c';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Inter_600SemiBold } from '@expo-google-fonts/inter';

import AppStack from './src/routes/AppStack';

const App = () => {
	
	let [fontsLoaded] = useFonts({
		MPLUSRounded1c_400Regular,
		MPLUSRounded1c_700Bold,
		Roboto_400Regular,
		Roboto_500Medium,
		Inter_600SemiBold
	});
	
	if(!fontsLoaded){
		return <AppLoading />
	} 
	else {
		return (
			<>
				<AppStack />
				<StatusBar style="auto" />
			</>
		)
	}
}
	
export default App;
import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

const Login = () => {

  const { navigate } = useNavigation();

  function handleNavigateToSignUpPage() {
    navigate('SignUp');
  }

  return (
    <View style={styles.container}>      
      <Text style={styles.title}>BeeWork</Text>
      <Text style={styles.link} onPress={handleNavigateToSignUpPage}>Cadastre-se</Text>
    </View>
  );
}

export default Login;
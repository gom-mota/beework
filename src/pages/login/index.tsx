import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Container, Title, ContainerResetPassword, ContainerSignUp, ContainerTitle, Banner } from './styles';
import { ButtonPrimary } from '../../components/Button';
import ActionLink from '../../components/ActionLink';
import Input from '../../components/Input';
import BannerImg from '../../assets/images/banner.png';
import { Alert } from "react-native";



const Login = () => {

  const { navigate } = useNavigation();

  function handleNavigateToSignUpPage() {
    navigate('SignUp');
  }

  function handleNavigateToResetPassword() {
    navigate('ResetPassword')
  }

  function handleNavigateToHome() {
    Alert.alert(
      "Ops!",
      "A validação está em desenvolvimento.",
      [
        { text: "OK" }
      ]
    );
  }

  return (
    <Container behavior="padding">  

      <ContainerTitle>
        <Banner source={BannerImg} />
        <Title>BeeWork</Title>
      </ContainerTitle>

      <Input type="text" tip="Seu endereço de email" />
      <Input type="password" tip="Senha" />

      <ContainerResetPassword>
        <ActionLink
            text="Redefinir senha"
            description="Esqueceu a senha?" 
            link={handleNavigateToResetPassword} />
      </ContainerResetPassword>

      <ButtonPrimary text="Entrar" icon="arrow-right" link={handleNavigateToHome} />

      <ContainerSignUp>
        <ActionLink
            text="Cadastre-se"
            description="Não tem uma conta?"
            link={handleNavigateToSignUpPage} />
      </ContainerSignUp>
    </Container>
  );
}

export default Login;
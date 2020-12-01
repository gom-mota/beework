import React from 'react';
import { useNavigation } from '@react-navigation/native'

import { ContainerResetPassword } from './styles';

import MainContainer from '../../components/MainContainer';
import HeaderBanner from '../../components/HeaderBanner';
import { ButtonPrimary } from '../../components/Button';
import ActionLink from '../../components/ActionLink';
import Input from '../../components/Input';

import { Alert } from "react-native";

import { useFormik } from "formik";
import * as Yup from 'yup';

const Login = () => {
	
	const { navigate } = useNavigation();
	
	function handleNavigateToSignUpPage() {
		navigate('SignUp');
	}
	
	function handleNavigateToResetPassword() {
		navigate('ResetPassword')
	}
	
	function handleNavigateToHome(values:any) {
		Alert.alert(
			`Dados para autenticação: `,
			JSON.stringify(values, null, 2),
			[
				{ text: "OK" }
			]
		);
	}
		
	interface LoginFormProps {
		email: string;
		password: string;
	}
	
	// input validations
	const loginSchema = Yup.object().shape({
		email: Yup.string().email("Email inválido").required("Preencha o campo"),
		password: Yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Preencha o campo"),
	});
	
	const initialValues: LoginFormProps = { email: '', password: '' };
	
	// responsible for creating the form with formik library (Hooks)
	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: handleNavigateToHome,
		validationSchema: loginSchema
	});
	
	return (
		<MainContainer> 
		
			<HeaderBanner />
			
			<Input 
				type="text"
				tip="Seu endereço de email" 
				onChangeText={formik.handleChange("email")}
				onBlur={formik.handleBlur("email")}
				value={formik.values.email}
				touched={formik.touched.email}
				error={formik.errors.email}
			/>
			
			<Input 
				type="password"
				tip="Senha"
				onChangeText={formik.handleChange("password")}
				onBlur={formik.handleBlur("password")}
				value={formik.values.password}
				touched={formik.touched.password}
				error={formik.errors.password}
			/>
			
			<ContainerResetPassword>
				<ActionLink
					text="Redefinir senha"
					description="Esqueceu a senha?" 
					onPress={handleNavigateToResetPassword}
				/>
			</ContainerResetPassword>
			
			<ButtonPrimary
				title="Entrar"
				icon="arrow-right"
				{...formik.isSubmitting} onPress={() => formik.handleSubmit()}
			/>
			
			<ActionLink
				text="Cadastre-se"
				description="Não tem uma conta?"
				onPress={handleNavigateToSignUpPage}
			/>
		
		</MainContainer>
	)
}
		
export default Login;
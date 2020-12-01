import React from 'react';
import { useNavigation } from '@react-navigation/native'

import { Description } from './styles';

import MainContainer from '../../components/MainContainer';
import HeaderBanner from '../../components/HeaderBanner';
import { ButtonPrimary } from '../../components/Button';
import ActionLink from '../../components/ActionLink';
import Input from '../../components/Input';

import { Alert } from "react-native";

import { useFormik } from "formik";
import * as Yup from 'yup';

const ResetPassword = () => {
	
	const { navigate } = useNavigation();
	
	function handleNavigateToLogin() {
		navigate('Login');
	}
	
	function handleLinkSending(values:any) {
		Alert.alert(
			`Dados para redefinição: `,
			JSON.stringify(values, null, 2),
			[
				{ text: "OK" }
			]
		);
		handleNavigateToLogin();
	}
		
	interface ResetPasswordFormProps {
		email: string;
	}
	
	// input validations
	const resetPasswordSchema = Yup.object().shape({
		email: Yup.string().email("Email inválido").required("Preencha o campo"),
	});
	
	const initialValues: ResetPasswordFormProps = { email: '' };
	
	// responsible for creating the form with formik library (Hooks)
	const formik = useFormik({
		initialValues: initialValues,
		onSubmit: handleLinkSending,
		validationSchema: resetPasswordSchema
	});
		
	return (
		<MainContainer> 
		
			<HeaderBanner />
			
			<Description>
				Digite seu email abaixo para receber o link de redefinição
			</Description>
			
			<Input 
				type="text"
				tip="Seu endereço de email" 
				onChangeText={formik.handleChange("email")}
				onBlur={formik.handleBlur("email")}
				value={formik.values.email}
				touched={formik.touched.email}
				error={formik.errors.email}
			/>
			
			<ButtonPrimary
				title="Redefinir"
				icon="history"
				{...formik.isSubmitting} onPress={() => formik.handleSubmit()}
			/>
			
			<ActionLink
				text="Entre com sua conta"
				description="Deseja voltar?"
				onPress={handleNavigateToLogin}
			/>
		
		</MainContainer>
		
		)
}
		
export default ResetPassword;
import React from 'react';
import { useNavigation } from '@react-navigation/native'

import MainContainer from '../../components/MainContainer';
import HeaderBanner from '../../components/HeaderBanner';
import { ButtonPrimary } from '../../components/Button';
import ActionLink from '../../components/ActionLink';
import Input from '../../components/Input';

import { Alert } from "react-native";

import { useFormik } from "formik";
import * as Yup from 'yup';

const SignUp = () => {

    const { navigate } = useNavigation();

    function handleNavigateToLogin() {
        navigate('Login');
    }

    function handleRegisterAccount(values:any) {
        Alert.alert(
            `Dados para cadastro: `,
            JSON.stringify(values, null, 2),
            [
                { text: "OK" }
            ]
        );
        handleNavigateToLogin();
    }

    interface SignUpFormProps {
        name: string;
        email: string;
        password: string;
    }

    // input validations
    const signUpSchema = Yup.object().shape({
        name: Yup.string().matches(/^[A-Za-z ]*$/, 'Digite um nome válido').required("Preencha o campo"),
        email: Yup.string().email("Email inválido").required("Preencha o campo"),
        password: Yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Preencha o campo"),
    });

    const initialValues: SignUpFormProps = { name: '', email: '', password: '' };

    // responsible for creating the form with formik library (Hooks)
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleRegisterAccount,
        validationSchema: signUpSchema
    });

    return (
        <MainContainer> 

            <HeaderBanner />

            <Input 
                type="text"
                tip="Nome completo" 
                onChangeText={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
                value={formik.values.name}
                touched={formik.touched.name}
                error={formik.errors.name}
            />

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

            <ButtonPrimary 
                title="Cadastrar"
                icon="check"
                {...formik.isSubmitting} onPress={() => formik.handleSubmit()}
            />

            <ActionLink
                text="Entre com sua conta"
                description="Ja possui cadastro?"
                onPress={handleNavigateToLogin}
            />

        </MainContainer>
    )
}

export default SignUp;
import React, {useState} from 'react';

import { TextInput, ErrorInput, ContainerError, ToggleButton, 
        ContainerPasswordInput, PasswordInput } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// extends all properties of the core component when using it
import { TextInputProps as RNTextInputProps }  from 'react-native';

interface InputProps extends RNTextInputProps{
    tip: string;
    type: string;
    touched?: Boolean;
    error?: string;
}

const Input: React.FC<InputProps> = (props) => {

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [passwordToggleIcon, setPasswordToggleIcon] = useState("eye");

    // show/hide password
    const onIconPress = () => {
        let iconName = (secureTextEntry) ? "eye-off" : "eye";
        setSecureTextEntry(!secureTextEntry);
        setPasswordToggleIcon(iconName);
    }

    if(props.type=="password"){
        return(
            <>
                <ContainerPasswordInput>
                    <PasswordInput placeholder={props.tip} secureTextEntry={secureTextEntry} {...props} />
                    <ToggleButton onPress={onIconPress}>
                        <Icon name={passwordToggleIcon} size={22} color="#4f4f4f" />
                    </ToggleButton>
                </ContainerPasswordInput>
                <ContainerError>
                    <ErrorInput>{props.touched && props.error}</ErrorInput>
                </ContainerError>
            </>
        )
    }
    else{
        return(       
            <>     
                <ContainerError>
                    <ErrorInput>{props.touched && props.error}</ErrorInput>
                </ContainerError>
                <TextInput placeholder={props.tip} {...props} />   
            </>
        )
    }
}

export default Input;

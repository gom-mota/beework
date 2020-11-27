import React from 'react';
import { TextInput, ToggleButton, ContainerPasswordInput, PasswordInput } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface InputProps {
    tip: string;
    type: string;
}
const Input: React.FC<InputProps> = ({ tip, type}) => {

    if(type=="password"){
        return(
            <ContainerPasswordInput>
                <PasswordInput placeholder={tip} secureTextEntry={true} />
                <ToggleButton>
                    <Icon name="eye" size={18} color="#4f4f4f" />
                </ToggleButton>
            </ContainerPasswordInput>
        )
    }
    else{
        return(            
            <TextInput placeholder={tip} />            
        )
    }
}

export default Input;

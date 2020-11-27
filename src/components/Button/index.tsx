import React from 'react';
import { Button, ContainerIcon, Text } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface ButtonProps {
    link: Function;
    text: string;
    icon: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({link, text, icon}) => { 
    return (
        <Button background="#322066" onPress={() => link()}>
            <>
                <Text>{text}</Text>    
                <ContainerIcon>
                    <Icon name={icon} size={18} color="#ffffff" />
                </ContainerIcon>
            </>
        </Button>
    );
}

const ButtonSecondary = (props:any) => { 
    return (
        <Button background="#00f">
            <Text>{props.children}</Text>            
        </Button>
    );
}

export {ButtonPrimary, ButtonSecondary}


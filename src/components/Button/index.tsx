import React from 'react';

import { Button, ButtonSmall, ContainerIcon, Text, TextSmall } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

// extends all properties of the core component when using it
import { ButtonProps as RNButtonProps } from 'react-native';

interface ButtonProps extends RNButtonProps{
    title: string;
    icon?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = (props) => { 
    return (
        <Button background="#322066" {...props}>
            <>
                <Text>{props.title}</Text>    
                <ContainerIcon>
                    <Icon name={props.icon!=null?props.icon:"hashtag"} size={18} color="#ffffff" />
                </ContainerIcon>
            </>
        </Button>
    );
}

const ButtonSecondary: React.FC<ButtonProps> = (props) => { 
    return (
        <ButtonSmall background="#322066" {...props}>
            <TextSmall>{props.title}</TextSmall>
        </ButtonSmall>
    );
}

export {ButtonPrimary, ButtonSecondary}


import React from 'react';

import { Text, Link, Container } from './styles';

// extends all properties of the core component when using it
import { TextProps as RNTextProps } from 'react-native';

interface ActionLinkProps extends RNTextProps{
    description?: string;
    text: string;
}
const ActionLink: React.FC<ActionLinkProps> = (props) => { 
    return (
        <Container>
            <Text>{props.description}</Text>
            <Link {...props}>{props.text}</Link>
        </Container>
    )
}

export default ActionLink;

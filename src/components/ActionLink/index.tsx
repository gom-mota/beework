import React from 'react';
import { Text, Link, Container } from './styles';

interface ActionLinkProps {
    link: Function;
    description?: string;
    text: string;
}
const ActionLink: React.FC<ActionLinkProps> = ({link, text, description}) => { 
    return (
        <Container>
            <Text>{description}</Text>
            <Link onPress={() => link()}>{text}</Link>
        </Container>
    )
}

export default ActionLink;

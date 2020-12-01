import React from 'react';

import { Container } from './styles';

const MainContainer = (props:any) => {
    return (
        <Container behavior="padding">
            {props.children}
        </Container>
    )
}

export default MainContainer;
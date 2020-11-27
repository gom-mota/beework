import styled from 'styled-components/native';

export const Container = styled.View`
        flex-direction: row;
        align-items: center;
`;

export const Input = styled.TextInput`
        padding: 14px;  
        color: #4F4F4F;
`;

export const TextInput = styled(Input)`
        width: 354px;
        background-color: #F2EEFD;
        width: 354px;
        border-radius: 8;
        margin: 7px;
        elevation: 5; 
`;

export const PasswordInput = styled(Input)`
        width: 314px;
`;

export const ContainerPasswordInput = styled.View`
        flex-direction: row;
        align-items: center;
        background-color: #F2EEFD;
        width: 354px;
        border-radius: 8;
        margin: 7px;
        elevation: 5;        
`;

export const ToggleButton = styled.TouchableOpacity`
        height: 100%;
        width: 100%;
        padding:10px;
        align-items: center;
        flex-direction: row;
`;
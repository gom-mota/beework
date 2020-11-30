import styled from 'styled-components/native';

export const ContainerError = styled.View`
        align-items: flex-start;
        width: 354px;
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

export const ErrorInput = styled.Text`
        color: #ab2e2e;
        font-family: 'Roboto_500Medium';
        font-size: 12px;
        height:20px;
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
        padding:5px;
        align-items: center;
        flex-direction: row;
`;
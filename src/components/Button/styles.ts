import styled from 'styled-components/native';

export const Button = styled.TouchableHighlight`
    width: 294px;
    background-color: ${props => `${props.background}`};
    border-radius: 8px;    
    color:#ffffff;
    align-items: center;
    justify-content: center;
    padding:18px;
    elevation: 5;
`;

export const ButtonSmall = styled.TouchableHighlight`
    background-color: ${props => `${props.background}`};
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 14px;
    padding-right: 14px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    elevation: 5;
`;

export const Text = styled.Text`
    color:#ffffff;
    font-size: 20px;
    font-family: 'Inter_600SemiBold';
    position: absolute;
`;

export const TextSmall = styled.Text`
    color:#ffffff;
    font-size: 14px;
    font-family: 'Inter_600SemiBold';
`;

export const ContainerIcon = styled.View`
    margin-left: 220px;
`;

export const Container = styled.View`
    margin:22px;
`;
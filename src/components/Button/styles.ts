import styled from 'styled-components/native';

export const Button = styled.TouchableHighlight`
        width: 294px;
        border-radius: 8px;
        background-color: ${props => `${props.background}`};
        color:#ffffff;
        align-items: center;    
        justify-content: center;    
        padding:18px;        
        elevation: 5;
    `;

    export const Text = styled.Text`
        color:#ffffff;
        font-size: 20px;
        font-family: 'Inter_600SemiBold';
        position: absolute;
    `;

    export const ContainerIcon = styled.View`
        margin-left: 220px;
    `;
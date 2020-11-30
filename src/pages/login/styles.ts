import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/1124;

export const Container = styled.KeyboardAvoidingView`
        flex: 1;
        background-color: #F7F8FE;
        align-items: center;
`;

export const Title = styled.Text`
      font-family: 'MPLUSRounded1c_700Bold';
      color: #322066;
      font-size: 50px;
      position: absolute;
`;

export const ContainerTitle = styled.View`
        padding-bottom: 30px;
        align-items:center;
        justify-content: center;
`;

export const ContainerResetPassword = styled.View`
        margin-top: 10px;
        margin-bottom: 20px;
        display: flex;
        width:100%;
        justify-content: space-between;
`;

export const ContainerSignUp = styled.View`
        margin-top: 20px;
`;

export const Banner = styled.Image`
        width:${win.width};
        height:${ratio*747};
`;
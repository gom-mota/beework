import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/1124;

export const Container = styled.View`
        padding-bottom: 20px;
        align-items:center;
        justify-content: center;
`;

export const Banner = styled.Image`
        width:${win.width};
        height:${ratio*747};
`;

export const Title = styled.Text`
      font-family: 'MPLUSRounded1c_700Bold';
      padding-top:20px;
      color: #322066;
      font-size: 50px;
      position: absolute;
`;
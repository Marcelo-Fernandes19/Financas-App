import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.KeyboardAvoidingView`
flex: 1;
padding-top: ${100 + getStatusBarHeight()};
background-color: #121212;
align-items: center;
`;

export const Background = styled.View`
color: ${props => props.cor};
font-size: 25px;
`;

export const Logo = styled.Image`
color: #FFF;
font-size: 20px;
`;

export const AreaInput = styled.View`
background-color: #DDD;
padding: 5px;
border-radius: 5px;
width: 90%;
justify-content: center;
align-items: center;
`;

export const Input = styled.TextInput`
color: #000;
font-size: 20px;
`;
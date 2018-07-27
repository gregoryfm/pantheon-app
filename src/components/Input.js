// @flow

import React from 'react';
import styled from 'styled-components/native';

const InputWrapper = styled.View`
  padding: 10px;
  border-bottom-color: ${props => props.theme.colors.secondaryColor};
  border-bottom-width: 2.5;
  margin-top: 24px;
`;

const RegisterTextInput = styled.TextInput.attrs({
  placeholderTextColor: props => props.theme.colors.secondaryColor,
  underlineColorAndroid: 'rgba(0,0,0,0)',
  selectionColor: props => props.theme.colors.secondaryColor,
  autoCapitalize: 'none',
})`
  height: 60;
  width: 100%;
  font-size: 20;
  color: white;
  margin-bottom: -10px;
`;

type Props = {
  name?: string,
  placeholder?: string,
  value?: string,
  onChangeText?: string => void,
  secureTextEntry?: boolean,
};

const Input = (props: Props) => (
  <InputWrapper>
    <RegisterTextInput {...props} />
  </InputWrapper>
);

export default Input;

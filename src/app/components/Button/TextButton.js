import React from 'react';
import {Button} from 'react-native-paper';

const TextButton = ({children, labelStyle, ...restProps}) => {
  return (
    <Button mode="text" labelStyle={labelStyle} {...restProps}>
      {children}
    </Button>
  );
};

export default TextButton;

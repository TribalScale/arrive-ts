import React from 'react';
import PropTypes from 'prop-types';
//Components
import {Box, SafeArea} from './styled';

const Container = ({children, style}) => {
  return (
    <SafeArea>
      <Box style={style}>{children}</Box>
    </SafeArea>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default Container;

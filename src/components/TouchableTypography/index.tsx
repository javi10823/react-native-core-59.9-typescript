import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Typography } from '..';
import { TypographyProps } from '../typography';

type Props = {
  containerStyle?: object;
  children: Typography | string;
  onPress: () => void;
} & TypographyProps;

const TouchableTypography = ({ onPress, children, containerStyle, ...props }: Props) =>
  !children ? null : (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Typography {...props}>{children}</Typography>
    </TouchableOpacity>
  );

TouchableTypography.defaultProps = {
  containerStyle: {},
  onPress: () => {},
  children: null,
};

export default TouchableTypography;

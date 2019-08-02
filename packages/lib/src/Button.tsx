import React, { FC } from 'react';
import { Button as MUIButton } from '@material-ui/core';

export interface ButtonProps {
  suffix?: string;
}

export const Button: FC<ButtonProps> = ({suffix, children}) =>
  <MUIButton>{children}{suffix}</MUIButton>;

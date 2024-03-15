import { HTMLInputTypeAttribute } from 'react';
import {
  TButtonSize,
  TButtonVariant,
  TItemLinkSize,
  TItemLinkVariant
} from './type';

export interface IButtonProps {
  title: string;
  size?: TButtonSize;
  variant?: TButtonVariant;
  onClick?: () => void;
}

export interface IItemLinkProps {
  title: string;
  size?: TItemLinkSize;
  variant?: TItemLinkVariant;
  description?: string;
  image: string;
  additionalClass?: string;
  onClick?: () => void;
}

export interface INavItemProps {
  title: string;
  subsTitle: string;
}

export interface IInputProps {
  type?: HTMLInputTypeAttribute
  placeholder?: string
}


export interface ISearchBarProps {
  icon?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

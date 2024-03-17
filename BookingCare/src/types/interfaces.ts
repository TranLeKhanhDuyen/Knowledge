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
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  name?: string;
  value?: string;
}

export interface ISearchBarProps {
  icon?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export interface IImageProps {
  width?: number;
  height?: number;
  src: string;
  alt?: string;
}

export interface IItemFooterProps {
  link?: string;
  text: string;
}

export interface ITableProps {
  data: {
    rows: {
      firstname?: string;
      lastname?: string;
      email?: string;
      address?: string;
    }[];
  };
  columnTitles: {
    [key: string]: string;
  };
}

import { TButtonSize, TButtonVariant } from '@components/common/Button/Button';
import { TImageVariant } from '@components/common/Image/Image';
import { TInputVariant } from '@components/common/Input/Input';
import {
  TItemLinkSize,
  TItemLinkVariant
} from '@components/common/ItemLink/ItemLink';

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
  variant?: TInputVariant;
  placeholder?: string;
  name?: string;
  value?: string;
  additionalClass?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IImageProps {
  variant?: TImageVariant;
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

export interface IHeaderProps {
  navbarData: THeader;
}

export interface THeader {
  width?: number;
  height?: number;
  image: string;
  alt?: string;
  items: {
    id: string;
    title: string;
    subtitle: string;
  }[];
}

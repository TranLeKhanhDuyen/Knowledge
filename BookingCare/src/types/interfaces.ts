
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
  navbarData: IHeader;
}

export interface IHeader {
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

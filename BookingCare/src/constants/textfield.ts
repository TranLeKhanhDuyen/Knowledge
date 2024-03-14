import { IListTextField } from '@components/TextField/TextField';

export const TEXT_FIELD: IListTextField[] = [
  {
    items: [
      {
        label: 'Email',
        type: 'email',
        name: 'email',
        value: ''
      },
      {
        label: 'Password',
        type: 'password',
        name: 'password',
        value: ''
      },
      {
        label: 'First name',
        type: 'text',
        name: 'fistname',
        value: ''
      },
      {
        label: 'Last name',
        type: 'text',
        name: 'lastname',
        value: ''
      },
      {
        label: 'Phone number',
        type: 'number',
        name: 'phonenumber',
        value: ''
      },
      {
        label: 'Address',
        type: 'text',
        name: 'address'
      },
      {
        label: 'Gender',
        type: 'select',
        name: 'gender',
        options: ['Male', 'Female']
      },
      {
        label: 'Position',
        type: 'select',
        name: 'positition',
        options: ['Male', 'Female']
      },
      {
        label: 'Role',
        type: 'select',
        name: 'email',
        options: ['Doctor', 'User']
      }
    ]
  }
];

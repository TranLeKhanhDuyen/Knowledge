import { Form } from '@components'
import { Button, Heading, OptionList } from '@components/common'
import InputField from '@components/common/InputField/InputField'
import { ChangeEvent, useState } from 'react'

interface IRegisterProps {
  firstName: string
  lastName: string
  email: string
  address: string
  phoneNumber: string
  dob: string
  gender: string
  password: string
  confirmPassword: string
  isShowPassword: boolean
  errMessage: string
}

const Register = () => {
  const [state, setState] = useState<IRegisterProps>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: '',
    isShowPassword: false,
    errMessage: ''
  })

  const handleOnChangeFirstName = (value: string) => {
    setState({ ...state, firstName: value })
  }

  const handleOnChangeLastName = (value: string) => {
    setState({ ...state, lastName: value })
  }

  const handleOnChangeEmail = (value: string) => {
    setState({ ...state, email: value })
  }

  const handleOnChangeAddress = (value: string) => {
    setState({ ...state, address: value })
  }

  const handleOnChangePhoneNumber = (value: string) => {
    setState({ ...state, phoneNumber: value })
  }

  const handleOnChangeDob = (value: string) => {
    setState({ ...state, dob: value })
  }

  const handleOnChangeGender = (event: ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, gender: event.target.value })
  }

  const handleOnChangePassword = (value: string) => {
    setState({ ...state, password: value })
  }

  const handleOnChangeConfirmPassword = (value: string) => {
    setState({ ...state, confirmPassword: value })
  }

  return (
    <div className='authen-background'>
      <div className='authen-container register-container'>
        <Heading
          variant='h1'
          content='ĐĂNG KÝ'
          style={{
            fontSize: 'var(--font-5xl)',
            textAlign: 'center',
            color: 'var(--turquoise-color)'
          }}
        />

        <Form className='form-input register-form'>
          <InputField
            label='Tên'
            type='text'
            className='firstName text-field'
            placeholder='Nhập tên của bạn'
            value={state.firstName}
            onChangeValue={handleOnChangeFirstName}
          />

          <InputField
            label='Họ'
            type='text'
            className='lastName text-field'
            placeholder='Nhập họ của bạn'
            value={state.lastName}
            onChangeValue={handleOnChangeLastName}
          />

          <InputField
            label='Email'
            type='email'
            className='email text-field'
            placeholder='Nhập email của bạn'
            value={state.email}
            onChangeValue={handleOnChangeEmail}
          />

          <InputField
            label='Địa chỉ'
            type='text'
            className='address text-field'
            placeholder='Nhập địa chỉ của bạn'
            value={state.address}
            onChangeValue={handleOnChangeAddress}
          />

          <InputField
            label='Số điện thoại'
            type='tel'
            className='phoneNumber text-field'
            placeholder='Nhập số điện thoại của bạn'
            value={state.phoneNumber}
            onChangeValue={handleOnChangePhoneNumber}
          />

          <InputField
            label='Ngày sinh'
            type='date'
            className='dob text-field'
            value={state.dob}
            onChangeValue={handleOnChangeDob}
          />

          <InputField
            label='Đặt mật khẩu'
            type='password'
            className='password text-field'
            placeholder='Nhập số mật khẩu của bạn'
            value={state.password}
            onChangeValue={handleOnChangePassword}
          />

          <InputField
            label='Xác nhận mật khẩu'
            type='password'
            className='password text-field'
            placeholder='Nhập lại mật khẩu của bạn'
            value={state.confirmPassword}
            onChangeValue={handleOnChangeConfirmPassword}
          />

          <div className='gender'>
            <label>Giới tính</label>
            <OptionList
              className='optionlist'
              items={[
                { id: '1', value: 'Nam' },
                { id: '2', value: 'Nữ' }
              ]}
              onChange={handleOnChangeGender}
              value={state.gender}
              style={{
                padding: '5px',
                border: '1px solid var(--gray-color)',
                borderRadius: '5px',
                width: '100%',
                margin: '15px 0'
              }}
            />
          </div>
        </Form>

        <Button
          title='Đăng ký'
          variant='secondary'
          additionalClass='register'
        />
      </div>
    </div>
  )
}

export default Register

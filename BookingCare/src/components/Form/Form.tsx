import { Input } from "@components/common"
import { IInputProps } from "@components/common/Input/Input";

export interface IFormProps {
  label: string;
  items: IInputProps
}

const Form = ({ items, label }: IFormProps) => {
  return (
    <>
      <form action="">
        <label>{label}</label>
        <Input
          variant={items.variant}
          placeholder={items.placeholder}
          onChange={items.onChange}
        />
      </form>
    </>
  )
}
export default Form

import './Options.css'

interface IOptionsProps extends React.HTMLProps<HTMLOptionElement> {
  items: {
    id: string
    value: string
  }[]
}

const OptionList = ({ items }: IOptionsProps) => (
  <select className='cursor select'>
    {items.map((option) => (
      <option key={option.id} value={option.value}>
        {option.value}
      </option>
    ))}
  </select>
)

export default OptionList

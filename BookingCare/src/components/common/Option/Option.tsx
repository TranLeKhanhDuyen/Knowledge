import './Option.css'

interface IOptionsProps {
  items: {
    id: string;
    value: string;
  }[]
}

const OptionList = ({ items }: IOptionsProps) => {
  return (
    <select className="cursor select">
      {items.map(option => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  )
}

export default OptionList

import './TextField.css'
interface ITextField {
  label: string;
  type: string;
  name: string;
  value?: string;
  options?: string[];
}

export interface IListTextField {
  items: ITextField[];
}

const TextField = ({ items }: IListTextField) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="text-field-item">
          <label>{item.label}</label>
          {item.type === 'select' ? (
            <select className='select' id={item.name} name={item.name} value={item.value}>
              {item.options?.map((option, optionIndex) => (
                <option className='option' key={optionIndex} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input className='textfield-input' type={item.type} id={item.name} name={item.name} value={item.value} />
          )}
        </div>
      ))}
    </>
  );
};
export default TextField;

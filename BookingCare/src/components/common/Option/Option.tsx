const Option = ({ title }: { title: string }) => {
  return (
    <>
      <select>
        <option>{title}</option>
      </select>
    </>
  )
}

export default Option

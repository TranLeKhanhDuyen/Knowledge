export interface ITextProps {
  title?: string,
  subsTitle?: string,
  description?: string,
  additionalClass?: string
}

const Text = ({
  title,
  subsTitle,
  description,
  additionalClass
}: ITextProps) => {
  return (
    <div className={`text-container ${additionalClass}`}>
      <p className="text-title">{title}</p>
      <p className="text-substitle">{subsTitle}</p>
      <p className="text-description">{description}</p>
    </div>
  )
}

export default Text;


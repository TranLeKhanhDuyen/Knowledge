export interface ITextProps {
  title?: string,
  susTitle?: string,
  description?: string
}

const Text = ({ title, susTitle, description }: ITextProps) => {
  return (
    <div className="text-container">
      <p className="text-title">{title}</p>
      <p className="text-substitle">{susTitle}</p>
      <p className="text-description">{description}</p>
    </div>
  )
}

export default Text;

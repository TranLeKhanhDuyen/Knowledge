export interface ITextProps {
  title?: string,
  susTitle?: string,
  description?: string
}

const Text = ({ title, susTitle, description }: ITextProps) => {
  <>
    <p className="text-title">{title}</p>
    <p className="text-substitle">{susTitle}</p>
    <p className="text-description">{description}</p>
  </>
}

export default Text

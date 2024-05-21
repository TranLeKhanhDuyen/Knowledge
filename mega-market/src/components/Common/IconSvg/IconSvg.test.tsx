import { render } from '@testing-library/react'
import IconSvg from '../IconSvg'

describe('IconSvg component', () => {
  test('renders the correct icon based on the "name" prop', () => {
    const iconName = 'call'
    const { getByTestId } = render(<IconSvg name={iconName} />)
    const iconElement = getByTestId('icon-svg')

    expect(iconElement).toBeInTheDocument()
  })

  test('adds custom className to the icon', () => {
    const iconName = 'user'
    const customClassName = 'custom-class'
    const { getByTestId } = render(
      <IconSvg name={iconName} className={customClassName} />
    )
    const iconElement = getByTestId('icon-svg')

    expect(iconElement).toHaveClass(`icon-${iconName}`)
    expect(iconElement).toHaveClass(customClassName)
  })
})

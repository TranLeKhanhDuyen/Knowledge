import { render } from '@testing-library/react'
import Copyright from '.'

describe('Copyright component', () => {
  test('renders with correct text content', () => {
    const companyName = 'Agility'
    const year = 2024
    const { getByText } = render(
      <Copyright companyName={companyName} year={year} />
    )

    expect(
      getByText(`© ${year} All rights reserved. ${companyName}.`)
    ).toBeInTheDocument()
  })

  test('renders with correct class names', () => {
    const companyName = 'Test Company'
    const year = 2024
    const { container } = render(
      <Copyright companyName={companyName} year={year} />
    )

    const paragraphElement = container.querySelector('p')
    expect(paragraphElement).toHaveClass('container')
    expect(paragraphElement).toHaveClass('copyright')
  })

  test('renders correctly with different props', () => {
    const companyName = 'Another Company'
    const year = 2025
    const { getByText } = render(
      <Copyright companyName={companyName} year={year} />
    )

    expect(
      getByText(`© ${year} All rights reserved. ${companyName}.`)
    ).toBeInTheDocument()
  })

  test('matches snapshot', () => {
    const companyName = 'Snapshot Company'
    const year = 2024
    const { asFragment } = render(
      <Copyright companyName={companyName} year={year} />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})

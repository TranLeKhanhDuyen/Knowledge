import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'
// import '@testing-library/jest-dom/extend-expect'

test('renders greeting message', () => {
  render(<Greeting name='John' />)
  const greetingElement = screen.getByText(/hello, john!/i)
  expect(greetingElement).toBeInTheDocument()
})

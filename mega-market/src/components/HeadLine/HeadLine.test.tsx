import { render } from '@testing-library/react'
import HeadLine, { IHeadline } from '.'

describe('HeadLine', () => {
  const renderHeadLine = (props: Partial<IHeadline> = {}) => {
    const defaultProps: IHeadline = {
      title: 'Test Title',
      subTitle: 'Test Subtitle',
      showButton: true,
      ...props
    }
    return render(<HeadLine {...defaultProps} />)
  }

  test('does not render button if showButton is false', () => {
    const { queryByText } = renderHeadLine({ showButton: false })
    expect(queryByText('View All')).not.toBeInTheDocument()
  })
})

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GettingStarted from '@/components/GettingStarted'
 
describe('Getting Started', () => {
  it('renders a div', () => {
    render(<GettingStarted />)
 
    const div = screen.getByTestId("GettingStarted")
 
    expect(div).toBeInTheDocument()
  })
})
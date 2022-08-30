import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import {assert, beforeEach, describe, expect, it} from 'vitest'
import '@testing-library/jest-dom'

import App from '.'

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the instruction', () => {
    expect(screen.getByText('Update the product data table above')).toBeInTheDocument();
  })

  it('renders the product table', () => {
    expect(screen.getByTestId('table')).toBeInTheDocument();
  })
})

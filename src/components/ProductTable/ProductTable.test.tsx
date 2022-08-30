import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import {assert, beforeEach, describe, expect, it} from 'vitest'
import '@testing-library/jest-dom'

import {ProductTable} from '.'

describe('ProductTable', () => {
  beforeEach(() => {
    render(<ProductTable />);
  });

  it('renders the product table', () => {
    expect(screen.getByTestId('table')).toBeInTheDocument();
  })

  it('renders the product columns', () => {
    expect(screen.getAllByTestId('column')).toHaveLength(7);
  })

  it('product columns are accurate', () => {
    expect(screen.getByText(/Product SKU/)).toBeInTheDocument();
    expect(screen.getByText(/Quantity/)).toBeInTheDocument();
    expect(screen.getByText(/Price/)).toBeInTheDocument();
    expect(screen.getByText(/Subtotal/)).toBeInTheDocument();
    expect(screen.getByText(/Shipping/)).toBeInTheDocument();
    expect(screen.getByText(/Tax \(7%\)/)).toBeInTheDocument();
    expect(screen.getByText(/Total/)).toBeInTheDocument();
  })
})

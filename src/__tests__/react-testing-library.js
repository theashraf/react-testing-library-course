import 'jest-dom/extend-expect'
import React from 'react'
import {render} from 'react-testing-library'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const {getByLabelText} = render(<FavoriteNumber />)
  expect(getByLabelText('Favorite Number')).toHaveAttribute('type', 'number')
})
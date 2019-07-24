import React from 'react';
import ReactDOM from 'react-dom';
import BookingList from './BookingList';
import renderer from 'react-test-renderer';

describe('BookingList Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< BookingList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<BookingList/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})

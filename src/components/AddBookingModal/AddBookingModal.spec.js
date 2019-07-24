import React from 'react';
import ReactDOM from 'react-dom';
import AddBookingModal from './AddBookingModal';
import renderer from 'react-test-renderer';

describe('AddBookingModal Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< AddBookingModal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AddBookingModal/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})

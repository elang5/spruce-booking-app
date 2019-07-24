import React from 'react';
import ReactDOM from 'react-dom';
import AddBookingForm from './AddBookingForm';
import renderer from 'react-test-renderer';

describe('AddBookingForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< AddBookingForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AddBookingForm/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})

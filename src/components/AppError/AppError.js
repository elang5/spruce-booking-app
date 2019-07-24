import React, {Component} from 'react';
  
export default class AppError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {      
      return (
        <div className='error'>
          <h1>Oh no! There was an error. We will get this fixed ASAP!</h1>
        </div>

      );
    }
    return this.props.children;
  } 
}
  
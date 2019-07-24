import React from 'react'
import { StageSpinner } from 'react-spinners-kit'
import './Loading.css'


export default function Loading(props) {
  return (
    <div className="loading-container">
      <StageSpinner
        className={props.className}
        size={50}
        color="grey"
        loading={props.loading}
      />
    </div>
  )
}

Loading.defaultProps = {
  className: '',
  loading: false
}

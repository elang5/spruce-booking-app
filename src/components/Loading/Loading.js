import { StageSpinner } from 'react-spinners-kit'

import React from 'react'

export default function Loading(props) {
  return (
    <StageSpinner
      size={50}
      color="grey"
      loading={props.loading}
    />
  )
}

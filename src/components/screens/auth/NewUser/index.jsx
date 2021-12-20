import React from 'react'
import roles from '../../../shared/data/roles.js'
import ButtonMap from '../../../shared/ButtonMap'

const NewUser = ({ props }) => (
  <div className='container'>
    <div className='role-container'>
      {roles.map((role) => {
        return <ButtonMap {...role}/>
      })}
    </div>
  </div>
)

export default NewUser
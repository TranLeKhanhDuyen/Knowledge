import React from 'react'
import './CopyRight.css'

interface CopyrightProps {
  companyName: string
  year: number
}

const Copyright: React.FC<CopyrightProps> = ({ companyName, year }) => {
  return (
      <p className='container copyright'>
        © {year} All rights reserved. {companyName}.
      </p>
  )
}

export default Copyright

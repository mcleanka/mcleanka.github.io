import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

export default function NotFound() {
  return (
    <>
      {<ul className="fa-ul mb-0">
        <li className='text-danger'>
          <span className="fa-li">
            <FaExclamationTriangle size={25} />
          </span> {' '}
          {'No experience found 😬'}
        </li>
      </ul>}
    </>
  )
}

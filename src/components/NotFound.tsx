import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

interface INotFound {
  title?: string;
}

export default function NotFound(props: INotFound) {
  return (
    <>
      {<ul className="fa-ul mb-0">
        <li className='text-danger'>
          <span className="fa-li">
            <FaExclamationTriangle size={25} />
          </span> {' '}
          {props.title ?? 'No resource found 😬'}
        </li>
      </ul>}
    </>
  )
}

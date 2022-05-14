import React from 'react'
import "./events.css"
import Event from './Event'


function Events() {

  return (
    <div className='events-div'>
      <Event image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" />
      <Event image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" />
      <Event image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" />
      <Event image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" label={"Coming soon..."} />
      <Event image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" label={"Coming soon..."} />
      <Event image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" label={"Coming soon..."} />
      <Event image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png" background="#f7f295" label={"Coming soon..."} />
      <Event image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png" background="#ee7074" label={"Coming soon..."} />
      <Event image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png" background="#52649e" label={"Coming soon..."} />
    </div>
  )
}

export default Events
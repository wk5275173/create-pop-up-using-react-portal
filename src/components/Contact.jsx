// import React from 'react'

// export default function Contact() {
//   return (
//     <h1 className='text-xl'>Connect with us on  <a className='text-blue-600 hover:text-blue-700' href="https://www.youtube.com/@procodrr" target='_blank'>Youtube</a></h1>
//   )
// }


//we can also use that model in conact

import React from 'react'
import Modal from './Modal'
import { useState } from 'react'

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <h1 className='text-xl'>Connect with us on  <a className='text-blue-600 hover:text-blue-700' href="https://www.youtube.com/@procodrr" target='_blank'>Youtube</a></h1>
    <button onClick={() => setIsOpen(true)}>Open Popup</button>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} header={<p className='text-red-500'>hi</p>} footer={<div className='flex justify-end'><button onClick={() => setIsOpen(false)} className='font-bold bg-slate-300 px-4 py-2 rounded'>Ok</button></div>}>
    <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolorem
    voluptate exercitationem inventore voluptates error ipsa saepe illum animi
    consequuntur cumque earum corrupti veritatis molestias, commodi placeat quam, ut debitis!
    </p>
    </Modal>
    </>
  )
}
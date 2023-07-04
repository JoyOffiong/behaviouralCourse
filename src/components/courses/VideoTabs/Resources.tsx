import { DocumentText, DocumentText1 } from 'iconsax-react'
import React from 'react'

function Resources() {
  const resources = [
    {
      text: 'Cognitive Bias Awareness.docx',
      button: 'Document',
    },
    {
      text: 'Cognitive Bias Awareness.docx',
      button: 'Document',
    },
    {
      text: 'Cognitive Bias Awareness.docx',
      button: 'Document',
    },
    {
      text: 'Cognitive Bias Awareness.docx',
      button: 'Document',
    },
    {
      text: 'Cognitive Bias Awareness.docx',
      button: 'Document',
    }
  ]

  const colors = ['red', '#1D6FEB', '#EB8C1D']
  let colorIndex = 0;

  return (
    <div>
      {resources.map((resource, index) => {
        const { text, button } = resource
        const color = colors[colorIndex]
        colorIndex = (colorIndex +1) % colors.length; // Increment colorIndex and wrap around

        return (
          <div key={index} className='flex justify-between px-4 font-sans pt-4'>
            <div className='border-b-[2px] pb-2 flex justify-between w-full'>
              <div className='flex flex-row gap-4'>
                <DocumentText1 size="24" color={color} variant='Bulk' />
                <p className='text-[#596080] text-sm'>{text}</p>
              </div>
              <button type='button' className='text-[#2D41A5] text-xs font-semibold'>{button}</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Resources

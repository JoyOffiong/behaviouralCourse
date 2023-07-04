import { ExportSquare } from 'iconsax-react'
import React from 'react'

function UsefulLink() {
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
    }
  ]

  const colors = ['#EB81D', '#1D6FEB', '#EB8C1D']
  let colorIndex = 0;

  return (
    <div>
      {resources.map((resource, index) => {
        const { text, button } = resource
        const color = colors[colorIndex]
        colorIndex = (colorIndex + 1) % colors.length; // Increment colorIndex and wrap around

        return (
          <div key={index} className='flex justify-between px-4  font-sans '>
            <div className='border-b-[2px] pb-2 flex justify-between w-full'>
              <div className='flex flex-row  pt-4 gap-4'>
              <ExportSquare size="20" color="#596080" variant='Outline'/>
              <a href="" target="_blank" className='text-xs' style={{textDecoration:'underline'}}>{text}</a>   
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UsefulLink;

import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-4 mx-1 rounded-xl bg-red-400">
        <div className="flex items-center justify-between">
          <h3 className="bg-gray-500 text-sm p-1 rounded-md">{data.priority}</h3>
          <h3>{data.dueDate}</h3>
        </div>
        <h3 className="mt-4 text-2xl font-semibold">{data.title}</h3>
        <p className="mt-2 text-sm">
        {data.description}
        </p>
        <h4 className="mt-4 text-lg font-semibold">Category: {data.category}</h4>
        <div className='flex justify-between mt-2'>
            <h5 className="text-sm font-semibold">Assigned To: {data.assignedTo}</h5>
        </div>
        <div className='mt-4'>
            <button className='bg-red-500 rounded py-1 px-2 text-sm'>Task Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
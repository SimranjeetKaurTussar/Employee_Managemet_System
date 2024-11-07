import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-4 mx-1 rounded-xl bg-blue-400">
        <div className="flex items-center justify-between">
        <h3 className="bg-gray-900 text-sm p-1 rounded-md">{data.category}</h3>
        <h3>{data.taskDate}</h3>
        </div>
        <h3 className="mt-4 text-2xl font-semibold">{data.taskTitle}</h3>
        <p className="mt-2 text-sm">
        {data.taskDescription}
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-blue-500 rounded py-1 px-2 text-sm'>Mark as Completed</button>
            <button className='bg-red-500 rounded py-1 px-2 text-sm'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
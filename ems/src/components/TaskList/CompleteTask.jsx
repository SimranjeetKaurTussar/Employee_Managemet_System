import React from 'react'

const CompleteTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-4 mx-1 rounded-xl bg-green-400">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-400 text-sm p-1 rounded-md">High</h3>
          <h3>02 November 2024</h3>
        </div>
        <h3 className="mt-4 text-2xl font-semibold">Make a youtube video</h3>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolor
          recusandae numquam tempore quasi.ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, voluptatum.
        </p>
        <div className='mt-4'>
            <button className='bg-blue-500 rounded py-1 px-2 text-sm'>Task Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask
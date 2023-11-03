"use client";
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>



  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-4'>
          <div className='flex items-center justify-between w-2/3 border border-slate-400 rounded-[5px] px-2 py-2 '>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
          <button onClick={() => {
            deleteHandler(i)
          }} className='bg-red-400 text-white px-4 py-2 rounded hover:bg-red-700 font-bold'>Delete</button>
          </div>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800 border border-3 m-5 px-4 py-2'
          placeholder='Enter Task here'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input type="text" className='text-2xl border-zinc-800 border border-3 m-5 px-4 py-2'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className='bg-black text-white text-2xl font-bold rounded px-5 py-3 m-5'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page

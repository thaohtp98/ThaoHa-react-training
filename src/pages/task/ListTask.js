import React, { useEffect, useState } from 'react'
import { get } from '@/api/BaseRequest'
import RemoveTask from '@/pages/task/RemoveTask'
import AddTask from '@/pages/task/AddTask'

const ListTask = () => {
  const listTask = async() => {
    const urlTask = '/task'
    const responseTask = await get(urlTask)
    setTasks(responseTask.data.data)
  }

  useEffect(() => {
    listTask()
  }, [])

  const [tasks, setTasks] = useState([])

  return (
    <div className='py-5'>
      <div className='container'>
        <AddTask></AddTask>
        <div className='table-responsive-md'>
          <table className='table table-striped table-hover text-center'>
            <thead>
              <tr className='table-active'>
                <th scope='col'>#</th>
                <th scope='col'>Title</th>
                <th scope='col'>Status</th>
                <th scope='col'>Created At</th>
                <th scope='col'>Updated At</th>
                <th scope='col'>Active</th>
              </tr>
            </thead>
            <tbody>
              {tasks && tasks.map((task, index) => (
                <tr key = {task.id}>
                  <th scope='row'> { index + 1} </th>
                  <td> { task.title } </td>
                  <td> { task.status } </td>
                  <td> { task.created_at } </td>
                  <td> { task.updated_at } </td>
                  <td className='d-flex justify-content-center'>
                    <button className='btn btn-warning mx-1'>Edit</button>
                    <RemoveTask taskId={task.id} taskTitle={task.title}></RemoveTask>
                  </td>
                </tr>
              )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListTask

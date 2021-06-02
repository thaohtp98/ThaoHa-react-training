import React, { useEffect, useState } from 'react'
import { get } from '@/api/BaseRequest'

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
                  <td>
                    <button className='btn btn-warning mx-1'>Edit</button>
                    <button className='btn btn-danger mx-1'>Remove</button>
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

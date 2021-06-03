import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { post } from '@/api/BaseRequest'
import moment from 'moment'
import { getStorageItem } from '@/helper'

const AddTask = (props) => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const [inputs, setInputs] = useState({
    title: '',
    status: ''
  })

  const { title, status } = inputs

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs(inputs => ({ ...inputs, [name]: value }))
  }

  const handleAddTask = async(e) => {
    e.preventDefault()
    const url_add_ask = `/task`
    const data_add_ask = {
      'title': inputs.title,
      'status': inputs.status,
      'user_id': getStorageItem('user_id'),
      'created_at': moment().format('YYYY-MM-DD hh:mm:ss'),
      'updated_at': moment().format('YYYY-MM-DD hh:mm:ss')
    }
    const response_add_task = await post(url_add_ask, data_add_ask)
    console.log(response_add_task)
    return response_add_task
  }

  return (
    <div className='mb-4 d-flex justify-content-end'>
      <Button color='success' onClick={toggle}>Add</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <Form onSubmit={handleAddTask}>
          <ModalHeader toggle={toggle}>Add new task</ModalHeader>
          <ModalBody>
            <FormGroup className='my-2'>
              <Label for='title'>Title</Label>
              <Input type='text' name='title' id='title' placeholder='Input title' onChange={handleChange} value={title} />
            </FormGroup>
            <FormGroup className='my-2'>
              <Label for='status'>Status</Label>
              <Input type='text' name='status' id='status' placeholder='Input status' onChange={handleChange} value={status} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='success' type='submit' onClick={toggle}>Add</Button>
            <Button color='dark' onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  )
}

export default AddTask

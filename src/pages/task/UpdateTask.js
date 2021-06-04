import React, { useRef, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import { put } from '@/api/BaseRequest'
import { getStorageItem } from '@/helper'

const UpdateTask = (props) => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const titleRef = useRef()

  const statusRef = useRef()

  const handleUpdateTask = async(e) => {
    e.preventDefault()
    const url_update_ask = `/task/${props.taskId}`
    const data_update_task = {
      'id': props.taskId,
      'title': titleRef.current.value,
      'status': statusRef.current.value,
      'user_id': getStorageItem('user_id')
    }
    const response_update_task = await put(url_update_ask, data_update_task)
    console.log(response_update_task)
    return response_update_task
  }

  return (
    <div className='mx-1'>
      <Button color='warning' onClick={toggle}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <Form onSubmit={handleUpdateTask}>
          <ModalHeader toggle={toggle}>Update <b>{props.taskTitle}</b></ModalHeader>
          <ModalBody>
            <FormGroup className='my-2'>
              <Label for='title'>Title</Label>
              <Input innerRef={titleRef} type='text' name='title' id='title' defaultValue={props.taskTitle} />
            </FormGroup>
            <FormGroup className='my-2'>
              <Label for='status'>Status</Label>
              <Input innerRef={statusRef} type='text' name='status' id='status' defaultValue={props.taskStatus} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='warning' type='submit' onClick={toggle}>Update</Button>
            <Button color='dark' onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  )
}

export default UpdateTask

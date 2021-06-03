import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { del } from '@/api/BaseRequest'

const RemoveTask = (props) => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const handleRemoveTask = async() => {
    setModal(!modal)
    const urlTask = `/task/${props.taskId}`
    const responseRemove = await del(urlTask)
    console.log(responseRemove)
    return responseRemove
  }

  return (
    <div>
      <Button color='danger' onClick={toggle}>Remove</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Remove</ModalHeader>
        <ModalBody>
          Are you sure to remove <b>{props.taskTitle}</b>?
        </ModalBody>
        <ModalFooter>
          <Button color='danger' onClick={() => handleRemoveTask()}>Remove</Button>
          <Button color='dark' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default RemoveTask

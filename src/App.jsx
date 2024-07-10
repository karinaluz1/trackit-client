import logo from './logo.svg';
import './App.scss';
import moment from 'moment'
import Header from './components/header/header'
import Card from './components/card/card'
import Modal from './components/modal/modal'
import Button from './components/button/button'
import { useState, useRef } from 'react';

function App() {
  const descriptionRef = useRef()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [addTaskModalVisible, setAddTaskModalVisible] = useState(false)
  const [cards, setCards] = useState([])

  const handleAddTaskClick = () => {
    setAddTaskModalVisible(true)
  }

  const handleAddTaskClose = () => {
    setAddTaskModalVisible(false)
  }

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleKeyPressTask = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      descriptionRef.current.focus()
    }
  }



  const handleSaveTask = () => {
    const task = {
      id: 'x',
      title: title,
      description: description,
      date: new Date(),
      complete: false
    }
    setCards([ ...cards, task ])
    setTitle('')
    setDescription('')
    setAddTaskModalVisible(false)
  }

  return (
    <section className='content'>
      <Modal visible={addTaskModalVisible}>
        <Modal.Heading>
          <input type="text" placeholder="What do you want to track?" autoFocus onKeyDownCapture={handleKeyPressTask} value={title} onChange={handleChangeTitle} />
        </Modal.Heading>
        <Modal.Body>
          <textarea placeholder="Describe the task" rows={5} ref={descriptionRef} value={description} onChange={handleChangeDescription} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddTaskClose} type="secondary" content="Close" />
          <Button onClick={handleSaveTask} type="primary" content="Save Task" />
        </Modal.Footer>
      </Modal>
      <Header />
      <main>
        <header className='container-header'>
          <Button content='Add Task' type="primary" onClick={handleAddTaskClick} />
          <div className="custom-select">
            <select>
              <option selected>all</option>
              <option>pending</option>
              <option>completed</option>
            </select>
          </div>
        </header>
        <div className='container'>
          { cards.map(item => <Card title={item.title} date={item.date} complete={item.complete} />)}
        </div>
      </main>
      <footer></footer>
    </section>
  );
}

export default App;

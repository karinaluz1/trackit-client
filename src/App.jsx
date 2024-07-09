import logo from './logo.svg';
import './App.scss';
import moment from 'moment'
import Header from './components/header/header'
import Card from './components/card/card'
import Modal from './components/modal/modal'
import Button from './components/button/button'
import { useState } from 'react';

function App() {
  const [addTaskModalVisible, setAddTaskModalVisible] = useState(false)
  const cards = []

  const handleAddTaskClick = () => {
    setAddTaskModalVisible(true)
  }

  return (
    <section className='content'>
      <Modal visible={addTaskModalVisible} setVisible={setAddTaskModalVisible} />
      <Header />
      <main>
        <header className='container-header'>
          <Button text='Add Task' type="primary" onClick={handleAddTaskClick} />
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

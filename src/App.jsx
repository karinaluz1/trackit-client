import logo from './logo.svg';
import './App.css';
import moment from 'moment'

function App() {
  const cards = [
    {
      id: 1,
      title: 'Task 1',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      complete: false
    },
    {
      id: 2,
      title: 'Task 2',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      complete: true
    }, 
    {
      id: 2,
      title: 'Task 2',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      complete: true
    }, 
    {
      id: 2,
      title: 'Task 2',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      complete: true
    }, 
    {
      id: 2,
      title: 'Task 2',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      complete: true
    }, 
    {
      id: 2,
      title: 'Task 2',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      complete: true
    }, 
    {
      id: 2,
      title: 'Task 2',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      complete: true
    }, 
    {
      id: 2,
      title: 'Task 2',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      complete: true
    }
  ]

  return (
    <section className='content'>
      <header>
        <h1>To-do list</h1>
      </header>
      <main>
        <header className='container-header'>
          <button className='container-button'>
            Add task
          </button>
          <div className="custom-select">
            <select>
              <option selected>all</option>
              <option>pending</option>
              <option>completed</option>
            </select>
          </div>
        </header>
        <div className='container'>
          { cards.map(card => (<div className='card'>
            <div className='card-data'>
              <label className='card-label'>
                <input type="checkbox" checked={card.complete} />
                <div className="checkbox"></div>
                <div className='card-title'>
                  <span>{ card.title }</span>
                  <span className='card-date'>{ card.date }</span>
                </div>
              </label>
            </div>
            <div className='card-buttons'>
              <button><i className="fa-solid fa-pen"></i></button>
              <button><i className="fa-solid fa-trash-can"></i></button>
            </div>
          </div>))}
        </div>
      </main>
      <footer></footer>
    </section>
  );
}

export default App;
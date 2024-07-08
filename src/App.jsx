import logo from './logo.svg';
import './App.scss';
import moment from 'moment'
import Header from './components/header/header'
import Card from './components/card/card'

function App() {
  const cards = [
    {
      id: 1,
      title: 'Task 1',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      complete: false
    },
    {
      id: 1,
      title: 'sdfgsdfgsdfg',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      complete: false
    },
    {
      id: 1,
      title: 'Task 1',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      complete: false
    },
    {
      id: 1,
      title: 'Task 1',
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      complete: false
    }
  ]

  return (
    <section className='content'>
      <Header />
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
          { cards.map(item => <Card title={item.title} date={item.date} complete={item.complete} />)}
        </div>
      </main>
      <footer></footer>
    </section>
  );
}

export default App;

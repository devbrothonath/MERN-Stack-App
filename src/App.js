import './App.css'
import { Table } from './components/Table'

function App() {
  return (
    <div className='App'>
      <ul>
        <li>Click on the heading tag of any column to sort the values by ascending or descending.</li>
        <li>Use the Table Search for searching any value inside the table.</li>
        <li>Use the Search bar inside any column to do a column search.</li>
      </ul>
      <Table />
    </div>
  )
}

export default App;
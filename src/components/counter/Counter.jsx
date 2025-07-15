import reactLogo from '../../assets/react.svg'
import reduxLogo from '../../assets/redux.svg'
import styles from './Counter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, increaseCount } from './redux/CounterActions'

function Counter() {
  // const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)

  const handleIncreaseCount = () => dispatch(increaseCount())
  const handleDecreaseCount = () => dispatch(decreaseCount())

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={reduxLogo} className="logo" alt="redux logo" />
        </a>
      </div>
      <h1>React + Redux</h1>
      <div className="card">
        <button>
          count is {count}
        </button>
      </div>
      <div >
       <button onClick={handleIncreaseCount}>
          Increase
        </button>
        <button className={styles.decreaseButton} onClick={handleDecreaseCount}>
          Decrease
        </button> 
      </div>
    </>
  )
}

export default Counter

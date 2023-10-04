import { useSelector, useDispatch } from 'react-redux'
import { getStockInfo } from '@/lib/api/stocks'
import { useRouter } from 'next/router'
import { inputChange, stockInfo } from '@/lib/redux/actions/SearchAction'
import styles from './index.module.scss'
import Swal from 'sweetalert2'

function Navbar1 () {
  const inputValue = useSelector(state => state.SearchReducer)
  const allStocks = useSelector(state => state.stocksReducer)
  const dispatch = useDispatch()
  const router = useRouter()
  const con = useSelector(state => state.stockInfoReducer)

  const handleChange = e => {
    dispatch(inputChange(e.target.value))
  }

  const handleClick = () => {
    if (allStocks.find(s => s.stock_id === inputValue)) {
      const info = allStocks.filter(s => s.stock_id === inputValue)
      dispatch(stockInfo(info[0]))
      router.push({
        pathname: '/stock',
        query: { id: inputValue }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '查無此股票代號!'
      })
    }

    dispatch(inputChange(''))
    inputValue = ''
  }

  const { navbar } = styles

  return (
    <nav
      className={`${navbar} navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 border-bottom w-100`}
    >
      <div className='container-fluid '>
        <a className='navbar-brand w-25' href='/'>
          買賣力道基地
        </a>
        <div className='d-flex w-50 '>
          <input
            className='form-control me-1'
            type='search'
            placeholder='股票代號'
            aria-label='Search'
            value={inputValue}
            onChange={handleChange}
          />
          <button
            className='btn btn-outline-success w-50'
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar1

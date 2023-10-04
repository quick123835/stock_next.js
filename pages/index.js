import { getAllStocks, getStockInfo } from '@/lib/api/stocks'
import { useEffect, useState } from 'react'
import StocksListCard from '../components/StocksListCard'
import { useSelector, useDispatch } from 'react-redux'
import { getStocksList, stockInfo } from '@/lib/redux/actions/SearchAction'

const Home = () => {
  const [stocks, setStocks] = useState([])
  const [loading, setLoading] = useState(true)
  const [renderList, setRenderList] = useState([])
  const inputValue = useSelector(state => state.SearchReducer)
  const dispatch = useDispatch()

  const handleCardClick = item => {
    dispatch(stockInfo(item))
  }

  const getAllStocksAsync = async () => {
    try {
      const { data } = await getAllStocks()
      setStocks(data)
      setRenderList(data)
      dispatch(getStocksList(data))
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAllStocksAsync()
  }, [])

  useEffect(() => {
    const newList = stocks.filter(stock => stock.stock_id.includes(inputValue))
    setRenderList(newList)
  }, [inputValue])

  return (
    <div>
      {loading === true && (
        <div className='position-absolute w-100 h-100 d-flex justify-content-center align-items-center'>
          Loading...
        </div>
      )}
      {loading === false && (
        <StocksListCard
          stocksList={renderList.length !== 0 ? renderList : stocks}
          cardOnClick={handleCardClick}
        />
      )}
    </div>
  )
}

export default Home

import styles from './index.module.scss'
import Link from 'next/link'
import { useState } from 'react'

const StocksListCard = ({ stocksList, cardOnClick }) => {
  const { listContainer, card, cardInfo, cardName, stockId, paginator } = styles
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 24

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPageData =
    stocksList.length > 25 ? stocksList.slice(startIndex, endIndex) : stocksList

  const totalPages = Math.ceil(stocksList.length / itemsPerPage)

  return (
    <>
      <div className={listContainer}>
        {currentPageData.map((item, index) => (
          <Link href={`/stock/?id=${item.stock_id}`} key={index}>
            <div className={card} onClick={() => cardOnClick?.(item)}>
              <div className={cardName}>{item.stock_name}</div>
              <div className={cardInfo}>
                <span className={stockId}>代號: {item.stock_id}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={paginator}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default StocksListCard

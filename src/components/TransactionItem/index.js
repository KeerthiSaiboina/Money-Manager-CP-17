// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTranstion} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDelete = () => {
    deleteTranstion(id)
  }

  return (
    <li className="transaction-item">
      <p className="text">{title}</p>
      <p className="text">Rs {amount}</p>
      <p className="text">{type}</p>
      <div className="btn-container">
        <button
          type="button"
          testid="delete"
          onClick={onClickDelete}
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-btn"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem

import React from 'react'

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-':'+';
  return (
    <li className="minus">
        { transaction.text } <span>-$400</span><button className="delete-btn">x</button>
    </li>
  )
}

// export default Transaction
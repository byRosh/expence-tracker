import React from 'react'
import { useState } from 'react'

export const AddTransaction = () => {
	const [text, setText] = useState('')
	const [amount, setAmount] = useState(0)

	return (
		<>
			<h3>Add new transaction</h3>
			<form id="form">
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						value={text}
						onChange={(e) => setText(e.target.value)}
						type="text"
						id="text"
						placeholder="Enter text..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						type="number"
						id="amount"
						placeholder="Enter amount..."
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	)
}

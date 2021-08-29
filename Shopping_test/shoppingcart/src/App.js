//  imports
import React, { useState} from 'react';
import './index.css';

// * https://www.youtube.com/watch?v=iEVcCdbF1WQ (Hooks >> useState && useEffect)
const App = () => {

	const [items, setItems] = useState([
		{
    itemName: 'Milk',
    brand: 'Almond',
     quantity: 0, 
     units: '1 Gallon', 
    isPurchased: false 
    },
		{ 
    itemName: 'Chicken', 
    brand: 'Tyson',
    quantity: 0,
     units: '2 lbs',
     isPurchased: false
    },
		{ 
     itemName: 'Whiskey',
     brand: 'Yamazaki',
     quantity: 0 , 
     units: '750 ml',
    isPurchased: true 
    },
	]);

	const [inputValue, setInputValue] = useState('');
	const [totalItemCount, setTotalItemCount] = useState(0);

	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isPurchased: false,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
		calculateTotal();
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		calculateTotal();
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity--;

		setItems(newItems);
		calculateTotal();
	};

	const toggleComplete = (index) => {
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setTotalItemCount(totalItemCount);
	};

  return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					< span onClick={() => handleAddButtonClick()} />
				</div>
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name' onClick={() => toggleComplete(index)}>
              {item.isSelected ? (
									<div>
										<span className='completed'>{item.itemName}</span>
									</div>
								) : (
									<>
										<span>{item.itemName}</span>
									</>
								)}
							</div>
							<div className='quantity'>
								<button onClick={() => handleQuantityDecrease(index)}>
                remove Item
								</button >
								<span> {item.quantity} </span>
								<button onClick={() => handleQuantityIncrease(index)}>
									Add Item
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='total'>Total: {totalItemCount}</div>
			</div>
		</div>
	);
};

export default App;
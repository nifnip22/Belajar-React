import { ButtonProps } from '../components/elements/Button';
import Counter from '../components/fragments/Counter';
import ProductCard from '../components/fragments/ProductCard';
import { useState } from 'react';

// Contoh penggunaan Rendering Lists di React
const products = [
	{
		id: 1,
		name: 'Jam Tangan Y-5',
		price: 2000000,
		image: '/images/product-1.jpg',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias blanditiis, corporis odit ducimus expedita eveniet neque. Voluptas, omnis commodi! Maxime placeat cum magni voluptatum veniam. Vitae id
					repellat odio?`,
	},
	{
		id: 2,
		name: 'Jam Tangan X-20',
		price: 1200000,
		image: '/images/product-1.jpg',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias blanditiis, corporis odit ducimus expedita eveniet neque. Voluptas, omnis commodi!`,
	},
	{
		id: 3,
		name: 'Jam Tangan Z-7',
		price: 3500000,
		image: '/images/product-1.jpg',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias blanditiis, corporis odit ducimus expedita eveniet neque. Voluptas, omnis commodi! Maxime placeat cum magni`,
	},
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
	// useState sebagai Stateless State
	const [cart, setCart] = useState([
		{
			id: 1,
			qty: 1,
		},
	]);

	const handleAddToCart = (id: number) => {
		if(cart.find(item => item.id === id)) {
			setCart(
				cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
			)
		} else {
			setCart([...cart, { id, qty: 1 }])
		}
	};

	const handleLogout = () => {
		localStorage.removeItem('email');
		localStorage.removeItem('password');
		window.location.href = '/login';
	};

	return (
		<>
			<div className='w-full fixed flex justify-end h-10 bg-gray-200 items-center px-10'>
				{email}
				<ButtonProps classname='ml-5 bg-black' onclick={handleLogout}>
					Logout
				</ButtonProps>
			</div>

			<div className='flex justify-center space-x-4 py-20'>
				<div className='w-4/6 flex flex-wrap'>
					{products.map((product) => {
						return (
							<ProductCard key={product.id}>
								<ProductCard.Header image={product.image} />
								<ProductCard.Body name={product.name}>{product.description}</ProductCard.Body>
								<ProductCard.Footer price={product.price} handleAddToCart={handleAddToCart} id={product.id} />
							</ProductCard>
						);
					})}
				</div>
				<div className='w-2/6'>
					<h1 className='text-3xl font-bold ml-5 mb-2'>Cart</h1>
					<table className="text-left table-auto border-separate border-spacing-x-5">
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Qty</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item) => {
								const product = products.find(
									(p) => p.id === item.id
								);
								if (product) {
									return (
										<tr key={item.id}>
											<td>{product.name}</td>
											<td>{product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
											<td>{item.qty}</td>
											<td>{(item.qty * product.price).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
										</tr>
									);
								}
							})}
						</tbody>
					</table>
				</div>
			</div>

			<div className='flex w-100 mt-20 justify-center'>
				<Counter></Counter>
			</div>
		</>
	);
};

export default ProductsPage;

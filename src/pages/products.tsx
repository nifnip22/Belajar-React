import { ButtonProps } from '../components/elements/Button';
import Counter from '../components/fragments/Counter';
import ProductCard from '../components/fragments/ProductCard';
import { useEffect, useRef, useState } from 'react';
import { showProducts } from '../services/product-service';

// Contoh penggunaan Rendering Lists di React
// const products = [
// 	{
// 		id: 1,
// 		name: 'Jam Tangan Y-5',
// 		price: 2000000,
// 		image: '/images/product-1.jpg',
// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias blanditiis, corporis odit ducimus expedita eveniet neque. Voluptas, omnis commodi! Maxime placeat cum magni voluptatum veniam. Vitae id
// 					repellat odio?`,
// 	},
// 	{
// 		id: 2,
// 		name: 'Jam Tangan X-20',
// 		price: 1200000,
// 		image: '/images/product-1.jpg',
// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias blanditiis, corporis odit ducimus expedita eveniet neque. Voluptas, omnis commodi!`,
// 	},
// 	{
// 		id: 3,
// 		name: 'Jam Tangan Z-7',
// 		price: 3500000,
// 		image: '/images/product-1.jpg',
// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias blanditiis, corporis odit ducimus expedita eveniet neque. Voluptas, omnis commodi! Maxime placeat cum magni`,
// 	},
// ];

const email = localStorage.getItem('email');

const ProductsPage = () => {
	// useState sebagai Stateless State untuk menambahkan product ke cart
	const [cart, setCart] = useState<{ id: number; qty: number }[]>([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [products, setProducts] = useState<{ id: number, title: string, price: string, category: string, description: string, image: string, rating: { rate: number, count: number } }[]>([]);

	// Penggunaan useEffect untuk menghitung total price
	useEffect(() => {
		if (products.length > 0 && cart.length > 0) {
			const sum = cart.reduce((acc, item: { id: number; qty: number }) => {
				const product = products.find((product) => product.id === item.id);
				if (product) {
					return acc + parseFloat(product.price) * item.qty;
				}
				return acc;
			}, 0);
			setTotalPrice(sum);
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}, [cart, products]);

	// Penggunaan useEffect untuk mengambil data cart yang telah disimpan pada localStorage
	useEffect(() => {
		setCart(JSON.parse(localStorage.getItem('cart') || '[]'));
	}, []);

	// Penggunaan useRef sebagai Referencing Value
	// const cartRef = useRef(JSON.parse(localStorage.getItem('cart') || '[]'));

	// const handleAddToCartRef = (id: number) => {
	// 	cartRef.current = [...cartRef.current, { id, qty: 1 }];
	// };

	// Penggunaan useRef sebagai Manipulation DOM
	const totalPriceRef = useRef<HTMLTableRowElement>(null);

	useEffect(() => {
		if (totalPriceRef.current) {
			if (cart.length > 0) {
				totalPriceRef.current.style.display = 'table-row';
			} else {
				totalPriceRef.current.style.display = 'none';
			}
		}
	}, [cart]);

	// Event Handler
	const handleAddToCart = (id: number) => {
		if (cart.find((item: { id: number }) => item.id === id)) {
			setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
		} else {
			setCart([...cart, { id, qty: 1 }]);
		}
	};

	const handleLogout = () => {
		localStorage.removeItem('email');
		localStorage.removeItem('password');
		window.location.href = '/login';
	};

	// Memanggil Get API Products
	useEffect(() => {
		showProducts((data) => {
			setProducts(data);
		});
	}, []);

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
					{products.length > 0 &&
						products.map((product) => {
							return (
								<ProductCard key={product.id}>
									<ProductCard.Header image={product.image} />
									<ProductCard.Body title={product.title}>{product.description}</ProductCard.Body>
									<ProductCard.Footer price={parseFloat(product.price)} handleAddToCart={handleAddToCart} id={product.id} />
								</ProductCard>
							);
						})}
				</div>
				<div className='w-2/6'>
					<h1 className='text-3xl font-bold ml-5 mb-2'>Cart</h1>
					<table className='text-left table-auto border-separate border-spacing-x-5'>
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Qty</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{products.length > 0 &&
								cart.map((item) => {
									const product = products.find((p) => p.id === item.id);
									if (product) {
										return (
											<tr key={item.id}>
												<td>{product.title.substring(0, 20)}...</td>
												<td>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(product.price))}</td>
												<td>{item.qty}</td>
												<td>{(item.qty * parseFloat(product.price)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
											</tr>
										);
									}
								})}
							<tr ref={totalPriceRef}>
								<td colSpan={3}>
									<b>Total Price</b>
								</td>
								<td>
									<b>{totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</b>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div className='flex w-100 mt-20 justify-center mb-20'>
				<Counter></Counter>
			</div>
		</>
	);
};

export default ProductsPage;

import ProductCard from '../components/fragments/ProductCard';

// Contoh penggunaan Rendering Lists di React
const products = [
	{
		id: 1,
		name: 'Jam Tangan Y-5',
		price: '2.000.000',
		image: '/images/product-1.jpg',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias blanditiis, corporis odit ducimus expedita eveniet neque. Voluptas, omnis commodi! Maxime placeat cum magni voluptatum veniam. Vitae id
					repellat odio?`,
	},
	{
		id: 2,
		name: 'Jam Tangan X-20',
		price: '1.200.000',
		image: '/images/product-1.jpg',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias blanditiis, corporis odit ducimus expedita eveniet neque. Voluptas, omnis commodi!`,
	},
];

const ProductsPage = () => {
	return (
		<>
			<div className='flex flex-wrap justify-center space-x-4 py-5'>
				{products.map((product) => {
					return (
						<ProductCard>
							<ProductCard.Header image={product.image} />
							<ProductCard.Body name={product.name}>{product.description}</ProductCard.Body>
							<ProductCard.Footer price={product.price} />
						</ProductCard>
					);
				})}
			</div>
		</>
	);
};

export default ProductsPage;

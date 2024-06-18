import { ButtonProps } from '../components/elements/Button';
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

const email = localStorage.getItem('email');

const ProductsPage = () => {

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login'
    };

	return (
		<>
			<div className='flex justify-end h-10 bg-gray-200 items-center px-10'>
                {email}
                <ButtonProps classname='ml-5 bg-black' onclick={handleLogout}>Logout</ButtonProps>
            </div>
            
			<div className='flex flex-wrap justify-center space-x-4 py-5'>
				{products.map((product) => {
					return (
						<ProductCard key={product.id}>
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

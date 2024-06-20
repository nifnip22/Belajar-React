import { ButtonProps } from '../elements/Button';

// Contoh penggunaan Nested Component di React
const ProductCard = (props: { children: React.ReactNode }) => {
    const { children } = props
	return (
		<div className='flex flex-col justify-between w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2'>
			{children}
		</div>
	);
};

const Header = (props: { image: string }) => {
    const { image } = props
	return (
		<a href='#'>
			<img src={ image } alt='product' className='p-8 rounded-t-lg h-60 w-full object-cover' />
		</a>
	);
};

const Body = (props: { title: string; children: React.ReactNode }) => {
	const { title, children } = props;

	const childrenString = typeof children === 'string' ? children : '';

	return (
		<div className='h-full px-5 pb-5'>
			<a href=''>
				<h5 className='text-gray-100 text-xl font-semibold tracking-tight'>{title}</h5>
				<p className='text-md text-gray-100'>
					{childrenString.substring(0, 100)}...
				</p>
			</a>
		</div>
	);
};

const Footer = (props: { price: number, handleAddToCart: (id: number) => void, id: number }) => {
    const { price, handleAddToCart, id } = props
	return (
		<div className='flex items-center justify-between px-5 pb-5'>
			<span className='text-xl font-bold text-white'>{price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
			<ButtonProps onclick={() => handleAddToCart(id)}>Add to Cart</ButtonProps>
		</div>
	);
};

ProductCard.Header = Header;
ProductCard.Body = Body;
ProductCard.Footer = Footer;

export default ProductCard;

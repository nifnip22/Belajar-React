import { ButtonProps } from '../elements/Button';

// Contoh penggunaan Nested Component di React
const ProductCard = (props: { children: React.ReactNode }) => {
    const { children } = props
	return (
		<div className='flex flex-col justify-between w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow'>
			{children}
		</div>
	);
};

const Header = (props: { image: string }) => {
    const { image } = props
	return (
		<a href='#'>
			<img src={ image } alt='product' className='p-8 rounded-t-lg' />
		</a>
	);
};

const Body = (props: { name: string; children: React.ReactNode }) => {
    const { name, children } = props;
	return (
		<div className='h-full px-5 pb-5'>
			<a href=''>
				<h5 className='text-gray-100 text-xl font-semibold tracking-tight'>{name}</h5>
				<p className='text-md text-gray-100'>
					{children}
				</p>
			</a>
		</div>
	);
};

const Footer = (props: { price: string }) => {
    const { price } = props
	return (
		<div className='flex items-center justify-between px-5 pb-5'>
			<span className='text-xl font-bold text-white'>Rp {price}</span>
			<ButtonProps>Add to Cart</ButtonProps>
		</div>
	);
};

ProductCard.Header = Header;
ProductCard.Body = Body;
ProductCard.Footer = Footer;

export default ProductCard;

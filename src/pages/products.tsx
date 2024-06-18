import ProductCard from '../components/fragments/ProductCard';

const ProductsPage = () => {
	return (
		<>
			<div className='flex flex-wrap justify-center space-x-4 py-5'>
				<ProductCard>
					<ProductCard.Header image='/images/product-1.jpg'/>
					<ProductCard.Body title='Jam Tangan'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias blanditiis, corporis odit ducimus expedita eveniet neque. Voluptas, omnis commodi! Maxime placeat cum magni voluptatum veniam. Vitae id
						repellat odio?
					</ProductCard.Body>
					<ProductCard.Footer price='2.500.000' />
				</ProductCard>
				<ProductCard>
					<ProductCard.Header image='/images/product-1.jpg'/>
					<ProductCard.Body title='Jam Tangan'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias blanditiis, corporis odit ducimus expedita eveniet neque. Voluptas, omnis commodi! Maxime placeat cum magni voluptatum veniam. Vitae id
						repellat odio?
					</ProductCard.Body>
					<ProductCard.Footer price='2.500.000' />
				</ProductCard>
			</div>
		</>
	);
};

export default ProductsPage;

// Cara melakukan Get API menggunakan Axios
import axios from 'axios';

export const showProducts = (callback: (products: { id: number; title: string; price: string; category: string; description: string; image: string; rating: { rate: number; count: number } }[]) => void) => {
	axios
		.get('https://fakestoreapi.com/products')
		.then((response) => {
			// Handle the success response
			callback(response.data); // Prints "Hello, world!"
		})
		.catch((error) => {
			// Handle the error response
			console.error(error);
		});
};

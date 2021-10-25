import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
	const [categories, setCategories] = useState([
		//'One Pounch',
		// 'Samurai X',
		// 'Dragon Ball',
	]);

	// const handleAdd = () => {
	// 	setCategories([...categories, 'Ooootrra']);
	// };

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			{categories.map((category) => {
				return <GifGrid key={category} category={category} />;
			})}{' '}
		</>
	);
};



export default GifExpertApp;

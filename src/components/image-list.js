import React from 'react';
import imageList from './imageList.css';
import SingleImage from './single-image';


const ImageList = (props) => {

	const images = props.images.map( (image) => { 
		return <SingleImage key={image.id} image={image}  />;
	});
	return <div className="image-list">{images}</div>
};

export default ImageList;
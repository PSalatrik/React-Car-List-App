import React, { Component } from 'react';
import SearchBar from './searchbar.js';
import unsplash from '../API/unsplash.js';
import ImageList from './image-list.js';


class App extends Component {

	state= { images: [] }

	 onSearchSubmit = async (term) => {
		//unsplash API
		const responce = await unsplash.get('/search/photos', {
			params:  { query: term },
		}); //.then( (responce) => {     ***can be used in place of async and await - you have to refactor to standard function and not use arrow function
			//	console.log(responce.data.results)
			//});

		this.setState({images: responce.data.results});

	}
	
	render() {
		return (
		<div className="ui container" style={{marginTop: '10px'}}>
		  <SearchBar onSubmit={this.onSearchSubmit} />
		  <ImageList images={this.state.images} />
		</div>
		);
		}
}

export default App;


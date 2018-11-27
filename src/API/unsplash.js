import axios from 'axios';

export default axios.create({ 
	baseURL: 'https://api.unsplash.com',
	headers: {
				Authorization: 'Client-ID 1d87b00ad6e761b48973b34a7ffccb9e3927576e4a037f96ef37e57629d1bfcf'
			}
});




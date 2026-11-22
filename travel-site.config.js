const config = {
	title: 'Travel Site',
	description: 'Share your travel adventures',
	logo: 'favicon.svg',
	favicon: 'favicon.svg',
	travelIndex: 'data/index.json',
	skeletonTheme: 'mint',
	
	// Base path configuration for deployment
	basePath: process.env.NODE_ENV === 'production' ? '/travel-map-template' : '',
	
	// Image hosting configuration
	images: {
		// Switch between 'local' and 'cloudinary'
		provider: 'cloudinary', // Change to 'cloudinary' when ready
		
		cloudinary: {
			cloudName: 'dgg5cyhsu', // Replace with your Cloudinary cloud name
			baseUrl: 'https://res.cloudinary.com/dgg5cyhsu/image/upload',
			
			// Pre-defined transformations for different image sizes.
			// thumbnail: square grid tiles and map markers; medium/large: the lightbox srcset (960w / 2048w).
			transformations: {
				thumbnail: 'c_fill,g_auto,w_400,h_400,q_auto,f_auto',
				medium: 'c_limit,w_960,h_960,q_auto,f_auto',
				large: 'c_limit,w_2048,h_2048,q_auto,f_auto',
				original: 'q_auto,f_auto'
			}
		}
	}
};

export default config;

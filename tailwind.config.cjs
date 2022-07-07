module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				primary: 'Arima',
				secondary: 'Space Mono'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'dark',
			{
				solarizedDark: {
					primary: '#161616',
					secondary: '#EEEEEE',
					accent: '#FFD369',
					neutral: '#00B7C2',
					'--neutral': '#00B7C2',
					'base-100': '#A8DADC'
				}
			}
		]
	}
};

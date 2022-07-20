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
			'cupcake',		
			{
				solarizedDark: {
					primary: '#010210',
					secondary: '#e7e7e7',
					accent: '#FFD369',
					neutral: '#00B7C2',
					'base-100': '#A8DADC',
					'--neutral': '#00B7C2',
					'--base-100': '#A8DADC',
					'--primary': '#161616',
					'--secondary':'#EEEEEE',
					'--accent':'#FFD369'
				},
				light: {
					primary: '#F9F7F7',
					secondary: '#112D4E',
					accent: '#3F72AF',
					neutral: '#364F6B',
					'base-100': '#A8DADC',
					'--neutral': '#364F6B',
					'--base-100': '#A8DADC',
					'--primary': '#F9F7F7',
					'--secondary':'#112D4E',
					'--accent':'#3F72AF'
				}
			}
		]
	}
};

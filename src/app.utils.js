const colors =  {
    'red': 'red',
	'transparent': 'transparent',
	'black' : '#000000',
	'sandyBrown' : '#fcc23c',
	'darkOrange' : '#f97400',
	'seashell': '#feeded',
	'pink': '#fdd3d3',
	'white': '#ffffff',
	'navajoWhite': '#fee29f',
	'orange': '#fbb100',
	'orangeRed': '#f64900',
	'lightgray': '#cdcdcf',
	'green': 'green',
	'lavender': '#eaeaea',
	'silver': '#bfbfbf',
	limegreen: '#2ec133',
	'whitesmoke': '#f2f2f2',
	gainsboro: '#cbefcd'
}

export const getButtonColor = ({ buttonColor }) => buttonColor ? buttonColor : primaryColor;

export const errorColor = colors.red;
export const transparentColor = colors.transparent;
export const blackColor = colors.black;
export const secondaryColor = colors.sandyBrown;
export const primaryColor = colors.darkOrange;
export const seashellColor = colors.seashell;
export const pinkColor = colors.pink;
export const whiteColor = colors.white;
export const navajoWhiteColor = colors.navajoWhite;
export const orangeColor = colors.orange;
export const orangeRedColor = colors.orangeRed;
export const lightgrayColor = colors.lightgray;
export const greenColor = colors.green;
export const lavenderColor = colors.lavender;
export const silverColor = colors.silver;
export const limegreenColor = colors.limegreen;
export const whitesmokeColor = colors.whitesmoke;
export const gainsBoroColor = colors.gainsboro;
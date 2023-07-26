//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function strip(tourist){
	return tourist.replace(/^(a |an |the )/i, '').trim();
}
const sorttourist = touristSpots.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
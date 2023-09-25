const generateKey = (length, characters) => {
	let result = '';
	for (let i = 0; i < length; i++) {
		 const randomIndex = Math.floor(Math.random() * characters.length);
		 result += characters[randomIndex];
	}
	return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

console.log(key);

/* 
Результаты:
3i4rk3yf4zw2144a
y9pm9z41aaqdcz3o
d6f8iary66p7lgt3
................
*/

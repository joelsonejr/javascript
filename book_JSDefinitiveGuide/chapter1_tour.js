let book = {
	title: 'Java Script Definitive Guide',
	subject: 'Java Script',
	edition: 7,
	author:'Flanagan',
	contents: {
		ch01: 'Mistery',
		ch02: 'Romance',
		ch03: 'Comedy'
	}
}

let vault = [];
console.log(vault);

vault =[1, 2, 3, 5, 8, 13, 21, 34];
console.log(vault);
console.log();
console.log('second element is: ' + vault[1]);
console.log('array lenght is: ' + vault.length);
console.log(vault[vault.length-1]);

/*
console.log(book.contents?.ch01?.page03);
console.log(book)
console.log(book.edition);
console.log(book["author"]);
console.log(book.contents);
*/

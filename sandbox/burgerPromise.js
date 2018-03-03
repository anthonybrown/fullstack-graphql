'use strict';
// asynchronous operation...
function cookburger (type) { // code...  }

// regular operation.
function makeMilkshake (type) { // code...  }

// order function which returns a promise.
function order (type) {
  return new Promise(function (resolve, reject) {
		var burger = cookBurger(type)
		burger.ready = function (err, burger) {
			if (err) {
			  return reject(Error(`Error while cooking.`))
			}
			return resolve(burger)
		}
  })
}

order('JakeBurger')
	.then( burger => {
	  const milkshake = makeMilkshake('vanilla')
	  return { burger: burger, shake: milkshake }
	})
	.then( foodItems => {
	  console.log('BURGER PARTY !', foodItems)
	})
	.catch( err => {
	  console.log(err);
	})

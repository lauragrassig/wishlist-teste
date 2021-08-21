class Wishlist {
  static toggleWishList(id) {
		let itensList = localStorage.getItem("wishlist");
			if (itensList) {
				itensList = JSON.parse(itensList);
		
				const index = itensList.indexOf(id);
					if (index > -1) {
						itensList.splice(index, 1);
					} else {
						itensList.push(id);
					}
		
					localStorage.setItem('wishlist', JSON.stringify(itensList));
			} else {
					localStorage.setItem('wishlist', "["+ id +"]");
			}
    }
    static deleteWishList() {
        
    }
    static loadWishlist() {
			console.log('rodou');
			let itensList = localStorage.getItem("wishlist");
			itensList = JSON.parse(itensList);
			
			let inputs = document.getElementsByClassName("cards-list__item--like-input");
			
			for (let index = 0; index < inputs.length; index++) {
					const id = itensList.indexOf(parseInt(inputs[index].id));
						if (id > -1) {
							inputs[index].checked = true;
						}
			}

    }
}

Wishlist.loadWishlist();

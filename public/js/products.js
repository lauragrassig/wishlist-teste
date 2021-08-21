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

	static searchBar() {
		var input, filter, cardList, cardItem, a, i, txtValue;
		input = document.getElementById("searchbar");
		filter = input.value.toUpperCase();
		cardList = document.getElementById("cardList");
		cardItem = cardList.getElementsByTagName("span");

		for (i = 0; i < cardItem.length; i++) {
			a = cardItem[i].innerText;
			txtValue = a;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				cardItem[i].parentNode.parentNode.style.visibility = "";
				cardItem[i].parentNode.parentNode.style.display = "";
			} else {
				cardItem[i].parentNode.parentNode.style.visibility = "hidden";
				cardItem[i].parentNode.parentNode.style.display = "none";
			}
		}
	}
}

Wishlist.loadWishlist();

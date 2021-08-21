class Cards {
  static filterCards() {
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

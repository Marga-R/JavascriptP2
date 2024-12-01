let gifts = "";
    let gift = ["Manga", "Steamcards", "Jinx figure", "Seele figure", "Valorant giftcard"];

    for (let i = 0; i < 5; i++) {
        gifts += gift[i] +  "<br>";
    }
    document.getElementById("giftsme").innerHTML = gifts;
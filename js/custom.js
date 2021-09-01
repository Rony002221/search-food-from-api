const search_food = () => {
    const search_box = document.getElementById('search_box');
    const search_value = search_box.value;
    search_box.value = "";

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search_value}`;

    //console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

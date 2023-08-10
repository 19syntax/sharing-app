const jsNewAdd = document.querySelector('.js-new-add');
const jsImgNames = document.querySelector('.js-img-names')


const listItem = [{
    img: 'img/pexels-lanyjade-mondou-17884006.jpg',
    name: 'Jim Fanges'
},
{
    img: 'img/pexels-gonzalo-mendiola-9241611 (1).jpg',
    name: 'Jammie carri'
},
{
    img: 'img/pexels-medinegurbet-15666565.jpg',
    name: 'Lewis Foster'
},
{
    img: 'img/pexels-centre-for-ageing-better-17153161.jpg',
    name: 'Sam Karr'
}]
const randomListItem = Math.floor(Math.random() * listItem.length)
console.log(randomListItem)
// console.log(listItem[randomListItem].img);
jsNewAdd.addEventListener('click', () => {
    const randomListItem = Math.floor(Math.random() * listItem.length)
    console.log(randomListItem)
    console.log(listItem[randomListItem])
    jsImgNames.innerHTML += `
    <div class="img-names-items">
        <img src="${listItem[randomListItem].img}" alt="">
        <p>${listItem[randomListItem].name}</p>
    </div`
})
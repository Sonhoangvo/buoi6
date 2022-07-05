let products = [
    {
        name: 'Pho',
        title: 'Day la mon an co truyen cua Ha Noi va Viet Nam',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './hinhgit stat.png'
    },
    {
        name: 'Bun rieu',
        title: 'Day la mon an tuyet voi va rat thich hop de di an voi nguoi yeu',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './hinh.png'
    },
    {
        name: 'Banh da cua',
        title: 'Day la mot mon sieu ngon cua HaiPhong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './hinh.png'
    },
    {
        name: 'Bun bo Hue',
        title: 'Mon ngon cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './hinh.png'
    },
    {
        name: 'Banh bot loc',
        title: 'Mon ngon dac san cua Hue',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './hinh.png'
    },
    {
        name: 'Bun oc ',
        title: 'Mot mon ngon va dinh cao vao mua dong',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae eaque consectetur voluptates amet rem cum commodi distinctio iure? Animi nulla repellat hic? Voluptatum totam iusto eaque deleniti officiis nemo?',
        img: './hinh.png'
    },
]

localStorage.setItem('products',JSON.stringify(products))

let items = document.querySelector('.inside')

for (product of products){
    items.innerHTML+=
    `
    <div class="item">
    <div class="product-view">
        <img src=${product.img}>
        <button type="button" value="${product.name}">add to list</button>
    </div>
        <div class="content">
        <h3>${product.name}</h3>
        <p>
        ${product.title}
        </p>
        </div>
    </div>
    `
}

let pro = JSON.stringify(products)
localStorage.setItem('productsCart',pro)
let item=document.querySelector('.inside')
console.log(item);  

let cart = document.querySelector('.container_right')
let cartParse = JSON.parse(localStorage.getItem('productsCart'))
console.log('cartParse',cartParse);

item.addEventListener('click', function (event){
    console.log(event.srcElement);
    if(event.srcElement.tagName === 'BUTTON'){
        console.dir(event.srcElement)
        let item = event.srcElement.value
        console.log('item',item);
        cartParse.push(`${item}`)
        localStorage.setItem('productsCart', JSON.stringify(cartParse))
        cart.innerHTML += `<p>${item}</p>`
    }
}
)
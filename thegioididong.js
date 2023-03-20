$(document).ready(function() {
    var list_items =[
        {
            url: '<img style="width: 130px;" src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg" alt="ip14prm">',
            name:`<h3><b>IPhone 14 Pro Max</b></h3>`,
            manufaturor: `Hãng sản xuất: APPLE`,
            vote: `</br><i class="fa-solid fa-star" style="color: orange"></i>
            <i class="fa-solid fa-star" style="color: orange"></i>
            <i class="fa-solid fa-star" style="color: orange"></i>
            <i class="fa-solid fa-star" style="color: orange"></i>
            <i class="fa-solid fa-star" style="color: orange"></i>`,
        price: `</br>1.000.000₫
            <i class="fa-solid fa-cart-shopping" style="color: red"></i>`
        },
        {
            url: '<img style="width: 130px;" src="https://cdn.tgdd.vn/Products/Images/42/250728/iphone-13-pro-max-silver-600x600.jpg" alt="ip13prm">',
            name:`<h3><b>IPhone 13 Pro Max</b></h3>`,
            manufaturor: `Hãng sản xuất: APPLE`,
            vote: `</br><i class="fa-solid fa-star" style="color: orange"></i>
            <i class="fa-solid fa-star" style="color: orange"></i>
            <i class="fa-solid fa-star" style="color: orange"></i>
            <i class="fa-solid fa-star" style="color: orange"></i>
            <i class="fa-solid fa-star" style="color: orange"></i>`,
        price: `</br>1.000.000₫
            <i class="fa-solid fa-cart-shopping" style="color: red"></i>`
        },
        {
            url: '<img style="width: 130px;" src="https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg" alt="ip12prm">',
            name:`<h3><b>IPhone 12 Pro Max</b></h3>`,
            manufaturor: `Hãng sản xuất: APPLE`,
            vote: `</br><i class="fa-solid fa-star" style="color: orange"></i>
                <i class="fa-solid fa-star" style="color: orange"></i>
                <i class="fa-solid fa-star" style="color: orange"></i>
                <i class="fa-solid fa-star" style="color: orange"></i>
                <i class="fa-solid fa-star" style="color: orange"></i>`,
            price: `</br>1.000.000₫
            <i class="fa-solid fa-cart-shopping" style="color: red"></i>`
        },
        {
            url: '<img style="width: 130px;" src="https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg" alt="ip11prm">',
            name:`<h3><b>IPhone 11 Pro Max</b></h3>`,
            manufaturor: `Hãng sản xuất: APPLE`,
            vote: `</br><i class="fa-solid fa-star" style="color: orange"></i>
                <i class="fa-solid fa-star" style="color: orange"></i>
                <i class="fa-solid fa-star" style="color: orange"></i>
                <i class="fa-solid fa-star" style="color: orange"></i>
                <i class="fa-solid fa-star"></i>`,
            price: `</br>1.000.000₫
            <i class="fa-solid fa-cart-shopping" style="color: red"></i>`
        },
        {
            url :`<img style="width: 130px;" src="https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg" alt="ipxsm">`,
            name:`<h3><b>IPhone Xs Max</b></h3>`,
            manufaturor: `Hãng sản xuất: APPLE`,
            vote: `</br><i class="fa-solid fa-star" style="color: orange"></i>
                <i class="fa-solid fa-star" style="color: orange"></i>
                <i class="fa-solid fa-star" style="color: orange"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>`,
            price: `</br>1.000.000₫
            <i class="fa-solid fa-cart-shopping" style="color: red"></i>`
        },
    ]

    for (i=0; i< list_items.length; i++) {
        var item = list_items[i];
        $("table").append(`<ul>
        <li>${item.url}</li>
        <li>${item.name}</li>
        <li>${item.manufaturor}</li>
        <li>${item.vote}</li>
        <li>${item.price}</li>
        <ul/>`);
    }
})






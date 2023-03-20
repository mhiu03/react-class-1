  $(document).ready(function() {
     var list_items =[
        {
            Id: 1,
            Name: "Samsung Galaxy S22 Ultra 5G",
            Price: "30.990.000đ",
            Info: "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ,RAM 4g, pin 7000mah",
            Detail: "ProductDetail1",
            Star: 5,
            Image: "image1.jpg",
            NSX: 'SAMSUNG',
            Categori: 'Điện Thoại',
            Edit:"Edit",
            Delete:"Delete"
        },
        {
            Id: 2,
            Name: "Samsung Galaxy S22 Ultra 5G",
            Price: "30.990.000đ",
            Info: "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ,RAM 4g, pin 7000mah",
            Detail: "ProductDetail1",
            Star: 5,
            Image: "image1.jpg",
            NSX: 'SAMSUNG',
            Categori: 'Điện Thoại',
            Edit:"Edit",
            Delete:"Delete"
        },
        {
            Id: 3,
            Name: "Samsung Galaxy S22 Ultra 5G",
            Price: "30.990.000đ",
            Info: "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ,RAM 4g, pin 7000mah",
            Detail: "ProductDetail1",
            Star: 5,
            Image: "image1.jpg",
            NSX: 'SAMSUNG',
            Categori: 'Điện Thoại',
            Edit:"Edit",
            Delete:"Delete"
        },
        {
            Id: 4,
            Name: "Samsung Galaxy S22 Ultra 5G",
            Price: "30.990.000đ",
            Info: "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ,RAM 4g, pin 7000mah",
            Detail: "ProductDetail1",
            Star: 5,
            Image: "image1.jpg",
            NSX: 'SAMSUNG',
            Categori:'Điện Thoại',
            Edit:"Edit",
            Delete:"Delete"
        },
        {
            Id: 5,
            Name: "Samsung Galaxy S22 Ultra 5G",
            Price: '30.990.000đ',
            Info: `6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ,RAM 4g, pin 7000mah`,
            Detail: "ProductDetail1",
            Star: 5,
            Image: "image1.jpg",
            NSX: `SAMSUNG`,
            Categori: 'Điện Thoại',
            Edit:"Edit",
            Delete:"Delete"
        }
    ]

    for (i = 0; i < list_items.length; i++) {
        var item = list_items[i];
        $("table").append(`<tr>
            <td class="id">${item.Id}</td>
            <td class="name">${item.Name}</td>
            <td class="price">${item.Price}</td>
            <td class="info">${item.Info}</td>
            <td class="detail">${item.Detail}</td>
            <td class="star">${item.Star}</td>
            <td class="image">${item.Image}</td>
            <td class="nxs">${item.NSX}</td>
            <td class="categori">${item.Categori}</td>
            <td class='edit'>
            <button class="button1">${item.Edit}</button>
            </td>
            <td class=delete>
            <button class="button2">${item.Delete}</button>
            </td>
        <tr/>`);
        
    }
})

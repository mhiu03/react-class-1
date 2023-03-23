//   $(document).ready(function() {
//      var list_items =[
//         {
//             Id: 1,
//             Name: "Samsung Galaxy S22 Ultra 5G",
//             Price: "30.990.000đ",
//             Info: "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ,RAM 4g, pin 7000mah",
//             Detail: "ProductDetail1",
//             Star: 5,
//             Image: "image1.jpg",
//             NSX: 'SAMSUNG',
//             Categori: 'Điện Thoại',
//             Edit:"Edit",
//             Delete:"Delete"
//         },
//         {
//             Id: 2,
//             Name: "Samsung Galaxy S22 Ultra 5G",
//             Price: "30.990.000đ",
//             Info: "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ,RAM 4g, pin 7000mah",
//             Detail: "ProductDetail1",
//             Star: 5,
//             Image: "image1.jpg",
//             NSX: 'SAMSUNG',
//             Categori: 'Điện Thoại',
//             Edit:"Edit",
//             Delete:"Delete"
//         },
//         {
//             Id: 3,
//             Name: "Samsung Galaxy S22 Ultra 5G",
//             Price: "30.990.000đ",
//             Info: "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ,RAM 4g, pin 7000mah",
//             Detail: "ProductDetail1",
//             Star: 5,
//             Image: "image1.jpg",
//             NSX: 'SAMSUNG',
//             Categori: 'Điện Thoại',
//             Edit:"Edit",
//             Delete:"Delete"
//         },
//         {
//             Id: 4,
//             Name: "Samsung Galaxy S22 Ultra 5G",
//             Price: "30.990.000đ",
//             Info: "6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ,RAM 4g, pin 7000mah",
//             Detail: "ProductDetail1",
//             Star: 5,
//             Image: "image1.jpg",
//             NSX: 'SAMSUNG',
//             Categori:'Điện Thoại',
//             Edit:"Edit",
//             Delete:"Delete"
//         },
//         {
//             Id: 5,
//             Name: "Samsung Galaxy S22 Ultra 5G",
//             Price: '30.990.000đ',
//             Info: `6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ,RAM 4g, pin 7000mah`,
//             Detail: "ProductDetail1",
//             Star: 5,
//             Image: "image1.jpg",
//             NSX: `SAMSUNG`,
//             Categori: 'Điện Thoại',
//             Edit:"Edit",
//             Delete:"Delete"
//         }
//     ]

//     for (i = 0; i < list_items.length; i++) {
//         var item = list_items[i];
//         $("table").append(`<tr>
//             <td class="id">${item.Id}</td>
//             <td class="name">${item.Name}</td>
//             <td class="price">${item.Price}</td>
//             <td class="info">${item.Info}</td>
//             <td class="detail">${item.Detail}</td>
//             <td class="star">${item.Star}</td>
//             <td class="image">${item.Image}</td>
//             <td class="nxs">${item.NSX}</td>
//             <td class="categori">${item.Categori}</td>
//             <td class='edit'>
//             <button class="button1">${item.Edit}</button>
//             </td>
//             <td class=delete>
//             <button class="button2">${item.Delete}</button>
//             </td>
//         <tr/>`);
        
//     }
// })
// var email = localStorage.getItem('email');
// if (email === 'undefined' || email === null) {
//     window.location.href = 'login.html'
// }

function getListItem() {
    var listItemStorage = localStorage.getItem('listItem') ? JSON.parse(localStorage.getItem('listItem')) : [];
    $("#list-items").empty();
    for (let i = 0; i < listItemStorage.length; i++) {
        var item = listItemStorage[i];
        $("#list-items").append(`<tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.info}</td>
          <td>${item.detail}</td>
          <td>${item.star}</td>
          <td>${item.image}</td>
          <td>${item.nsx}</td>
          <td>${item.categori}</td>
          <td>
            <button onclick="openEditModal(${item.id})" type="button" class="btn btn-info open-modal-orange">Edit</button>
          </td>
          <td>
            <button onclick="removeItem(${item.id})" type="button" class="btn btn-info open-modal-red">Remove</button>
          </td>
        </tr>`);
    }
};

function openEditModal(id) {
    var listItemStorage = localStorage.getItem('listItem') ? JSON.parse(localStorage.getItem('listItem')) : [];
    var itemChoice = listItemStorage.find(item => item.id === id);
    $('#name').val(itemChoice.name);
    $('#price').val(itemChoice.price);
    $('#info').val(itemChoice.info);
    $('#detail').val(itemChoice.detail);
    $('#star').val(itemChoice.star);
    $('#image').val(itemChoice.image);
    $('#nsx').val(itemChoice.nsx);
    $('#categori').val(itemChoice.categori);
    $('#modal').show();
    localStorage.setItem('idEditing', id);
}

function removeItem(id) {
    var listItemStorage = localStorage.getItem('listItem') ? JSON.parse(localStorage.getItem('listItem')) : [];
    var itemChoiceIndex = listItemStorage.findIndex(item => item.id === id);
    listItemStorage.splice(itemChoiceIndex, 1);
    localStorage.setItem('listItem', JSON.stringify(listItemStorage));
    getListItem();
}

$(document).ready(function () {

    function resetForm() {
        $('#name').val('');
        $('#price').val('');
        $('#info').val('');
        $('#detail').val('');
        $('#star').val('');
        $('#image').val('');
        $('#nsx').val('');
        $('#categori').val('');
    }

    $('#modal').hide();
    $(".open-modal").click(function () {
        $('#modal').show();
    })
    $('.close').click(function () {
        $('#modal').hide();
    });

    $('.add-new-button').click(function () {
        var listItemStorage = localStorage.getItem('listItem') ? JSON.parse(localStorage.getItem('listItem')) : [];
        var name = $('#name').val();
        var price = $('#price').val();
        var info = $('#info').val();
        var detail = $('#detail').val();
        var star = $('#star').val();
        var image = $('#image').val();
        var nsx = $('#nsx').val();
        var categori = $('#categori').val();
        var itemData = {
            name,
            price,
            info: info,
            detail,
            star,
            image,
            nsx,
            categori,
            id: listItemStorage.length + 1
        }
        $('#modal').hide();
        listItemStorage.push(itemData);
        localStorage.setItem('listItem', JSON.stringify(listItemStorage));
        getListItem();
        resetForm();
    })

    $('.submit-button').click(function () {
        var listItemStorage = localStorage.getItem('listItem') ? JSON.parse(localStorage.getItem('listItem')) : [];
        var idEditing = localStorage.getItem('idEditing');
        var name = $('#name').val();
        var price = $('#price').val();
        var info = $('#info').val();
        var detail = $('#detail').val();
        var star = $('#star').val();
        var image = $('#image').val();
        var nsx = $('#nsx').val();
        var categori = $('#categori').val();
        if (idEditing) {
            // logic update
            for (let i = 0; i < listItemStorage.length; i++) {
                var item = listItemStorage[i];
                if (item.id == idEditing) {
                    listItemStorage[i] = {
                        name,
                        price,
                        info,
                        detail,
                        star,
                        image,
                        nsx,
                        categori,
                        id: idEditing
                    };
                }
            }
            localStorage.removeItem('idEditing');
            localStorage.setItem('listItem', JSON.stringify(listItemStorage));
        } else {
            var itemData = {
                name,
                price,
                info,
                detail,
                star,
                image,
                nsx,
                categori,
                id: listItemStorage.length + 1
            }
            listItemStorage.push(itemData);
            localStorage.setItem('listItem', JSON.stringify(listItemStorage));
        }
        $('#modal').hide();
        getListItem();
        resetForm();
    })
    getListItem();
})
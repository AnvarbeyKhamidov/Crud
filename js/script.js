
// Hamma obyektlarni yig'ib turish uchun arra

let allProduct = [];

// Malumot qoshish uchun funksiya

function addProduct() {
    let productName  = document.getElementById("product-name").value;
    let productPrice  = document.getElementById("product-price").value;
    let productColor  = document.getElementById("product-color").value;

    // console.log(productName);
    // console.log(productPrice);
    // console.log(productColor);

    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-color").value = "";

    // yangi maxsulot qoshish uchun object
    let newProduct = {
               name: productName,
               price: productPrice,
               color: productColor
    };

    allProduct.push(newProduct);
    console.log(allProduct);
    drawCard();
}

// console.clear();


// let sonlar = [1,2,3,4,5,6,7];
// sonlar.push(100,200,300);
// console.log(sonlar);

// bu kart chizish uchun funksiya

function drawCard() {
    let result = "";

    for (let i = 0; i<allProduct.length; i++){
        result+= `
                    <div class="col-4 mt-3">
                     <div class="card">
                        <div class="card-header">
                          <h2>${allProduct[i].name}</h2>
                        </div>
                        <div class="card-body">
                         <p>Price: <b>${allProduct[i].price} $</b> </p>
                         <p>Color: <b>${allProduct[i].color} </b> </p>
                        </div>
                        
                        <div class="card-footer d-flex justify-content-between">
                         <button class="btn btn-primary">Edit</button>
                         <button class="btn btn-danger">Delete</button>
                        </div>
                        
                     </div>
                    </div> 
                 `

    }

    document.getElementById("result").innerHTML = result;
}
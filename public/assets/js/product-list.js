
function showError()
{
    console.log('Error');
}

// Adds the products to the productslist 
function showProduct(product)
{
    $('#product-list-wraper').append(product);   
}

function showProducts(products)
{
    console.log(products);
    let html;

    for(let i = 0, s = products.items.length; i < s; i++)
    {
        let  product = products.items[i];
        html =  `<li class="item item-${product.id}">
                    <a class="" href="/${product.path}">
                        <div class="product-image">
                        <img src="${product.image}">
                        </div>
                        <div class="name">${product.name}</div>
                        <div class="price">${product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                        <button type="button"class="add-to-cart">Comprar</button>
                    </a>
                </li>`;
                
        showProduct(html);

    }

}

function loadProducts(category) 
{
    
    //Make the ajax request
    $.ajax ({
        url: `http://localhost:8888/api/V1/categories/${category}`,
        type: 'GET', // HTTP method
        dataType: 'json', // The data received
        success: showProducts,// On sucess, show all the products
        error: showError // On error, display an error message
    });
}

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Load products on page load 
$(document).ready(loadProducts(category));
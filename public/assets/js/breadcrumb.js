
function loadBreadcrumbs(category) 
{
    let html;
    console.log(category);
    switch (category) {
        case '1':
            html = 'Camisetas';
        break;
        case '2':
            html = 'Calças';
        break;
        case '3':
            html = 'Sapatos';
        break;
    }

    console.log(html);

   
    $('#breadcrumb-list-3').append(html);   
    $('#title-category').append(html); 
    

}

const params = new URLSearchParams(window.location.search);
const categoryProducts = params.get('category');

// Load products on page load 
$(document).ready(loadBreadcrumbs(categoryProducts));
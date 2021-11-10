
function displayOptions() {
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    var options = `
    <option> select product </option>`;
    for (let i = 0; i < products.length; i++) {
        options += `
        <option value='${products[i].id}'>${products[i].id.productName}</option>
        `;
        
    }
    document.getElementById('productsList').innerHTML = options;
}

function goToInvoice() {
    var productId = document.getElementById('productsList').value;
    var qty = document.getElementById('productsList').value;
    localStorage.setItem('productOrder',productId);
    localStorage.setItem('qtyOrder',qty);
    location.replace('invoice.html');

    
}
function displayInvoice() {
    var today = new Date();
    var dateTime = today.toLocaleString();
    document.getElementById('dateNow').innerHTML  =dateTime;
    var product = searchByid(productId,'products')
    
    document.getElementById("invoiceTable").innerHTML = invoiceTable;
}
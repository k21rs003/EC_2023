let ncmb = new NCMB(appKey, clientKey);
let UTdata = ncmb.DataStore("Cart");

function enterData() {
    let uTdata = new UTdata();
    let productName = document.getElementById('productName').textContent;
    let quantity = parseInt(document.getElementById('quantity').value);
    let unitPriceElement = document.getElementById('unitPrice');
    let unitPriceValue = unitPriceElement.getAttribute('value');

    uTdata.set("productName", productName);
    uTdata.set("quantity", quantity);
    uTdata.set("unitPrice", parseInt(unitPriceValue));
    uTdata.set("subtotal", parseInt(unitPriceValue) * quantity);
    uTdata.save()
        .then(function(results) {
            alert('商品名: ' + productName + '\n購入する数量: ' + quantity);
        })
        .catch(function(results) {
            alert("error");
        });
}

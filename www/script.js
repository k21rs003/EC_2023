let ncmb = new NCMB(appKey, clientKey);
let UTdata = ncmb.DataStore("Cart");

function enterData() {
    let productName = document.getElementById('productName').textContent;
    let quantity = parseInt(document.getElementById('quantity').value);
    let unitPriceElement = document.getElementById('unitPrice');
    let unitPriceValue = unitPriceElement.getAttribute('value');
    let subtotal = parseInt(unitPriceValue) * quantity;

    // 確認ダイアログを表示
    let confirmMessage = 'カートに入れますか？' + '\n商品名: ' + productName + '\n数量: ' + quantity + '\n単価: ¥' + unitPriceValue + '\n合計金額: ¥' + subtotal;
    let confirmAddToCart = confirm(confirmMessage);
    
    if (confirmAddToCart) {
        // ユーザーが「はい」を選択した場合、データを保存
        let uTdata = new UTdata();
        uTdata.set("productName", productName);
        uTdata.set("quantity", quantity);
        uTdata.set("unitPrice", parseInt(unitPriceValue));
        uTdata.set("subtotal", subtotal);

        uTdata.save()
            .then(function(results) {
                alert('カートに追加しました！');
            })
            .catch(function(results) {
                alert("エラーが発生しました");
            });
    } else {
        // ユーザーが「キャンセル」を選択した場合、何もしない
    }
}

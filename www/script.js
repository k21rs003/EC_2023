function goToDetail(productId) {
    // 実際には商品IDに基づいてニフクラバックエンドから商品詳細を取得し、
    // 詳細画面に遷移する処理を実装します。
    console.log("商品詳細画面に遷移: ", productId);
    // 例: window.location.href = 'product-detail.html?id=' + productId;
}

// 前回のJavaScriptコードに追加

function changeQuantity(change) {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    currentQuantity += change;
    if (currentQuantity < 1) currentQuantity = 1; // 数量は1未満にはならない
    quantityInput.value = currentQuantity;
}

// 購入ボタンのイベントリスナー（仮の例）
document.querySelector('.purchase-btn').addEventListener('click', function() {
    var quantity = document.getElementById('quantity').value;
    alert('購入する数量: ' + quantity);
    // ここでニフクラバックエンドに購入情報を送信する処理を実装します
});

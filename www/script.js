function goToDetail(productId) {
    // 詳細画面に遷移する処理を実装。
    console.log("商品詳細画面に遷移: ", productId);
    // 例: window.location.href = 'product-detail.html?id=' + productId;
}

function changeQuantity(change) {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    currentQuantity += change;
    if (currentQuantity < 1) currentQuantity = 1; // 数量は1未満にはならない
    quantityInput.value = currentQuantity;
}

// 購入ボタンのイベントリスナー
document.querySelector('.purchase-btn').addEventListener('click', function() {
    var quantity = document.getElementById('quantity').value;
    alert('購入する数量: ' + quantity);
    // ここでニフクラバックエンドに購入情報を送信する処理を実装
});

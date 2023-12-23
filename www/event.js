// let ncmb = new NCMB(appKey, clientKey);
// let UTdata = ncmb.DataStore("Cart");
// let key = "quantity";

//         function enterData() {
//             let uTdata = new UTdata();
//             let value = parseInt($("#data").val());
//             uTdata.set(key, value)
//                 .save()
//                 .then(function(results) {
//                     $("#display").removeClass();
//                     $("#display").addClass("bg-success");
//                     $("#display").html("enter success");
//                 })
//                 .catch(function(results) {
//                     $("#display").removeClass();
//                     $("#display").addClass("bg-warning");
//                     $("#display").html("enter fail");
//                 })
//         }

        // function fetchAll() {
        //     UTdata.fetchAll()
        //         .then(function(results) {
        //             let msg = "";
        //             for (let i = 0; i < results.length; i++) {
        //                 msg += results[i].get(key) + "<br>";
        //             }
        //             $("#display").removeClass();
        //             $("#display").addClass("text-light");
        //             $("#display").addClass("bg-primary");
        //             $("#display").html(msg);
        //         })
        //         .catch(function(error) {
        //             $("#display").removeClass();
        //             $("#display").addClass("bg-warning");
        //             $("#display").html("delete fail:" + JSON.stringify(error));
        //         })
        // }

        // function sortData() {
        //     UTdata.order(key, true).fetchAll()
        //         .then(function(results) {
        //             let msg = "";
        //             for (let i = 0; i < results.length; i++) {
        //                 msg += results[i].get(key) + "<br>";
        //             }
        //             $("#display").removeClass();
        //             $("#display").addClass("text-light");
        //             $("#display").addClass("bg-primary");
        //             $("#display").html(msg);
        //         })
        //         .catch(function(error) {
        //             $("#display").removeClass();
        //             $("#display").addClass("bg-warning");
        //             $("#display").html("delete fail:" + JSON.stringify(error));
        //         })
        // }

        // function countData() {
        //     UTdata.count().fetchAll()
        //     .then(function(results){
        //         $("#display").removeClass();
        //         $("#display").addClass("bg-success");
        //         $("#display").html("results count");
        //     })
        //     .catch(function(error){
        //         $("#display").removeClass();
        //         $("#display").addClass("bg-warning");
        //         $("#display").html("delete fail:" + JSON.stringify(error));
        //     })
        // }

        // function deleteData() {
        //     UTdata.fetch()
        //         .then(function(results) {
        //             return results.delete();
        //         })
        //         .then(function(results) {
        //             $("#display").removeClass();
        //             $("#display").addClass("bg-success");
        //             $("#display").html("delete success");
        //         })
        //         .catch(function(error) {
        //             $("#display").removeClass();
        //             $("#display").addClass("bg-warning");
        //             $("#display").html("delete fail:" + JSON.stringify(error));
        //         })
        // }

        // function updateData() {
        //     UTdata.fetch()
        //     .then(function(results) {
        //         let value = parseInt($("#update").val());
        //         results.set(key, value);
        //         return results.update();
        //     })
        //     .then(function(results) {
        //         $("#display").removeClass();
        //         $("#display").addClass("bg-success");
        //         $("#display").html("update success");
        //     })
        //     .catch(function(error) {
        //         $("#display").removeClass();
        //         $("#display").addClass("bg-warning");
        //         $("#display").html("update fail:" + JSON.stringify(error));
        //     })
        // }


function changeQuantity(change) {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    currentQuantity += change;
    if (currentQuantity < 1) currentQuantity = 1; // 数量は1未満にはならない
    quantityInput.value = currentQuantity;
}

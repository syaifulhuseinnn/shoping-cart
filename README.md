# shoping-cart

### How to install

> `npm i shoping-cart`

### How to use

```
const keranjang = require("shoping-cart");

keranjang.tambahProduk("Pisang Hijau", 2);
keranjang.tambahProduk("Semangka Kuning", 3);
keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);
keranjang.tambahProduk("Apel Hijau", 100);

keranjang.hapusProduk("Semangka Kuning");
keranjang.hapusProduk("Semangka Merah");

console.log(keranjang.tampilkanCart())

/*
Output:
Pisang Hijau (2)
Apel Merah (7)
Apel Hijau (100)
*/
```

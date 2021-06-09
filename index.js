class Cart {
  constructor() {
    this.produk = [];
  }

  tambahProduk(name, quantity) {
    const checkIndexProduct = this.produk.findIndex((el) => el.name === name);
    if (checkIndexProduct > 0) {
      let temp = [...this.produk];
      temp[checkIndexProduct] = {
        ...this.produk[checkIndexProduct],
        qty: this.produk[checkIndexProduct].qty + quantity,
      };
      this.produk = [...temp];
    } else {
      this.produk = [...this.produk, { name: name, qty: quantity }];
    }
  }

  hapusProduk(kodeProduk) {
    const deleteProduct = this.produk.filter((el) => el.name !== kodeProduk);
    this.produk = [...deleteProduct];
  }

  tampilkanCart() {
    return this.produk.map((el) => `${el.name} (${el.qty})`).join("\n");
  }
}

let keranjang = new Cart();

module.exports = keranjang;

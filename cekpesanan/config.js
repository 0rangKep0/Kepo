// daftar akun dan produk
const users = [
  {
    username: "anime",
    password: "animeeer",
    produk: [
      { produk:"ff", harga:"Rp 1.000", beli:"2025-08-24", expired:"2025-08-25", garansi:"2025-08-25" }
    ]
  },
  {
    username: "oneone",
    password: "ahjshs",
    produk: [
      { produk:"anime", harga:"Rp 1.000", beli:"2025-08-24", expired:"2025-08-25", garansi:"2025-08-25" }
    ]
  }
];

// fungsi cek expired
function checkExpired(dateStr){
  let today = new Date(); today.setHours(0,0,0,0);
  let target = new Date(dateStr); target.setHours(0,0,0,0);
  return target < today ? "Sudah expired" : dateStr;
}

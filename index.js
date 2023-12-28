const submit = document.getElementById("submit");
submit.addEventListener("click", hitungTotal);

function hitungTotal() {
  const kode_barang = document.getElementById("inputan_kode").value;
  const banyakBarang = parseInt(
    document.getElementById("inputan_barang").value
  );

  let harga = 0;
  switch (kode_barang) {
    case "001":
      harga = 10000;
      break;
    case "002":
      harga = 20000;
      break;
    case "003":
      harga = 30000;
      break;
    default:
      window.alert("Kode barang tidak valid!");
      return;
  }

  const totalBelanja = harga * banyakBarang;
  window.alert("Total pembayaran adalah: " + totalBelanja);

  const uangDibayarkan = parseFloat(
    window.prompt("Masukkan jumlah uang user yang akan dibayar:")
  );
  const uangKembalian = uangDibayarkan - totalBelanja;

  if (uangKembalian >= 0) {
    window.alert("Total kembalian Anda adalah: " + uangKembalian);
  } else if (uangDibayarkan < totalBelanja) {
    window.alert("Mohon maaf, uang yang dibayarkan kurang!");
  } else {
    window.alert("Anda membatalkan pesanan!");
  }
}

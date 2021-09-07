/*
  VARIABLES
*/

// Gimana cara membuat variable?
// anatomy pendefinisian variable: keyword namaVariable
let nama; // -> default value = undefined

// Gimana cara membuat variable dengan data?
// anatomy: keyword namaVariable = value
let umur = 23;

// Memasukan data ke variable yang sudah didefinisikan
// anatomy: namaVariable = value
nama = "Andi";

// Mereferensi data dari variable dengan manggil nama variable-nya
console.log(nama)

/*
  DATA TYPES

  Primitive:
  - String
    -> Identik dibungkus dengan tanda petik, contoh: "hello"
    -> Merepresentasikan kata-kata, kalimat, nomor yang tidak untuk dihitung, dll.
        contoh: "62812345690"

  - Number (interger (bilangan bulat) / float (bilangan pecahan))

  - Boolean (true & false)
  - null
  - undefined

  Non-primitive:
  - Array
    -> identik dengan kurung siku []
  - Object
    -> identik dengan kurung kurawal {}
  - Function
*/

const namaPelanggan = "Budiman"
let noTelp = "62811223344"
let umurPelanggan = 25
let pelangganTerverifikasi = false

let keranjangBelanja = ["Biskuit", "tablet", "laptop"]
let alamatPelanggan = {
  jalan: "jl. kelinci",
  kecamatan: "ilir barat 1",
  kelurahan: "demang lebar daun",
  noRumah: "2045",
}
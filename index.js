// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favcolor: ['Yellow', 'Pink', 'White', 'Purple'],
    isHavePet: true,
    education: [
        { eduname: 'SD 01', educity: 'Jakarta', edugraduate: '2016'},
        { eduname: 'SMP 02', educity: 'Jakarta', edugraduate: '2019'},
        { eduname: 'SMA 03', educity: 'Tangerang', edugraduate: '-'},
    ],
    favrestaurant : [ new Set(['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi'])],
};



const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favcolor: ['Blue', 'Black', 'Grey'],
    isHavePet: true,
    education: [
        { eduname: 'SD 02', educity: 'Jakarta', edugraduate: '2010' },
        { eduname: 'SMP 03', educity: 'Bogor', edugraduate: '2013' },
        { eduname: 'SMA 04', educity: 'Surabaya', edugraduate: '2016' },
        { eduname: 'Universitas Maju', educity: 'Tangerang', edugraduate: '-' },
    ],
    favrestaurant : [ new Set(['Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek', 'Pancake', 'Eggy'])],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

  main();

  module.exports = {
      users
  };

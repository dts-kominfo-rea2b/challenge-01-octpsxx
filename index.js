// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//restaurant array
const firstUserResto= new Set(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]);
const secondUserResto= new Set(['Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek', 'Pancake', 'Eggy']);

//education array first user
const firstUserEdu1 = new Map([['nama','SD 01'],['city','Jakarta'],['graduate','2016']]);
const firstUserEdu2 = new Map([['nama','SMP 02'],['city','Jakarta'],['graduate','2019']]);
const firstUserEdu3 = new Map([['nama','SMA 03'],['city','Tangerang'],['graduate',' ']]);

//education array second user
const secondUserEdu1 = new Map([['nama','SD 02'],['city','Jakarta'],['graduate','2010']]);
const secondUserEdu2 = new Map([['nama','SMP 03'],['city','Bogor'],['graduate','2013']]);
const secondUserEdu3 = new Map([['nama','SMA 04'],['city','Surabaya'],['graduate','2016']]);
const secondUserEdu4 = new Map([['nama','Universitas Maju'],['city','Tangerang'],['graduate',' ']]);

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favcolor: ['Yellow', 'Pink', 'White', 'Purple'],
    isHavePet: true,
    education: firstUserEdu1, firstUserEdu2, firstUserEdu3,
    favrestaurant: firstUserResto,
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favcolor: ['Blue', 'Black', 'Grey'],
    isHavePet: true,
    education: secondUserEdu1, secondUserEdu2, secondUserEdu3, secondUserEdu4,
    favrestaurant : secondUserResto,
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

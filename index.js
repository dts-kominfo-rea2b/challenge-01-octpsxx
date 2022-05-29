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

// cara menghilangkan duplikat array 
// firstUser.favrestaurant = [ new Set(['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi'])];
// console.log(firstUser.favrestaurant);
// .....atau....
// firstUser.favrestaurant = ['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi'];
// const unique1 = [...new Set(firstUser.favrestaurant)];
// console.log(unique1);

// -----draft-----
// let firstUser = new Object();
// firstUser.name = "Monica";
// firstUser.gender = "Female";
// firstUser.age = 17;
// firstUser.email = "monica@dingdong.com";
// firstUser.favcolor = ['Yellow', 'Pink', 'White', 'Purple'];
// firstUser.isHavePet = true;
// firstUser.education = [
//     { eduname: 'SD 01', educity: 'Jakarta', edugraduate: '2016'},
//     { eduname: 'SMP 02', educity: 'Jakarta', edugraduate: '2019'},
//     { eduname: 'SMA 03', educity: 'Tangerang', edugraduate: '-'},
// ],
// firstUser.favrestaurant = ['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi'];

// let secondUser = new Object();

//------draft 2------
// function users(inputName, inputGender, inputAge, inputEmail, inputfavColor, inputisHavePet, inputEducation, inputfavRestaurant){
//     this.name = inputName;
//     this.gender = inputGender;
//     this.age = inputAge;
//     this.email = inputEmail;
//     this.favcolor = inputfavColor;
//     this.education = inputEducation;
//     this.favrestaurant = inputfavRestaurant;
//  }

//  const user1 = new ('Monica', 'Female', '17', 'monica@dingdong.com', ['Yellow','Pink,'White',]);
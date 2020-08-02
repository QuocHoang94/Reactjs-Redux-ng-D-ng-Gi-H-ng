var initialState = [
    {
        id: 1,
        name: 'Iphone 11 Pro Max',
        image:'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg',
        description: 'San pham do apple san xuat',
        price:500,
        inventory:10,
        rating:2
    },
    {
        id: 2,
        name: 'SamSung Galaxy Note 10+',
        image:'https://cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008711602926121_SS-note-10-pl-den-1-1.png',
        description: 'San pham do Samsung san xuat',
        price:400,
        inventory:15,
        rating:3
    },
    {
        id: 3,
        name: 'Samsung Gear S3',
        image:'https://cdn.tgdd.vn/Products/Images/7077/85814/samsung-gear-s3-frontier-nt-600x600.jpg',
        description: 'San pham do LG san xuat',
        price:350,
        inventory:5,
        rating:5
    }
];

const products = (state = initialState , action) =>{
    switch(action.type){
        default: return [...state];
    }
}
export default products;
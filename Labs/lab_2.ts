type productsType = {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock":number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": string[],
};

const products: productsType =  
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
    }
;

type productsInCart = {
    "id": number,
        "title": string,
        "price": number,
        "quantity":number,
        "total": number,
        "discountPercentage": number,
        "discountedPrice": number,
        "thumbnail": string,
}

type cartsType = 
{
    "id": number,
    "products": productsInCart[]
    ,
    "total": number,
    "discountedTotal": number,
    "userId": number,
    "totalProducts": number,
    "totalQuantity": number
  };

const carts: cartsType =
    {
      "id": 1,
      "products": [
        {
          "id": 59,
          "title": "Spring and summershoes",
          "price": 20,
          "quantity": 3,
          "total": 60,
          "discountPercentage": 8.71,
          "discountedPrice": 55,
          "thumbnail": "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
        },
        {
          "id": 88,
          "title": "TC Reusable Silicone Magic Washing Gloves",
          "price": 29,
          "quantity": 2,
          "total": 58,
          "discountPercentage": 3.19,
          "discountedPrice": 56,
          "thumbnail": "https://cdn.dummyjson.com/product-images/88/thumbnail.jpg"
        },
        {
          "id": 18,
          "title": "Oil Free Moisturizer 100ml",
          "price": 40,
          "quantity": 2,
          "total": 80,
          "discountPercentage": 13.1,
          "discountedPrice": 70,
          "thumbnail": "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg"
        },
        {
          "id": 95,
          "title": "Wholesale cargo lashing Belt",
          "price": 930,
          "quantity": 1,
          "total": 930,
          "discountPercentage": 17.67,
          "discountedPrice": 766,
          "thumbnail": "https://cdn.dummyjson.com/product-images/95/thumbnail.jpg"
        },
        {
          "id": 39,
          "title": "Women Sweaters Wool",
          "price": 600,
          "quantity": 2,
          "total": 1200,
          "discountPercentage": 17.2,
          "discountedPrice": 994,
          "thumbnail": "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg"
        }
      ],
      "total": 2328,
      "discountedTotal": 1941,
      "userId": 97,
      "totalProducts": 5,
      "totalQuantity": 10
    };

   type HairType = {
        color: string
        type: string
      }
   type CoordinatesType = {
        lat: number
        lng: number
      }
      type AddressType = {
        address: string
        city: string
        coordinates: CoordinatesType
        postalCode: string
        state: string
      }
  type BankType = {
        cardExpire: string
        cardNumber: string
        cardType: string
        currency: string
        iban: string
      }
   type CryptoType = {
        coin: string
        wallet: string
        network: string
      }
    type CompanyType = {
        address: AddressType
        department: string
        name: string
        title: string
      }
     type UserType = {
        id: number
        firstName: string
        lastName: string
        maidenName: string
        age: number
        gender: string
        email: string
        phone: string
        username: string
        password: string
        birthDate: string
        image: string
        bloodGroup: string
        height: number
        weight: number
        eyeColor: string
        hair: HairType
        domain: string
        ip: string
        address: AddressType
        macAddress: string
        university: string
        bank: BankType
        company: CompanyType
        ein: string
        ssn: string
        userAgent: string
        crypto: CryptoType
      }

      const users: UserType = 
        {
            "id": 2,
            "firstName": "Sheldon",
            "lastName": "Quigley",
            "maidenName": "Cole",
            "age": 28,
            "gender": "male",
            "email": "hbingley1@plala.or.jp",
            "phone": "+7 813 117 7139",
            "username": "hbingley1",
            "password": "CQutx25i8r",
            "birthDate": "2003-08-02",
            "image": "https://robohash.org/Sheldon.png?set=set4",
            "bloodGroup": "O+",
            "height": 187,
            "weight": 74,
            "eyeColor": "Brown",
            "hair": {
              "color": "Blond",
              "type": "Curly"
            },
            "domain": "51.la",
            "ip": "253.240.20.181",
            "address": {
              "address": "6007 Applegate Lane",
              "city": "Louisville",
              "coordinates": {
                "lat": 38.1343013,
                "lng": -85.6498512
              },
              "postalCode": "40219",
              "state": "KY"
            },
            "macAddress": "13:F1:00:DA:A4:12",
            "university": "Stavropol State Technical University",
            "bank": {
              "cardExpire": "10/23",
              "cardNumber": "5355920631952404",
              "cardType": "mastercard",
              "currency": "Ruble",
              "iban": "MD63 L6YC 8YH4 QVQB XHIK MTML"
            },
            "company": {
              "address": {
                "address": "8821 West Myrtle Avenue",
                "city": "Glendale",
                "coordinates": {
                  "lat": 33.5404296,
                  "lng": -112.2488391
                },
                "postalCode": "85305",
                "state": "AZ"
              },
              "department": "Services",
              "name": "Aufderhar-Cronin",
              "title": "Senior Cost Accountant"
            },
            "ein": "52-5262907",
            "ssn": "447-08-9217",
            "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30",
            "crypto": {
              "coin": "Bitcoin",
              "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
              "network": "Ethereum (ERC20)"
            }
          };
const fetch = require("node-fetch");

let p = new Promise((resolve, reject) => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            data.forEach((element) => {
              console.log(element);
              resolve("Successful!");
            });
          })
          .catch((err) => {
            reject("Failed!");
          });
      });
      p.then((d) => {
        console.log(`The promise is ` + d);
      }).catch((d) => {
        console.log(`The promise is ` + d);
      });
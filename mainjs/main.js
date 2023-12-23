//                      Uyga vazifa 5-oy 2-dars

//                           1-masala

// function arr(arg) {
//     let sum = 0;
  
//     for (let i = 0; i < arg.length; i++) {
//       if (arg[i] % 2 === 0) {
//         sum += arg[i] * arg[i];
//       }
//     }
  
//     return sum;
//   }
  
//   let allMassiv = [1, 2 , 3 , 4 , 5];
//     let count = arr(allMassiv);
//   console.log(count);


  

//                            2-masala


// function arr(args) {
//     let sum = [];
  
//     for (let i = 0; i < args.length; i++) {
//       if (args[i].length > 0) {
//         sum.push(args[i][0]);
//       }
//     }
  
//     return sum;
//   }
  
//   let soz = ["salom", "dunyo", "javascript", "html", "css"];
  
//   let count = arr(soz);
  
//   console.log(soz);





//                                3-masala


let user = {
    age:13,
    year:10,
    hullas:10,
  };

function arr(arg) {
    let count = 0;
  
    for (let key in arg) {
      if (typeof arg[key] === 'number') {
        count += arg[key];
      }
    }
  
    return count;
  }
  

  let sum = arr(user);
  console.log( sum);
  

  
  
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../model/product");
router.get("/",(req, res, next) => {
  User.find()
    .then((result) => {
      res.status(200).json({result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((result) => {
      res.status(200).json({result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.put("/:id", (req, res, next) => {
  console.log(req.params.id);
  User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        productId: req.body.productId,
        productName: req.body.productName,
        categoryId: req.body.categoryId,
        categoryName: req.body.categoryName,

      },
    }
  )
    .then((result) => {
      res.status(200).json({ message: "successfully updated", result: result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.delete("/:id", (req, res, next) => {
  User.remove({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({
        message: "successfully deleted",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });

});
// router.post("/signup", (req, res, next) => {
//   // bcrypt.hash(plaintextPassword, salt, function(err, hash) {
//   //     // Store hash in the database
//   // });
//   console.log(req);
//   bcrypt.hash(req.body.password, 10, (err, hash) => {
//     if (err) {
//       res.status(500).json({ error: err });
//     } else {
//       console.log("hash", hash);
//       const user = new User({
//         _id: new mongoose.Types.ObjectId(),
//         Name: req.body.Name,
//         emailID: req.body.emailID,
//         // password: hash,
//         // userType: req.body.userType,
//         Mobile: req.body.Mobile,
//       });
//       console.log(user);
//       user
//         .save()
//         .then((result) => {
//           res.status(200).json({
//             newUser: result,
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//           res.status(500).json({ error: err });
//         });

//     }
//   });
// });

router.post("/signup", (req, res, next) => {
  const user = new User({ _id: new mongoose.Types.ObjectId(),
    productId: req.body.productId,
    productName: req.body.productName,
    categoryId: req.body.categoryId,
    categoryName: req.body.categoryName,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newProduct: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
    console.log(user);
});

// router.post("/login", (req, res, next) => {
//   User.find({ userName: req.body.userName })
//     .exec()
//     .then((user) => {
//       if (user.length < 1) {
//         return res.status(401).json({ msg: "user not exist" });
//       }
//       bcrypt.compare(req.body.password, user[0].password, (err, result) => {
//         console.log(req.body.password, user[0], "Password match");
//         console.log("result", result);
//         if (!result) {
//           return res.status(401).json({ msg: "password macthing fail" });
//         }
//         if (result) {
//           const token = jwt.sign(
//             {
//               userName: user[0].userName,
//               userType: user[0].userType,
//               email: user[0].email,
//               phone: user[0].phone,
//             },
//             "this is dummy text",
//             {
//               expiresIn: "24h",
//             }
//           );
//           res.status(200).json({
//             userName: user[0].userName,
//             userType: user[0].userType,
//             email: user[0].email,
//             phone: user[0].phone,
//             token: token,
//           });
//         } 
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err });
//     });
// });



module.exports = router;

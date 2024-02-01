const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getSingleProductReviews,
  deleteProductReview,
  addToCart,
  getCartItems,
  fluttercreateProduct,
} = require("../controller/ProductController");
const {
  isAuthenticatedUser,
  authorizedRoles,
  auth,
} = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getAllProducts);

router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizedRoles("admin"), createProduct);

  
router
  .route("/create/product")
  .post(auth, authorizedRoles("admin"), fluttercreateProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct);

router
  .route("/product/:id")
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct)
  .get(getSingleProduct);

  router
    .route("/product/reviews/react")
    .put(isAuthenticatedUser, createProductReview); 

router.route("/create/product/review").put(auth, createProductReview); // f
// r

router
  .route("/reviews")
  .get(getSingleProductReviews)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProductReview);

router.route("/addtocart").post(auth, addToCart);
router.route("/getcart").get(auth, getCartItems);

module.exports = router;

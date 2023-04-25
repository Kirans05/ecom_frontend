import { Box, Breadcrumbs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import DifferentBikes from "../../Components/HomePageComponents/DifferentBikes";
import { Link, useParams } from "react-router-dom";
import SideFilters from "../../Components/SIngleProductPage/SideFilters";
import "./ProductPage.css";
import Footer from "../../Components/HomePageComponents/Footer";
import ProductCategory from "../../Components/SIngleProductPage/ProductCategory";
import axios from "axios";
import { fetchCategoryProducts } from "../../Apis/SingleProductApi";
import { useDispatch, useSelector } from "react-redux";
import { updateProductArray } from "../../redux/Action/ProductPageAction";

const ProductPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const storeState = useSelector((state) => state);
  let { productsArray, brandsArr, categoryArr, modelArr, yearArr } =
    storeState.ProductPageReducer;
  const [productDetails, setProductDetails] = useState([...productsArray]);

  let [filterData, setFilterData] = useState({
    brandData: [...brandsArr],
    categoryData: [...categoryArr],
    modelData: [...modelArr],
    yearData: [...yearArr],
  });

  const filterEvProducts = (type, product, msg) => {
    if (msg == "filter" && type == "brand") {
      let filterProducts = productsArray.filter(
        (list) => list.brand.toLowerCase() == product.toLowerCase()
      );
      if (productDetails.length == productsArray.length) {
        setProductDetails(filterProducts);
      } else {
        let arr = [...productDetails, ...filterProducts];
        setProductDetails(arr);
      }
    } else if (msg == "cancelFilter" && type == "brand") {
      let filterProducts = productDetails.filter(
        (list) => list.brand.toLowerCase() != product.toLowerCase()
      );
      if (filterProducts.length == 0) {
        setProductDetails([...productsArray]);
      } else {
        setProductDetails(filterProducts);
      }
    }

    if (msg == "filter" && type == "model") {
      let filterProducts = productsArray.filter((list) => {
        return list.model.toLowerCase() == product.toLowerCase();
      });
      if (productDetails.length == productsArray.length) {
        setProductDetails(filterProducts);
      } else {
        let arr = [...productDetails, ...filterProducts];
        setProductDetails(arr);
      }
    } else if (msg == "cancelFilter" && type == "model") {
      let filterProducts = productDetails.filter(
        (list) => list.model.toLowerCase() != product.toLowerCase()
      );
      if (filterProducts.length == 0) {
        setProductDetails([...productsArray]);
      } else {
        setProductDetails(filterProducts);
      }
    }
  };

  const getProductDetails = () => {
    fetchCategoryProducts(name)
      .then((response) => {
        let brandsObj = {};
        let categoryObj = {};
        let variantObj = {};
        let yearObj = {};
        let modalObj = {};
        let array = [...response.data[0]];
        let priceArr = [];
        for (let i = 0; i < array.length; i++) {
          if (brandsObj[array[i].brand]) {
            ++brandsObj[array[i].brand];
          } else {
            brandsObj[array[i].brand] = 1;
          }

          if (categoryObj[array[i].category_id.category_name]) {
            ++categoryObj[array[i].category_id.category_name];
          } else {
            categoryObj[array[i].category_id.category_name] = 1;
          }

          if (variantObj[array[i].variant]) {
            ++variantObj[array[i].variant];
          } else {
            variantObj[array[i].variant] = 1;
          }

          if (yearObj[array[i].year]) {
            ++yearObj[array[i].year];
          } else {
            yearObj[array[i].year] = 1;
          }

          if (modalObj[array[i].model]) {
            ++modalObj[array[i].model];
          } else {
            modalObj[array[i].model] = 1;
          }
          let price = array[i].price.split(",").join("");

          priceArr.push(Number(price));
        }
        let dispatchObject = {
          data: response.data[0],
          brand: Object.entries(brandsObj),
          category: Object.entries(categoryObj),
          variant: Object.entries(variantObj),
          year: Object.entries(yearObj),
          model: Object.entries(modalObj),
          priceRange: priceArr.sort((a, b) => a - b),
        };
        dispatch(updateProductArray(dispatchObject));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    setProductDetails([...productsArray]);
    setFilterData({
      brandData: [...brandsArr],
      categoryData: [...categoryArr],
      modelData: [...modelArr],
      yearData: [...yearArr],
    });
  }, [productsArray]);

  return (
    <Box className="ProductPageMainDiv">
      <Header />
      <DifferentBikes />
      <div className="productDiv">
        <Breadcrumbs aria-label="breadcrumb">
          <Typography
            sx={{
              color: "green",
              fontSize: "13px",
              "&:hover": { cursor: "pointer" },
            }}
          >
            HOME
          </Typography>
          <Typography
            sx={{
              color: "green",
              fontSize: "13px",
              "&:hover": { cursor: "pointer" },
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: "13px", "&:hover": { cursor: "pointer" } }}
          >
            {name}
          </Typography>
        </Breadcrumbs>
        <div className="mainDiv">
          <SideFilters
            filterEvProducts={filterEvProducts}
            setFilterData={setFilterData}
            filterData={filterData}
          />
          <ProductCategory productDetails={productDetails} />
        </div>
      </div>
      <Footer />
    </Box>
  );
};

export default ProductPage;

import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCart from "../component/BlogCart";
import ProductCart from "../component/ProductCart";
import SpecialProduct from "../component/SpecialProduct";
import Container from "../component/Container";
import { services } from "../utils/Data";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import { addToWishList } from "../features/products/productSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const productState = useSelector((state) => state?.product?.product);
  console.log("productState", productState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  const addToWish = (id) => {
    console.log(id);
    dispatch(addToWishList(id));
  };

  return (
    <>
      <HomeContainer>
        <Container class1="home-wrapper-1 py-5">
          <div className="row d-flex flex-lg-row justify-content-center gap-10 py-2">
            <div className="mrquee-inner-wrapper brand-wrapper rounded-3 col-12">
              <Marquee className="d-flex rounded-3">
                <div className="mx-2 w-100 rounded-3">
                  <img
                    height={400}
                    src="/images/1.jpg"
                    alt="brand-01"
                    className="rounded-3"
                  />
                </div>
                <div className="mx-2 w-100">
                  <img height={400} src="/images/3055938.jpg" alt="brand-01" />
                </div>
                <div className="mx-2 w-100">
                  <img
                    height={400}
                    src="/images/pexels-borko-manigoda-1778412.jpg"
                    alt="brand-01"
                  />
                </div>
                <div className="mx-2 w-100">
                  <img
                    height={400}
                    src="/images/pexels-porapak-apichodilok-346748.jpg"
                    alt="brand-01"
                  />
                </div>
              </Marquee>
            </div>
            <div className="main-banner position-relative py-2 col-12">
              <img
                height={100}
                src="/images/8286086.jpg"
                className="img-fluid rounded-3"
                alt="main-banner-1"
              />
            </div>
          </div>
        </Container>

        <Container class1="home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="services">
                {services?.map((i, j) => {
                  return (
                    <div className="d-flex  align-items-center gap-15" key={j}>
                      <img src={i.image} alt="service" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>

        <Container class1="home-wrapper-2 py-3">
          <div className="row">
            <div>
              <div className="catagories-1">
                <div className="item">
                  <div className="item-text">
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="item">
                  <div className="item-text">
                    <h6>Television</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="Television" />
                </div>
                <div className="item ">
                  <div className="item-text">
                    <h6>Speaker</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/speaker.jpg" alt="speaker" />
                </div>
                <div className="item">
                  <div className="item-text">
                    <h6>Laptop</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/laptop.jpg" alt="camera" />
                </div>
                <div className="item">
                  <div className="item-text">
                    <h6>Headphone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="headphone" />
                </div>

                <div className="item">
                  <div className="item-text">
                    <h6>Television</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="Television" />
                </div>
                <div className="item">
                  <div className="item-text">
                    <h6>Speaker</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/speaker.jpg" alt="speaker" />
                </div>
                <div className="item">
                  <div className="item-text">
                    <h6>Laptop</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/laptop.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </Container>
        

        <Container class1="featured-wrapper home-wrapper-2 py-3">
          <div className="row">
            <div className="col-12 ">
              <h3 className="blog-heading">Featured Collections</h3>
            </div>
          </div>
          <div className="row">
            <div className="popular-cart-container">
              {Array.isArray(productState) &&
                productState?.map((item, index) => {
                  if (item?.tags === "featured") {
                    return (
                      <div key={index}>
                        <div className="product-cart position-relative">
                          <div className="wishlist-icon position-absolute">
                            <button
                              className="bg-transparent border-0"
                              onClick={(e) => {
                                addToWish(item?._id);
                              }}
                            >
                              <img src="/images/wish.svg" alt="add-cart" />
                            </button>
                          </div>
                          <div className="product-image">
                            <img
                              src={item?.images[0]?.url}
                              className="img-fluid  mx-auto hoverable"
                              width={160}
                              alt="watch"
                            />
                            <img
                              src={item?.images[0]?.url}
                              className="img-fluid  mx-auto hoverable"
                              width={160}
                              alt="watch-02"
                            />
                          </div>
                          <div className="product-details">
                            <h6 className="brand"> {item?.brands}</h6>
                            <h5 className="title">{item?.title}</h5>
                            <ReactStars
                              count={5}
                              value={item?.totalrating}
                              edit={false}
                              size={24}
                              activeColor="#ffd700"
                            />
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item?.description,
                              }}
                            ></p>
                            <div className="d-flex justify-content-between align-items-center py-3">
                              <p className="price">$ {item?.price}</p>
                              <p className="price">
                                Reedim Coin : {item?.reedim ? item?.reedim : 0}
                              </p>
                            </div>
                          </div>
                          <div className="action-bar position-absolute">
                            <div className="d-flex flex-column gap-15">
                              <button className="bg-transparent border-0">
                                <img
                                  onClick={() =>
                                    navigate("/product/" + item?._id)
                                  }
                                  src="/images/view.svg"
                                  alt="view"
                                />
                              </button>
                              <button className="bg-transparent border-0">
                                <img
                                  src="/images/add-cart.svg"
                                  alt="add-cart"
                                />
                              </button>
                              <button className="bg-transparent border-0">
                                <img
                                  src="/images/prodcompare.svg"
                                  alt="prodcompare"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </Container>

        <Container class1="famous-wrapper home-wrapper-2 py-3">
          <div className="famous-card-container">
            <div className="">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-001.webp"
                  alt="product"
                />
                <div className="famous-product-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>from $399 or $24.63 p/mo</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-002.jpg"
                  alt="product"
                />
                <div className="famous-product-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">from $399 or $24.63 p/mo</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-004.webp"
                  alt="product"
                />
                <div className="famous-product-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">from $399 or $24.63 p/mo</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="/images/product-004.webp"
                  alt="product"
                />
                <div className="famous-product-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p className="text-dark">from $399 or $24.63 p/mo</p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="special-wrapper home-wrapper-2 py-3">
          <div className="row">
            <div className="col-12">
              <h3 className="blog-heading">Special products</h3>
            </div>
          </div>
          <div className="row">
            {Array.isArray(productState) &&
              productState?.map((item, index) => {
                if (item.tags === "special") {
                  return (
                    <div className="special-card-container">
                      <SpecialProduct
                        key={index}
                        id={item?._id}
                        title={item?.title}
                        brand={item?.brands}
                        totalrating={item?.totalrating.toString()}
                        price={item?.price}
                        sold={item?.sold}
                        quantity={item?.quantity}
                        reedim={item?.reedim}
                        imgUrl={item?.images[0]?.url}
                      />
                    </div>
                  );
                }
              })}
          </div>
        </Container>

        <Container class1="popular-wrapper home-wrapper-2 py-3">
          <div className="row">
            <div className="col-12">
              <h3 className="blog-heading">Our Popular Product</h3>
            </div>
          </div>
          <div className="row">
            <div className="popular-cart-container">
              {Array.isArray(productState) &&
                productState?.map((item, index) => {
                  if (item?.tags === "popular") {
                    return (
                      <div key={index}>
                        <div className="product-cart position-relative">
                          <div className="wishlist-icon position-absolute">
                            <button
                              className="bg-transparent border-0"
                              onClick={(e) => {
                                addToWish(item?._id);
                              }}
                            >
                              <img src="/images/wish.svg" alt="add-cart" />
                            </button>
                          </div>
                          <div className="product-image">
                            <img
                              src={item?.images[0]?.url}
                              className="img-fluid  mx-auto hoverable"
                              width={160}
                              alt="watch"
                            />
                            <img
                              src={item?.images[0]?.url}
                              className="img-fluid  mx-auto hoverable"
                              width={160}
                              alt="watch-02"
                            />
                          </div>
                          <div className="product-details">
                            <h6 className="brand"> {item?.brands}</h6>
                            <h5 className="title">{item?.title}</h5>
                            <ReactStars
                              count={5}
                              value={item?.totalrating}
                              edit={false}
                              size={24}
                              activeColor="#ffd700"
                            />
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item?.description,
                              }}
                            ></p>
                            <div className="d-flex justify-content-between align-items-center py-3">
                              <p className="price">$ {item?.price}</p>
                              <p className="price">
                                Reedim Coin : {item?.reedim ? item?.reedim : 0}
                              </p>
                            </div>
                          </div>
                          <div className="action-bar position-absolute">
                            <div className="d-flex flex-column gap-15">
                              <button className="bg-transparent border-0">
                                <img
                                  onClick={() =>
                                    navigate("/product/" + item?._id)
                                  }
                                  src="/images/view.svg"
                                  alt="view"
                                />
                              </button>
                              <button className="bg-transparent border-0">
                                <img
                                  src="/images/add-cart.svg"
                                  alt="add-cart"
                                />
                              </button>
                              <button className="bg-transparent border-0">
                                <img
                                  src="/images/prodcompare.svg"
                                  alt="prodcompare"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </Container>

        <Container class1="marquee-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="mrquee-inner-wrapper brand-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand-01" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand-01" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </Container>

        {/* <Container class1="blog-wrapper home-wrapper-2 py-3">
          <div className="row">
            <div className="col-12">
              <h3 className="blog-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="blog-card-container">
            <div>
              <BlogCart />
            </div>
            <div>
              <BlogCart />
            </div>
            <div>
              <BlogCart />
            </div>
            <div>
              <BlogCart />
            </div>
          </div>
        </Container> */}
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  .home-wrapper-1 {
    background: linear-gradient(to right,rgb(255 255 255), rgb(202 202 202));
  }
  .hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 10px;
  }
  .services,
  .catagories-1,
  .blog-card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 5px;
    background-color: #fff;
  }
  .famous-card-container,
  .popular-cart-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }
  .special-card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
  /* .item-text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  } */
  @media (max-width: 1000px) {
    .hero-container {
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
    .services,
    .catagories-1,
    .blog-card-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .famous-card-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .special-card-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .services,
    .catagories-1,
    .blog-card-container {
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
    }
    .famous-card-container {
      grid-template-columns: repeat(1, 1fr);
    }
    .special-card-container {
      grid-template-columns: repeat(1, 1fr);
    }
    .main-banner-content h5 {
      font-size: 25px;
      font-weight: 500;
      line-height: 28px;
    }
  }
`;
export default Home;

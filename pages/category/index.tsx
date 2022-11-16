import React, { ReactElement } from 'react'
import { ClientLayout } from '../../layouts'
import styles from './cate.module.css'


type Props = {};

const Category = (props: Props) => {
  return (
    <section className={styles.shop}>
    <div className="container mx-auto sm:px-4">
      <div className="flex flex-wrap ">
        <div className="lg:w-1/4 pr-4 pl-4">
          <div className={styles.shop__sidebar}>
            <div className={styles.shop__sidebar__accordion}>
              <div className={styles.accordion} id="accordionExample">
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                  <div className={styles.card_heading}>
                    <a data-toggle="collapse" data-target="#collapseOne">
                      Danh mục <span>Nam|Nữ</span>
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="hidden opacity-100 block"
                    data-parent="#accordionExample"
                  >
                    <div className="flex-auto p-6">
                      <div className="shop__sidebar__categories">
                        <ul className="nice-scroll">
                          <li>
                            <a href="#">Áo (20)</a>
                          </li>
                          <li>
                            <a href="#">Tất (20)</a>
                          </li>
                          <li>
                            <a href="#">Quần (20)</a>
                          </li>
                          <li>
                            <a href="#">Túi Xách (20)</a>
                          </li>
                          <li>
                            <a href="#">Váy (20)</a>
                          </li>
                          <li>
                            <a href="#">Croptop (20)</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                  <div className={styles.card_heading}>
                    <a data-toggle="collapse" data-target="#collapseTwo">
                      Thương Hiệu
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="hidden opacity-100 block"
                    data-parent="#accordionExample"
                  >
                    <div className="flex-auto p-6">
                      <div className={styles.shop__sidebar__brand}>
                        <ul>
                          <li>
                            <a href="#">Louis Vuitton</a>
                          </li>
                          <li>
                            <a href="#">Chanel</a>
                          </li>
                          <li>
                            <a href="#">Hermes</a>
                          </li>
                          <li>
                            <a href="#">Gucci</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                  <div className={styles.card_heading}>
                    <a data-toggle="collapse" data-target="#collapseThree">
                      Lọc Theo Giá
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    className="hidden opacity-100 block"
                    data-parent="#accordionExample"
                  >
                    <div className="flex-auto p-6">
                      <div className={styles.shop__sidebar__price}>
                        <ul>
                          <li>
                            <a href="#">100K-200K</a>
                          </li>
                          <li>
                            <a href="#">200K-300K</a>
                          </li>
                          <li>
                            <a href="#">300K-400K</a>
                          </li>
                          <li>
                            <a href="#">400K-500K</a>
                          </li>
                          <li>
                            <a href="#">500K +</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                  <div className={styles.card_heading}>
                    <a data-toggle="collapse" data-target="#collapseFour">
                      Kích Thước{" "}
                    </a>
                  </div>
                  <div
                    id="collapseFour"
                    className="hidden opacity-100 block"
                    data-parent="#accordionExample"
                  >
                    <div className="flex-auto p-6">
                      <div className={styles.shop__sidebar__size}>
                        <label htmlFor="xs">
                          xs
                          <input type="radio" id="xs" />
                        </label>
                        <label htmlFor="sm">
                          s
                          <input type="radio" id="sm" />
                        </label>
                        <label htmlFor="md">
                          m
                          <input type="radio" id="md" />
                        </label>
                        <label htmlFor="xl">
                          xl
                          <input type="radio" id="xl" />
                        </label>
                        <label htmlFor="2xl">
                          2xl
                          <input type="radio" id="2xl" />
                        </label>
                        <label htmlFor="xxl">
                          xxl
                          <input type="radio" id="xxl" />
                        </label>
                        <label htmlFor="3xl">
                          3xl
                          <input type="radio" id="3xl" />
                        </label>
                        <label htmlFor="4xl">
                          4xl
                          <input type="radio" id="4xl" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                  <div className={styles.card_heading}>
                    <a data-toggle="collapse" data-target="#collapseFive">
                      Màu Sắc
                    </a>
                  </div>
                  <div
                    id="collapseFive"
                    className="hidden opacity-100 block"
                    data-parent="#accordionExample"
                  >
                    <div className="flex-auto p-6">
                      <div className={styles.shop__sidebar__color}>
                        <label className="c-1" htmlFor="sp-1">
                          <input type="radio" id="sp-1" />
                        </label>
                        <label className="c-2" htmlFor="sp-2">
                          <input type="radio" id="sp-2" />
                        </label>
                        <label className="c-3" htmlFor="sp-3">
                          <input type="radio" id="sp-3" />
                        </label>
                        <label className="c-4" htmlFor="sp-4">
                          <input type="radio" id="sp-4" />
                        </label>
                        <label className="c-5" htmlFor="sp-5">
                          <input type="radio" id="sp-5" />
                        </label>
                        <label className="c-6" htmlFor="sp-6">
                          <input type="radio" id="sp-6" />
                        </label>
                        <label className="c-7" htmlFor="sp-7">
                          <input type="radio" id="sp-7" />
                        </label>
                        <label className="c-8" htmlFor="sp-8">
                          <input type="radio" id="sp-8" />
                        </label>
                        <label className="c-9" htmlFor="sp-9">
                          <input type="radio" id="sp-9" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                  <div className={styles.card_heading}>
                    <a data-toggle="collapse" data-target="#collapseSix">
                      Nhãn
                    </a>
                  </div>
                  <div
                    id="collapseSix"
                    className="hidden opacity-100 block"
                    data-parent="#accordionExample"
                  >
                    <div className="flex-auto p-6">
                      <div className={styles.shop__sidebar__tags}>
                        <a href="#">Áo</a>
                        <a href="#">Quần</a>
                        <a href="#">Giày</a>
                        <a href="#">Váy</a>
                        <a href="#">Túi Xách</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-3/4 pr-4 pl-4">
          <div className={styles.shop__product__option}>
            <div className="flex flex-wrap ">
              <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
                <div className={styles.shop__product__option__left}>
                  <p>Hiện 1-12 của 120 kết quả</p>
                </div>
              </div>
              <div className="lg:w-1/2 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
                <div className={styles.shop__product__option__right}>
                  <p>Lọc Theo Giá:</p>
                  <select>
                    <option value="">Cao -&gt; Thấp</option>
                    <option value="">Thấp -&gt; Cao</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap ">
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                 
                >
                  <picture>
                  <img src="img/product/product-2.jpg" alt="" />
                  </picture>
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <picture>
                        <img src="img/icon/heart.png" alt="" />
                        </picture>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <picture>
                        <img src="../../img/icon/compare.png" alt="" />{" "}
                        </picture>
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <picture>
                        <img src="../../img/icon/cart.png" alt="" />
                        </picture>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>Piqué Biker Jacket</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <h5>$67.24</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-4">
                      <input type="radio" id="pc-4" />
                    </label>
                    <label className="active black" htmlFor="pc-5">
                      <input type="radio" id="pc-5" />
                    </label>
                    <label className="grey" htmlFor="pc-6">
                      <input type="radio" id="pc-6" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div className="product__item sale">
                <div
                  className="product__item__pic set-bg"
                 
                >
                  <picture>
                  <img src="img/product/product-3.jpg" alt="" />
                  </picture>
                  <span className="label">Sale</span>
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <picture>
                        <img src="img/icon/heart.png" alt="" />
                        </picture>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <picture>
                        <img src="img/icon/compare.png" alt="" />{" "}
                        </picture>
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <picture>
                        <img src="../../public/img/icon/" alt="" />
                        </picture>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>Multi-pocket Chest Bag</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                  <h5>$43.48</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-7">
                      <input type="radio" id="pc-7" />
                    </label>
                    <label className="active black" htmlFor="pc-8">
                      <input type="radio" id="pc-8" />
                    </label>
                    <label className="grey" htmlFor="pc-9">
                      <input type="radio" id="pc-9" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-4.jpg"
                >
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="img/icon/heart.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/compare.png" alt="" />{" "}
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/search.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>Diagonal Textured Cap</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <h5>$60.9</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-10">
                      <input type="radio" id="pc-10" />
                    </label>
                    <label className="active black" htmlFor="pc-11">
                      <input type="radio" id="pc-11" />
                    </label>
                    <label className="grey" htmlFor="pc-12">
                      <input type="radio" id="pc-12" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div className="product__item sale">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-6.jpg"
                >
                  <span className="label">Sale</span>
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="img/icon/heart.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/compare.png" alt="" />{" "}
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/search.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>Ankle Boots</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                  <h5>$98.49</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-16">
                      <input type="radio" id="pc-16" />
                    </label>
                    <label className="active black" htmlFor="pc-17">
                      <input type="radio" id="pc-17" />
                    </label>
                    <label className="grey" htmlFor="pc-18">
                      <input type="radio" id="pc-18" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-7.jpg"
                >
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="img/icon/heart.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/compare.png" alt="" />{" "}
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/search.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>T-shirt Contrast Pocket</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <h5>$49.66</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-19">
                      <input type="radio" id="pc-19" />
                    </label>
                    <label className="active black" htmlFor="pc-20">
                      <input type="radio" id="pc-20" />
                    </label>
                    <label className="grey" htmlFor="pc-21">
                      <input type="radio" id="pc-21" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-8.jpg"
                >
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="img/icon/heart.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/compare.png" alt="" />{" "}
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/search.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>Basic Flowing Scarf</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <h5>$26.28</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-22">
                      <input type="radio" id="pc-22" />
                    </label>
                    <label className="active black" htmlFor="pc-23">
                      <input type="radio" id="pc-23" />
                    </label>
                    <label className="grey" htmlFor="pc-24">
                      <input type="radio" id="pc-24" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-9.jpg"
                >
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="img/icon/heart.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/compare.png" alt="" />{" "}
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/search.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>Piqué Biker Jacket</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <h5>$67.24</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-25">
                      <input type="radio" id="pc-25" />
                    </label>
                    <label className="active black" htmlFor="pc-26">
                      <input type="radio" id="pc-26" />
                    </label>
                    <label className="grey" htmlFor="pc-27">
                      <input type="radio" id="pc-27" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div className="product__item sale">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-10.jpg"
                >
                  <span className="label">Sale</span>
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="img/icon/heart.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/compare.png" alt="" />{" "}
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/search.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>Multi-pocket Chest Bag</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                  <h5>$43.48</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-28">
                      <input type="radio" id="pc-28" />
                    </label>
                    <label className="active black" htmlFor="pc-29">
                      <input type="radio" id="pc-29" />
                    </label>
                    <label className="grey" htmlFor="pc-30">
                      <input type="radio" id="pc-30" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-11.jpg"
                >
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="img/icon/heart.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/compare.png" alt="" />{" "}
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/search.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>Diagonal Textured Cap</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <h5>$60.9</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-31">
                      <input type="radio" id="pc-31" />
                    </label>
                    <label className="active black" htmlFor="pc-32">
                      <input type="radio" id="pc-32" />
                    </label>
                    <label className="grey" htmlFor="pc-33">
                      <input type="radio" id="pc-33" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div className="product__item sale">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-12.jpg"
                >
                  <span className="label">Sale</span>
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="img/icon/heart.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/compare.png" alt="" />{" "}
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/search.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>Ankle Boots</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o" />
                  </div>
                  <h5>$98.49</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-34">
                      <input type="radio" id="pc-34" />
                    </label>
                    <label className="active black" htmlFor="pc-35">
                      <input type="radio" id="pc-35" />
                    </label>
                    <label className="grey" htmlFor="pc-36">
                      <input type="radio" id="pc-36" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-13.jpg"
                >
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="img/icon/heart.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/compare.png" alt="" />{" "}
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/search.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>T-shirt Contrast Pocket</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <h5>$49.66</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-37">
                      <input type="radio" id="pc-37" />
                    </label>
                    <label className="active black" htmlFor="pc-38">
                      <input type="radio" id="pc-38" />
                    </label>
                    <label className="grey" htmlFor="pc-39">
                      <input type="radio" id="pc-39" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-14.jpg"
                >
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="img/icon/heart.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/compare.png" alt="" />{" "}
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/search.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>Basic Flowing Scarf</h6>
                  <a href="#" className="add-cart">
                    + Add To Cart
                  </a>
                  <div className="rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                  </div>
                  <h5>$26.28</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-40">
                      <input type="radio" id="pc-40" />
                    </label>
                    <label className="active black" htmlFor="pc-41">
                      <input type="radio" id="pc-41" />
                    </label>
                    <label className="grey" htmlFor="pc-42">
                      <input type="radio" id="pc-42" />
                    </label>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex flex-wrap ">
            <div className="lg:w-full pr-4 pl-4">
              <div className={styles.product__pagination}>
                <a className="active" href="#">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <span>...</span>
                <a href="#">21</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
Category.getLayout=(page: ReactElement)=><ClientLayout>{page}</ClientLayout>
export default Category
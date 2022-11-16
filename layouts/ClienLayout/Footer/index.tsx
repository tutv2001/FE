import React from "react";

type Props = {};

const Footer = (props: Props) => {

  return <section className="footer w-full mx-auto ">
  <hr className="w-full mb-[40px]" />
  <div className="w-[1410px] mx-auto flex">
    <div className="flex ml-[50px]">
      <div className="mr-[142px]">
        <h3 className="mb-[15px]">COMPANY</h3>
        <span>
          <a href="">Twiter</a>{" "}
        </span>
        <br />
        <span>
          <a href="">Facebook</a>{" "}
        </span>
        <br />
        <span>Instagram</span>
        <br />
        <span>Pinterest</span>
        <br />
        <span>Jobs</span>
      </div>
      <div className="">
        <h3 className="mb-[15px]">SUPPORT</h3>
        <span className=""> Help + FAQs</span>
        <br />
        <span className="">Track Your Order</span>
        <br />
        <span className="">Shipping</span>
        <br />
        <span>Returns</span>
        <br />
        <span className="pt-[30px]">Contact Support</span>
      </div>
    </div>
    <div className="mx-auto">
      <img src="./img/logoblack 1.png" alt="" className="mt-[50px]" />
      <div className="flex space-x-[32px] mt-[14px]">
        <i className="fa-brands fa-facebook-f" />
        <i className="fa-brands fa-google" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-pinterest-p" />
      </div>
    </div>
    <div className="w-[330px]">
      <h3>NEWSLETTER</h3>
      <p className="py-[18px] font-normal">
        Enter your email below to be the first to know about new collections and
        product launches.
      </p>
      <div className="flex">
        <input
          type="email"
          placeholder="Your email..."
          className="border border-[#000000] h-[54px] w-[251px] mr-[4px]"
        />
        <div className="bg-black w-[74px] h-[54px]">
          <i
            className="fa-regular fa-envelope px-[22px] py-[14px]"
            style={{ color: "#f9f3f3", fontSize: 30 }}
          />
        </div>
      </div>
    </div>
  </div>
  <hr className="w-full mt-[30px]" />
  <div className="pay h-[40px]"></div>
</section>
;
};

export default Footer;

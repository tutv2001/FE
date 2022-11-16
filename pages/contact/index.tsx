import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
type Props = {};

const Contact = (props: Props) => {
  const form = useRef<any>();
  const route = useRouter();
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm("service_7magxxi", "template_qpun9jd", form.current, "GB0nRglh2RmNxpQsu").then(
      (result) => {
        console.log(result.text);
        alert('Gửi thành công !')
        route.push('/contact')
      },
      (error) => {
        console.log(error.text);
      },
    );
  };
  return (
    <div>
      <div className="main w-[1240px] mx-auto mt-[112px] grid grid-cols-2">
        <div className="mr-[81px]">
          <h2 className="text-2xl mb-[30px]">LIÊN HỆ</h2>
          <span className="text-[#6E6F7E] ">
            Nếu bạn muốn biết thêm về các chính sách của chúng tôi, bạn có thể tham khảo các điều khoản và điều kiện của
            chúng tôi. Bạn cũng sẽ có thể làm theo đơn đặt hàng của mình (số theo dõi sẽ được cung cấp trong e-mail sau
            khi đặt hàng). Bạn muốn trả lại một số mặt hàng?
            <a href="./cart/cancelorder" className="text-[#E22C43]">
              Bấm vào đây.
            </a>
          </span>
          <div className="mt-[40px]">
            <div className="flex">
              <picture>
                <img src="./Image/Frame.png" alt="" className="w-[30px] h-[30px] mr-[26px]" />
              </picture>
              <div>
                <h3 className="text-xl">Địa chỉ</h3>
                <span className="text-[#6E6F7E]">Số 1 Trịnh Văn Bô, Phương Canh, Nam Từ Liêm, Hà Nội</span>
              </div>
            </div>
            <div className="flex py-[20px]">
              <picture>
                <img src="./Image/Group.png" alt="" className="w-[30px] h-[30px] mr-[26px]" />
              </picture>
              <div>
                <h3 className="text-xl">Số điện thoại</h3>
                <span className="text-[#6E6F7E]">0987654321</span>
              </div>
            </div>
            <div className="flex">
              <picture>
                <img src="./Image/Group (1).png" alt="" className="w-[30px] h-[30px] mr-[26px]" />
              </picture>
              <div>
                <h3 className="text-xl">Email</h3>
                <span className="text-[#6E6F7E]">example@gmail.com</span>
              </div>
            </div>
            .
            <div className="flex py-[20px]">
              <picture>
                <img src="./Image//Frame2.png" alt="" className="w-[30px] h-[30px] mr-[26px]" />
              </picture>
              <div>
                <h3 className="text-xl">Giờ mở cửa</h3>
                <span className="text-[#6E6F7E]">Từ 7h - 21h hàng ngày </span>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <h2 className="text-2xl">GÓP Ý VỚI CHÚNG TÔI</h2>
          <form action="" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Tên của bạn"
              name="from_name"
              className="w-[590px] h-[60px] border border-[#A4A5AE] pl-[24px] mt-[30px]"
            />
            <input
              type="email"
              placeholder="Email của bạn"
              name="from_email"
              className="w-[590px] h-[60px] border border-[#A4A5AE] pl-[24px] mt-[30px]"
            />
            <textarea name="message" id="" className="w-[590px] h-[120px] border border-[#A4A5AE] mt-[30px]"></textarea>
            <input type="submit" value="Send" className="bg-black w-[590px] h-[60px] mt-[28px] text-slate-50" />
            {/* <div>
                            <button className="bg-black w-[590px] h-[60px] mt-[28px] ">
                                <a href="" className="text-slate-50 ">Gửi</a>
                            </button>
                        </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

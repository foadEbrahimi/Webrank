import React from "react";
const Info = [
  {
    title: "تبلیغ سختی است",
    sub: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        fill="#ffc451"
        className="w-8"
      >
        <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm0 32v64H288V256H96zM240 416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
      </svg>
    ),
  },
  {
    title: "کدام یک از اینهاست",
    sub: "کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند",
    icon: (
      <svg
        fill="#ffc451"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 md:w-14"
      >
        <path d="M17.895 3.553A1.001 1.001 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895l-4-7.999zM19.382 11h-7.764l-3-6h7.764l3 6zm-3 8H8.618l3-6h7.764l-3 6z" />
      </svg>
    ),
  },
  {
    title: "یا کور شده است",
    sub: "یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند",
    icon: (
      <svg
        fill="#ffc451"
        viewBox="0 -32 576 576"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 md:w-14"
      >
        <path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z" />
      </svg>
    ),
  },
  {
    title: "حقیقت مبارک",
    sub: "آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="#ffc451"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14"
      >
        <path
          d="M11.302 21.6149C11.5234 21.744 11.6341 21.8086 11.7903 21.8421C11.9116 21.8681 12.0884 21.8681 12.2097 21.8421C12.3659 21.8086 12.4766 21.744 12.698 21.6149C14.646 20.4784 20 16.9084 20 12V6.6C20 6.04207 20 5.7631 19.8926 5.55048C19.7974 5.36198 19.6487 5.21152 19.4613 5.11409C19.25 5.00419 18.9663 5.00084 18.3988 4.99413C15.4272 4.95899 13.7136 4.71361 12 3C10.2864 4.71361 8.57279 4.95899 5.6012 4.99413C5.03373 5.00084 4.74999 5.00419 4.53865 5.11409C4.35129 5.21152 4.20259 5.36198 4.10739 5.55048C4 5.7631 4 6.04207 4 6.6V12C4 16.9084 9.35396 20.4784 11.302 21.6149Z"
          stroke="#ffc451"
        />
      </svg>
    ),
  },
];
export default function Ads() {
  return (
    <div className="">
      <div className="space-y-8 laptop:flex laptop:items-center laptop:gap-5 laptop:space-y-0">
        <div className="Img">
          <img
            src="./Images/Ads.jpg"
            alt="Ads Img"
            className="md:max-w-2xl laptop:max-w-[30rem] xl:max-w-[35rem] 2xl:max-w-[38rem]"
          />
        </div>
        <div className="Content space-y-2">
          {Info.map((ads, index) => (
            <div className="flex items-start gap-5 p-3" key={index}>
              {ads.icon}
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl font-bold">{ads.title}</h1>
                <h2 className="text-slate-500">{ads.sub}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { React, useState } from "react";

export default function Fittest() {
  const [Info] = useState({
    title: "شایسته ترین لذت را به هر حال ارائه می دهد",
    subTitle:
      "خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است",
  });
  const [infocards] = useState([
    {
      id: 1,
      title: 65,
      subTitle: "مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-10 fill-Primary"
        >
          <path d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 85,
      subTitle:
        "پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 fill-white"
        >
          <g
            stroke="#ffc451"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m12 6v6l4 4" />
          </g>
        </svg>
      ),
    },
    {
      id: 3,
      title: 35,
      subTitle: "سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد",
      icon: (
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 fill-Primary"
        >
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
          <path
            fill-rule="evenodd"
            d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: 20,
      subTitle:
        "جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند",
      icon: (
        <svg
          enable-background="new 0 0 64 64"
          viewBox="0 0 64 64"
          className="w-10 fill-Primary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m32.001 27.927-3.246 9.989h-10.504l8.498 6.174-3.248 9.988 8.5-6.172 8.498 6.172-3.248-9.988 8.498-6.174h-10.504zm2.838 15.12 1.752 5.396-4.59-3.336-4.594 3.336 1.756-5.396-4.592-3.336h5.676l1.754-5.396 1.754 5.396h5.674z" />
          <path d="m44.657 26.519v-8.698c0-.364-.199-.67-.481-.86l9.824-14.961h-18.835l-3.164 4.746-3.164-4.746h-18.837l9.823 14.96c-.282.19-.48.497-.48.861v8.698c-4.481 3.668-7.343 9.239-7.343 15.481 0 11.045 8.955 20 20 20h.001c.681 0 1.354-.035 2.017-.102 10.097-1.011 17.982-9.533 17.982-19.898 0-6.242-2.862-11.813-7.343-15.481m-3.831-23.519h6.328l-8.825 13.239-3.164-4.746zm.667 17.985.973-1.458c.052.125.082.261.082.404v4.219c0 .277-.118.517-.297.7-3-1.798-6.499-2.85-10.251-2.85-3.753 0-7.251 1.053-10.251 2.851-.179-.184-.297-.423-.297-.701v-4.219c0-.143.03-.28.082-.404l.973 1.459h6.33 6.328 6.328zm-24.647-17.985h6.328l11.324 16.985h-6.328zm15.154 56c-9.388 0-17-7.611-17-17s7.612-17 17-17 17 7.611 17 17-7.612 17-17 17" />
        </svg>
      ),
    },
  ]);
  console.log(Info);
  return (
    <div className="lg:flex gap-10">
      <div className="lg:w-6/12">
        <img
          src="./Images/Portfolio/Fittest/img.jpg"
          className="w-[31rem] h-[25rem] md:w-[50rem] object-cover mx-auto lg:h-[34rem]"
          alt="Fittest Img"
        />
      </div>
      <div className="lg:w-6/12 self-center p-5 space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{Info.title}</h1>
          <p className="text-lg">{Info.subTitle}</p>
        </div>
        <div className="space-y-5 md:grid md:grid-cols-2 md:items-center">
          {infocards.map(card => (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                {card.icon}
                <span className="text-4xl font-bold">{card.title}</span>
              </div>
              <h1 className="ps-5 md:text-right">{card.subTitle}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

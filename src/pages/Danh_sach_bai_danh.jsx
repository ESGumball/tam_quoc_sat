import React from "react";
import { useState } from "react";
import { bai_danh } from "../data/bai_danh";
import defaultImg from "../assets/default-card.png";
import { Modal_bai_danh } from "../components/Model_the";

const Danh_sach_bai_danh = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <div className="px-4 text-2xl font-bold tracking-widest text-white sm:text-4xl md:text-5xl">
        DANH SÁCH BÀI ĐÁNH
      </div>
      <div className="sticky top-2 z-20 mx-4 mt-6 grid max-w-4xl grid-cols-1 gap-4 rounded-xl border border-slate-600 bg-[#082D3D] p-3 text-white shadow-lg sm:top-4 sm:p-4 md:mx-auto md:grid-cols-2">
        {/* Bộ lọc */}
        <div className="flex flex-col gap-2">
          <h2 className="border-l-4 border-amber-400 pl-3 text-base font-bold tracking-wide">
            LỌC
          </h2>

          <div className="rounded-lg border border-slate-600 bg-[#013951] p-3 transition hover:border-slate-400">
            <span className="text-sm text-slate-300">Bộ lọc tướng</span>
          </div>
        </div>

        {/* Tìm kiếm */}
        <div className="flex flex-col gap-2">
          <h2 className="border-l-4 border-amber-400 pl-3 text-base font-bold tracking-wide">
            TÌM KIẾM
          </h2>

          <div className="flex items-center gap-2 rounded-lg border border-slate-600 bg-[#013951] p-1.5 transition focus-within:border-amber-400">
            <input
              type="text"
              placeholder="Nhập tên bài..."
              className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-sm text-white outline-none placeholder:text-slate-400"
            />

            <button className="rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
              Tìm
            </button>
          </div>
        </div>
      </div>
      {/* Lưới thẻ */}
      <div className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 xl:grid-cols-5">
        {bai_danh.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="group cursor-pointer"
          >
            <div className="aspect-5/7 overflow-hidden rounded-xl bg-black shadow-lg transition duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = defaultImg;
                }}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-2 rounded-lg border border-slate-600 bg-[#013951] px-1.5 py-1.5 text-center transition-colors group-hover:border-amber-400 group-hover:bg-[#02506f] sm:mt-3 sm:px-2 sm:py-2">
              {item.domain && (
                <span className="block truncate text-[10px] font-semibold uppercase tracking-wider text-amber-300 sm:text-[11px]">
                  {item.domain}
                </span>
              )}
              <p className="truncate text-xs font-bold text-white sm:text-sm">
                {item.title ?? item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selected && (
        <Modal_bai_danh card={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Danh_sach_bai_danh;

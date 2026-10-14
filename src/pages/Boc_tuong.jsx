import React, { useState } from "react";
import { bai_tuong } from "../data/bai_tuong";
import defaultImg from "../assets/default-card.png";
import { Modal_tuong } from "../components/Model_the";

const SO_LUONG = 6;

// Xáo trộn Fisher-Yates rồi lấy 6 tướng đầu, đảm bảo không trùng nhau
const boc = () => {
  const arr = [...bai_tuong];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, SO_LUONG);
};

const Boc_tuong = () => {
  const [tay, setTay] = useState(boc);
  const [lan, setLan] = useState(0);
  const [selected, setSelected] = useState(null);

  const xao_lai = () => {
    setTay(boc());
    setLan((l) => l + 1);
  };

  return (
    <div>
      <style>{`
        @keyframes chia-bai {
          from { opacity: 0; transform: translateY(24px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <div className="px-4 text-2xl font-bold tracking-widest text-white sm:text-4xl md:text-5xl">
        BỐC TƯỚNG
      </div>

      <div className="mx-4 mt-6 flex flex-col items-center gap-3 rounded-xl border border-slate-600 bg-[#082D3D] p-4 text-white shadow-lg sm:flex-row sm:justify-between md:mx-auto md:max-w-4xl">
        <p className="text-sm text-slate-300">
          Bạn được phát {SO_LUONG} tướng ngẫu nhiên. Bấm vào thẻ để xem chi tiết.
        </p>
        <button
          type="button"
          onClick={xao_lai}
          className="cursor-pointer rounded-md bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 active:scale-95"
        >
          🔀 Xào lại
        </button>
      </div>

      <div className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-5 xl:grid-cols-6">
        {tay.map((item, i) => (
          <div
            key={`${lan}-${item.id}`}
            onClick={() => setSelected(item)}
            className="group cursor-pointer"
            style={{
              animation: "chia-bai 0.45s ease-out both",
              animationDelay: `${i * 90}ms`,
            }}
          >
            <div className="aspect-5/7 overflow-hidden rounded-xl bg-black shadow-lg transition duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl">
              <img
                src={item.img}
                alt={item.name}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = defaultImg;
                }}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-2 rounded-lg border border-slate-600 bg-[#013951] px-1.5 py-1.5 text-center transition-colors group-hover:border-amber-400 group-hover:bg-[#02506f] sm:mt-3 sm:px-2 sm:py-2">
              {item.the_luc && (
                <span className="block truncate text-[10px] font-semibold uppercase tracking-wider text-amber-300 sm:text-[11px]">
                  {[].concat(item.the_luc).join(" / ")}
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
        <Modal_tuong card={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Boc_tuong;
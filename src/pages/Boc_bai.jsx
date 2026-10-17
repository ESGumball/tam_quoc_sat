import React, { useState } from "react";
import { bai_danh } from "../data/bai_danh";
import defaultImg from "../assets/default-card.png";
import { Modal_bai_danh } from "../components/Model_the";

const TOI_DA = 4;
const KY_HIEU = { ro: "♦", co: "♥", chuon: "♣", bich: "♠" };

const bo_dau = (s) =>
  String(s ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/đ/g, "d");

// Mỗi thẻ có thể có nhiều chất/số (vd. Sát có 4 lá) -> tách thành từng lá riêng.
// Chất và loại được chuẩn hóa về mã (ro, co, chuon, bich / co_ban, cam_nang,
// trang_bi) để modal bài đánh dùng chung được.
const BO_BAI = bai_danh.flatMap((item) => {
  const la = item.la_bai?.length ? item.la_bai : [{ chat: item.chat, so: item.so }];
  return la.map((l, i) => ({
    ...item,
    uid: `${item.id}-${i}`,
    la_bai: [l],
    chat: bo_dau(l.chat),
    so: String(l.so ?? ""),
  }));
});

const la_doc = (c) => {
    const title = bo_dau(c.title ?? c.name);
    return title === "doc" || title === "doc dan";
};

// Xáo trộn Fisher-Yates, bỏ qua các lá đang cầm, lấy n lá đầu
const rut = (n, loai_tru = []) => {
  const arr = BO_BAI.filter((c) => !loai_tru.includes(c.uid));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, n);
};

const Boc_bai = () => {
  const [soLa, setSoLa] = useState(TOI_DA);
  const [tay, setTay] = useState([]);
  const [selected, setSelected] = useState(null);

  const boc = () => setTay(rut(soLa));

  // Chỉ thay đúng lá này, các lá còn lại giữ nguyên
  const doi_la = (uid) => {
    const [moi] = rut(1, tay.map((c) => c.uid));
    if (!moi) return;
    setTay(tay.map((c) => (c.uid === uid ? moi : c)));
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
        BỐC BÀI
      </div>

      <div className="mx-4 mt-6 flex flex-col gap-4 rounded-xl border border-slate-600 bg-[#082D3D] p-4 text-white shadow-lg sm:flex-row sm:items-center sm:justify-between md:mx-auto md:max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-300">Số lá:</span>
          {Array.from({ length: TOI_DA }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setSoLa(n)}
              className={`h-9 w-9 cursor-pointer rounded-full border text-sm transition ${
                soLa === n
                  ? "border-amber-400 bg-amber-400 font-semibold text-slate-950"
                  : "border-slate-500 bg-[#013951] text-white hover:border-amber-400"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={boc}
          className="cursor-pointer rounded-md bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 active:scale-95"
        >
          🃏 {tay.length ? "Bốc lại" : "Bốc bài"}
        </button>
      </div>

      {tay.length === 0 && (
        <p className="mt-10 text-center text-slate-300">
          Chọn số lá rồi bấm “Bốc bài”.
        </p>
      )}

      <div className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-2 gap-3 px-4 sm:gap-5 md:grid-cols-4">
        {tay.map((c, i) => (
          <div
            key={c.uid}
            style={{
              animation: "chia-bai 0.45s ease-out both",
              animationDelay: `${i * 90}ms`,
            }}
          >
            <div
              onClick={() => setSelected(c)}
              className="group cursor-pointer"
            >
              <div className="aspect-5/7 overflow-hidden rounded-xl bg-black shadow-lg transition duration-200 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <img
                  src={c.img}
                  alt={c.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = defaultImg;
                  }}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-2 rounded-lg border border-slate-600 bg-[#013951] px-1.5 py-1.5 text-center transition-colors group-hover:border-amber-400 group-hover:bg-[#02506f] sm:mt-3 sm:px-2 sm:py-2">
                <p className="truncate text-xs font-bold text-white sm:text-sm">
                  {c.title ?? c.name}
                </p>
                {c.so && (
                  <span
                    className={`mt-1 inline-block rounded bg-white px-2 text-sm font-bold ${
                      c.chat === "ro" || c.chat === "co"
                        ? "text-red-600"
                        : "text-slate-900"
                    }`}
                  >
                    {c.so} {KY_HIEU[c.chat] ?? ""}
                  </span>
                )}
              </div>
            </div>

            {la_doc(c) && (
              <button
                type="button"
                onClick={() => doi_la(c.uid)}
                className="mt-2 w-full cursor-pointer rounded-md border border-amber-400 bg-amber-400/10 px-2 py-1.5 text-xs font-semibold text-amber-300 transition hover:bg-amber-400 hover:text-slate-950 sm:text-sm"
              >
                🔄 Đổi lá này
              </button>
            )}
          </div>
        ))}
      </div>

      {selected && (
        <Modal_bai_danh card={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Boc_bai;
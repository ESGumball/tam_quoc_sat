import React, { useState } from "react";
import { bai_danh } from "../data/bai_danh";
import defaultImg from "../assets/default-card.png";
import { Modal_bai_danh } from "../components/Model_the";
const LOAI = [
  { v: "co_ban", t: "Cơ bản" },
  { v: "cam_nang", t: "Cẩm nang" },
  { v: "trang_bi", t: "Trang bị" },
];
const CHAT = [
  { v: "ro", t: "♦ Rô" },
  { v: "co", t: "♥ Cơ" },
  { v: "chuon", t: "♣ Chuồn" },
  { v: "bich", t: "♠ Bích" },
];
const SO = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const BAN = ["A", "B", "C"];

const bo_dau = (s) =>
  String(s ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/đ/g, "d");

const Chip = ({ on, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`cursor-pointer rounded-full border px-3 py-1 text-sm transition ${
      on
        ? "border-amber-400 bg-amber-400 font-semibold text-slate-950"
        : "border-slate-500 bg-[#082D3D] text-white hover:border-amber-400"
    }`}
  >
    {children}
  </button>
);
const Danh_sach_bai_danh = () => {
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [openLoc, setOpenLoc] = useState(false);
  const [chonLoai, setChonLoai] = useState([]);
  const [chonChat, setChonChat] = useState([]);
  const [chonSo, setChonSo] = useState([]);
  const [chonBan, setChonBan] = useState([]);
  const [selected, setSelected] = useState(null);
  const toggle = (list, setList, v) =>
    setList(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const soLoc =
    chonLoai.length + chonChat.length + chonSo.length + chonBan.length;

  const ds = bai_danh.filter((item) => {
    const ten = item.title ?? item.name;
    if (chonLoai.length && !chonLoai.includes(item.phan_loai)) return false;
    if (chonChat.length && !chonChat.includes(item.chat)) return false;
    if (chonSo.length && !chonSo.includes(String(item.so))) return false;
    if (chonBan.length && !chonBan.includes(item.ban_mo_rong)) return false;
    if (query && !bo_dau(ten).includes(bo_dau(query))) return false;
    return true;
  });
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

          <button
            type="button"
            onClick={() => setOpenLoc(!openLoc)}
            className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-600 bg-[#013951] p-3 text-left transition hover:border-slate-400"
          >
            <span className="text-sm text-slate-300">
              Bộ lọc bài {soLoc > 0 && `(${soLoc})`}
            </span>
            <span className="text-slate-300">{openLoc ? "▲" : "▼"}</span>
          </button>
        </div>

        {/* Tìm kiếm */}
        <div className="flex flex-col gap-2">
          <h2 className="border-l-4 border-amber-400 pl-3 text-base font-bold tracking-wide">
            TÌM KIẾM
          </h2>

          <div className="flex items-center gap-2 rounded-lg border border-slate-600 bg-[#013951] p-1.5 transition focus-within:border-amber-400">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setQuery(keyword.trim())}
              placeholder="Nhập tên bài..."
              className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-sm text-white outline-none placeholder:text-slate-400"
            />

            <button
              onClick={() => setQuery(keyword.trim())}
              className="cursor-pointer rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Tìm
            </button>
          </div>
        </div>
        {openLoc && (
          <div className="absolute left-0 right-0 top-full z-30 mt-2 max-h-[70vh] overflow-y-auto rounded-xl border border-slate-600 bg-[#082D3D] p-4 shadow-2xl md:col-span-2">
            <h3 className="mb-2 text-sm font-bold uppercase text-slate-300">
              Loại bài
            </h3>
            <div className="flex flex-wrap gap-2">
              {LOAI.map((l) => (
                <Chip
                  key={l.v}
                  on={chonLoai.includes(l.v)}
                  onClick={() => toggle(chonLoai, setChonLoai, l.v)}
                >
                  {l.t}
                </Chip>
              ))}
            </div>

            <h3 className="mb-2 mt-4 text-sm font-bold uppercase text-slate-300">
              Chất bài
            </h3>
            <div className="flex flex-wrap gap-2">
              {CHAT.map((c) => (
                <Chip
                  key={c.v}
                  on={chonChat.includes(c.v)}
                  onClick={() => toggle(chonChat, setChonChat, c.v)}
                >
                  {c.t}
                </Chip>
              ))}
            </div>

            <h3 className="mb-2 mt-4 text-sm font-bold uppercase text-slate-300">
              Số
            </h3>
            <div className="flex flex-wrap gap-2">
              {SO.map((s) => (
                <Chip
                  key={s}
                  on={chonSo.includes(s)}
                  onClick={() => toggle(chonSo, setChonSo, s)}
                >
                  {s}
                </Chip>
              ))}
            </div>

            <h3 className="mb-2 mt-4 text-sm font-bold uppercase text-slate-300">
              Bản mở rộng
            </h3>
            <div className="flex flex-wrap gap-2">
              {BAN.map((b) => (
                <Chip
                  key={b}
                  on={chonBan.includes(b)}
                  onClick={() => toggle(chonBan, setChonBan, b)}
                >
                  {b}
                </Chip>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setChonLoai([]);
                setChonChat([]);
                setChonSo([]);
                setChonBan([]);
              }}
              className="mt-4 cursor-pointer rounded-md border border-slate-500 px-3 py-1.5 text-sm text-slate-200 transition hover:border-amber-400"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
      {/* Lưới thẻ */}
      <div className="mx-auto mt-8 grid w-full max-w-7xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 xl:grid-cols-5">
        {ds.map((item) => (
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
              {item.phan_loai && (
                <span className="block truncate text-[10px] font-semibold uppercase tracking-wider text-amber-300 sm:text-[11px]">
                  {LOAI.find((l) => l.v === item.phan_loai)?.t}
                </span>
              )}
              <p className="truncate text-xs font-bold text-white sm:text-sm">
                {item.title ?? item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      {ds.length === 0 && (
        <p className="mt-10 text-center text-slate-300">
          Không tìm thấy bài nào.
        </p>
      )}
      {selected && (
        <Modal_bai_danh card={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Danh_sach_bai_danh;

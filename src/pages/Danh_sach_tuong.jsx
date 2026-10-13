import React, { useState } from "react";
import { bai_tuong } from "../data/bai_tuong";
import defaultImg from "../assets/default-card.png";
import { Modal_tuong } from "../components/Model_the";
const PHE = ["Tấn", "Hán", "Ngô", "Quần", "Thục", "Ngụy", "Dã tâm gia"];
const MAU = [1.5, 2, 2.5];
const BAN = ["Bản gốc", "Special Pack", "Cửu Biến Thiên","Mặc Tử Thiên", "Binh Tình Thiên","Thập Niên", "Thế Bị Thiên", "Bất Thần Thiên", "Nhị Thần Thiên","Khánh Lệ Tình Thâm", "Sea Pack", "Ẩn Thế Diệu Tiên", "Tung Hoành Bãi Nạp", "Quần Hùng Cát Cứ"];

// bỏ dấu để gõ "trinh pho" vẫn tìm ra "Trình Phổ"
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
const Danh_sach_tuong = () => {
  const [selected, setSelected] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [openLoc, setOpenLoc] = useState(false);
  const [chonPhe, setChonPhe] = useState([]);
  const [chonMau, setChonMau] = useState([]);
  const [chonBan, setChonBan] = useState([]);

  const toggle = (list, setList, v) =>
    setList(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const soLoc = chonPhe.length + chonMau.length + chonBan.length;
  const q = keyword.trim();
  const ds = bai_tuong.filter((item) => {
    const phe = [].concat(item.the_luc ?? []);
    if (chonPhe.length && !phe.some((p) => chonPhe.includes(p))) return false;
    if (chonMau.length && !chonMau.includes(Number(item.sinh_luc)))
      return false;
    if (chonBan.length && !chonBan.includes(item.ban_mo_rong)) return false;
    if (q) {
      const text = bo_dau(
        [
          item.title ?? item.name,
          ...phe,
          ...(item.ky_nang ?? []).map((k) => k.ten),
        ].join(" "),
      );
      if (!text.includes(bo_dau(q))) return false;
    }
    return true;
  });

  return (
    <div>
      <div className="px-4 text-2xl font-bold tracking-widest text-white sm:text-4xl md:text-5xl">
        DANH SÁCH TƯỚNG
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
              Bộ lọc tướng {soLoc > 0 && `(${soLoc})`}
            </span>
            <span className="text-slate-300">{openLoc ? "▲" : "▼"}</span>
          </button>
        </div>

        {/* Tìm kiếm */}
        <div className="flex flex-col gap-2">
          <h2 className="border-l-4 border-amber-400 pl-3 text-base font-bold tracking-wide">
            TÌM KIẾM{" "}
            <span className="text-sm font-normal text-slate-300">
              ({ds.length}/{bai_tuong.length} tướng)
            </span>
          </h2>

          <div className="flex items-center gap-2 rounded-lg border border-slate-600 bg-[#013951] p-1.5 transition focus-within:border-amber-400">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Nhập tên tướng, phe, kĩ năng..."
              className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-sm text-white outline-none placeholder:text-slate-400"
            />

            {keyword && (
              <button
                type="button"
                onClick={() => setKeyword("")}
                className="cursor-pointer rounded-md px-3 py-1.5 text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        {openLoc && (
          <div className="absolute left-0 right-0 top-full z-30 mt-2 max-h-[70vh] overflow-y-auto rounded-xl border border-slate-600 bg-[#082D3D] p-4 shadow-2xl md:col-span-2">
            <h3 className="mb-2 text-sm font-bold uppercase text-slate-300">
              Thế lực
            </h3>
            <div className="flex flex-wrap gap-2">
              {PHE.map((p) => (
                <Chip
                  key={p}
                  on={chonPhe.includes(p)}
                  onClick={() => toggle(chonPhe, setChonPhe, p)}
                >
                  {p}
                </Chip>
              ))}
            </div>

            <h3 className="mb-2 mt-4 text-sm font-bold uppercase text-slate-300">
              Sinh lực
            </h3>
            <div className="flex flex-wrap gap-2">
              {MAU.map((m) => (
                <Chip
                  key={m}
                  on={chonMau.includes(m)}
                  onClick={() => toggle(chonMau, setChonMau, m)}
                >
                  {String(m).replace(".", ",")} máu
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
                setChonPhe([]);
                setChonMau([]);
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
      {ds.length === 0 && (
        <p className="mt-10 text-center text-slate-300">
          Không tìm thấy tướng nào.
        </p>
      )}
      {selected && (
        <Modal_tuong card={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Danh_sach_tuong;

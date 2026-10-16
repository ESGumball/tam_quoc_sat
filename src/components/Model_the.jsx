import React, { useState } from "react";
import defaultImg from "../assets/default-card.png";

// Khung chung: nền tối, header, nút đóng, ảnh bên trái
const Khung = ({ title, badge, img, onClose, bookmark, wide, children }) => (
  <div
    className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 sm:p-8"
    onClick={onClose}
  >
    <div
      className="relative my-auto w-full max-w-4xl overflow-hidden rounded-xl bg-[#013951] text-white shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`bg-[#2F6178] py-5 pl-6 sm:pl-10 ${
          wide ? "pr-52 sm:pr-64" : "pr-32 sm:pr-40"
        }`}
      >
        {badge && (
          <span className="mb-2 inline-block rounded-full border border-amber-400/60 bg-amber-400/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
            {badge}
          </span>
        )}
        <h2 className="text-xl font-bold uppercase tracking-wide sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </div>

      <button
        onClick={onClose}
        className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-white text-xl font-bold text-slate-900 transition hover:bg-slate-200 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
      >
        ✕
      </button>

      {bookmark}

      <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div className="mx-auto w-full max-w-[16rem] md:max-w-none">
          <img
            src={img}
            alt={title}
            className="aspect-5/7 w-full rounded-2xl bg-black object-cover"
          />
        </div>
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  </div>
);

// Kẹp sách: treo từ mép trên của modal, đáy có khía chữ V
const Bookmark = ({ vi_tri, icon, label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    title={label}
    className={`absolute top-0 z-10 flex w-14 cursor-pointer flex-col items-center gap-1 pt-3 text-slate-950 transition-all duration-200 [clip-path:polygon(0_0,100%_0,100%_100%,50%_82%,0_100%)] ${vi_tri} ${
      active ? "h-28 bg-white" : "h-24 bg-amber-400 hover:h-28"
    }`}
  >
    <span className="text-lg leading-none">{icon}</span>
    <span className="px-1 text-center text-[10px] font-bold uppercase leading-tight">
      {label}
    </span>
  </button>
);

const Muc = ({ label, children, last }) => (
  <div className={`py-4 ${last ? "" : "border-b border-slate-500/60"}`}>
    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
      {label}
    </h3>
    <div className="mt-2">{children}</div>
  </div>
);

const Tim = ({ half, small }) => (
  <span
    className={`relative inline-block leading-none ${
      small ? "text-base" : "text-2xl"
    }`}
  >
    <span className="text-slate-600">♥</span>
    <span
      className="absolute left-0 top-0 overflow-hidden whitespace-nowrap text-red-500"
      style={{ width: half ? "50%" : "100%" }}
    >
      ♥
    </span>
  </span>
);

// [Tên thẻ] -> nhãn vàng; (-0.5 sinh lực) -> nhãn đỏ nửa tim
export const Mo_ta = ({ text }) => {
  const parts = String(text ?? "").split(
    /(\[[^\]]+\]|\([-+−–]\s*\d+(?:[.,]\d+)?\s*sinh lực\))/g,
  );
  return (
    <>
      {parts.map((p, i) => {
        if (/^\[[^\]]+\]$/.test(p)) {
          return (
            <span
              key={i}
              className="mx-0.5 inline-block rounded bg-amber-400/15 px-1.5 font-semibold text-amber-300 ring-1 ring-amber-400/50"
            >
              {p.slice(1, -1)}
            </span>
          );
        }
        if (/^\([-+−–]/.test(p)) {
          const so = p.replace(/[()]/g, "").replace(/\s*sinh lực/, "");
          return (
            <span
              key={i}
              className="mr-1 inline-flex items-center gap-1 rounded-full bg-red-500/20 px-2 py-0.5 text-sm font-bold text-red-300 ring-1 ring-red-400/60"
            >
              <Tim half small />
              {so}
            </span>
          );
        }
        return p;
      })}
    </>
  );
};

const Sinh_luc = ({ value }) => {
  const n = Number(value);
  if (value === undefined || value === null || Number.isNaN(n)) return "-";
  const full = Math.floor(n);
  const half = n - full >= 0.5;
  return (
    <div className="mt-2 flex flex-wrap items-center gap-1" title={`${n} máu`}>
      {Array.from({ length: full }, (_, i) => (
        <Tim key={i} />
      ))}
      {half && <Tim half />}
      <span className="ml-1 text-sm font-bold text-red-300">{n}</span>
    </div>
  );
};

/* ================= THẺ TƯỚNG ================= */
export const Modal_tuong = ({ card, onClose }) => {
  const [tab, setTab] = useState("thong_tin");
  const chon = (t) => setTab(tab === t ? "thong_tin" : t);
  const coChieuThuc = card.chieu_thuc?.length > 0;

  return (
    <Khung
      title={card.title ?? card.name}
      badge={[].concat(card.the_luc ?? []).join(" / ")}
      img={card.img}
      onClose={onClose}
      bookmark={
        <>
          <Bookmark
            vi_tri="right-14 sm:right-20"
            icon="📖"
            label="Cách chơi"
            active={tab === "cach_choi"}
            onClick={() => chon("cach_choi")}
          />
          {coChieuThuc && (
            <Bookmark
              vi_tri="right-[7.5rem] sm:right-36"
              icon="⚔️"
              label="Thiên Thư"
              active={tab === "chieu_thuc"}
              onClick={() => chon("chieu_thuc")}
            />
          )}
        </>
      }
      wide={coChieuThuc}
    >
      {tab === "cach_choi" ? (
        <div className="py-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
            Cách chơi
          </h3>
          <p className="mt-3 whitespace-pre-line leading-7">
            {card.cach_choi ? (
              <Mo_ta text={card.cach_choi} />
            ) : (
              "Chưa có nội dung cách chơi."
            )}
          </p>

          {card.pro_tip && (
            <div className="mt-5 rounded-lg border border-amber-400/60 bg-amber-400/10 p-3">
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-300">
                <span>💡</span> Pro tip
              </p>
              <p className="mt-2 whitespace-pre-line leading-7 text-slate-100">
                <Mo_ta text={card.pro_tip} />
              </p>
            </div>
          )}
        </div>
      ) : tab === "chieu_thuc" ? (
        <div className="py-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
            Chiêu thức
          </h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {card.chieu_thuc.map((ct, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-600 bg-[#082D3D] p-3"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-slate-950">
                    {i + 1}
                  </span>
                  <p className="font-bold text-amber-300">{ct.ten}</p>
                </div>
                <p className="mt-2 whitespace-pre-line text-sm leading-6">
                  <Mo_ta text={ct.mo_ta} />
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 border-b border-slate-500/60 pb-4">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                Sinh lực
              </h3>
              <Sinh_luc value={card.sinh_luc} />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                Danh hiệu
              </h3>
              <p className="mt-2 font-semibold text-amber-300">
                {card.danh_hieu ?? "-"}
              </p>
            </div>
          </div>

          <Muc label="Kĩ năng">
            {card.ky_nang?.length ? (
              <div className="flex flex-col gap-3">
                {card.ky_nang.map((kn, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-slate-600 bg-[#082D3D] p-3"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {[].concat(kn.loai ?? []).map((l) => (
                        <span
                          key={l}
                          className="rounded bg-amber-400 px-2 py-0.5 text-xs font-bold uppercase text-slate-950"
                        >
                          {l}
                        </span>
                      ))}
                      <p className="font-bold text-amber-300">{kn.ten}</p>
                    </div>

                    <p className="mt-2 whitespace-pre-line leading-7">
                      <Mo_ta text={kn.mo_ta} />
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              "-"
            )}
          </Muc>

          {card.cau_noi && (
            <Muc label="Câu nói">
              <p className="border-l-4 border-amber-400 pl-3 italic text-slate-200">
                “{card.cau_noi}”
              </p>
            </Muc>
          )}

          <Muc label="Hảo tướng">
            {card.hao_tuong?.length ? (
              <div className="flex flex-wrap gap-2">
                {card.hao_tuong.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-500 bg-[#082D3D] px-3 py-1 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : (
              "-"
            )}
          </Muc>

          <Muc label="Thuộc bản mở rộng" last>
            {card.ban_mo_rong ?? "-"}
          </Muc>
        </>
      )}
    </Khung>
  );
};

/* ================= THẺ BÀI ĐÁNH ================= */
const PHAN_LOAI = {
  co_ban: "Cơ bản",
  cam_nang: "Cẩm nang",
  trang_bi: "Trang bị",
  trang_bi_phong_cu: "Trang bị - Phòng Cụ",
  trang_bi_vu_khi: "Trang bị - Vũ Khí",
  trang_bi_bao_vat: "Trang bị - Bảo Vật",
  trang_bi_toa_ky: "Trang bị - Tọa Kỵ",
};
const CHAT = {
  ro: { icon: "♦", ten: "Rô", do: true },
  co: { icon: "♥", ten: "Cơ", do: true },
  chuon: { icon: "♣", ten: "Chuồn", do: false },
  bich: { icon: "♠", ten: "Bích", do: false },
};

export const Modal_bai_danh = ({ card, onClose }) => {
  const la_bai = card.la_bai ?? (card.chat ? [{ chat: card.chat, so: card.so }] : []);
  return (
    <Khung
      title={card.title ?? card.name}
      badge={PHAN_LOAI[card.phan_loai]}
      img={card.img}
      onClose={onClose}
    >
      <Muc label="Mô tả hiệu ứng">
        <p className="whitespace-pre-line leading-7">
          <Mo_ta text={card.mo_ta ?? "-"} />
        </p>
      </Muc>
      {[].concat(card.hieu_ung ?? []).length > 0 && (
        <Muc label="Hiệu ứng lá bài">
          <div className="flex flex-col gap-2">
            {[].concat(card.hieu_ung).map((h, i) => {
              const hu = typeof h === "string" ? { ten: h } : h;
              return (
                <div
                  key={i}
                  className="rounded-lg border border-slate-600 bg-[#082D3D] p-3"
                >
                  <span className="rounded bg-amber-400 px-2 py-0.5 text-xs font-bold uppercase text-slate-950">
                    {hu.ten}
                  </span>
                  {hu.mo_ta && (
                    <p className="mt-2 whitespace-pre-line text-sm leading-6">
                      <Mo_ta text={hu.mo_ta} />
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Muc>
      )}
      <Muc label="Chất bài / Số">
        {la_bai.length ? (
          <div className="flex flex-wrap gap-2">
            {la_bai.map((l, i) => {
              const chat = CHAT[l.chat];
              return (
                <span
                  key={i}
                  className={`inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-0.5 text-base font-bold ${
                    chat?.do ? "text-red-600" : "text-slate-900"
                  }`}
                >
                  {l.so} {chat?.icon}
                </span>
              );
            })}
          </div>
        ) : (
          "-"
        )}
      </Muc>

      <Muc label="Thuộc bản mở rộng" last>
        {card.ban_mo_rong ?? "-"}
      </Muc>
    </Khung>
  );
};

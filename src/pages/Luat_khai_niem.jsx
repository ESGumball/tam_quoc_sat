import React, { useState } from "react";
import { luat } from "../data/luat";
import { Mo_ta } from "../components/Model_the";

const bo_dau = (s) =>
  String(s ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/đ/g, "d");

const Luat_khai_niem = () => {
  const [keyword, setKeyword] = useState("");
  const q = bo_dau(keyword.trim());

  // lọc mục theo từ khóa, bỏ nhóm không còn mục nào
  const ds = luat
    .map((g) => ({
      ...g,
      items: g.items.filter(
        (it) => !q || bo_dau(`${it.ten} ${it.mo_ta}`).includes(q)
      ),
    }))
    .filter((g) => g.items.length > 0);

  // không dùng href="#..." vì HashRouter sẽ hiểu nhầm là đổi trang
  const cuon_den = (id) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16">
      <div className="text-2xl font-bold tracking-widest text-white sm:text-4xl md:text-5xl">
        LUẬT VÀ KHÁI NIỆM
      </div>

      {/* Tìm kiếm */}
      <div className="mt-6 flex items-center gap-2 rounded-lg border border-slate-600 bg-[#013951] p-1.5 transition focus-within:border-amber-400">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Tìm luật, khái niệm..."
          className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-sm text-white outline-none placeholder:text-slate-400"
        />
        {keyword && (
          <button
            type="button"
            onClick={() => setKeyword("")}
            className="cursor-pointer rounded-md px-2 py-1 text-sm text-slate-300 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        {/* Mục lục: thanh ngang trên điện thoại, cột dọc trên máy tính */}
        <nav className="sticky top-2 z-20 -mx-4 bg-[#082D3D]/95 px-4 py-2 backdrop-blur lg:top-4 lg:mx-0 lg:self-start lg:rounded-xl lg:border lg:border-slate-600 lg:p-3">
          <p className="mb-2 hidden border-l-4 border-amber-400 pl-3 text-sm font-bold uppercase tracking-wide text-white lg:block">
            Mục lục
          </p>
          <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {ds.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => cuon_den(g.id)}
                className="shrink-0 cursor-pointer rounded-full border border-slate-500 bg-[#013951] px-3 py-1.5 text-left text-sm text-white transition hover:border-amber-400 lg:rounded-lg"
              >
                {g.title}
              </button>
            ))}
          </div>
        </nav>

        {/* Nội dung */}
        <div className="flex min-w-0 flex-col gap-8">
          {ds.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-20 lg:scroll-mt-6">
              <h2 className="border-l-4 border-amber-400 pl-3 text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
                {g.title}
              </h2>

              <div className="mt-3 flex flex-col gap-2">
                {g.items.map((it) => (
                  <details
                    key={it.ten + (q ? "-q" : "")}
                    open={!!q}
                    className="group rounded-lg border border-slate-600 bg-[#013951] transition open:border-amber-400/60"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-3 font-semibold text-white sm:p-4 [&::-webkit-details-marker]:hidden">
                      <span>{it.ten}</span>
                      <span className="text-amber-300 transition group-open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <div className="border-t border-slate-600 px-3 py-3 leading-7 text-slate-100 whitespace-pre-line sm:px-4">
                      <Mo_ta text={it.mo_ta} />
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}

          {ds.length === 0 && (
            <p className="mt-10 text-center text-slate-300">
              Không tìm thấy nội dung nào.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Luat_khai_niem;
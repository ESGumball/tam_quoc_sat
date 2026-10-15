import defaultImg from "../assets/default-card.png";
import { details } from "./chi_tiet_bai_danh";

const modules = import.meta.glob("../assets/bai_danh/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

// tên file ảnh (không đuôi) -> đường dẫn ảnh
const anh = Object.fromEntries(
  Object.entries(modules).map(([path, img]) => [
    path.split("/").pop().replace(/\.\w+$/, ""),
    img,
  ]),
);

// Thẻ có trong details: có ảnh thì dùng, không thì ảnh mặc định
const tu_details = Object.entries(details).map(([key, d]) => ({
  name: key,
  img: anh[key] || defaultImg,
  ...d,
}));

// Ảnh có trong thư mục nhưng chưa có trong details (giữ như cũ)
const chi_co_anh = Object.keys(anh)
  .filter((key) => !details[key])
  .map((key) => ({ name: key, img: anh[key] }));

export const bai_danh = [...tu_details, ...chi_co_anh].map((c, i) => ({
  id: i + 1,
  ...c,
}));
import defaultImg from "../assets/default-card.png";
import { details } from "./chi_tiet_bai_danh";

const modules = import.meta.glob("../assets/bai_danh/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const list = Object.entries(modules).map(([path, img], index) => {
  const name = path
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  return {
    id: index + 1,
    name,
    img: img || defaultImg,
    ...details[name],
  };
});

// Nếu thư mục chưa có ảnh nào thì hiện 8 thẻ mặc định
export const bai_danh =
  list.length > 0
    ? list
    : Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        name: `Thẻ ${i + 1}`,
        img: defaultImg,
      }));

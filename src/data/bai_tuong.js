import defaultImg from "../assets/default-card.png";
import { details } from "./chi_tiet_tuong";

const modules = import.meta.glob("../assets/bai_tuong/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

// { "Trinh_Pho": "/assets/Trinh_Pho-xxxx.png", ... }
const anh = {};
Object.entries(modules).forEach(([path, img]) => {
  anh[path.split("/").pop().replace(/\.\w+$/, "")] = img;
});

export const bai_tuong = Object.entries(details).map(([name, d], index) => ({
  id: index + 1,
  name,
  img: anh[name] || defaultImg,
  ...d,
}));
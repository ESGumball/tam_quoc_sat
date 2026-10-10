import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex w-full items-center justify-center gap-2 bg-black px-6 py-4 text-white">
        <Link
          to="/tuong"
          className="relative px-4 py-2 hover:bg-gray-700
      after:absolute after:bottom-0 after:left-0
      after:h-0.5 after:w-full after:scale-x-0
      after:bg-gray-400 after:transition-transform
      hover:after:scale-x-100"
        >
          Danh sách tướng
        </Link>

        <Link
          to="/bai_danh"
          className="relative px-4 py-2 hover:bg-gray-700
      after:absolute after:bottom-0 after:left-0
      after:h-0.5 after:w-full after:scale-x-0
      after:bg-gray-400 after:transition-transform
      hover:after:scale-x-100"
        >
          Danh sách bài đánh
        </Link>

        <Link
          to="/Luat_khai_niem"
          className="relative px-4 py-2 hover:bg-gray-700
      after:absolute after:bottom-0 after:left-0
      after:h-0.5 after:w-full after:scale-x-0
      after:bg-gray-400 after:transition-transform
      hover:after:scale-x-100"
        >
          Luật chơi và khái niệm
        </Link>
      </nav>
    </div>
  );
};

export default Header;

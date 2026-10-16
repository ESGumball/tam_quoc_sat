export const details = {
  Sat: {
    title: "Sát",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "",
    chat: "co", // ro | co | chuon | bich
    so: "Q", // A, 2-10, J, Q, K
    ban_mo_rong: "Bản gốc",
    hieu_ung: [
      { ten: "Cường hóa", mo_ta: "Khi [Sát] này gây sát thương, ..." },
      { ten: "Hợp", mo_ta: "Rút thêm 1 thẻ nếu ..." },
    ],
  },
  Linh_Xa_Bao_Chau: {
    title: "Linh Xà Bảo Châu",
    phan_loai: "trang_bi_bao_vat", // co_ban | cam_nang | trang_bi
    mo_ta: "Mỗi lượt giới hạn 1 lần, khi bạn cần sử dụng 1 thẻ bài, bạn có thể chọn 1 thẻ cùng tên nhưng có điểm số lớn nhất trong chồng bài bỏ, sau đó bạn thực hiện lật mở thẻ dưới cùng của chồng bài rút và bỏ đi thẻ đó. Nếu như thẻ đó có số điểm lớn hơn thẻ bài bạn cần dùng, bạn thu lấy thẻ bạn cần từ chồng bài bỏ đồng thời sử dụng thẻ đó",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "6 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Doc_Dan: {
    title: "Độc Đan",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá bài này lên bản thân\n[Tỏa Định Kỹ] Thẻ này khi lần đầu được sử dụng, đánh ra, bỏ đi trong trò chơi mang hiệu ứng thẻ [Độc].\nSau khi được áp dụng hiệu ứng [Độc] lần đầu tiên; Các lần sử dụng, đánh ra, bỏ đi tiếp theo của thẻ này sẽ luân phiên xem như thẻ [Tửu] và [Độc] xuyên suốt trò chơi",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Rô, 4 Cơ, 7 Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Chich_Quy_Chiem_Giap: {
    title: "Chích Quy Chiêm Giáp",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Khi có thẻ bài [Vô Trung Sinh Hữu] hoặc [Động Chúc Tiên Cơ] được 1 người khác sử dụng, bạn có thể sử dụng thẻ này, sau đó thay đổi mục tiêu được chỉ định bởi thẻ này sửa thành chỉ định lên bạn. \nSau đó, nếu bạn đã rút bài bằng cách này và mục tiêu ban đầu của thẻ này đang [Ẩn Danh], bạn gây 1 điểm sát thương lên họ.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "J Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Tặng",
        mo_ta: " Lá bài có ký hiệu này có thể đem cho người khác. Nếu lá cho là [Trang bị] thì nó sẽ đi thẳng vào [khu trang bị] và thay thế [trang bị] hiện có.",
      },
    ],
  },
  Sat: {
    title: "Sát - Phản Sát",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá bài này lên 1 người chơi khác nằm trong phạm vi công kích của bạn, sau đó mục tiêu lựa chọn có hoặc không sử dụng 1 lá [Né], nếu người đó lựa chọn không, bạn gây 1 điểm sát thương cho người chơi này.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Chuồn, A Rô, A Bích, A Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Phản Sát",
        mo_ta: "Sau khi bạn nhận sát thương từ 1 người chơi khác, bạn có thể sử dụng thẻ này lên họ.\n[Tỏa Định Kỹ] Sau khi thẻ này được sử dụng ngoài lượt và gây ra sát thương, bạn chọn rút 2 thẻ hoặc bỏ 2 thẻ của mục tiêu.\n[Tỏa Định Kỹ] Sau khi thẻ này bị bỏ bởi người khác, bạn sử dụng thẻ này lên họ",
      },
    ],
  },
  Kim_Ngoc_Luong_Duyen: {
    title: "Kim Ngọc Lương Duyên",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng lên 1 người chơi khác và họ có giới tính khác bạn. bạn và họ cùng lúc hoán đổi 1 thẻ cho nhau. Sau đó, nếu 1 trong 2 người lần đầu nhận sát thương sau khi thẻ này được kết toán, người còn lại cũng nhận 1 sát thương vô nguồn và rút 2 thẻ.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Lac_Gian_Ha_Thach: {
    title: "Lạc Giản Hạ Thạch",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Khi người chơi thoát khỏi trạng thái hấp hối, bạn có thể sử dụng thẻ này, bạn gây cho họ 1 sát thương. Sau đó, nếu như bằng cách này họ vẫn không trận vong. bạn lệnh họ hồi phục 1 sinh lực.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "4 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Hoang_Can_Chi_Loan: {
    title: "Hoàng Cân Chi Loạn",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn sử dụng lên tất cả người khác, bạn thực hiện 1 lần phán xét, sau khi thẻ phán xét có hiệu lực, lần lượt các người chơi khác lựa chọn bỏ đi 1 thẻ cùng loại với thẻ phán xét. nếu không họ nhận 1 sát thương từ bạn.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "7 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Ne: {
    title: "Né - Thường",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Bạn có thể sử dụng lá bài này khi bắt đầu giải quyết hiệu quả của lá [Sát], chỉ định bạn làm mục tiêu, để triệt tiêu hiệu quả của lá [Sát] này lên bạn.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "9", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "8", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "J Cơ, J Rô, K Cơ, 2 Rô, 2 Cơ, 10 Rô, 6 Rô, 9 Rô, 7 Rô, K Rô, 8 Rô, 3 Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Tri_Ki_Tri_Bi: {
    title: "Tri Kỉ Tri Bỉ",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng lên người chơi khác có bài trên tay hoặc có tướng úp, bạn có thể xem 1 tướng úp hoặc xem bài trên tay của họ.\n[Trọng Chú] Giai đoạn hành động. bạn có thể đưa lá này vào chồng bài bỏ, sau đó rút lại lá mới.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "3 Chuồn, 4 Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Tam_Thien_Luong_Nhan_Dao: {
    title: "Tam Thiên Lưỡng Nhận Đao",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Phạm vi công kích : 3]\n\nSau khi bạn sử dụng [Sát] gây sát thương lên mục tiêu, bạn có thể bỏ đi 1 thẻ trên tay. sau đó bạn gây sát thương đối với 1 người khác có khoảng cách 1 của họ.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Sat_2: {
    title: "Sát - Thường",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá bài này lên 1 người chơi khác nằm trong phạm vi công kích của bạn, sau đó mục tiêu lựa chọn có hoặc không sử dụng 1 lá [Né], nếu người đó lựa chọn không, bạn gây 1 điểm sát thương cho người chơi này.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "8", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "9", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "9", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "9", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Chuồn, 3 Chuồn, J Chuồn, 10 Cơ, 8 Chuồn, 5 Bích, 10 Rô, 9 Bích, Q Rô, 9 Chuồn, Q Cơ, 7 Bích, 9 Rô, 6 Chuồn, 7 Chuồn, 10 Chuồn, 5 Chuồn, 4 Chuồn, 4 Bích, J Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Sat_Hoa: {
    title: "Sát Hỏa",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá bài này lên 1 người chơi khác nằm trong phạm vi công kích của bạn, sau đó mục tiêu lựa chọn có hoặc không sử dụng 1 lá [Né], nếu người đó lựa chọn không, bạn gây 1 điểm sát thương thuộc tính [Hoả] cho người chơi này.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "5 Rô, 3 Rô, 7 Cơ, 4 Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Sat_Hoa_2: {
    title: "Sát Hỏa - Tàn Khu",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá bài này lên 1 người chơi khác nằm trong phạm vi công kích của bạn, sau đó mục tiêu lựa chọn có hoặc không sử dụng 1 lá [Né], nếu người đó lựa chọn không, bạn gây 1 điểm sát thương thuộc tính [Hoả] cho người chơi này.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "4 Rô, 4 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Tàn Khu",
        mo_ta: "Sau khi bạn sử dụng thẻ này, nếu khi đó bạn còn 1 sinh lực. Hiệu quả [Tàn Khu] - số sát thương +1",
      },
    ],
  },
  Dao: {
    title: "Đào",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, nếu bạn đang không đầy sinh lực, bạn có thể sử dụng lá bài này lên bản thân để hồi phục 1 điểm sinh lực.\nKhi 1 người chơi đang trong trạng thái hấp hối, bạn có thể sử dụng lá bài này lên người chơi đó để lệnh người chơi đó hồi phục 1 điểm sinh lực.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "9", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "8", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Cơ, 9 Cơ, 6 Cơ, 8 Cơ, 10 Cơ, 7 Cơ, 2 Rô, 4 Cơ, 6 Cơ, 5 Rô, 5 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Thao_Thuyen_Ta_Tien: {
    title: "Thảo Thuyền Tá Tiễn",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Khi bạn trở thành mục tiêu của thẻ [Cẩm Nang] loại sát thương [Phi thuộc tính]. bạn có thể sử dụng thẻ này. vô hiệu tất cả mục tiêu và hiệu quả của thẻ đó. Sau đó bạn chọn: \n1. Thu lấy thẻ [Cẩm Nang] sát thương đó. \n2. Thu lấy thẻ [ Tuỳ Cơ Ứng Biến] từ ngoài bàn chơi.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Thanh_Cong_Kiem: {
    title: "Thanh Công Kiếm",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Phạm vi công kích: 2]\n\n[Tỏa Định Kỹ] Khi bạn sử dụng [Sát] xác định mục tiêu, bỏ qua hiệu quả [Phòng Cụ] của mục tiêu.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "6 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Nu_Trang: {
    title: "Nữ Trang",
    phan_loai: "trang_bi_phong_cu", // co_ban | cam_nang | trang_bi
    mo_ta: "[Toả Định Kỹ] Khi thẻ này tiến vào hoặc rời khỏi [vùng trang bị] của 1 người chơi, Nếu người chơi này là giới tính [Nam], họ phải tự bỏ 1 thẻ của họ, trừ thẻ [Nữ Trang].",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "10 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Tặng",
        mo_ta: "Lá bài có ký hiệu này có thể đem cho người khác. Nếu lá cho là [Trang bị] thì nó sẽ đi thẳng vào [khu trang bị] và thay thế [trang bị] hiện có.",
      },
    ],
  },
  Tu_Hai_Kim_Tien: {
    title: "Tứ Hải Kim Tiền",
    phan_loai: "trang_bi_bao_vat", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể chọn 1 người chơi tính toán khoảng cách đến bạn lớn hơn 1, đồng thời trong [vùng chơi] của họ lựa chọn chỉ định 1 thẻ bài. Sau đó bạn đem thẻ này trong [vùng trang bị] giao cho họ và thu lấy thẻ đã chỉ định.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "4 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Lac_Bat_Tu_Thuc: {
    title: "Lạc Bất Tư Thục",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lên 1 người chơi khác. Đặt thẻ [Lạc Bất Tư Thục] nằm ngang trong [khu phán xét] của họ. Đến giai đoạn phán xét của họ, nếu thẻ phán xét không phải là [chất Cơ], mục tiêu bỏ qua giai đoạn hành động.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "6 Chuồn, 6 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Ho_Phong_Hoan_Vu: {
    title: "Hô Phong Hoán Vũ",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn sử dụng lên 1 người khác không cùng thế lực, bạn lật mở 3 thẻ trên đỉnh chồng bài, sau đó bạn thu lấy 1 thẻ trong đó và chỉ định 1 thẻ khác lệnh họ thu lên tay, thẻ còn lại bạn đặt xuống đáy chồng bài rút.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "8", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "8 Cơ, 4 Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Quat_Cot_Lieu_Doc: {
    title: "Quát Cốt Liệu Độc",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn đối với 1 người chơi khác đã bị thương sử dụng. Người đó được hồi 1 sinh lực, sau đó họ có thể bỏ 1 thẻ [Độc] và ngăn chặn hiệu quả của [Độc].\n [Trọng Chú] Giai đoạn hành động, bạn có thể đưa thẻ này vào chồng bài bỏ, sau đó rút lại 1 thẻ mới.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Bích, A Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Dao_Vien_Ket_Nghia: {
    title: "Đào Viên Kết Nghĩa",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng lên tất cả người chơi, mỗi mục tiêu lần lượt hồi phục 1 điểm sinh lực",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Thiem_Dien: {
    title: "Thiểm Điện",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn đặt thẻ [Thiểm Điện] nằm ngang trong [khu phán xét] của bạn. Đến giai đoạn phán xét. Nếu kết quả phán xét từ [2-9 Bích]. Người lật phán xét sẽ nhận 3 điểm sát thương hệ [Lôi] và bỏ thẻ này đi. Nếu không ra kết quả trên. [Thiểm Điện] sẽ chuyển đến [khu phán xét] của người chơi kế tiếp theo lượt.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Ho_Tam_Kinh: {
    title: "Hộ Tâm Kính",
    phan_loai: "trang_bi_phong_cu", // co_ban | cam_nang | trang_bi
    mo_ta: "Khi bạn nhận sát thương lớn hơn 1 hoặc sát thương có thể dẫn đến hấp hối, bạn có thể đem thẻ bài này trong [vùng trang bị] đưa vào chồng bài bỏ, Nếu bạn làm vậy, chặn sát thương này lại.\nGiai đoạn hành động, bạn có thể đem [Hộ Tâm Kính] trên tay lắp vào vùng trang bị trống của 1 người chơi khác.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Hac_Quang_Khai: {
    title: "Hắc Quang Khải",
    phan_loai: "trang_bi_phong_cu", // co_ban | cam_nang | trang_bi
    mo_ta: "[Toả Định Kỹ] Khi bạn trở thành mục tiêu của [Sát]. [Cẩm Nang] loại gây sát thương hoặc [Cẩm Nang phổ thông sắc đen], nếu bạn không phải là mục tiêu duy nhất, những thẻ đó đối với bạn vô hiệu",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Dang_Giap: {
    title: "Đằng Giáp",
    phan_loai: "trang_bi_phong_cu", // co_ban | cam_nang | trang_bi
    mo_ta: "[Toả Định Kỹ] [Nam Man Nhập Xâm], [Vạn Tiễn Tề Phát ], [Xuất Kỳ Bất Ý] và [Sát] phổ thông không có hiệu quả đối với bạn. Khi bạn nhận sát thương hệ [Hoả], sát thương này +1.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Sat_Bang: {
    title: "Sát Băng",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá bài này lên 1 người chơi khác nằm trong phạm vi công kích của bạn, sau đó mục tiêu lựa chọn có hoặc không sử dụng 1 lá [Né], nếu người đó lựa chọn không, bạn gây 1 điểm sát thương thuộc tính [Băng] cho người chơi này.\nKhi bạn gây sát thương cho mục tiêu của lá [Sát Băng], nếu mục tiêu có bài, bạn có thể chặn sát thương này rồi lần lượt bỏ 2 lá bài của mục tiêu (nếu không đủ thì bỏ toàn bộ).",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "8", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "7 Bích, 8 Bích, 6 Bích, 5 Cơ, 6 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Ne_2: {
    title: "Né - Không Sào",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Bạn có thể sử dụng lá bài này khi bắt đầu giải quyết hiệu quả của lá [Sát] chỉ định bạn làm mục tiêu để triệt tiêu hiệu quả của lá [Sát] này lên bạn.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "8", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "8 Rô, 7 Rô, 7 Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Không sào",
        mo_ta: "Sau khi bạn sử dụng thẻ bài này, mà bạn không còn bài trên tay. Hiệu quả [Không Sào] - bạn rút 1 thẻ từ chồng bài",
      },
    ],
  },
  Vien_Mon_Xa_Kich: {
    title: "Viên Môn Xạ Kích",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn sử dụng lên 2 người khác nằm trong phạm vi công kích của bạn. Sau đó, bạn xem như sử dụng 1 thẻ [Sát] lên 1 trong 2 người đó. Nếu thẻ [Sát] này gây ra sát thương, cả 2 người đã chọn không thể gây sát thương cho nhau cho đến khi bắt đầu lượt kế tiếp của bạn.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "J Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Phan_Khach_Vi_Chu: {
    title: "Phản Khách Vi Chủ",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động giới hạn 1 lần, bạn sử dụng thẻ này lên 1 người khác. Bạn lựa chọn mục: \n1. Lệnh họ hoán đổi [Chủ Tướng] với [Phó Tướng]\n2. Bạn bỏ 1 thẻ. sau đó lệnh họ tiến hành phán xét, nếu thẻ phán xét cùng chất với thẻ bỏ. bạn lệnh họ tiến hành thay đổi [Phó Tướng]. lần thay đổi phó tướng này không tính vào giới hạn thay đổi phó tướng trong trò chơi.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Rô, Q Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Vien_Giao_Can_Cong: {
    title: "Viễn Giao Cận Công",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với một người chơi không cùng thế lực. Mục tiêu rút 1 thẻ bài, sau đó bạn rút 3 thẻ bài.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "9", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "9 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Tuu: {
    title: "Tửu",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá bài này, sau đó số điểm sát thương cơ bản của lá [Sát] tiếp theo mà bạn sử dụng trong lượt này +1.\nKhi bạn trong trạng thái hấp hối, bạn có thể sử dụng lá bài này để hồi phục 1 điểm sinh lực.",
    la_bai: [
      {
        chat: "tram", // ro | co | chuon | bich
        so: "9", // A, 2-10, J, Q, K
      },
      {
        chat: "", // ro | co | chuon | bich
        so: "9", // A, 2-10, J, Q, K
      },
      {
        chat: "", // ro | co | chuon | bich
        so: "9", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "9 tram, 9, 9",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Y_Thien_Kiem: {
    title: "Ỷ Thiên Kiếm",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Phạm vi công kích: 2]\n\n[Toả Định Kỹ] Mỗi lượt 1 lần, sau khi bạn thu được thẻ [Sát] ngoài lượt, bạn có thể lật mở đồng thời sử dụng thẻ đó.\n[Toả Định Kỹ] Mỗi lượt 1 lần, sau khi bạn gây sát thương bởi thẻ [Sát], nếu bạn đã bị thương. bạn có thể bỏ đi 1 thẻ trong [vùng trang bị], sau đó bạn hồi phục 1 sinh lực,",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "8", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "8 Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Vo_Giai_Kha_Kich_Quoc: {
    title: "Vô Giải Khả Kích - Quốc",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Trước khi 1 thẻ [Cẩm Nang] có hiệu lực lên 1 mục tiêu, bạn có thể sử dụng thẻ này để triệt tiêu hiệu quả lên mục tiêu đó [Thường] hoặc tất cả người cùng thế lực với mục tiêu đó [Quốc].",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Rô, K Chuồn, K Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Vo_Giai_Kha_Kich: {
    title: "Vô Giải Khả Kích",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Trước khi 1 thẻ [Cẩm Nang] có hiệu lực lên 1 mục tiêu, bạn có thể sử dụng thẻ này để triệt tiêu hiệu quả lên mục tiêu đó [Thường]",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "K Bích, Q Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Vo_Giai_Kha_Kich_2: {
    title: "Vô Giải Khả Kích - Không Sào",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Trước khi 1 thẻ [Cẩm Nang] có hiệu lực lên 1 mục tiêu, bạn có thể sử dụng thẻ này để triệt tiêu hiệu quả lên mục tiêu đó [Thường]",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "J Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Không sào",
        mo_ta: "Sau khi bạn sử dụng thẻ này, mà bạn không còn bài trên tay. Hiệu quả [Không Sào] - Bạn thu lấy mục tiêu của thẻ bài này",
      },
    ],
  },
  Gia_Cat_Lien_No: {
    title: "Gia Cát Liên Nỏ",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Pham vi công kích: 1]\n\nTrong giai đoạn hành động. bạn có thể sử dụng không giới hạn thẻ [Sát]",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Doc: {
    title: "Độc",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá này lên bản thân\n[Tỏa Định Kĩ] Khi thẻ [Độc] rời khỏi [vùng bài trên tay] của bạn, Và bằng cách này thẻ [Độc] tiến vào chồng bài bỏ, người sở hữu thẻ này tự giảm 1 sinh lực\nThẻ [Độc] trên tay nếu bằng cách nào đó được giao úp, đấu điểm, đổi phán xét, chuyển thành 1 thẻ khác nhưng sau đó không lập tức tiến vào chồng bài bỏ , thì người sở hữu thẻ này không chịu hiệu ứng trên của [Độc]",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "9", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "9 Bích, 5 Bích, 4 Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Thiec_Tac_Lien_Hoan: {
    title: "Thiếc Tác Liên Hoàn",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng chọn 1 đến 2 người chơi, lệnh họ xoay ngang thẻ võ tướng: Nếu họ đang xoay ngang, lệnh họ xoay dọc thẻ võ tướng. Khi 1 người nhận sát thương thuộc tính thì những người đang xoay ngang lần lượt nhận sát thương sau đó họ xoay dọc võ tướng.\n[Trọng Chú] Giai đoạn hành động, bạn có thể đưa lá này vào chồng bài bỏ và rút lá mới.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Chuồn, Q Bích, K Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Di_Dat_Dai_Lao: {
    title: "Dĩ Dật Đãi Lao",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với bạn và tất cả người cùng thế lực. Lần lượt mỗi người chơi rút 2 thẻ bài, sau đó bỏ 2 thẻ vào chồng bài bỏ",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "J Cơ, 4 Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Quan_Thach_Phu: {
    title: "Quán Thạch Phủ",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Pham vi công kích: 3]\n\nSau khi sử dụng [Sát] xác định mục tiêu. Nếu mục tiêu sử dụng [Né] để triệt tiêu, bạn có thể bỏ 2 thẻ bài để thẻ [Sát] gây sát thương cho mục tiêu.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "5 Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Hon_Thien_Nghi: {
    title: "Hỗn Thiên Nghi",
    phan_loai: "trang_bi_bao_vat", // co_ban | cam_nang | trang_bi
    mo_ta: "[Toả Định Kỹ] Sau khi bạn nhận sát thương, nếu trên [Hỗn Thiên Nghi] chưa có bài, bạn có thể đặt thẻ gây sát thương lên thẻ này: Sau khi thẻ này rời khỏi [vùng trang bị] và trên thẻ này có bài. bạn rút 2 thẻ đồng thời lật mở 2 thẻ đó, nếu trong 2 thẻ đó không có thẻ cùng phân loại thẻ được đặt lên, bạn rút thêm 1 thẻ.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Ngo_Luc_Kiem: {
    title: "Ngô Lục Kiếm",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Phạm vi công kích: 2]\n\n[Tỏa Định Kỹ] Phạm vi công kích của người chơi khác cùng thế lực với bạn +1",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "6 Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Co_Quoc_An_Bang: {
    title: "Cố Quốc An Bang",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn sử dụng lên bạn. Bạn rút 8 thẻ bài, sau đó bỏ đi tối thiểu 6 thẻ bài trên tay.\nNgười chơi [Ngô] có thể đem tối đa 6 thẻ bài bỏ đi bằng cách này giao cho người chơi [Ngô] khác mỗi người tối đa 2 thẻ bài",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Suy_Tam_Tri_Phuc: {
    title: "Suy Tâm Trí Phúc",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với 1 người không cùng thế lực ở khoảng cách 1 và họ có bài trong [vùng chơi], bạn thu lấy cùng lúc tối đa 2 thẻ trong [vùng chơi] của họ, sau đó trả lại họ số thẻ tương ứng trên tay.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "10 Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Van_Tien_Te_Phat: {
    title: "Vạn Tiễn Tề Phát",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với tất cả người chơi khác. Mỗi mục tiêu được yêu cầu đánh ra 1 thẻ [Né] để triệt tiêu. Nếu không, họ nhận 1 sát thương từ bạn.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Khac_Phuc_Trung_Nguyen: {
    title: "Khắc Phục Trung Nguyên",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn sử dụng lên tuỳ ý người chơi. Những người đó theo thứ tự chọn 1 mục:\n1. Họ xem như dùng 1 thẻ [Sát]. \"Người chơi [Thục] khi dùng [Sát], [Sát] này +1 sát thương\"\n2. Họ rút thẻ bài. \"Người chơi [Thục] sửa thành rút 2 thẻ bài\"",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Qua_Ha_Sach_Kieu: {
    title: "Quá Hà Sách Kiều",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với 1 người chơi khác có thẻ bài trong [vùng chơi]. Bạn bỏ đi 1 thẻ bài trong [vùng chơi] của mục tiêu.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Thuan_Thu_Khien_Duong: {
    title: "Thuận Thủ Khiên Dương",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với 1 người khác có thẻ bài trong [vùng chơi] và có khoảng cách là 1. Bạn thu lấy 1 thẻ bài trong [vùng chơi] của họ.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "3 Rô, 4 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Thai_Binh_Yeu_Thuat: {
    title: "Thái Bình Yêu Thuật",
    phan_loai: "trang_bi_phong_cu", // co_ban | cam_nang | trang_bi
    mo_ta: "[Tỏa Định Kỹ] khi bạn nhận sát thương thuộc tính, bạn chặn lại sát thương này. Giới hạn trữ bài của bạn [+X] ([X] là số thế lực trên bàn chơi -1). Sau khi [vùng trang bị] của bạn mất đi [Thái Bình Yêu Thuật], bạn rút 2 thẻ. Sau đó nếu sinh lực của bạn > 1, bạn tự giảm 1 sinh lực.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "3 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Dinh_Lan_Da_Minh_Chau: {
    title: "Định Lan Dạ Minh Châu",
    phan_loai: "trang_bi_bao_vat", // co_ban | cam_nang | trang_bi
    mo_ta: "[Toả Định Kỹ] Bạn xem như có kỹ năng [Chế Hành]. Nếu bạn đã có kỹ năng [Chế Hành], bạn hủy bỏ giới hạn số bài được bỏ của kỹ năng này.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "6 Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Phi_Long_Doat_Phuong: {
    title: "Phi Long Đoạt Phượng",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Phạm vi công kích: 2]\n\nSau khi bạn sử dụng [Sát] xác định mục tiêu, bạn có thể lệnh mục tiêu tự bỏ 1 thẻ bài. Khi bạn sử dụng [Sát] khiến mục tiêu rơi vào trạng thái hấp hối, bạn có thể thu lấy 1 thẻ bài trên tay mục tiêu.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Luc_Long_Tham_Gia: {
    title: "Lục Long Tham Giá",
    phan_loai: "trang_bi_toa_ky", // co_ban | cam_nang | trang_bi
    mo_ta: "[Khoảng cách : -1 / +1]\n\n[Toả Định Kỹ] Khi thẻ [Lục Long Tham Giá] tiến vào [vùng trang bị] của bạn, bạn bỏ tất cả các [Tọa Kỵ] trong [vùng trang bị]. Khi bạn đang trang bị [Lục Long Tham Giá], các thẻ [Toạ Kỵ] khác không thể vào [vùng trang bị] của bạn.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "K Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Van_Hoa_Loan_Vo: {
    title: "Văn Hòa Loạn Võ",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng lên tất cả người chơi. Lần lượt mỗi người chơi lật mở bài trên tay, sau đó bạn chọn 1 mục: \n1. Bạn lệnh người đó tự bỏ 2 thẻ bài khác loại trên tay. \n2. Bạn huỷ 1 thẻ bài trên tay người đó. “Người chơi [Quần] sau khi hoàn thành lựa chọn, nếu họ không có bài trên tay thì họ bổ sung bài trên tay bằng giới hạn sinh lực.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Dai_Mong_So_Tinh: {
    title: "Đại Mộng Sơ Tỉnh",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động giới hạn 1 lần, sử dụng thẻ này sau đó chỉ định lên 1 người chơi có bài trên tay và lượng bài trên tay họ ≤ 5. Lệnh họ bỏ hết tất cả bài trên tay và bổ sung lượng bài trên tay sao cho đạt đủ 4 thẻ.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Bach_Ngan_Su_Tu: {
    title: "Bạch Ngân Sư Tử",
    phan_loai: "trang_bi_phong_cu", // co_ban | cam_nang | trang_bi
    mo_ta: "[Toả Định Kỹ] Khi bạn nhận sát thương, nếu số điểm sát thương bạn nhận > 1, giảm số điểm sát thương bạn nhận còn 1.\n[Toả Định Kỹ] khi thẻ bài này rời [vùng trang bị] của bạn, bạn được hồi phục 1 sinh lực.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Bat_Quai_Do: {
    title: "Bát Quái Đỏ",
    phan_loai: "trang_bi_phong_cu", // co_ban | cam_nang | trang_bi
    mo_ta: "Khi bạn cần sử dụng hoặc đánh ra thẻ [Né] bạn có thể tiến hành lật 1 thẻ phán xét. Nếu kết quả của phán xét là [Đỏ] thì bạn coi như đã sử dụng hoặc đánh ra lá [Né]",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Sat_3: {
    title: "Sát - Thích Sát",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá bài này lên 1 người chơi khác nằm trong phạm vi công kích của bạn, sau đó mục tiêu lựa chọn có hoặc không sử dụng 1 lá [Né], nếu người đó lựa chọn không, bạn gây 1 điểm sát thương cho người chơi này.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Chuồn, 6 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Thích Sát",
        mo_ta: "Đây được xem là 1 thẻ [Sát], khi mục tiêu sử dụng thẻ [Né] để triệt tiêu thẻ [Sát] này. nếu họ có bài trên tay thì họ phải bỏ thêm 1 thẻ trên tay, nếu không thẻ [Thích Sát] này vẫn sẽ gây ra sát thương",
      },
    ],
  },
  Sat_4: {
    title: "Sát - Không Sào",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá bài này lên 1 người chơi khác nằm trong phạm vi công kích của bạn, sau đó mục tiêu lựa chọn có hoặc không sử dụng 1 lá [Né], nếu người đó lựa chọn không, bạn gây 1 điểm sát thương cho người chơi này.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "6 Chuồn, 4 Chuồn, 5 Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Không sào",
        mo_ta: "Sau khi bạn sử dụng thẻ này, mà bạn không còn bài trên tay. Hiệu quả [Không Sào] - số mục tiêu của thẻ này +1",
      },
    ],
  },
  Truc_Can_Khi_Vien: {
    title: "Trục Cận Khí Viễn - Trợ Chiến",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với 1 người khác.\nNếu khoảng cách của bạn và họ lớn hơn 1, bạn có thể bỏ 1 thẻ trong [khu vực chơi] của họ.\nNếu khoảng cách của bạn và họ bằng 1, bạn có thể thu 1 thẻ trong [khu vực chơi] của họ.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "3 Bích, Q Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Trợ chiến",
        mo_ta: "Sau khi chỉ định mục tiêu, người khác có thể tự bỏ 1 thẻ cùng loại để phát động hiệu quả [Ứng Biến]: hiệu quả [Trợ chiến] - mục tiêu chấp hành cả 2 hạng mục",
      },
    ],
  },
  Xuat_Ky_Bat_Y: {
    title: "Xuất Kỳ Bất Ý - Trợ Chiến",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng lên 1 người chơi. Bạn mở ra 1 thẻ bài trên tay của họ. Nếu thẻ đó khác chất với thẻ [Xuất Kỳ Bất Ý] này bạn gây 1 sát thương đối với họ.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Cơ, 3 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Trợ chiến",
        mo_ta: "Sau khi chỉ định mục tiêu, người khác có thể tự bỏ 1 thẻ cùng loại để phát động hiệu quả [Ứng Biến]: hiệu quả [Trợ Chiến] - mục tiêu +1",
      },
    ],
  },
  Hoa_Cong: {
    title: "Hỏa Công - Trợ Chiến",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng lên người chơi có bài trên tay. Họ mở ra 1 thẻ bài trên tay. Nếu bạn bỏ 1 thẻ cùng chất với thẻ họ mở, bạn gây sát thương hệ [Hoả] cho họ.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "4 Rô, K Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Trợ chiến",
        mo_ta: "Sau khi chỉ định mục tiêu, người khác có thể tự bỏ 1 thẻ cùng loại để phát động hiệu quả [Ứng Biến]: hiệu quả [Trợ Chiến] - mục tiêu +1",
      },
    ],
  },
  Thuy_Yem_That_Quan: {
    title: "Thủy Yêm Thất Quân - Trợ Chiến",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng lên 1 người chơi khác có bài trong [vùng trang bị], Lệnh mục tiêu chọn :\n1. Tự bỏ hết bài trong [Vùng trang bị] (tối thiểu 1).\n2. Nhận 1 sát thương thuộc tính [Lôi] từ bạn.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "4", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "3 Bích, 4 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Trợ chiến",
        mo_ta: "Sau khi chỉ định mục tiêu, người khác có thể tự bỏ 1 thẻ cùng loại để phát động hiệu quả [Ứng Biến]: hiệu quả [Trợ chiến] - mục tiêu chấp hành cả 2 hạng mục",
      },
    ],
  },
  Nam_Man_Nhap_Xam: {
    title: "Nam Man Nhập Xâm - Phú Giáp",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với tất cả người chơi khác. Mỗi mục tiêu được yêu cầu đánh ra 1 thẻ [Sát] để triệt tiêu. Nếu không họ nhận 1 sát thương từ bạn.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "7 Chuồn, K Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Phú Giáp",
        mo_ta: "Khi sử dụng lá bài này, số lá trên tay nhiều nhất bàn chơi: hiệu quả [Phú Giáp] - Mục tiêu -1",
      },
    ],
  },
  Thai_Cong_Am_Phu: {
    title: "Thái Công Âm Phù",
    phan_loai: "trang_bi_bao_vat", // co_ban | cam_nang | trang_bi
    mo_ta: "Bắt đầu giai đoạn hành động. bạn có thể lệnh cho 1 người chơi xoay ngang hoặc xoay dọc võ tướng. Khi kết thúc giai đoạn hành động, bạn có thể [Trọng Chú] 1 thẻ bài trên tay.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Sat_5: {
    title: "Sát - Trợ Chiến",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá bài này lên 1 người chơi khác nằm trong phạm vi công kích của bạn, sau đó mục tiêu lựa chọn có hoặc không sử dụng 1 lá [Né], nếu người đó lựa chọn không, bạn gây 1 điểm sát thương cho người chơi này.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "J Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Trợ chiến",
        mo_ta: "Sau khi chỉ định mục tiêu, người khác có thể tự bỏ 1 thẻ cùng loại để phát động hiệu quả [Ứng biến]. Hiệu quả [Trợ chiến] - Số mục tiêu của thẻ này +1",
      },
    ],
  },
  Tuyet_Anh: {
    title: "Tuyệt Ảnh",
    phan_loai: "trang_bi_toa_ky", // co_ban | cam_nang | trang_bi
    mo_ta: "[Khoảng cách : +1]",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "5 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  San_Hoa_Ta_Kiep: {
    title: "Sấn Hỏa Tá Kiếp",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với 1 người chơi khác có thẻ bài trên tay. Bạn lật mở 1 thẻ trên tay họ và lệnh họ chọn: \n1. Giao cho bạn thẻ đó; \n2. Nhận 1 điểm sát thương từ bạn.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "6 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Quyet_Dau: {
    title: "Quyết Đấu",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với 1 người chơi khác. Bắt đầu từ họ, họ và bạn lần lượt đánh ra thẻ [Sát] cho đến khi có người không thể đánh ra được thẻ [Sát] thì người đó nhận 1 sát thương từ người còn lại",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Chuồn, A Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Binh_Luong_Thon_Doan: {
    title: "Binh Lương Thốn Đoạn",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể chọn 1 người chơi khác trong khoảng cách 1. bạn đặt thẻ [Binh Lương Thốn Đoạn] nằm ngang trong [khu phán xét] của họ. Đến giai đoạn phán xét của họ. nếu thẻ phán xét không phải là [chất Chuồn], mục tiêu bỏ qua giai đoạn rút bài.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "10 Chuồn, 10 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Thu_Thuong_Khai_Hoa: {
    title: "Thụ Thượng Khai Hoa",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng lên bạn, bạn lựa chọn bỏ tối đa 2 thẻ của bản thân. Sau đó rút lại số thẻ tương đương. Nếu bằng cách này bạn có bỏ đi ít nhất 1 thẻ [Trang Bị], bạn rút thêm 1 thẻ.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "3 Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Tặng",
        mo_ta: "Lá bài có ký hiệu này có thể đem cho người khác. Nếu lá cho là [Trang bị] thì nó sẽ đi thẳng vào [khu trang bị] và thay thế [trang bị] hiện có.",
      },
    ],
  },
  Ky_Lan_Cung: {
    title: "Kỳ Lân Cung",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Phạm vi công kích : 5]\n\nKhi bạn sử dụng thẻ [Sát] gây sát thương cho mục tiêu. Nếu mục tiêu có trang bị [Tọa Kỵ], bạn có thể bỏ đi 1 [Tọa Kỵ] trong [khu trang bị] của họ.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "5 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Trao_Hoang_Phi_Dien: {
    title: "Trảo Hoàng Phi Điện",
    phan_loai: "trang_bi_toa_ky", // co_ban | cam_nang | trang_bi
    mo_ta: "[Khoảng cách : +1]",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "K Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Xich_Tho: {
    title: "Xích Thố",
    phan_loai: "trang_bi_toa_ky", // co_ban | cam_nang | trang_bi
    mo_ta: "[Khoảng cách : -1]",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "5 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Ngu_Coc_Phong_Dang: {
    title: "Ngũ Cốc Phong Đăng",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với tất cả người chơi, bạn từ đầu chồng bài mở số thẻ bài bằng với số mục tiêu, sau đó bắt đầu từ bạn: lần lượt mỗi người thu lấy 1 thẻ bài trong số đó.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "3 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Nhan_Vuong_Thuan: {
    title: "Nhân Vương Thuần",
    phan_loai: "trang_bi_phong_cu", // co_ban | cam_nang | trang_bi
    mo_ta: "[Toả Định Kỹ] Thẻ [Sát] [sắc Đen] không có hiệu quả đối với bạn.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Bat_Truong_Xa_Mau: {
    title: "Bát Trượng Xà Mâu",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Phạm vi công kích : 3]\n\nBạn có thể đem 2 lá bài trên tay sử dụng hoặc đánh ra xem như thẻ [Sát].",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Dong_Tuoc: {
    title: "Đổng Tước",
    phan_loai: "trang_bi_bao_vat", // co_ban | cam_nang | trang_bi
    mo_ta: "Trong lượt của bất kỳ người chơi, khi bạn lần đầu sử dụng thẻ bài mang hiệu quả cường hoá sẽ bỏ qua điều kiện phát động và trực tiếp phát động hiệu quả [Ứng Biến].",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "5 Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Ta_Dao_Sat_Nhan: {
    title: "Tá Đao Sát Nhân",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với 1 người chơi khác có thẻ Vũ Khí trong [khu Trang Bị], lệnh họ sử dụng 1 thẻ [Sát] lên 1 người trong phạm vi công kích của họ do bạn chỉ định. Nếu không, họ đem thẻ [Vũ Khí] trong [khu Trang Bị] giao cho bạn.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Phú Giáp",
        mo_ta: "Khi sử dụng lá bài này, số lá trên tay nhiều nhất bàn chơi: hiệu quả [Phú Giáp] - Mục tiêu không thể hưởng ứng",
      },
    ],
  },
  Sat_6: {
    title: "Sát - Tàn Khu",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá bài này lên 1 người chơi khác nằm trong phạm vi công kích của bạn, sau đó mục tiêu lựa chọn có hoặc không sử dụng 1 lá [Né], nếu người đó lựa chọn không, bạn gây 1 điểm sát thương cho người chơi này.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "J Bích, 10 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Tàn Khu",
        mo_ta: "Sau khi bạn sử dụng thẻ này, nếu khi đó bạn còn 1 sinh lực. Hiệu quả [Tàn Khu] - số mục tiêu của thẻ này +1",
      },
    ],
  },
  Ngu_Hanh_Hac_Linh_Phien: {
    title: "Ngũ Hành Hạc Linh Phiến",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Phạm vi công kích: 4]\n\nBạn có thể đem 1 thẻ [Sát] thuộc tính chuyển hoá thành 1 thẻ [Sát] thuộc tính tuỳ ý để sử dụng.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Dong_Chuc_Tien_Co: {
    title: "Động Chúc Tiên Cơ",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng đối với bạn. Bạn [chiêm bốc] 2 thẻ, sau đó rút 2 thẻ (Chiêm bốc tức là xem [X] thẻ bài từ đầu chồng bài, sau đó tuỳ ý thay đổi trình tự sắp xếp những thẻ này đặt úp trên đỉnh hoặc đáy chồng bài rút).",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "8", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "8 Cơ, 7 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Ne_3: {
    title: "Né - Né Lược",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Bạn có thể sử dụng lá bài này khi bắt đầu giải quyết hiệu quả của lá [Sát], chỉ định bạn làm mục tiêu, để triệt tiêu hiệu quả của lá [Sát] này lên bạn.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "8", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "10 Cơ, 8 Cơ, J Cơ, Q Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Né lược",
        mo_ta: "sau khi bạn triệt tiêu thẻ [Sát], bạn có thể thu lấy 1 thẻ [Kỳ Trân] trong [vùng Trang Bị] của người sử dụng thẻ [Sát]",
      },
    ],
  },
  Bach_Ky_Lan: {
    title: "Bạch Kỳ Lân",
    phan_loai: "trang_bi_toa_ky", // co_ban | cam_nang | trang_bi
    mo_ta: "[Khoảng cách: +2]\n\n[Toả Định Kỹ] Khi bạn sử dụng thẻ này. bạn gây 1 điểm sát thương hệ [Lôi] cho tất cả người chơi sinh lực hơn bạn.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Giang_Dong_Dai_Thuyen: {
    title: "Giang Đông Đại Thuyền",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "[Toả Định Kỹ] [Thuỷ Yêm Thất Quân] vô hiệu lên bạn. Đồng thời không nhận sát thương thuộc tính lan đến bạn từ trạng thái liên hoàn.\n[Toả Định Kỹ] Thẻ [Sát] có hiệu ứng cường hoá từ thẻ bài gây sát thương lên bạn +1. Khi thẻ này bị huỷ bởi người khác, bạn và họ cùng rút 1 thẻ.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "J Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Tặng",
        mo_ta: "Lá bài có ký hiệu này có thể đem cho người khác. Nếu lá cho là [Trang bị] thì nó sẽ đi thẳng vào [khu trang bị] và thay thế [trang bị] hiện có.",
      },
    ],
  },
  Cham_Doc: {
    title: "Chấm Độc",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động giới hạn lần, bạn có thể bỏ 1 thẻ [Độc] trên tay đồng thời ngăn chặn hiệu quả của [Độc], sau đó lệnh cho thẻ [Sát] tiếp theo của bạn trong lượt này. hiệu quả từ gây sát thương sửa thành tự giảm 1 sinh lực.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "5", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "5 Rô, 5 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Quy_Dung_Tu: {
    title: "Quỷ Dung Tử",
    phan_loai: "trang_bi_bao_vat", // co_ban | cam_nang | trang_bi
    mo_ta: "[Toả Định Kỹ] Bắt đầu giai đoạn hành động, bạn chọn 1 người chơi khác, sau đó lệnh họ rời khỏi bàn chơi cho đến hết lượt này.\n[Toả Định Kỹ] Giai đoạn kết thúc, bạn rút 1 thẻ đồng thời lệnh cho người có lượt tiếp theo, vào giai đoạn rút bài của họ rút ít đi 1 thẻ.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "3 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Tặng",
        mo_ta: "Lá bài có ký hiệu này có thể đem cho người khác. Nếu lá cho là [Trang bị] thì nó sẽ đi thẳng vào [khu trang bị] và thay thế [trang bị] hiện có.",
      },
    ],
  },
  Hoan_Tuu: {
    title: "Hoan Tửu",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn sử dụng thẻ này lên tất cả người chơi, họ lần lượt tiến hành chọn 1 mục:\n1. Nếu họ có [Tửu] trên tay, họ có thể đánh ra thẻ [Tửu], sau đó chọn rút 3 thẻ hoặc hồi phục sinh lực \n2. Nếu họ không đánh ra thẻ [Tửu], họ so bài trên tay với sinh lực hiện tại họ đang có. Nếu như bài trên tay họ nhiều/ bằng/ít hơn họ tiến hành bỏ 1 thẻ trên tay/ tự giảm 1 sinh lực/ rút thẻ.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "9", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "9 Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Sat_Loi: {
    title: "Sát Lôi",
    phan_loai: "co_ban", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn có thể sử dụng lá bài này lên 1 người chơi khác nằm trong phạm vi công kích của bạn, sau đó mục tiêu lựa chọn có hoặc không sử dụng 1 lá [Né], nếu người đó lựa chọn không, bạn gây 1 điểm sát thương thuộc tính [Lôi] cho người chơi này.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "8", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "6", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "8", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "7", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "8 Chuồn, 7 Chuồn, 6 Chuồn, 6 Bích, 8 Bích, 7 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Tu_Tuynh: {
    title: "Tử Tuynh",
    phan_loai: "trang_bi_toa_ky", // co_ban | cam_nang | trang_bi
    mo_ta: "[Khoảng cách: -1]",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "K Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Giai_Giap_Quy_Dien: {
    title: "Giải Giáp Quy Điền",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, bạn sử dụng lên 1 người đang có bài trong [vùng trang bị], Lệnh họ thu hết thẻ [trang bị] lên tay. sau đó họ lựa chọn: \n1. Bỏ đi số bài tương đương số thẻ cầm lên và hồi phục 1 sinh lực\n2. Tự giảm 1 sinh lực.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "3 Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Hao_Lenh_Thien_Ha: {
    title: "Hào Lệnh Thiên Hạ",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng lên 1 người chơi có sinh lực không phải nhỏ nhất. Ngoại trừ người đó, tất cả các người chơi khác có thể lựa chọn: \n1. Bỏ 1 thẻ trên tay và xem như dùng 1 thẻ [Sát] lên người đó. \"Người chơi [Ngụy] không cần bỏ bài\"\n2. Huỷ người đó 1 thẻ bài. \"Người chơi [Ngụy] có thể thu lấy thẻ đó",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Chiet_Kich: {
    title: "Chiết Kích",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Pham vi công kích: 0]\n\nĐây chỉ là 1 thanh vũ khí bị đứt gãy mà thôi..... bạn trông đợi điều gì từ nó chứ! T…",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [
      {
        ten: "Tặng",
        mo_ta: "Lá bài có ký hiệu này có thể đem cho người khác. Nếu lá cho là [Trang bị] thì nó sẽ đi thẳng vào [khu trang bị] và thay thế [trang bị] hiện có.",
      },
    ],
  },
  Thu_Hung_Song_Co_Kiem: {
    title: "Thư Hùng Song Cổ Kiếm",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Phạm vi công kích: 2]\n\nSau khi bạn sử dụng [Sát] chỉ định mục tiêu [khác giới tính], bạn có thể lệnh họ lựa chọn:\n1. Họ chọn bỏ 1 thẻ trên tay:\n2. Họ lệnh bạn rút 1 thẻ bài.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Dong_Quy_Vu_Tan: {
    title: "Đồng Quy Vu Tận",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Khi bạn rơi vào trạng thái hấp hối bởi 1 người khác và không được cứu, bạn có thể sử dụng thẻ này lên nguồn sát thương, bạn gây cho họ 1 điểm sát thương.\n[Toả Định Kỹ] Nếu thẻ bài bị bỏ và tiến vào chồng bài bỏ bởi 1 người khác, bạn gây cho họ 1 điểm sát thương.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Cau_Vi_Duc_Tieu: {
    title: "Cẩu Vĩ Đục Tiêu",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng thẻ này chỉ định lên tất cả người chơi. Mỗi người lần lượt lựa chọn 1 thẻ [Kỳ Trân] trong chồng bài bỏ đồng thời sử dụng thẻ đó. Nếu không còn thẻ [Kỳ Trân] sửa thành rút 1 thẻ.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Rô, A Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Thien_Co_Do: {
    title: "Thiên Cơ Đồ",
    phan_loai: "trang_bi_bao_vat", // co_ban | cam_nang | trang_bi
    mo_ta: "[Toả định kỹ] Khi [Thiên Cơ Đồ] tiến vào [vùng Trang Bị] của bạn, bạn bỏ đi 1 thẻ khác của bạn trừ thẻ này. Khi thẻ này rời khỏi [vùng Trang Bị], bạn bổ sung bài trên tay đến 5 thẻ.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  O_Thiec_Toa_Lien: {
    title: "Ô Thiếc Tỏa Liên",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Toả Định Kỹ] Sau khi bạn sử dụng [Sát] chỉ định mục tiêu: Nếu mục tiêu chưa xoay ngang tướng, bạn xoay ngang tướng họ.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "K Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Hoa_Hoan_Y: {
    title: "Hỏa Hoàn Y",
    phan_loai: "trang_bi_phong_cu", // co_ban | cam_nang | trang_bi
    mo_ta: "Khi bạn nhận sát thương thuộc tính, ngăn chặn sát thương này lại. Sau khi bạn trở thành mục tiêu của thẻ [Sát], bạn có thể bỏ 1 thẻ trên tay, sau đó gây 1 điểm sát thương hệ [Hoả] cho người sử dụng thẻ [Sát].",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Duong_Toai_Thuong: {
    title: "Dương Toại Thương",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Phạm vi công kích: 3]\n\n[Tỏa Định Kỹ] Sau khi bạn gây sát thương cho mục tiêu bằng thẻ [Sát]. mục tiêu nhận thêm 1 điểm sát thương hệ [Hoả] không nguồn.",
    la_bai: [
      {
        chat: "ro", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "J Rô",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Don_Giap_Thien_Thu: {
    title: "Độn Giáp Thiên Thư",
    phan_loai: "trang_bi_bao_vat", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động giới hạn 2 lần, bạn có thể tiến hành thay đổi [Phó Tướng].",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "3 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Do_Cung_Chuy_Kien: {
    title: "Đồ Cùng Chủy Kiến",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng thẻ này lên 1 người chơi khác. Bạn chọn 1 thẻ [Kỳ Trân] trong chồng bài bỏ đồng thời lệnh họ sử dụng thẻ đó. Sau đó, cho đến hết lượt này, họ xem như luôn nằm trong phạm vi công kích của bạn.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "J Chuồn, A Chuồn, 2 Chuồn",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Doat_Doat_Buc_Nhan: {
    title: "Đoát Đoát Bức Nhân",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng thẻ này lên 1 người đã xác nhận thế lực: Mục tiêu lựa chọn có hoặc không thay đổi [Phó Tướng], sau đó họ nhận 1 điểm sát thương từ bạn.",
    la_bai: [
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "Q", // A, 2-10, J, Q, K
      },
      {
        chat: "chuon", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "J", // A, 2-10, J, Q, K
      },
      {
        chat: "bich", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "Q Chuồn, K Chuồn, J Bích, 10 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Cuu_Trau_Dinh: {
    title: "Cửu Trâu Đỉnh",
    phan_loai: "trang_bi_bao_vat", // co_ban | cam_nang | trang_bi
    mo_ta: "Trước khi chia thẻ bài khởi đầu hoặc sau khi xào lại chồng bài, đặt thẻ này từ chồng bài (nếu có) vào chồng bài bỏ.\n[Toả Định Kỹ]. Nếu [vùng trang bị] của bạn có 4 thẻ [Kỳ Trân], thế lực của bạn giành chiến thắng.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "K", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "K Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Anh_Vu_Boi: {
    title: "Anh Vũ Bôi",
    phan_loai: "trang_bi_bao_vat", // co_ban | cam_nang | trang_bi
    mo_ta: "Mỗi lượt giới hạn 9 lần, bạn có thể đem 1 thẻ trên đầu chồng bài rút xem như thẻ [Tửu] để sử dụng.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "9", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "9 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Thien_Loc: {
    title: "Thiên Lộc",
    phan_loai: "trang_bi_toa_ky", // co_ban | cam_nang | trang_bi
    mo_ta: "[Khoảng cách : -3]\n\nNếu thế lực của bạn không có [Quân Chủ] trên bàn, xem như có [Quân Chủ Kỹ] của thế lực của bạn.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "3 Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Tram_Xa_Kiem: {
    title: "Trảm Xà Kiếm",
    phan_loai: "trang_bi_vu_khi", // co_ban | cam_nang | trang_bi
    mo_ta: "[Phạm vi công kích : 2]\n\nSau khi bạn sử dụng [Sát] gây ra sát thương cho mục tiêu, bạn hồi phục 1 điểm sinh lực. Nếu người đó là [Quân Chủ] hoặc [Dã Tâm Gia], giết chết người chơi đó.",
    la_bai: [
      {
        chat: "bich", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "A Bích",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Xao_Thu_Hao_Doat: {
    title: "Xảo Thủ Hào Đoạt",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động. sử dụng thẻ này lên tối đa 2 người khác. Mục tiêu lật mở hết tất cả bài trên tay, sau đó bạn thu lấy hết tất cả [Trang Bị] được lật mở bằng cách này.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "3", // A, 2-10, J, Q, K
      },
      {
        chat: "ro", // ro | co | chuon | bich
        so: "10", // A, 2-10, J, Q, K
      },
      {
        chat: "co", // ro | co | chuon | bich
        so: "A", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "3 Cơ, 10 Rô, A Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  Phan_Dao_Duong_Tieu: {
    title: "Phân Đạo Dương Tiêu",
    phan_loai: "cam_nang", // co_ban | cam_nang | trang_bi
    mo_ta: "Giai đoạn hành động, sử dụng thẻ này lên 1 người khác cùng thế lực. Bạn rút 6 thẻ, giao 3 thẻ cho họ, sau đó bạn thành [Dã Tâm Gia].\n[Trọng Chú] Giai đoạn hành động, bạn có thể đưa thẻ này vào chồng bài bỏ và rút 1 thẻ.",
    la_bai: [
      {
        chat: "co", // ro | co | chuon | bich
        so: "2", // A, 2-10, J, Q, K
      },
    ],
    hien_thi: "2 Cơ",
    ban_mo_rong: "Chưa cập nhật",
    hieu_ung: [],
  },
  
  
};

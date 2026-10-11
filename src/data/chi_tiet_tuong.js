export const details = {
  //1
  Trinh_Pho: {
    title: "Trình Phổ",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Tam Triều Hổ Thần",
    ky_nang: [
      {
        loai: "Tỏa định kĩ",
        ten: "Hổ Huân",
        mo_ta:
          "Khi 1 người kết thúc lượt, nếu trong lượt này có người rơi vào trạng thái hấp hối do bạn gây sát thương, bạn chọn 1 mục:\n1. Nếu bạn không phải người duy nhất có giới hạn sinh lực cao nhất, bạn tăng 1 giới hạn sinh lực và hồi phục 1 sinh lực.\n2. Bạn có thể di chuyển 1 thẻ trong vùng trang bị/ phán xét của 1 người chơi sang vùng chơi của người khác.",
      },
      {
        ten: "Nguyên Tòng",
        mo_ta:
          "Kết thúc giai đoạn hành động của 1 người cùng thế lực, nếu trong giai đoạn này họ không gây ra sát thương, họ có thể giao cho bạn 1 thẻ, sau đó bạn có thể sử dụng 1 thẻ bài trên tay ",
      },
    ],
    cau_noi: "Phàm quân tử giá, chết trên sa trường quyết không hối hận!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Bản gốc",
  },
  Ha_Thai_Hau: {
    title: "Hà Thái Hậu",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Lộng Quyền Chi Xà Yết",
    ky_nang: [
      {
        ten: "Trấm Độc",
        mo_ta:
          "Bắt đầu giai đoạn hành động của người chơi, bạn có thể bỏ đi 1 thẻ bài trên tay, xem như họ đã dùng 1 thẻ [Tửu], nếu người chơi đó không phải là bạn, họ nhận 1 sát thương từ bạn",
      },
      {
        ten: "Thích Loạn",
        mo_ta:
          "Khi kết thúc lượt của 1 người chơi, bạn có thể rút [3X + Y] thẻ bài \n[X] là số người chơi bạn giết trong lượt này \n[Y] là số người chơi bị người khác giết trong lượt này",
      },
    ],
    cau_noi:
      "Đường đến suối vàng lạnh lắm, hãy uống chút rượu, làm ấm cơ thể nha!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Bản gốc",
  },
  Truong_Tu: {
    title: "Trương Tú",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Bắc Địa Thương Vương",
    ky_nang: [
      {
        loai: "Tỏa định kĩ",
        ten: "Tòng Gián",
        mo_ta:
          "Khi bạn gây sát thương ngoài lượt hoặc bạn nhận sát thương trong lượt của bạn, sát thương này +1.",
      },
      {
        ten: "Phụ Địch",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thể đem 1 thẻ bài trên tay giao cho nguồn sát thương. Nếu làm vậy, bạn gây 1 sát thương cho người cùng thế lực với họ với điều kiện:\nHọ có sinh lực hiện tại nhiều nhất\nSinh lực của họ không thấp hơn bạn",
      },
    ],
    cau_noi: "Loạn thế vương giả bá nghiệp, làm sao thiếu được ta!",
    hao_tuong: ["Giả Hủ"],
    ban_mo_rong: "Bản gốc",
  },
  Luu_Ky: {
    title: "Lưu Kỳ",
    the_luc: ["Thục", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Cư Ngoại Nhi An",
    ky_nang: [
      {
        ten: "Truân Giang",
        mo_ta:
          "Giai đoạn kết thúc, nếu bạn tại giai đoạn hành động lượt này đã sử dụng bài và không chỉ định người khác làm mục tiêu thì bạn có thể rút [X] thẻ bài. ([X] là số thế lực trên bàn).",
      },
      {
        ten: "Vấn Kế",
        mo_ta:
          "Khi bắt đầu giai đoạn hành động, bạn có thể lệnh 1 người khác giao cho bạn 1 thẻ bài. Nếu người đó cùng thế lực hoặc chưa xác định thế lực, bạn sử dụng thẻ bài đó lượt này không hạn chế số lần, khoảng cách và không thể phản ứng. Nếu họ không cùng thế lực, bạn giao lại 1 thẻ bài khác.",
      },
    ],
    cau_noi: "Vọng tiên sinh bất lận chỉ giáo!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Bản gốc",
  },
  Ton_Hoan: {
    title: "Tôn Hoàn",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Tông Thất Nhan Uyên",
    ky_nang: [
      {
        ten: "Nghịch Trảm",
        mo_ta:
          "Khi lượt 1 người khác kết thúc, nếu lượt này bạn mất đi thẻ bài cuối cùng trên tay, hoặc bạn có sử dụng qua bài để triệt tiêu thẻ bài của họ, bạn có thể lệnh họ chọn 1 mục:\n1. Bạn thu lấy 1 thẻ của họ.\n2. Bạn xem như sử dụng thẻ [Sát] xuyên phòng cụ lên họ.",
      },
    ],
    cau_noi: "Tướng giả nghênh chiến, mưu định gỉa tiên liệu hậu binh qua!",
    hao_tuong: ["Lục Tốn"],
    ban_mo_rong: "Bản gốc",
  },
  Van_Uong: {
    title: "Văn Ương",
    the_luc: ["Ngụy", "Ngô"],
    sinh_luc: 2,
    danh_hieu: "Vạn Tướng Phi Mỹ",
    ky_nang: [
      {
        ten: "Lữ Lực",
        mo_ta:
          "Mỗi lượt giới hạn 1 lần, khi bạn rơi vào trạng thái hấp hối, bạn có thể lật mở 2 thẻ trên đầu chồng bài, sau đó bạn có thể sử dụng trong số đó 1 thẻ [sắc Đỏ] xem như [Đào] và bạn đặt thẻ còn lại lên đầu chồng bài",
      },
      {
        loai: "Tỏa Định Kỹ",
        ten: "Bối Thủy",
        mo_ta:
          "Khi bạn đang kết toán sát thương, bạn và đối phương đều xem như trong trạng thái “Ác Chiến”, người khác trữ bài và họ đều không sử dụng [Đào]",
      },
    ],
    cau_noi: "Khi ta ra trận, vạn quân bất dương!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Bản gốc",
  },
  Hua_Cong: {
    title: "Hứa Cống",
    the_luc: ["Ngô", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Độc Kế Kích Lưu",
    ky_nang: [
      {
        ten: "Biểu Thiệu",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể chọn 2 người khác không cùng thế lực với nhau, xem như bạn dùng [Tri Kỉ Tri Bỉ] lên 1 người trong số họ, sau đó bạn đem 1 thẻ giao cho 1 người còn lại, nếu vậy bạn rút 1 thẻ",
      },
      {
        loai: "Tỏa Định Kỹ",
        ten: "Nghiệp Cừu",
        mo_ta:
          "Khi bạn trận vong, xem như bạn theo thứ tự dùng 3 thẻ [Sát] đối với người giết bạn, \n- thẻ đầu tiên không hưởng ứng\n- thẻ thứ hai vô hiệu phòng cụ\n- thẻ thứ ba sát thương +1\nNếu theo cách này họ rơi vào trạng thái hấp hối, trừ họ ra các người chơi cùng thế lực với họ không thể dùng [Đào]",
      },
    ],
    cau_noi: "Mồi thù hôm nay, ta nhất định sẽ chiến cùng ngươi!",
    hao_tuong: ["Nghiêm Bạch Hổ"],
    ban_mo_rong: "",
  },
  Bang_Thong: {
    title: "Bàng Thống",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Phượng Sồ",
    ky_nang: [
      {
        ten: "Liên Hoàn",
        mo_ta:
          "Giai đoạn hành động, bạn có thể đem 1 thẻ [chất ♣] xem như sử dụng thẻ [Thiếc Tác Liên Hoàn] hoặc [Trọng Chú] thẻ đó.",
      },
      {
        loai: "Hạn Định Kỹ",
        ten: "Niết Bàn",
        mo_ta:
          "Khi bạn trong trạng thái hấp hối, bạn có thể bỏ hết tất cả thẻ bài trong vùng chơi của bạn, sau đó khôi phục trạng thái ban đầu và xoá mọi trạng thái bất lợi, bạn rút 3 thẻ bài và hồi phục cho bản thân đến khi đạt đủ 3 điểm sinh lực.",
      },
    ],
    cau_noi: "Thiếc tác liên chu, như lý bình địa!",
    hao_tuong: ["Khổng Minh"],
    ban_mo_rong: "",
  },
  Tieu_Kieu: {
    title: "Tiểu Kiều",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Kiều Tình Chi Hoa",
    ky_nang: [
      {
        loai: "Toà Định Kỹ",
        ten: "Hồng Nhan",
        mo_ta:
          "Thẻ [chất ♠] của bạn xem như [chất ♥]. Nếu trong vùng [Trang Bị] của bạn có thể [chất ♥], giới hạn trữ bài của bạn +1.",
      },
      {
        ten: "Thiên Hương",
        mo_ta:
          "Khi bạn nhận sát thương, bạn có thể bỏ 1 thẻ chất cơ trên tay để chặn sát thương này lại và bạn lựa chọn 1 người chơi khác, bạn chọn 1 mục sau cho mục tiêu: \n1. Họ nhận 1 sát thương từ nguồn, sau khi kết toán sát thương, rút [X] thẻ bài ([X] là số sinh lực mục tiêu đã mất, nhiều nhất là 5); \n2. Họ tự giảm 1 sinh lực, sau đó thu lấy bài bạn vừa bỏ. Mỗi lượt mỗi mục chọn chỉ được phát động 1 lần duy nhất.",
      },
    ],
    cau_noi: "Trong tâm có tà, làm sao hiểu được thiên hương!",
    hao_tuong: ["Chu Du", "Đại Kiều"],
    ban_mo_rong: "",
  },
  Van_Kham: {
    title: "Văn Khâm",
    the_luc: ["Ngụy", "Ngô"],
    sinh_luc: 2,
    danh_hieu: "Dũng Nhi Vô Toán",
    ky_nang: [
      {
        ten: "Căng Phạt",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể bỏ 1 thẻ bài, lệnh 1 người chơi khác có bài lựa chọn 1 mục:\n1. Bạn thu lấy 1 thẻ bài của họ.\n2. Giao cho bạn 1 thẻ Trang Bị, nêu thẻ Trang Bị đó là chất bích, xem như họ sử dụng 1 thẻ [Sát] lên bạn.",
      },
    ],
    cau_noi: "Sống chỉ để chiến phạt địch, chỉ ra công lao của ta!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  //2
  Hua_Tinh: {
    title: "Hứa Tĩnh",
    the_luc: ["Hán", "Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Hoán Hiền Thủ Lương",
    ky_nang: [
      {
        ten: "Hứa Danh",
        mo_ta:
          "Giai đoạn hành động 1 lần, bạn có thể đem 1 thẻ [Cẩm Nang] (không chuyển hoá) xem như [Viễn Giao Cận Công] để sử dụng, sau đó bạn chọn 1 người khác ngồi giữa bạn và mục tiêu (theo vòng), lệnh họ rút 1 thẻ.",
      },
      {
        loai: "Toả Định Kỹ",
        ten: "Tĩnh Đức",
        mo_ta:
          "Một lần mỗi lượt, khi bạn nhận sát thương, bạn lật mở 1 thẻ tướng đang úp của bạn hoặc 1 thẻ tướng đang úp của nguồn sát thương, lệnh cho sát thương này -1.",
      },
    ],
    cau_noi: "Trọng yếu Hứa Tĩnh, di huyễn viễn cận!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Ton_Hao: {
    title: "Tôn Hạo",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Thời Nhật Hạt Tang",
    ky_nang: [
      {
        ten: "Tàn Thực",
        mo_ta:
          "Mỗi vòng chơi mỗi mục giới hạn giới hạn 1 lần:\n- Khi bạn rút bài, bạn có thể sửa thành thu 2 thẻ trong vùng chơi của người khác.\n- Khi người khác không có bài trên tay tiến hành rút bài, họ có thể sửa thành thu 2 thẻ trong vùng chơi của bạn.",
      },
      {
        loai: "Toả Định Kỹ",
        ten: "Cừu Hải",
        mo_ta: "Thưởng phạt khi bạn giết hoặc bị giết +1 thẻ.",
      },
    ],
    cau_noi: "Thù hận mới khiến cho người ta thức tỉnh. Đến đây!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Diem_Nhu: {
    title: "Diêm Nhu",
    the_luc: ["Hán", "Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Bạch Lang Thư Khiến",
    ky_nang: [
      {
        ten: "Hiệp Lân",
        mo_ta:
          "Giai đoạn hành động người khác 1 lần, họ có thể lật mở 1 thẻ [Sát] trên tay đồng thời chọn 1 người trong khoàng cách 1 của bạn. Bạn có thể lệnh cho họ dùng thẻ đó xem như [Viễn Giao Cận Công] lên mục tiêu dã chọn.",
      },
      {
        loai: "Trận Pháp Kỹ",
        ten: "Địa Tải",
        mo_ta:
          "Mỗi lượt giới hạn 1 lần, khi 1 người cùng đội hình với bạn nhận sát thương, các người còn lại trong đội hình này có thể chuyển sát thương này cho chính họ.",
      },
    ],
    cau_noi: "Đại hận thâm thù, dùng kiếm để luận!",
    hao_tuong: ["Lưu Ngu"],
    ban_mo_rong: "",
  },
  Trau_Thi: {
    title: "Trâu Thị",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Hoặc Tâm Chí Mị",
    ky_nang: [
      {
        loai: "Toả Định Kỹ",
        ten: "Họa Thủy",
        mo_ta:
          "Trong lượt của bạn, người chơi khác không thể lật mở thẻ tướng; Người chơi không cùng thế lực đang có thẻ tướng đang úp không thể dùng hoặc đánh ra thẻ [Né] để hưởng ứng bài của bạn.",
      },
      {
        ten: "Khuynh Thành",
        mo_ta:
          "Giai đoạn hành động, bạn có thể bỏ đi 1 thẻ [sắc Đen] và chọn 1 người khác đang mở tất cả tướng, sau đó bạn úp 1 thẻ tướng của họ. Nếu thẻ bài bạn bỏ là thẻ [Trang Bị], bạn có thể lựa chọn 1 người chơi khác và lặp lại thao tác này.",
      },
    ],
    cau_noi: "Tự thân kinh qua nỗi sợ, người xoay lưng lại đi nà!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Chu_Tuan: {
    title: "Chu Tuấn",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Chinh Vô Di Lự",
    ky_nang: [
      {
        ten: "Công Kiên",
        mo_ta:
          "Khi thẻ bài của người chơi khác bị bạn lệnh đưa vào chồng bài bỏ, bạn có thể thu hết các thẻ [Sát] trong đó: 1 lần mỗi lượt, sau khi bạn chỉ định mục tiêu cho thẻ [Sát], nếu mục tiêu lần này với mục tiêu lần trước là cùng 1 người, bạn có thể lệnh họ bỏ đi 2 thẻ bài.",
      },
      {
        loai: "Toả Định Kỹ",
        ten: "Hội Mãng",
        mo_ta:
          "Khi bạn giết 1 người chơi không cùng thê lực và họ đang có quan hệ đội hình, bạn rút 2 thẻ.",
      },
    ],
    cau_noi: "Loạn thế hoàng cân, phá địch vạn quân!",
    hao_tuong: ["Tôn Kiên"],
    ban_mo_rong: "",
  },
  Luu_Co: {
    title: "Lưu Cơ",
    the_luc: ["Hán", "Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Chí Tháo Thù Dị",
    ky_nang: [
      {
        ten: "Cư Tang",
        mo_ta:
          "Trước khi thẻ đấu điểm của bạn được lật mở, bạn có thể lệnh thẻ đấu điểm của bạn giá trị -3. Sau khi kết toán, bạn thu lại thẻ đầu điểm của bạn.",
      },
      {
        ten: "Giới Ngôn",
        mo_ta:
          "Khi người chơi có sinh lực là 1 trở thành mục tiêu của thẻ loại sát thương, bạn có thể cùng nguồn sử dụng tiến hành đầu điểm. Nếu bạn thắng, huỷ bỏ thẻ đó; Nếu bạn không thắng, lượt này kĩ năng này bị vô hiệu.",
      },
    ],
    cau_noi: "Tuân thủ lễ nghi, duy trì khoảng cách!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Tao_Chuong: {
    title: "Tào Chương",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Hoàng Tu Nhi",
    ky_nang: [
      {
        ten: "Thượng Vũ",
        mo_ta:
          "Bạn có thể đem tùy ý số thẻ [Cẩm nang] xem như [Sát]/ [Né] để sử dụng hoặc đánh ra.  Nếu bằng cách này, sát thương bạn gây ra [+X]\n([X] là số thẻ bài được sử dụng để chuyển hóa -1, tối đa bằng giá trị sinh lực của người đang có lượt -1)",
      },
      {
        ten: "Dịch Mã",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thể giao cho 1 người khác có trang bị [Tọa kị] 1 thẻ [Đào] / [Tửu], sau đó bạn thu lấy 1 thẻ [Tọa kỵ] trong vùng trang bị của họ.\nNếu sinh lực của bạn hiện có là 1, bạn có thể sửa thành giao 1 thẻ [Cơ bạn]",
      },
    ],
    cau_noi: "Số tòng chinh phát, tri chi khảng khái!",
    hao_tuong: ["Điền Dự"],
    ban_mo_rong: "",
  },
  Co_Ung: {
    title: "Cố Ung",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Miếu Đường Đích Ngọc Khánh",
    ky_nang: [
      {
        ten: "Lễ Phụ",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thể chọn 1 người, lệnh họ bỏ 2 thẻ, sau đó bạn xem thẻ trên đầu chồng bài rút và giao cho họ.",
      },
      {
        ten: "Ngôn Trung",
        mo_ta:
          "Bắt đầu giai đoạn kết thúc, bạn có thể chọn 1 chất và chọn 1 người khác có bài trên tay, bạn bỏ 1 thẻ trên tay của họ. Nếu chất thẻ đã bỏ và chất đã đoán khác chất, bạn bỏ 1 thẻ. Nều cùng chất và chất đó là:\ncơ: bạn hồi 1 sinh lực; \nrô: bạn rút 1 thẻ, thoát trạng thái liên hoàn;\nchuồn: họ giao bạn 1 thẻ;\nbích: họ tự giảm 1 sinh lực",
      },
    ],
    cau_noi: "Gìn giữ tâm tính, tâm khẩu như một!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Quach_Gia: {
    title: "Quách Gia",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Tảo Chung Đích Tiên Tri",
    ky_nang: [
      {
        ten: "Thiên Đố",
        mo_ta:
          "Sau khi thẻ phán xét của bạn có hiệu lực, bạn có thể thu lấy thẻ phán xét này lên tay.",
      },
      {
        ten: "Di Kế",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thể xem 2 thẻ bài từ đầu chồng bài, mỗi thẻ có thể giao cho 1 người chơi tuỳ ý.",
      },
    ],
    cau_noi: "Nước cờ tiếp theo, ta đã lên kế hoạch hết rồi!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Hoang_Trung: {
    title: "Hoàng Trung",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Lão Đương Ích Tráng",
    ky_nang: [
      {
        ten: "Liệt Cung",
        mo_ta:
          "Sau khi bạn trong giai đoạn hành động sử dụng thẻ [Sát] và chỉ định 1 mục tiêu. Nếu số bài trên tay của mục tiêu:\n1. Lớn hơn hoặc bằng sinh lực hiện tại của bạn;\n2. Nhỏ hơn hoặc bằng phạm vi công kích của bạn;\nNếu thoả 1 mục trên, bạn có thể lệnh họ không thể hưởng ứng thẻ [Sát] này, nếu thoả cả 2 mục trên, bạn có thể lệnh thêm cho sát thương thẻ [Sát] này +1.",
      },
    ],
    cau_noi: "Coi thử ngươi nhanh, hay là tiễn của ta nhanh!",
    hao_tuong: ["Ngụy Diên"],
    ban_mo_rong: "",
  },
  ten_tuong: {
    title: "",
    the_luc: [""],
    sinh_luc: 1.5,
    danh_hieu: "",
    ky_nang: [
      {
        ten: "",
        mo_ta: "",
      },
      {
        ten: "",
        mo_ta: "",
      },
    ],
    cau_noi: "",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Gioi_Tuong: {
    title: "Giới Tượng",
    the_luc: ["Ngô", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Mê Huyễn Tiên Trưởng",
    ky_nang: [
      {
        ten: "Thùy Luân",
        mo_ta:
          "Giai đoạn hành động của người cùng thế lực, khi bạn lần đầu bỏ bài trong giai đoạn này, nếu số [Khuyết Ngọc] đang có của bạn ít hơn giới hạn sinh lực của bạn, bạn thu 1 [Khuyết Ngọc];\nSau khi bạn nhận sát thương, bạn có thể giao 1 [Khuyết Ngọc] cho người khác, sau đó bạn rút 1 thẻ.",
      },
      {
        loai: "Tỏa định kĩ",
        ten: "Miến Nặc",
        mo_ta:
          "Khi bạn lần đầu trong lượt trở thành mục tiêu của thẻ bài chuyển hóa từ người không cùng thế lực, bạn vô hiệu hóa thẻ đó.",
      },
    ],
    cau_noi: "Yến hội điều ngư, tiên nhân thần ẩn",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Tran_Dang: {
    title: "Trần Đăng",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Hồ Hải Chi Sĩ",
    ky_nang: [
      {
        ten: "Hào Khôi",
        mo_ta:
          "Bắt đầu giai đoạn hành động, bạn có thể rút 2 thẻ, nếu làm vậy. giai đoạn bỏ bài lượt này: Khi có bài tiến vào chồng bài bỏ, bạn đem những thẻ này giao cho 1 người không cùng thế lực; Nếu bạn chưa giao bài theo cách này, bạn có thế lệnh 1 người cùng thế lực thay đổi Phó Tướng 1 lần, và bạn có thể lật úp thẻ tướng này.",
      },
      {
        ten: "Hư Thật",
        mo_ta:
          "Khi người khác sử dụng bài chỉ định bạn là mục tiêu, nếu tưởng này đang ở trạng thái úp, bạn có thể lật mở thẻ tướng này, huỷ bỏ nó, sau đó bạn có thể bỏ 1 thẻ của họ.",
      },
    ],
    cau_noi: "Xuất thân danh tộc, danh vọng tứ phương!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Si_Nhiep: {
    title: "Sĩ Nhiếp",
    the_luc: ["Ngô", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Hùng Trường Bách Việt",
    ky_nang: [
      {
        loai: "Toả Định Kỹ",
        ten: "Tị Loạn",
        mo_ta:
          "Người chơi khác tính toán khoảng cách đến bạn +X (X là số bài trong khu trang bị của bạn).",
      },
      {
        loai: "Toả Định Kỹ",
        ten: "Lễ Hạ",
        mo_ta:
          "Bắt đầu giai đoạn chuẩn bị của người khác không cùng thế lực, nếu bạn không nằm trong phạm vì công kích của họ, họ chọn 1 mục: \n1. Họ lệnh bạn rút 1 thẻ; \n2. Họ bỏ đi 1 thẻ trong khu Trang Bị của bạn, sau đó họ tự giảm 1 sinh lực.",
      },
    ],
    cau_noi: "Tiên sinh hiền tài, lão phu trữ thực bội phục!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  To_Phi: {
    title: "Tô Phi",
    the_luc: ["Ngô", "Quần"],
    sinh_luc: 2,
    danh_hieu: "Tranh Hữu Đầu Minh",
    ky_nang: [
      {
        ten: "Liên Phiên",
        mo_ta:
          "Giai đoạn kết thúc, nếu trong lượt này bạn đã bỏ số bài của bất kỳ người chơi nào nhiều hơn số sinh lực hiện tại của bạn, bạn có thể lệnh 1 người chơi cùng thế lực bố sung bài trên tay đến X (X là giới hạn sinh lực của họ).\nGiai đoạn kết thúc của người chơi khác, nều trong lượt đó họ đã bỏ số bài của bất kỳ người chơi nào nhiều hơn số sinh lực hiện tại của bạn, họ có thể huỷ 1 thẻ của bạn hoặc lệnh bạn hồi phục 1 sinh lực.",
      },
    ],
    cau_noi: "Cứ quyết tâm cố gắng bỏ ra, ắt có hồi báo!",
    hao_tuong: ["Cam Ninh"],
    ban_mo_rong: "",
  },
  Cong_Ton_Toan: {
    title: "Công Tôn Toản",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Bạch Mã Tướng Quân",
    ky_nang: [
      {
        loai: "Tỏa Định Kỹ",
        ten: "Khu Thi",
        mo_ta:
          "Giai đoạn hành động, sau khi bạn sử dụng [Sát] và [Sát] này bị triệt tiêu, bạn tăng 1 giới hạn sử dụng [Sát] và tăng số mục tiêu của [Sát] thêm 1 trong giai đoạn này.",
      },
      {
        loai: "Trận Pháp Kỹ",
        ten: "Nhạn Hàng",
        mo_ta:
          "Người cùng đội hình với bạn tính toán khoảng cách đến những người chơi khác -X\n(X là số người khác có cùng quan hệ đội hình với bạn)",
      },
      {
        loai: "Chủ Tướng Kỹ",
        ten: "Nghĩa Tòng",
        mo_ta:
          "(-0.5 sinh lực) Sau khi người khác cùng thế lực với bạn sử dụng [Sát] và bị triệt tiêu, họ có thể lệnh bạn thu lấy thẻ [Sát] đó.",
      },
    ],
    cau_noi: "Địch nhân thế lớn, kỵ binh hậu triệt!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Duong_Ho: {
    title: "Dương Hỗ",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Chế Hoành Đồng Quỹ",
    ky_nang: [
      {
        ten: "Đức Thiệu",
        mo_ta:
          "Mỗi lượt tối đa X lần (X là số sinh lực hiện tại của bạn),\nSau khi bạn trở thành mục tiêu của thẻ bài sắc Đen của người khác,\nNếu số tướng lật mở của họ không lớn hơn bạn,\nBạn bỏ đi 1 thẻ bài của họ",
      },
      {
        ten: "Minh Phạt",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể lựa chọn 1 người khác không cùng thế lực, khi họ kết thúc lượt tiếp theo của họ:\n- Nếu số bài trên tay họ ít hơn bạn, bạn gây 1 sát thương cho họ đồng thời thu lấy 1 thẻ trên tay của họ\n- Nếu bài trên tay họ không ít hơn bạn, bạn bổ sung bài trên tay bằng với bài trên tay họ (tối đa 5 thẻ)",
      },
    ],
    cau_noi: "Lấy mạnh đánh yếu, dễ như trở tay, ai dám  giở trò quỷ!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Luu_Phong: {
    title: "Lưu Phong",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Kỵ Hổ Chi Thương",
    ky_nang: [
      {
        ten: "Hãm Tự",
        mo_ta:
          'Giai đoạn chuẩn bị, bạn có thể chọn tối đa hai người chơi đem mỗi người một thẻ của họ đặt lên trên võ tướng này, gọi là "Nghịch". Người chơi khác có thể bỏ đi hai thê "Nghịch", xem như sử dụng 1 thẻ [Sát) đôi với bạn.',
      },
    ],
    cau_noi: "Cha muốn con chết, hài nhi chỉ còn cách tự tận!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Tran_Quan: {
    title: "Trần Quần",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Kỉ Thế Quân Biểu",
    ky_nang: [
      {
        ten: "Phẩm Thứ",
        mo_ta:
          'Sau khi bạn nhận sát thương, bạn có thể bỏ 1 thẻ bài (không thể chọn phân loại bài đã bỏ trong lượt này). Lệnh cho 1 người chưa bị phát động qua bởi kĩ năng "Phẩm Thứ" trong lượt này, họ rút/bỏ đi X thẻ (X là số lần phát động "Phẩm Thứ"), nếu họ đang bị thương, bạn xoay ngang võ tướng',
      },
      {
        ten: "Pháp Ân",
        mo_ta:
          "Sau khi có người chơi xoay ngang thẻ tướng hoặc đặt chồng tướng, bạn có thể lệnh họ rút 1 thẻ.",
      },
    ],
    cau_noi: "Pháp ngoại chi ân, khoan hành đại lượng!",
    hao_tuong: ["Tào Phi"],
    ban_mo_rong: "",
  },
  Chu_Linh: {
    title: "Chu Linh",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Lương Tướng Chí Á",
    ky_nang: [
      {
        ten: "Quyết Tuyệt",
        mo_ta:
          "Bắt đầu giai đoạn bỏ bài, bạn có thể tự giảm 1 sinh lực, sau khi kết thúc giai đoạn này, nếu trong giai đoạn này bạn có bỏ bài, bạn lệnh toàn bộ người chơi khác lần lượt chọn 1 mục: \n1. Đem X thẻ đặt vào chồng bài bỏ (X là số thẻ bạn bỏ); \n2. Lệnh bạn gây 1 sát thương lên họ.",
      },
      {
        loại: "Trận Pháp Kỹ",
        ten: "Phương Viên",
        mo_ta:
          "Nếu bạn là người vây công, người có quan hệ vây công cùng với bạn có giới hạn trữ bài +1, người bị vây công có giới hạn trữ bài -1. Giai đoạn kết thúc, nêu bạn là người bị vây công, bạn có thể chọn 1 người đang trong quan hệ vây công bạn, xem như sử dụng 1 thẻ [Sát] lên họ.",
      },
    ],
    cau_noi: "Dĩ chiến dưỡng  chiến, thị địch nhi chiến!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Hoang_Cai: {
    title: "Hoàng Cái",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Khinh Thân Vi Quốc",
    ky_nang: [
      {
        ten: "Khổ Nhục",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể bỏ đi 1 thẻ bài. Nếu làm như vậy, bạn tự mất đi 1 sinh lực, sau đó bạn rút 3 thẻ, trong lượt hành động này của bạn; giới hạn sử dụng thẻ [Sát) trong giai đoạn này +1.",
      },
    ],
    cau_noi: "Khinh thân vi quốc, tử diệc vô oán",
    hao_tuong: ["Chu Du"],
    ban_mo_rong: "",
  },
  Dang_Chi: {
    title: "Đặng Chi",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Tuyệt Cảnh Đích Ngoại Giao Gia",
    ky_nang: [
      {
        ten: "Giản Lượng",
        mo_ta:
          "Bắt đầu giai đoạn rút bài, nếu trên bàn chơi bạn có ít bài trên tay nhất. Bạn có thể lệnh cho tất cả người chơi cùng thê lực mỗi người rút 1 thẻ.",
      },
      {
        ten: "Nguy Minh",
        mo_ta:
          'Giai đoạn hành động giới hạn 1 lần, bạn có thể thu lấy X thẻ bài trên tay của 1 người khác (X là số sinh lực hiện tại của bạn), sau đó giao lại cho họ lượng bài tương đương.\n -Tung Hoành: Người đó nhận kỹ năng “Nguy Minh" đền khi kết thúc lượt sau của họ, đồng thời kỹ năng thay đổi mô tả "X thành 1".',
      },
    ],
    cau_noi:
      "Thế trận thiên hạ như lửa nước, chỉ hi vọng giữ liên minh thật tốt!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Phan_Phung: {
    title: "Phan Phụng",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Thanh Trắc Trọng Thần",
    ky_nang: [
      {
        ten: "Cuồng Phủ",
        mo_ta:
          "Sau khi bạn sử dụng thẻ [Sát] gây ra sát thương cho 1 mục tiêu, bạn có thể bỏ đi hoặc thu lấy 1 thẻ bài của họ",
      },
    ],
    cau_noi: "Thiên hạ chi tri tấn tật giả mạc nhược vô kỉ!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Ngu_Phien: {
    title: "Ngu Phiên",
    the_luc: ["Hán", "Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Cuồng Trực Chi Sĩ",
    ky_nang: [
      {
        ten: "Túng Huyền",
        mo_ta:
          "Khi bài bỏ của bạn tiền vào chồng bài bỏ, bạn có thể đặt tùy ý các thẻ đó lên đỉnh chồng bài rút (mỗi lượt giới hạn đặt tối đa 2 thẻ).",
      },
      {
        ten: "Trục Ngôn",
        mo_ta:
          "Giai đoạn kết thúc, bạn có thế, lệnh 1 người chơi rút 1 thẻ bài và lật mở ra, nếu đây là thẻ Trang bị, người đó sử dụng bài này và hồi 1 sinh lực",
      },
    ],
    cau_noi: "Tất cả cũng chỉ là thiên cơ diệu kế!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Vien_Thieu: {
    title: "Viên Thiệu",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Trọng Gia Đế",
    ky_nang: [
      {
        ten: "Loạn Kích",
        mo_ta:
          "Giai đoạn hành động, bạn có thể đem 2 thẻ bài trên tay xem như sử dụng thẻ [Vạn Tiến Tổ Phát] (không thể sử dụng với những thẻ có chất mà bạn đã dùng theo cách này trong lượt này). Khi người chơi cùng thể lực với bạn đánh ra [Né] để hưởng ứng thẻ này, sau khi kết toán, họ có thể rút 1 thẻ bài.",
      },
    ],
    cau_noi: "Trẫm là khai quốc chi quân, hahahaha!",
    hao_tuong: ["Nhan Lương & Văn Xú"],
    ban_mo_rong: "",
  },
  Nhac_Tien: {
    title: "Nhạc Tiến",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Phấn Cường Đột Cố",
    ky_nang: [
      {
        ten: "Kiêu Quả",
        mo_ta:
          "Giai đoạn kết thúc của người chơi khác, bạn có thể bỏ đi 1 thẻ [Cơ bản] đồng thời lệnh họ chọn 1 mục:\n(1) Họ tự bỏ đi 1 thẻ [Trang Bị], sau đó bạn rút 1 thẻ\n(2) Họ nhận 1 điểm sát thương từ bạn",
      },
    ],
    cau_noi:
      "Không được rút lui! Xem ta lấy thủ cấp tướng thủ thành,  lập công đầu!",
    hao_tuong: ["Lí Điển"],
    ban_mo_rong: "",
  },
  Tao_Anh: {
    title: "Tào Anh",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Long Thành Phụng Minh",
    ky_nang: [
      {
        ten: "Lăng Nhân",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thể chọn 1 người chơi khác và chọn 1 mục:\n1. Lệnh họ rút 1 thẻ, tất cả người chơi khác không cùng thê lực với họ xem như rời khỏi trò chơi đến hết lượt này. Bạn sử dụng bài phân loại sát thương lần kế tiếp chỉ định tất cả người chơi khác làm mục tiêu.\n2. Lệnh họ gây 1 sát thương cho 1 người chơi cùng đội hình với họ do họ chọn. Sau đó chặn mọi sát thương họ nhận đền hết lượt này.\nSau khi lựa chọn hoàn tất, họ có thể chấp hành mục còn lại.",
      },
    ],
    cau_noi:
      "Ta đã đặt sẵn kế thiên la địa võng, địch dù mọc cánh cũng khó thoát!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Gia_Cat_Luong: {
    title: "Gia Cát Lượng",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Trì Mộ Đích Thừa Tướng",
    ky_nang: [
      {
        loai: "Toả Định Kỹ",
        ten: "Không Thành",
        mo_ta:
          "Nếu bạn không có bài trên tay; Khi bạn trở thành mục tiêu của thẻ [Sát] hoặc [Quyết Đầu], huỳ bỏ nó; \nNgoài lượt của bạn, bạn đem thẻ bài được người khác giao đặt lên thẻ tướng, gọi là [Cẩm); Bắt đầu giai đoạn rút bài, bạn thu lấy thẻ [Cẩm].",
      },
      {
        ten: "Quan Tinh",
        mo_ta:
          "Bắt đầu giai đoạn chuẩn bị, bạn có thể xem trước X thẻ đầu chồng bài (X là số người chơi trên bàn, tối đa 5), Sau đó đem tuỳ ý lượng thẻ bài và trình tự đặt lên đầu chống bài hoặc đấy chồng bài",
      },
    ],
    cau_noi: "Quan tinh định trung nguyên, tất kỳ cóng vu nhất địch!",
    hao_tuong: ["Hoàng Nguyệt Anh", "Khương Duy", "Tưởng Uyển & Phí Y"],
    ban_mo_rong: "",
  },
  Y_Tich: {
    title: "Y Tịch",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Kiến Lễ Vu Thế",
    ky_nang: [
      {
        ten: "Định Khoa",
        mo_ta:
          'Mỗi lượt giới hạn 1 lần, sau khi 1 người cùng thể lực mất đi thẻ bài ngoài lượt của họ không vì sử dụng/đánh ra, bạn có thể chọn: \n1. Bạn giao cho họ 1 thẻ trên tay:;\n2. Bạn lệnh người đang có lượt bỏ đi 1 thẻ trên tay. \nSau đó nếu số tiêu ký "Khuyết Ngọc" của bạn ít hơn giới hạn sinh lực, bạn thu lấy tiêu ký “Khuyết Ngọc".',
      },
      {
        ten: "Cấp Viện",
        mo_ta:
          'Khi 1 người rơi vào trạng thái hấp hối hoặc sau khi bạn giao bài cho người khác thông qua "Định Khoa", bạn có thể lệnh họ rút 1 thẻ',
      },
    ],
    cau_noi: "Hỡi minh quân, hãy mau động thủ đi!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Lang_Thao: {
    title: "Lăng Tháo",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Kích Lưu Dũng Tiến",
    ky_nang: [
      {
        ten: "Độc Tiến",
        mo_ta:
          'Giai đoạn rút bài, bạn có thể rút thêm X thẻ bài (X là số thẻ Trang Bị trong khu Trang Bị chia đôi làm tròn lên). Khi bạn lần đầu lật mở thẻ tướng này, nếu bạn là người đầu tiên của thể lực, bạn thu lấy 1 tiêu kỳ "Tiên Phong".',
      },
    ],
    cau_noi: "Khinh chu độc tiến, phá địch tiên phong!",
    hao_tuong: ["Lăng Thống"],
    ban_mo_rong: "",
  },
  My_Phuong_Pho_Si_Nhiep: {
    title: "My Phương & Phó Sĩ Nhiếp",
    the_luc: ["Thục", "Ngô"],
    sinh_luc: 2,
    danh_hieu: "Tiến Thoái Duy Cốc",
    ky_nang: [
      {
        ten: "Phong Thế",
        mo_ta:
          "Sau khi bạn dùng bài chỉ định duy nhất một mục tiêu, nếu bạn và người đó đều có bài và số bài trên tay ít hơn bạn, bạn có thể tự bỏ 1 lá bài của bản thân và người đó 1 lá bài, sau đó sát thương này +1;\nSau khi bạn trở thành mục tiêu dùng bài duy nhất của người khác, nếu bạn và người đó đều có bài và bạn có số bài trên tay < người đó, người đó có thể lệnh bạn huỷ bỏ bạn cùng người đó 1 lá bài, sau đó sát thương này +1.",
      },
    ],
    cau_noi: "Nay phát binh viện Vũ, dám hỏi là họa hay công?",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  //5
  Lu_Mong: {
    title: "Lữ Mông",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Bạch Y Độ Giang",
    ky_nang: [
      {
        loai: "Tỏa định kỹ",
        ten: "Khắc Kỷ",
        mo_ta:
          "Bắt đầu giai đoạn bỏ bài, nếu bạn trong giai đoạn hành động không sử dụng các thẻ bài khác màu sắc với nhau, giới hạn trữ bài trong lượt này của bạn +4",
      },
      {
        ten: "Mưu Đoạn",
        mo_ta:
          "Giai đoạn kết thúc, nếu bạn trong giai đoạn hành động đã sử dụng bài từ 4 chất khác nhau hoặc 3 loại bài khác nhau, bạn có thể di chuyển 1 thẻ bài trên bàn chơi",
      },
    ],
    cau_noi: "Kẻ sĩ ba ngày không gặp nhau thì nên rửa mắt mà nhìn!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Truong_Lo: {
    title: "Trương Lỗ",
    the_luc: ["Ngụy", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Chính Khoan Giáo Huệ",
    ky_nang: [
      {
        ten: "Bố Thí",
        mo_ta:
          "Sau khi bạn nhận 1 sát thương, bạn có thể rút 1 thẻ. Khi bạn gây sát thương cho người khác thế lực, họ có thể rút 1 thẻ, sau đó bạn rút 1 thẻ",
      },
      {
        ten: "Mễ Đạo",
        mo_ta:
          "Giai đoạn hành động người cùng thế lực với bạn 1 lần, khi họ dùng thẻ Sát hoặc Cẩm Nang loại gây sát thương (không chuyển hoá) chỉ định mục tiêu đầu tiên, họ có thể giao cho bạn 1 thê trên tay, nếu là bạn bỏ qua bước này, rồi lệnh bạn gọi tên 1 chất bài và 1 loại thuộc tính. Sau đó thẻ bài họ dùng có chất và thuộc tính bạn đã gọi tên.",
      },
    ],
    cau_noi: "Bố thí thành thiện, nãi đạo nghĩa chi bổn!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Ma_Sieu: {
    title: "Mã Siêu",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Nhất Kỵ Dương Tiên",
    ky_nang: [
      {
        loai: "Tỏa Định Kỹ",
        ten: "Mã Thuật",
        mo_ta: "Bạn tính toán khoảng cách đến người chơi khác -1",
      },
      {
        ten: "Thiết Kỵ",
        mo_ta:
          "Sau khi bạn sử dụng thẻ bài [Sát] chỉ định 1 người chơi khác làm mục tiêu, bạn có thể tiến hành phán xét\nSau đó vô hiệu hóa tất cả kỹ năng không phải [Tỏa định kỹ] của 1 võ tướng đã lật mở của họ trong lượt này.\nTrừ phi họ bỏ đi 1 thẻ cùng chất với thẻ phán xét, nếu hkhông họ không thể dùng [Né]",
      },
    ],
    cau_noi: "Thiết giáp thiết kỵ, đạp quá địch doanh!",
    hao_tuong: ["Mã Đại"],
    ban_mo_rong: "",
  },
  Thai_Van_Co: {
    title: "Thái Văn Cơ",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Di Hương Đích Cô Nữ",
    ky_nang: [
      {
        loai: "Toả Định Kĩ",
        ten: "Đoạn Trường",
        mo_ta:
          "Khi bạn trận vong, bạn lệnh người chơi giết bạn mất đi kỹ năng 1 tướng do bạn chọn",
      },
      {
        ten: "Bi Ca",
        mo_ta:
          "Sau khi 1 người chơi nhận 1 sát thương từ thẻ [Sát] , bạn có thể bỏ 1 thẻ và lệnh người chịu sát thương tiến hành phán xét:\n[Chất ♥], người đó hồi phục 1 sinh lực\n[Chất ♦], người đó rút 2 thẻ bài\n[Chất ♣], nguồn gây sát thương bỏ đi 2 thẻ bài\n[Chất ♠], nguồn gây sát thương đặt chồng tướng",
      },
    ],
    cau_noi: "Khúc phổ này viết để giải ưu, cớ sao khúc thành tâm lại sầu!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Khong_Dung: {
    title: "Khổng Dung",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Lẫm Nhiên Trọng Nghĩa",
    ky_nang: [
      {
        loai: "Tỏa Định Kỹ",
        ten: "Danh Sĩ",
        mo_ta:
          "Khi bạn nhận sát thương, nếu nguồn sát thương có võ tướng chưa lật mở, sát thương này -1",
      },
      {
        ten: "Lễ Nhượng",
        mo_ta:
          "Khi thẻ bài của bạn bị bỏ đi và tiến nhập vào chồng bài bỏ, bạn có thể đem thẻ bài đó giao cho 1 người chơi khác",
      },
    ],
    cau_noi: "Di lễ đãi nhân,  huệ cập hữu bang!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "",
  },
  Han_Toai: {
    title: "Hàn Toại",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Hùng Cứ Tây Lương",
    ky_nang: [
      {
        loai: "Tỏa Định Kỹ",
        ten: "Mã Thuật",
        mo_ta: "Bạn tính toán khoảng cách đến người chơi khác -1",
      },
      {
        loai: "Hạn Định Kỹ",
        ten: "Kiêu Nghịch",
        mo_ta:
          "Bạn có thể tùy ý chọn lựa số người khác thế lực, xem như bạn sử dụng 1 thẻ [Sát] lên họ. Sau đó nếu bằng cách này có người không nhận sát thương, bạn có thể bỏ tối đa 3 thẻ của 1 người trong số những người không nhận sát thương",
      },
    ],
    cau_noi: "Thắng làm vua, thua làm giặc!",
    hao_tuong: ["Mã Đằng"],
    ban_mo_rong: "",
  },
  Trinh_Duc: {
    title: "Trình Dục",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Sinh Vị Kỳ Vị",
    ky_nang: [
      {
        ten: "Thiết Phục",
        mo_ta:
          "Giai đoạn hành động 1 lần, bạn có thể đặt 1 thẻ trên tay xuống tướng này, gọi là [Phục Bình]. Khi 1 người khác sử dụng 1 thẻ trên tay, bạn có thể di dời [Phục Bình] cùng tên, sau đó huỷ bỏ tất cả mục tiêu của thẻ này. Bắt đầu lượt của bạn, nếu số [Phục Bình] của bạn lớn hơn 2, bạn bỏ đi còn 2.",
      },
      {
        ten: "Bí Dục",
        mo_ta:
          "Sau khi bạn nhận sát thương, nếu bài trên tay bạn nhỏ hơn nguồn sát thương, bạn có thể chọn 1 mục: \n1. Bạn bổ sung bài trên tay đến khi bằng họ, tối đa 5 thẻ; \n2. Lệnh họ bỏ đi bài trên tay đến khi bằng bạn, tối đa bỏ 5 thẻ. \nNếu bài trên tay bạn lớn hơn nguồn sát thương, bạn có thể bỏ số bài trên tay bằng số bài trên tay họ +1, sau đó gây 1 sát thương cho họ.",
      },
    ],
    cau_noi: "Đại quân thiết phục như thế, quân địch có đi không về!",
    hao_tuong: ["Tào Phi"],
    ban_mo_rong: "",
  },
  Vo_Khau_Kiem: {
    title: "Vô Khâu Kiệm",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Tuyên Công Minh Chinh Vinh",
    ky_nang: [
      {
        loai: "Tỏa Định Kĩ",
        ten: "Chính Vinh",
        mo_ta:
          "Khi bạn gây/ nhận sát thương, nếu trên bàn chơi không có người khác cùng thế lực với người gây/ nhận sát thương, sát thương này +1",
      },
      {
        loai: "Hạn Định Kĩ",
        ten: "Hồng Cứ",
        mo_ta:
          "Giai đoạn hành động, bạn có thể chọn 1 người chơi khác, sau đó lệnh cho tất cả người chơi trừ họ chấp hành 1 [Quân lệnh] (bạn buộc chọn chấp hành). Những người chơi không chấp hành xem như rời khỏi bàn chơi trong lượt này.",
      },
    ],
    cau_noi: "Đông chinh Cao Câu Ly, bảo vệ Yên Đông yên ổn!",
    hao_tuong: ["Văn Khâm"],
    ban_mo_rong: "",
  },
  Cam_Phu_Nhan: {
    title: "Cam Phu Nhân",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Chiêu Liệt Hoàng Hậu",
    ky_nang: [
      {
        ten: "Thục Thận",
        mo_ta:
          "Sau khi bạn hồi phục 1 sinh lực hoặc cùng 1 lúc mất đi nhiều hơn X thẻ bài (X là lượng sinh lực hiện tại của bạn), bạn có thể lệnh 1 người chơi khác cùng thế lực rút 1 thẻ từ chồng bài",
      },
      {
        ten: "Thần Trí",
        mo_ta:
          "Giai đoạn chuẩn bị, bạn có thể bỏ đi tất cả bài trên tay. Nếu bằng cách này bạn bỏ đi số lượng thẻ bài không nhỏ hơn giá trị sinh lực hiện tại, bạn hồi phục 1 sinh lực",
      },
    ],
    cau_noi: "Đại trượng phu đại nghiệp chưa thành, ta cũng không thể bỏ cuộc!",
    hao_tuong: ["Lưu Bị"],
    ban_mo_rong: "",
  },
  Dong_Doan: {
    title: "Đổng Doãn",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Cốt Ngạnh Lương Tướng",
    ky_nang: [
      {
        ten: "Bỉnh Chính",
        mo_ta:
          "Khi kết thúc lượt của bạn, bạn có thể chọn 1 người khác có sự chênh lệch số bài trên tay với số sinh lực hiện có của họ, lệnh họ rút/ bỏ 1 thẻ trên tay. Nếu bằng cách này, số chênh lệch đó là 0, bạn rút 1 thẻ và giao cho họ 1 thẻ trên tay",
      },
      {
        ten: "Xá Yến",
        mo_ta:
          "Mỗi lượt giới hạn 1 lần, khi bạn lần đầu trở thành mục tiêu của thẻ [Cẩm Nang] phổ thông, bạn có thể lệnh thẻ đó +1 hoặc -1 mục tiêu (số mục tiêu tối thiểu là 1, không thể về 0)",
      },
    ],
    cau_noi: "Thân chinh không sợ ảnh tử tà!",
    hao_tuong: ["Lưu Thiện"],
    ban_mo_rong: "",
  },
};

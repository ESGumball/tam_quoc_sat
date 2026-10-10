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
    danh_hieu: "Lộng Quyền Chi [X]à Yết",
    ky_nang: [
      {
        ten: "Trấm Độc",
        mo_ta:
          "Bắt đầu giai đoạn hành động của người chơi, bạn có thể bỏ đi 1 thẻ bài trên tay, xem như họ đã dùng 1 thẻ [Tửu], nếu người chơi đó không phải là bạn, họ nhận 1 sát thương từ bạn",
      },
      {
        ten: "Thích Loạn",
        mo_ta:
          "Khi kết thúc lượt của 1 người chơi, bạn có thể rút [3[X] + Y] thẻ bài \n[[X]] là số người chơi bạn giết trong lượt này \n[Y] là số người chơi bị người khác giết trong lượt này",
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
};

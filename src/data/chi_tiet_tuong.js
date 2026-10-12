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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Lo_2: {
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
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
    ban_mo_rong: "Chưa cập nhật",
  },
    Luc_Ton: {
    title: "Lục Tốn",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Kình Thiên Chí Trụ",
    ky_nang: [
      {
        loai: "Toả Định Kỹ",
        ten: "Khiêm Tốn",
        mo_ta:
          "Khi bạn trở thành mục tiêu duy nhất của thẻ bài [Cẩm Nang] do người khác sử dụng, nếu trên tướng bạn có số thẻ [Tiết] nhỏ hơn 3, bạn huỷ bỏ thẻ đó đồng thời đặt thẻ đó lên tướng này, gọi là [Tiết].",
      },
      {
        ten: "Độ Thế",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thế lựa chọn 1 mục:\n1. Đem 1 thẻ [sắc Đỏ] trên tay xem như thẻ [Dí Dật Đãi Lao] để sử dụng;\n2. Di trừ 3 thẻ [Tiết] đồng thời xem như sử dụng tuỳ ý 1 thẻ bài phân loại sát thương thuộc tính Hoả.",
      },
    ],
    cau_noi:
      "Quốc Chi Đại Kế, thẩm thế cục vi tiên",
    hao_tuong: ["Lục Kháng"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Vuong_Co: {
    title: "Vương Cơ",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Kinh Hành Hợp Nhất",
    ky_nang: [
      {
        ten: "Kỳ Chế",
        mo_ta:
          "Trong lượt của bạn, khi bạn sử dụng thẻ bài [Phi Trang Bị], bạn có thế bỏ 1 thẻ của người chơi không phải mục tiêu của thẻ trên, lệnh họ rút 1 thẻ. Nếu thẻ bạn sử dụng mang hiệu quả cường hoá và thẻ bỏ cùng chất với nhau, bạn bỏ qua điều kiện kích hoạt hiệu quả cường hoá (Ứng Biến).",
      },
      {
        ten: "Tiến Xu",
        mo_ta:
          "Giai đoạn kết thúc, bạn có thế rút 2 thẻ. Sau đó đem thẻ bài trên tay bỏ đi tối thiểu X thẻ. (X là số lần bạn phát động [Kỳ Chế] trong lượt này).",
      },
    ],
    cau_noi:
      "Dụng kế kỳ lược, chế địch phục tâm!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tao_Nhan: {
    title: "Tào Nhân",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Đại Tướng Quân",
    ky_nang: [
      {
        ten: "Cự Thủ",
        mo_ta:
          "Giai đoạn kết thúc, bạn có thế rút X thẻ bài (X là số thế lực có mặt trên bàn chơi), sau đó bạn bỏ đi 1 thẻ bài trên tay. Nếu theo cách này thẻ bỏ đi là thẻ [Trang Bị], sửa thành bạn sử dụng thẻ [trang bị] đó. Nếu X lớn hơn 3, bạn đặt chồng (hoặc giải chồng) thẻ võ tướng.",
      },
    ],
    cau_noi:
      "Kiên thủ chớ xuất, nghiêm trận dĩ đãi!",
    hao_tuong: ["Tào Hồng"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tu_Ma_Chieu_1: {
    title: "Tư Mã Chiêu",
    the_luc: ["Tấn", "Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Tứ Hải Độc Uy",
    ky_nang: [
      {
        ten: "Trù Phạt",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thế mở 1 thẻ trên tay của người khác, sau đó lượt này bạn lệnh những thẻ khác loại trên tay của họ đều xem như thẻ [Sát] đến hết lượt này.",
      },
      {
        ten: "Chiêu Nhiên",
        mo_ta:
          "Bắt đầu giai đoạn hành động, bạn có thế mở hết bài trên tay của bạn cho đến giai đoạn kết thúc. Nếu bạn làm vậy, trong giai đoạn này khi bạn mất đi 1 chất tuỳ ý cuối cùng trên tay, bạn rút 1 thẻ hoặc bỏ 1 thẻ của người khác (mỗi chất 1 lần).",
      },
    ],
    cau_noi:
      "Ngô tâm chiêu chiêu, hà cụ thiên hạ chí khẩu!",
    hao_tuong: ["Tư Mã Ý"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Dien_Du: {
    title: "Điền Dự",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Quy Lược Minh Luyện",
    ky_nang: [
      {
        ten: "Chấn Tập",
        mo_ta:
          "Sau khi bạn xác định mục tiêu thẻ [Sát], ứng với mỗi mục tiêu, bạn chọn 1 mục: \n1. Bạn bỏ 1 thẻ của họ; \n2. Bạn sử dụng chuyển hoá 1 thẻ [phi Cẩm Nang] chất ... thành [Bình Lương Thốn Đoạn]/[Lạc Bất Tư Thục] không giới hạn khoảng cách với họ; \nNếu bạn mở 2 tướng và họ có tướng úp, bạn có thế chấp hành 2 mục với thứ tự tuỳ ý.",
      },
      {
        loai:["Phó Tướng Kỹ"],
        ten: "Kiệm Tố",
        mo_ta:
          "(-0.5 sinh lực) Khi bạn nhận bài ngoài lượt, bạn có thế gọi những thẻ trên tay này là [Kim] chừng nào thẻ này còn trên tay bạn, [Kim] luôn công khai với những người khác. Bắt đầu giai đoạn hành động, bạn có thế bỏ đi tùy ý [Kim], sau đó chọn 1 người đã bị thương có số máu ≤ số [Kim] đã bỏ, lệnh họ hồi 1 sinh lực.",
      },
    ],
    cau_noi:
      "Trần binh bách vạn, nhiếp địch tâm đảm!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Lieu: {
    title: "Trương Liêu",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Tiền Tướng Quân",
    ky_nang: [
      {
        ten: "Đột Tập",
        mo_ta:
          "Giai đoạn rút bài, bạn có thế rút ít đi số lượng thẻ bài tuỳ ý, rồi thu lấy 1 thẻ bài trên tay của số lượng người chơi khác bằng số lượng thẻ bài bạn rút ít đi.",
      },
    ],
    cau_noi:
      "A ! Dám không phòng bị với ta sao!",
    hao_tuong: ["Tang Bá"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tuan_Uc: {
    title: "Tuân Úc",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Vương Tá Chi Tài",
    ky_nang: [
      {
        ten: "Khu Hổ",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thế đầu điểm với 1 người chơi có sinh lực lớn hơn bạn. Nếu bạn thắng, bạn lệnh họ gây 1 sát thương cho 1 người chơi trong phạm vì công kích của họ do bạn chỉ định; Nếu bạn không thắng, họ gây cho bạn 1 sát thương.",
      },
      {
        ten: "Tiết Mệnh",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thế lệnh 1 người chơi bổ sung bài trên tay bằng với giới hạn sinh lực của họ (tối đa là 5 thẻ bài).",
      },
    ],
    cau_noi:
      "Tự đương kiến công lập nghiệp, tiết khí vi tiên!",
    hao_tuong: ["Tuân Du"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Xuan_Hoa: {
    title: "Trương Xuân Hoa",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Lãnh Huyết Hoàng Hậu",
    ky_nang: [
      {
        ten: "Quả Quyết",
        mo_ta:
          "Sau khi bạn mở thẻ tướng này lần đầu tiên, bạn gây 1 sát thương cho 1 người khác; Khi 1 người chơi rơi vào trạng thái hấp hối bởi bạn, bạn có thế bỏ 1 thẻ của họ.",
      },
      {
        ten: "Thương Thệ",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thế chọn bò 1 thẻ hoặc giao [X] thẻ trên tay cho 1 người khác; Nếu làm vậy, bạn rút [X] thẻ ([X] là số sinh lực bạn đã mất).",
      },
    ],
    cau_noi:
      "Cái chết của ngươi, có liên quan gì đến ta!",
    hao_tuong: ["Tư Mã Ý"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tao_Chan: {
    title: "Tào Chân",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Hà Quốc Thiên Đốc",
    ky_nang: [
      {
        ten: "Ty Địch",
        mo_ta:
          "Sau khi người cùng thế lực với bạn nhận sát thương, nếu họ có bài và số loại bài [Ngự] của bạn nhỏ hơn 3, bạn có thế phát động kỹ năng, họ có thế đặt ngửa 1 thẻ lên tướng bạn, gọi là [Ngự] (không được chọn thẻ cùng loại với thẻ [Ngự] đã có).\nKhi bắt đầu lượt của người thế lực khác, bạn có thế di dời tối đa 3 [Ngự], đưa ra số lựa chọn tương ứng: \n1. Bạn chọn 1 loại bài tương ứng với loại bài của [Ngự] vừa di dời, họ trong lượt không thế sử dụng loại bài này; \n2. Bạn chọn 1 kỹ năng của thẻ tướng đã lật mở của họ, vô hiệu kỹ năng đó trong lượt này; \n3. Bạn lệnh họ chọn 1 người khác cùng thế lực với bạn, người đó hồi 1 sinh lực.",
      },
    ],
    cau_noi:
      "Chính trực đa sự, cần phải nghiêm tăng phòng thủ!",
    hao_tuong: ["Tào Phi"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Duong_Tu_2: {
    title: "Đường Tư",
    the_luc: ["Ngụy", "Ngô"],
    sinh_luc: 2,
    danh_hieu: "Công Học Chí Kì Tài",
    ky_nang: [
      {
        loai: "Toả Định Kỹ",
        ten: "Hưng Điệu",
        mo_ta:
          "Bạn căn cứ theo số thế lực có người bị thương để đạt được hiệu quả tương ứng:\n≥ 1 - Bạn có kỹ năng [Tuân Tuân] (Lí Điển);\n≥ 2 - Sau khi bạn nhận sát thương, bạn cùng với nguồn sát thương so ai có bài trên tay ít hơn rút 1 thẻ bài;\n≥ 3 - Giới hạn trữ bài trên tay của bạn trong lượt +4:\n≥ 4 - Khi bạn mất đi bài trong vùng trang bị, bạn rút 1 thẻ bài.",
      },
    ],
    cau_noi:
      "Tinh thao ti tuyển, phương nãn thành bách niên chi kế!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Cong_Ton_Uyen_2: {
    title: "Công Tôn Uyên",
    the_luc: ["Ngô", "Quần", "Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Giảo Đồ Huyền Hải",
    ky_nang: [
      {
        ten: "Hoài Dị",
        mo_ta:
          "Giai đoạn hành động 1 lần, bạn có thế mở hết bài trên tay, nếu trong đó có 2 màu, bạn bỏ hết bài của 1 màu trong đó, sau đó thu lấy 1 thẻ của tối đa [X] người ([X] là số bài bạn bỏ theo cách này), nếu số thẻ bạn thu được bằng cách này đạt đến 2 thẻ, bạn tự giảm 1 sinh lực.",
      },
    ],
    cau_noi:
      "Bắt đầu từ ngày hôm nay, ta chính là Yến Vương!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Thoi_Diem_Mao_Gioi: {
    title: "Thôi Diễm & Mao Giới",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Nhật Xuất Nguyệt Thịnh",
    ky_nang: [
      {
        ten: "Chính Tịch",
        mo_ta:
          "Bắt đầu giai đoạn hành động, bạn có thế lựa chọn 1 mục:\n1. Chọn 1 người chơi khác vô thế lực, cho đến khi kết thúc giai đoạn này, nếu họ xác định thế lực, bạn thu 1 thẻ trên tay và 1 thẻ trong vùng trang bị của họ.\n2. Chọn 1 người khác Có thế lực, bạn giao cho họ 1 thẻ [Cơ bản], họ chọn giao cho bạn 1 thẻ [Phi Cơ Bản] hoặc 2 thẻ [Cơ Bản].",
      },
      {
        loai:"Hạn Định Kỹ",
        ten: "Phượng Nghênh",
        mo_ta:
          "Bạn có thế đem tất cả bài trên tay sử dụng như thẻ [Hiệp Thiên Tử Dĩ Lệnh Chư Hầu] (bỏ qua giới hạn [Đại thế lực]), sau đó những người cùng thế lực bổ sung bài trên tay đến giới hạn sinh lực.",
      },
    ],
    cau_noi:
      "Khi xã tắc dùng người tài, không đến phụng mệnh, chờ đến khi nào!",
    hao_tuong: ["Tào Phi"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ne_Hanh: {
    title: "Nễ Hành",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Trí Ngạc Trác Cô Phụng",
    ky_nang: [
      {
        loai: "Toả Định Kỹ",
        ten: "Cuồng Tài",
        mo_ta:
          "Trong lượt của bạn, bạn sử dụng bài không hạn chế khoảng cách và số lần; Bắt đầu giai đoạn bỏ bài, nếu bạn trong lượt này có dùng bài nhưng không gây ra sát thương, giới hạn trữ bài của bạn trong lượt này -1. Nếu bạn không dùng bài trong lượt này, giới hạn trữ bài trong lượt này +1.",
      },
      {
        ten: "Thâu Kiếm",
        mo_ta:
          "Sau khi bạn trở thành mục tiêu duy nhất của thẻ bài bởi người khác, bạn có thế bỏ tất cả bài trên tay và chọn 1 mục: \n1. Bạn gây 1 sát thương lên họ; \n2. bạn bỏ số bài tương đương của họ.",
      },
    ],
    cau_noi:
      "Công danh vi trần, quang âm vi kim!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tran_Lam: {
    title: "Trần Lâm",
    the_luc: ["Ngụy", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Phá Trúc Chi Chú",
    ky_nang: [
      {
        ten: "Bút Phạt",
        mo_ta:
          "Giai đoạn kết thúc, bạn có thế đem 1 thẻ trên tay giao mở cho 1 người khác, bắt đầu giai đoạn hành động tiếp theo của họ, nếu họ nhiều bài trên tay hơn bạn, bạn gây cho họ 1 sát thương, lượt này bạn không thế gây sát thương lên họ nữa",
      },
      {
        ten: "Tụng Từ",
        mo_ta:
          "Giai đoạn hành động hạn 1 lần, bạn có thế chọn người khác, sau đó chọn 1 mục: \n1.Bạn bỏ của họ 2 thẻ, sau đó lệnh họ thu lấy 1 [Chu Liên]; \n2. Bạn bỏ của họ 1 tiêu Kĩ [Quốc Chiến], sau đó lệnh họ rút 2 thẻ. \nNếu kết thúc giai đoạn này, họ không rơi vào trạng thái hấp hối, họ gây cho bạn 1 điểm sát thương.",
      },
    ],
    cau_noi:
      "Thuận thiên ứng nhân, di chiến quyết thắng!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tao_Ngang: {
    title: "Tào Ngang",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Hiếu Chiến Sinh Tử",
    ky_nang: [
      {
        ten: "Hiếu Liêm",
        mo_ta:
          "Khi bạn lật mở thẻ tướng này, bạn có thế di chuyến tối đa 2 thẻ [Trang Bị] trên bàn chơi; Khi bạn di trừ thẻ tướng này, những người cùng thế lực với bạn rút 1 thẻ.",
      },
      {
        ten: "Khẳng Khái",
        mo_ta:
          "Sau khi 1 người cùng thế lực với bạn thành mục tiêu của [Sát], bạn có thế di trừ tướng này, thực hiện lần lượt: \nChọn 1 người, lệnh họ nhận kỹ năng » Phi Ảnh«; \nNếu người đó không phải bạn, người đó hồi 1 sinh lực và thoát trạng thái liên hoàn.",
      },
      {
        loai: "Tỏa Định Kỹ",
        ten: "Phi Ảnh",
        mo_ta:
          "Người chơi khác tính toán khoảng cách đến bạn +1.",
      },
    ],
    cau_noi:
      "Phụ vương hãy mau cưỡi ngựa, hài nhi ở lại đoạn hậu !",
    hao_tuong: ["Điển Vi"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ha_Hau_Uyen: {
    title: "Hạ Hầu Uyên",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Hổ Bộ Quan Thạch",
    ky_nang: [
      {
        ten: "Thần Tốc",
        mo_ta:
          "Bạn có thế lựa chọn tối đa 3 mục sau:\n1. Bỏ qua giai đoạn phán xét và rút bài;\n2. Bỏ qua giai đoạn hành động và bỏ đi 1 thẻ bài [Trang Bị];\n3. Bỏ qua giai đoạn bỏ bài và tự giảm 1 sinh lực.\nVới mỗi 1 mục bạn lựa chọn, bạn xem như sử dụng 1 thẻ [Sát] phổ thông không giới hạn khoảng cách đối với 1 người chơi khác.",
      },
    ],
    cau_noi:
      "Thần tốc tiến kích, công địch bất bị!",
    hao_tuong: ["Hạ Hầu Đôn"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chuc_Dung: {
    title: "Chúc Dung",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Dã Tính Đích Nữ Vương",
    ky_nang: [
      {
        loai: "Tỏa Định Kĩ",
        ten: "Cự Tượng",
        mo_ta:
          "[Nam Man Nhập Xâm] vô hiệu đối với bạn. Sau khi có người khác sử dụng thẻ [Nam Man Nhập Xâm] và kết toán tiến vào chồng bài bỏ, bạn thu lấy thẻ bài đó.",
      },
      {
        ten: "Liệt Nhận",
        mo_ta:
          "Sau khi bạn sử dụng thẻ bài [Sát] đối với mục tiêu tạo thành sát thương, bạn có thế cùng họ đấu điểm. Nếu như bạn thắng, bạn thu lấy 1 thẻ bài của họ.",
      },
    ],
    cau_noi:
      "Liệt nhận chi hỏa, hoành tảo thiên quân!",
    hao_tuong: ["Mạnh Hoạch"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ma_Dang: {
    title: "Mã Đằng",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Trì Sính Tây Thùy",
    ky_nang: [
      {
        loai: "Toả Định Kỹ",
        ten: "Mã Thuật",
        mo_ta:
          "Bạn tính toán khoảng cách với người khác -1.",
      },
      {
        loai: "Hạn Định Kỹ",
        ten: "Hùng Dị",
        mo_ta:
          "Giai đoạn hành động, bạn có thế lệnh cho tất cả người chơi cùng thế lực lần lượt rút 3 thẻ bài. Sau đó, nếu thế lực của bạn là một trong những thế lực ít người chơi nhất, bạn hồi phục 1 sinh lực.",
      },
    ],
    cau_noi:
      "Ta tập hợp 1 đám quân cùng đánh, thiết kỵ này ai cản được ta!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ly_Giac_Quach_Ty: {
    title: "Lý Giác & Quách Tỷ",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Phạm Tộ Khuynh Họa",
    ky_nang: [
      {
        loai: "Hạn Định Kỹ",
        ten: "Hung Toán",
        mo_ta:
          "Giai đoạn hành động, bạn có thế bỏ 1 thẻ trên tay và chọn 1 người cùng thế lực. Bạn gây 1 sát thương cho họ, sau đó bạn rút 3 thẻ và lựa chọn 1 [Hạn Định Kỹ] đã phát động của họ. Trước khi kết thúc lượt này, bạn lệnh hồi lại kỹ năng đó xem như chưa được phát động.",
      },
    ],
    cau_noi:
      "Không phải ngươi chết, thì là ta sống!",
    hao_tuong: ["Giả Hủ"],
    ban_mo_rong: "Chưa cập nhật",
  },
    Tuong_Te: {
    title: "Tưởng Tế",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Thịnh Uy Cốt Ngạnh",
    ky_nang: [
      {
        ten: "Khuyến Nhiếp",
        mo_ta:
          "Giai đoạn hành động hạn 1 lần, bạn có thế chọn 1 người khác thế lực có [trang bị vũ khí], xem như dùng 1 thẻ [Tá Đao Sát Nhân] lên họ. Sau khi họ dùng [Sát] và gây ra sát thương, bạn giao cho họ 1 thẻ\nTung Hoành: Người đó nhận kỹ năng [Khuyến Nhiếp] đến khi kết thúc lượt sau của họ, đồng thời kỹ năng thay đổi mô tả ... .",
      },
      {
        ten: "Ngụy Báo",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thể chỉ định 1 thế lực có mặt trên bàn chơi, lệnh cho nguồn sát thương ở lượt này chỉ có thể sử dụng bài chỉ định người thuộc thế lực đó làm mục tiêu cho đến hết lượt.",
      },
    ],
    cau_noi:
      "Mượn lực kẻ khác để dùng, một đẩy tiến tận mây xanh!",
    hao_tuong: ["Tư Mã Ý"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tu_Vinh: {
    title: "Từ Vinh",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Huyền Thố Chiến Ma",
    ky_nang: [
      {
        ten: "Phiên Lục",
        mo_ta:
          "Sau khi bạn sử dụng thẻ bài loại gây sát thương chỉ định mục tiêu, bạn có thế chọn bỏ 1 thẻ ... của bạn/mục tiêu, lệnh cho sát thương gây lên họ +1.",
      },
      {
        ten: "Sát Tuyệt",
        mo_ta:
          "Khi người khác tiến vào trạng thái hấp hối, nếu sinh lực của họ lúc đó nhỏ hơn 0, bạn có thể thu lấy thẻ gây sát thương đó.",
      },
    ],
    cau_noi:
      "Hung đao ký xuất, bất lưu hoạt khẩu!",
    hao_tuong: ["Đổng Trác"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ly_Nho: {
    title: "Lý Nho",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Ma Sĩ",
    ky_nang: [
      {
        ten: "Tuyệt Sách",
        mo_ta:
          "Giai đoạn kết thúc, bạn có thể gây 1 sát thương cho người chơi không có bài trên tay.",
      },
      {
        ten: "Diệt Kế",
        mo_ta:
          "Giai đoạn hành động 1 lần, bạn có thể đặt 1 thẻ [Cẩm Nang Sắc Đen] đặt lên đỉnh chồng bài, sau đó lệnh 1 người khác chấp hành [Quân Lệnh]. nếu họ không chấp hành, bạn có thế bỏ đi của họ 2 thẻ.",
      },
      {
        loai:"Hạn Định Kỹ",
        ten: "Phần Thành",
        mo_ta:
          "Giai đoạn hành động, bạn lệnh tất cả người khác lần lượt lựa chọn 1 mục: \nBỏ tối thiểu [X] thẻ ([X] số bài mà người ngồi trước đó bỏ bằng cách này +1); hoặc nhận 1 sát thương [Hoả] từ bạn.",
      },
    ],
    cau_noi:
      "Để ta cho người nếm thử, mùi vị của tuyệt vọng nha!",
    hao_tuong: ["Đổng Trác"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Gia_Cat_Can: {
    title: "Gia Cát Cẩn",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Liên Minh Đích Duy Hệ Giả",
    ky_nang: [
      {
        ten: "Hoãn Thích",
        mo_ta:
          "Trước khi thẻ phán xét của người cùng thế lực với bạn có hiệu lực, bạn có thế đánh ra 1 thẻ để thay đổi thẻ phán xét đó.",
      },
      {
        ten: "Hoằng Viện",
        mo_ta:
          "Khi bạn rút thêm bài bởi hiệu ứng [Hợp/Liên], bạn có thể lệnh 1 người cùng thế lực rút bài thay bạn. Một lần trong giai đoạn hành động, bạn có thế lệnh 1 thẻ bài [phổ thông] xem như có ký hiệu [Hợp/ Liên].",
      },
      {
        ten: "Minh Triết",
        mo_ta:
          "Ngoài lượt của bạn, khi bạn dùng/ đánh ra thẻ bài [sắc Đỏ] hoặc mất đi thẻ bài [sắc Đỏ] trong vùng [Trang Bị], bạn có thế rút 1 thẻ.",
      },
    ],
    cau_noi:
      "Hợp tung liên hoành, chỉ vì thiên hạ chúng sanh!",
    hao_tuong: ["Tôn Quyền"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Khoai_Luong_Khoai_Viet: {
    title: "Khoái Lương & Khoái Việt",
    the_luc: ["Ngụy", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Ung Luận Cửu Mưu",
    ky_nang: [
      {
        ten: "Tiến Hàng",
        mo_ta:
          "Sau khi người không cùng thế lực thu được thẻ bài của bạn, bạn có thể lệnh họ rút 1 thẻ. Khi kết thúc lượt, nếu họ trong lượt này không gây sát thương lên bạn, bạn lệnh tất cả người cùng thế lực mỗi người rút 1 thẻ.",
      },
      {
        ten: "Thẩm Thời",
        mo_ta:
          "Mỗi lượt mỗi mục giới hạn 1 lần, sau khi bạn nhận sát thương, nếu như nguồn sát thương là:\n[Đại thế lực], bạn có thể bổ sung bài trên tay bằng với 1 người cùng thế lực với nguồn sát thương (tối đa là 5); \nKhông phải [Đại thế lực], bạn có thể xem như sử dụng [Dĩ Dật Đãi Lao].",
      },
    ],
    cau_noi:
      "Cảm Tào công chi ngộ, đi thành tâm chi hàng! ",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Nghiem_Bach_Ho: {
    title: "Nghiêm Bạch Hổ",
    the_luc: ["Quần"],
    sinh_luc: 0,
    danh_hieu: "Sài Nha Lạc Giản",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Trĩ Đạo",
        mo_ta:
          "Khi bắt đầu giai đoạn hành động, bạn chọn 1 người chơi khác, cho đến hết lượt này, khoảng cách giữa bạn và người đó là 1 và bạn không thể sử dụng bài chỉ định người khác ngoài bạn và người đó làm mục tiêu. Sau đó, sau khi bạn gây sát thương lần đầu tiên trong giai đoạn này lên người đó, bạn thu lấy 1 thẻ bài trong khu vực chơi của người đó.",
      },
      {
        loai:["Phó Tướng Kỹ", "Tỏa Định Kỹ"],
        ten: "Ký Súc",
        mo_ta:
          "(-0.5 sinh lực) Nếu bạn trở thành mục tiêu duy nhất của thẻ bài [Cơ Bản sắc Đỏ] hoặc [Cẩm Nang phố thông sắc Đỏ], thì sau khi kết toán thẻ bài này, người sử dụng thẻ bài này lại thêm 1 lần dùng bài cùng tên lên bạn. Khi bạn tại 1 giai đoạn bất kỳ nhận sát thương lần thứ 2, bạn chặn sát thương này lại, sau đó loại bỏ võ tướng này.",
      },
    ],
    cau_noi:
      "Thứ bổn vương muốn, há có thế không đạt được sao! ",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tran_Vu_Dong_Tap: {
    title: "Trần Vũ & Đổng Tập",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Tráng Hoài Kích Liệt",
    ky_nang: [
      {
        ten: "Đoạn Tiết",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, Bạn có thể lệnh tối đa 4 người khác tiến vào trạng thái liên hoàn, sau đó bạn cũng tiến vào trạng thái liên hoàn. Nếu bằng cách này số người bị bạn đưa vào trạng thái liên hoàn nhiều hơn số sinh lực đã mất của bạn, bạn nhận 1 sát thương vô nguồn.",
      },
      {
        ten: "Phấn Mệnh",
        mo_ta:
          "Sau khi bạn nhận sát thương, nếu bạn đang ở trạng thái liên hoàn, bạn có thế bỏ đi 1 thẻ của tất cả người chơi đang ở trạng thái liên hoàn (kể cả bản thân tướng này, người chơi nào không có bài thì bỏ qua).",
      },
    ],
    cau_noi:
      "Xin chủ công hãy thoái lui, để chúng tôi đoạn hậu!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Dong_Trac: {
    title: "Đổng Trác",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Ma Vương",
    ky_nang: [
      {
        ten: "Hoành Chinh",
        mo_ta:
          "Bắt đầu giai đoạn rút bài, nếu sinh lực hiện tại của bạn là 1 hoặc không có bài trên tay, bạn có thể thay vì rút bài đổi thành thu lấy 1 thẻ bài trong vùng chơi của tất cả người khác.",
      },
      {
        loai:["Chủ Tướng Kỹ","Tỏa Định Kỹ"],
        ten: "Bạo Lăng",
        mo_ta:
          "Tỏa Định Kỹ Kết thúc giai đoạn hành động, nếu bạn có [Phó Tướng], loại bỏ nó. Sau đó giới hạn sinh lực tăng lên 3, hồi phục 3 sinh lực, và nhận kỹ năng [Băng Hoại].",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Băng Hoại",
        mo_ta:
          "Giai đoạn kết thúc, nếu bạn không là người chơi có sinh lực thấp nhất, bạn chọn tự giảm [1 sinh lực] hoặc giảm [1 giới hạn sinh lực]. \nNếu bạn chọn chấp hành cả 2 mục bạn thực hiện thêm 1 [giai đoạn rút bài].",
      },
    ],
    cau_noi:
      "Đại Hán thiên hạ, duy ta độc tôn; Đại Hán quyền quý, do ta chưởng khống!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Lang_Thong: {
    title: "Lăng Thống",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Hào Tình Liệt Đảm",
    ky_nang: [
      {
        ten: "Toàn Lược",
        mo_ta:
          "Sau khi bạn trong 1 lần mất đi thẻ bài trong khu vực [Trang bị], bạn có thế bỏ đi 1 thẻ bài của người chơi khác",
      },
      {
        loai:"Hạn Định Kỹ",
        ten: "Dũng Tiến",
        mo_ta:
          "Trong giai đoạn hành động, bạn có thể di chuyển nhiều nhất 3 thẻ bài [Trang bị] trên vùng chơi",
      },
    ],
    cau_noi:
      "Giang Đông hổ uy, hả thị nhĩ đẳng khả phạm?",
    hao_tuong: ["Cam Ninh", "Lăng Tháo"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ma_Luong: {
    title: "Mã Lương",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Bạch Mi Sách Sĩ",
    ky_nang: [
      {
        ten: "Mục Minh",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thể chuyển hoá 1 thẻ chất … trên tay sử dụng như [Viễn Giao Cận Công] hoặc [Lục Lực Đồng Tâm].",
      },
      {
        ten: "Nạp Mang",
        mo_ta:
          "Khi người khác sử dụng bài [sắc Đen] có chỉ định nhiều mục tiêu, bạn có thế tiến hành phán xét, nếu kết quả phát xét không phải chất ..., bạn chọn 1 mục:\n1. Lệnh 1 người khác trở thành mục tiêu của thẻ bài đó (Không bị giới hạn khoảng cách);\n2. Hủy bỏ mục tiêu đối với 1 mục tiêu của thẻ bài đó.",
      },
    ],
    cau_noi:
      "Ta giúp ngươi, cũng như đang giúp ta vậy!",
    hao_tuong: ["Gia Cát Lượng"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tao_Sang: {
    title: "Tào Sảng",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Luy Trập Hà Từ",
    ky_nang: [
      {
        ten: "Tục Tiến",
        mo_ta:
          "Bắt đầu giai đoạn bỏ bài của người cùng thế lực, nếu họ trong lượt này chưa gây ra sát thương, bạn có thể lệnh họ rút thêm tối đa [X] thẻ ([X] tối đa là 3), sau đó xem như dùng 1 thẻ [Sát] lên 1 người khác nằm trong khoảng cách [X] do bạn chỉ định. Sau khi kết thúc giai đoạn này, ứng với mỗi thẻ [Sát] họ bỏ, họ tự giảm 1 sinh lực.",
      },
    ],
    cau_noi:
      "Hào lệnh thiên hạ, ai dám bất tuân!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tan_Hien_Anh: {
    title: "Tân Hiến Anh",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Tuệ Nhãn Tài Nữ",
    ky_nang: [
      {
        ten: "Bình Giám",
        mo_ta:
          "Sau khi bạn sử dụng [Tri Bỉ Tri Kỉ] chỉ định mục tiêu, bạn có thế rút 1 thẻ; \nKhi bạn sử dụng [Tri Bỉ Tri Bỉ] trong lượt, bạn có thế lệnh 1 người khác cùng xem với bạn; \nSau khi 1 người khác sử dụng [Tri Bỉ Tri Kỷ] kết toán xong, xem như bạn cũng sử dụng 1 thẻ [Tri Bỉ Tri Kỉ] lên cùng mục tiêu đó.",
      },
      {
        ten: "Giới Trung",
        mo_ta:
          "Mỗi lượt giới hạn 1 lần, khi người cùng thế lực với bạn gây sát thương đối với người khác, nguồn sát thương có thể chặn sát thương này lại, sửa thành bỏ đi tối đa [X] thẻ ([X] là số người cùng thế lực với bạn và tối đa là 3). Nếu chỉ bỏ đi 1 thẻ, bạn có thể rút 1 thẻ.",
      },
    ],
    cau_noi:
      "Tuệ giám như gương, chiếu kỳ trung gian!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ha_Hau_Ba: {
    title: "Hạ Hầu Bá",
    the_luc: ["Ngụy", "Thục"],
    sinh_luc: 2,
    danh_hieu: "Cức Đồ Tráng Trí",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Báo Liệt",
        mo_ta:
          "Bắt đầu giai đoạn hành động, bạn lệnh cho tất cả người chơi khác không cùng thế lực có phạm vi tấn công đến bạn dùng 1 thẻ [Sát] lên bạn, nếu họ không thực hiện, bạn huỷ bỏ 1 thẻ của họ. Khi bạn dùng [Sát] lên người chơi không ít máu hơn bản thân, thẻ [Sát] đó của bạn không giới hạn khoảng cách và số lần.",
      },
    ],
    cau_noi:
      "Hôm nay, ta đã có thế đại khai sát giới, chúng tướng sĩ, xông lên!",
    hao_tuong: ["Khương Duy"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Dang_Ngai: {
    title: "Đặng Ngải",
    the_luc: ["Ngụy"],
    sinh_luc: 0,
    danh_hieu: "Kiểu Nhiên Đích Tráng Sĩ",
    ky_nang: [
      {
        ten: "Truân Điền",
        mo_ta:
          "Sau khi bạn mất đi thẻ bài ngoài lượt, bạn có thể tiến hành phán xét, nếu kết quả phán xét không phải chất ..., bạn có thể đặt thẻ phán xét này lên tướng của bạn gọi là thẻ [Điền]; \nVới mỗi thẻ [Điền], bạn tính toán khoảng cách đến người khác -1.",
      },
      {
        loai:"Chủ Tướng Kỹ",
        ten: "Cấp Tập",
        mo_ta:
          "(-0.5 sinh lực) Giai đoạn hành động, bạn dùng thẻ [Điền] xem như thẻ [Thuận Thủ Khiên Dương].",
      },
      {
        loai:"Phó Tướng Kỹ",
        ten: "Tư Lương",
        mo_ta:
          "Sau khi 1 người cùng thế lực với bạn nhận sát thương, bạn có thế chọn giao cho họ 1 thẻ [Điền].",
      },
    ],
    cau_noi:
      "Thời cơ đã đến, tiên phát chế nhân!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tang_Ba: {
    title: "Tang Bá",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Tiết Độ Thanh Từ",
    ky_nang: [
      {
        ten: "Hoành Giang",
        mo_ta:
          "Sau khi bạn nhận 1 sát thương, bạn có thể lệnh giới hạn trữ bài trên tay của người có lượt hiện tại [-X] ở lượt này (X là thẻ trong [vùng trang bị] của họ, tối thiểu là 1). Sau đó khi lượt này kết thúc, nếu họ trong giai đoạn bỏ bài lượt này không có bỏ bài, bạn bổ sung bài trên tay đến giới hạn sinh lực.",
      },
    ],
    cau_noi:
      "Vết thương ?Đó cũng chỉ là huân chương của người đàn ông!",
    hao_tuong: ["Trương Liêu"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ma_Dai: {
    title: "Mã Đại",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Lâm Nguy Thụ Mệnh",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Mã Thuật",
        mo_ta:
          "Bạn tính toán khoảng cách đến người khác -1.",
      },
      {
        ten: "Tiềm Tập",
        mo_ta:
          "Giai đoạn chuẩn bị, bạn có thể rút 1 thẻ bài, đồng thời chọn bỏ 1 thẻ bài. Sau đó bạn lệnh cho 1 người chơi có khoảng cách là 1, họ không thể dùng hoặc đánh ra thẻ bài trên tay có cùng màu với thẻ bài bạn bỏ.",
      },
    ],
    cau_noi:
      "Cầm tặc tiên cầm vương, đả xà đả thất thước!",
    hao_tuong: ["Mã Siêu"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Vuong_Binh: {
    title: "Vương Bình",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Binh Kế Dĩ Trí Dụng",
    ky_nang: [
      {
        loai:"Hạn Định Kỹ",
        ten: "Tướng Lược",
        mo_ta:
          "Giai đoạn hành động, bạn có thể phát động 1 lần [Quân Lệnh], sau đó thực hiện triệu hoán thế lực, người chơi khác cùng thế lực với bạn có thể chấp hành [Quân Lệnh] này (người chơi [Ẩn Danh] cùng thế lực có thế mở tướng hưởng ứng ở thời điểm này). Bạn cùng với người chơi chấp hành [Quân Lệnh] được tăng 1 giới hạn sinh lực cùng hồi phục 1 sinh lực; \nSau đó bạn được rút [X] thẻ bài ([X] là số người được hồi sinh lực).",
      },
    ],
    cau_noi:
      "Binh lược giả, minh chiến thắng công thủ chi số!",
    hao_tuong: ["Tưởng Uyển & Phí Y"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Thach_Thao: {
    title: "Thạch Thao",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Đồng Tiến Cộng Khoái",
    ky_nang: [
      {
        ten: "Kiếm Ca",
        mo_ta:
          "Bạn có thế đem 1 thẻ [Phi Cơ Bản] để sử dụng hoặc đánh ra như thẻ [Sát].",
      },
      {
        loai:"Chủ Tướng Kỹ",
        ten: "Tiềm Học",
        mo_ta:
          "(-0.5 sinh lực). Khi kết thúc lượt của 1 người, bạn có thể thu lấy X thẻ không phải [Hiệp Thiên Tử Dĩ Lệnh Chư Hầu] trong những thẻ bài tiến vào chồng bài bỏ lượt này (X là số khu vực mà bạn mất đi thẻ cuối trong lượt này, ưu tiên chọn thẻ [Phi Cơ Bản]).",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Trục Cốc",
        mo_ta:
          "Sau khi người cùng thế lực thay đổi [Phó Tướng] hoặc trận vong, nếu thẻ tướng này là:\n- [Chủ tướng] và thẻ phó tướng là đơn thế lực, bạn hoán đổi phó tướng với chủ tướng;\n- [Phó tướng], bạn thoát trạng thái liên hoàn. Sau đó bạn thay đổi [Phó Tướng].",
      },
    ],
    cau_noi:
      "Ngụy lắm nhân tài thế ư!",
    hao_tuong: ["Từ Thứ", "Khổng Minh"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tu_Hoang: {
    title: "Từ Hoảng",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Chu Á Chi Phong",
    ky_nang: [
      {
        ten: "Đoạn Lương",
        mo_ta:
          "Giai đoạn hành động, bạn có thể sử dụng thẻ bài [phi Cẩm Nang sắc Đen] xem như một thẻ [Binh Lương Thốn Đoạn] không hạn chế khoảng cách. Nếu bạn sử dụng thẻ [Binh Lương Thốn Đoạn] đối với 1 người chơi trong khoảng cách vượt quá 2, bạn không thế tái phát động kỹ năng cho đến hết lượt.",
      },
    ],
    cau_noi:
      "Thanh Đông kích Tây, thiêu kỳ lương thảo!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  To_Mau: {
    title: "Tổ Mậu",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Bích Huyết Nhiễm Xích Trách",
    ky_nang: [
      {
        ten: "Dẫn Binh",
        mo_ta:
          "Giai đoạn kết thúc, bạn có thế đặt tùy ý bài [Phi Cơ Bản] lên thẻ tướng này, gọi là [Trách]\nSau khi bạn nhận sát thương bởi [Sát] hoặc [Quyết đấu], bạn buộc dời ra 1 thẻ [Trách]",
      },
      {
        loai:"Tỏa định kỹ",
        ten: "Tuyệt Địa",
        mo_ta:
          "Giai đoạn chuẩn bị, bạn lựa chọn 1 mục:\n(1) Lệnh 1 người khác có sinh lực [bé hơn hoặc bằng] bạn thu lấy hết số thẻ [Trách], sau đó họ hồi phục 1 sinh lực và rút số thẻ tương tự\n(2) Bỏ hết thẻ [Trách], bạn bổ sung bài bằng giới hạn sinh lực",
      },
    ],
    cau_noi:
      "Chủ công cứ đi theo đường nhỏ, truy binh để ta chặn hậu!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Giac: {
    title: "Trương Giác",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Thiên Công Tướng Quân",
    ky_nang: [
      {
        ten: "Lôi Kích",
        mo_ta:
          "Khi bạn sử dụng hay đánh ra thẻ [Né], bạn có thể lệnh cho 1 người chơi khác tiến hành phán xét, nếu kết quả là ..., bạn gây ra 2 sát thương hệ [Lôi] lên họ.",
      },
      {
        ten: "Quỷ Đạo",
        mo_ta:
          "Trước khi thẻ phán xét của 1 người chơi có hiệu lực, bạn có thể đánh ra 1 thẻ bài [sắc Đen] để hoán đổi với thẻ phán xét đó.",
      },
    ],
    cau_noi:
      "Hoàng Cân lực lượng, thiên lôi oanh  dã, khả địch thiên quân!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Quan_Ngan_Binh: {
    title: "Quan Ngân Bình",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Tướng Môn Hổ Nữ",
    ky_nang: [
      {
        ten: "Quắc Thủ",
        mo_ta:
          "Mỗi vòng chơi giới hạn 1 lần, bắt đầu lượt của người khác, bạn có thể bỏ 1 thẻ, thu 1 thẻ trong [vùng chơi] của họ (nếu họ là [Nữ], bạn không cần bỏ bài, đồng thời đổi thành họ giao 1 thẻ trong [vùng chơi] cho bạn), sau đó tiến hành [Hiến Sách] với họ. Nếu làm như thế, giai đoạn hành động của họ chọn 1 mục: \n1. Lệnh 1 người không cùng thế lực chấp hành [Quân Lệnh];\n 2. Bỏ đi [Quân Lệnh], lượt này tăng 1 lần dùng [Sát] và thẻ [Sát] sẽ không giới hạn khoảng cách.",
      },
      {
        loai:"Chủ Tướng Kỹ",
        ten: "Giáo Hóa",
        mo_ta:
          "(-0.5 sinh lực) Giai đoạn rút bài của người cùng thế lực, nếu họ có ít bài trên tay nhất, bạn có thể sửa thành lệnh họ [Kiểm Sách] đồng thời thu lấy 3 thẻ không cùng phân loại.",
      },
    ],
    cau_noi:
      "Mối thù giết cha, di hận khả tiêu!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tran_Cung: {
    title: "Trần Cung",
    the_luc: ["Ngụy", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Chí Điểu Đoạt Phụng Linh",
    ky_nang: [
      {
        ten: "Dẫn Bạn",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thế chọn 1 người chơi khác, lệnh những người không cùng thế lực với họ lần lượt lựa chọn dùng 1 thẻ [Sát] lên họ hay không, Sau khi họ nhận 1 sát thương, giới hạn dùng [Sát] của họ ở lượt tiếp theo +1. Sau kết toán nếu họ không nhận sát thương, họ hồi phục 1 sinh lực.",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Hưng Mưu",
        mo_ta:
          "Khi bạn giết hoặc bị giết sẽ không chấp hành thưởng phạt; \nKhi người chơi khác rút bài do chấp hành thưởng phạt, bạn rút 1 thẻ bài.",
      },
    ],
    cau_noi:
      "Lấy lui làm tiến, lấy lợi ngừa hại!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Banh_Dang: {
    title: "Bành Dạng",
    the_luc: ["Thục", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Ngô Thân Đích Cuồng Sĩ",
    ky_nang: [
      {
        ten: "Thông Lệnh",
        mo_ta:
          "Giai đoạn hành động 1 lần, sau khi bạn gây sát thương đối với 1 người không cùng thế lực, bạn có thể chọn 1 người cùng thế lực với bạn, lệnh họ lựa chọn hay không sử dụng 1 thẻ đối với người đó. Sau khi thẻ đó được kết toán, nếu thẻ có gây sát thương, bạn cùng với họ rút 2 thẻ, nếu không người đó thu lấy thẻ bài của bạn đã gây sát thương đối với người đó",
      },
      {
        ten: "Cận Du",
        mo_ta:
          "Sau khi bạn lật mở thẻ tướng này, bạn lệnh những người chơi trong khoảng cách 1 với bạn chấp hành hiệu quả: \nNếu tất cả tướng họ đều lật mở, họ úp 1 thẻ tướng\nNếu không, họ bỏ 2 thẻ",
      },
    ],
    cau_noi:
      "Đợi khách đi rồi sẽ cùng anh nói chuyện!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ton_Lo_Ban: {
    title: "Tôn Lỗ Ban",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Vi Hổ Tác Trành",
    ky_nang: [
      {
        ten: "Ủy Dị",
        mo_ta:
          "Giai đoạn hành động của người cùng thế lực giới hạn 1 lần, khi họ sử dụng thẻ [Phi Trang Bị] thứ 2 trong giai đoạn này chỉ định cùng 1 mục tiêu, họ có thể bỏ 1 thẻ [Phi Cơ Bản] sau đó [Hiến Sách] đối với bạn. Giai đoạn chuẩn bị, với mỗi [Quân Lệnh] bạn có, bạn theo thứ tự chọn 1 mục: \n1. Lệnh 1 người khác chấp hành (Quân Lệnh) này; \n2. Bạn bỏ đi [Quân Lệnh] này, sau đó bỏ 1 thẻ của 1 người khác.",
      },
      {
        ten: "Loạn Vi",
        mo_ta:
          "Khi 1 người thu lấy [Quân Lệnh] từ chồng [Quân Lệnh] không phải theo cách này, bạn có thế thu lấy ngẫu nhiên 1 thẻ [Quân Lệnh], sau đó bạn chọn 1 mục:\n1. Bạn thay đổi [Quân Lệnh] này của bạn với 1 [Quân Lệnh] trong đó;\n2. Bạn bỏ đi [Quân Lệnh] này sau đó rút 1 thẻ.",
      },
    ],
    cau_noi:
      "Muốn ta tha cho, hỏi con mèo của ta có cho phép không",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ton_Kien: {
    title: "Tôn Kiên",
    the_luc: ["Ngô"],
    sinh_luc: 2.5,
    danh_hieu: "Vũ Liệt Đế",
    ky_nang: [
      {
        ten: "Anh Hồn",
        mo_ta:
          "Giai đoạn chuẩn bị, bạn có thể chọn 1 người chơi khác và lựa chọn 1 mục sau:\n1. Lệnh họ rút [X] thẻ bài sau đó bỏ đi 1 thẻ bài.\n2. Lệnh họ rút 1 thẻ bài sau đó bỏ đi [X] thẻ bài.\n([X] là số sinh lực mà bạn đã mất ).",
      },
    ],
    cau_noi:
      "Loạn thế thanh quân trắc, huy sư phục giang sơn",
    hao_tuong: ["Ngô Quốc Thái"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Bang_Duc: {
    title: "Bàng Đức",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Nhân Mã Nhất thế",
    ky_nang: [
      {
        loai:"Tỏa định kỹ",
        ten: "Mã Thuât",
        mo_ta:
          "Bạn tính toán khoảng cách với người khác -1.",
      },
      {
        ten: "Kiện Xuất",
        mo_ta:
          "Sau khi bạn sử dụng thẻ [Sát] chỉ định 1 mục tiêu, bạn có thế bỏ đi 1 thẻ bài của người đó, nếu thẻ bỏ đi là:\n- Thẻ [Trang Bị], họ không thể dùng [Né].\n- Không phải là [Trang Bị], họ thu lấy thẻ [Sát] bạn vừa sử dụng.",
      },
    ],
    cau_noi:
      "Thừa thắng truy kích, giết bọn ngươi không còn manh giáp!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Luu_Linh: {
    title: "Lưu Linh",
    the_luc: ["Tấn", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Mạc Thiên Tịch Địa",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Du Du",
        mo_ta:
          "Ngoài lượt của bạn, sau khi bạn lần thứ 2 trở thành mục tiêu của thẻ [Cẩm Nang] trong 1 lượt, bạn lệnh thẻ đó vô hiệu với bạn, sau đó rút 1 thẻ bài và xem như bạn rời khỏi trò chơi cho đến hết lượt hiện tại.",
      },
      {
        ten: "Hốt Hốt",
        mo_ta:
          "Khi bạn xác nhận trận vong, bạn có thể đem tất cả thẻ bài của bạn di trừ ra khỏi trò chơi và đem số bài đó tiến vào chồng bài bỏ khi kết thúc lượt. Sau đó, ở lượt này khi người cùng thế lực với bạn rơi vào trạng thái hấp hối, họ có thế dùng 1 thẻ bất kì xem như [Tửu] để sử dụng.",
      },
    ],
    cau_noi:
      "Ta bối chiêu chiêu, chính thủy chi âm hạo dãng!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Luu_Thien: {
    title: "Lưu Thiện",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Vô Vi Đích Chân Mệnh Chủ",
    ky_nang: [
      {
        loai:"Tỏa định kỹ",
        ten: "Hưởng Lạc",
        mo_ta:
          "Sau khi người chơi khác sử dụng [Sát] lựa chọn bạn làm mục tiêu, bạn lệnh họ phải bỏ thêm 1 thẻ [Cơ Bản] nếu không thẻ [Sát] vô hiệu với bạn.",
      },
      {
        ten: "Ủy Quyền",
        mo_ta:
          "Bạn có thể bỏ qua giai đoạn hành động, sau đó trước khi kết thúc lượt này, bạn có thế bỏ thêm 1 thẻ trên tay và lệnh cho 1 người chơi khác tiến hành thêm 1 lượt chơi.",
      },
    ],
    cau_noi:
      "Đánh đánh giết giết, thật chả có ý nghĩa gì cả!",
    hao_tuong: ["Triệu Vân"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Cap: {
    title: "Trương Cáp",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Liệu Địch Cơ Tiên",
    ky_nang: [
      {
        ten: "Xảo Biến",
        mo_ta:
          "Bạn có thể bỏ 1 thẻ trên tay để bỏ qua giai đoạn trong lượt của bạn (trừ chuẩn bị và kết thúc). Nếu theo cách này bỏ qua [giai đoạn rút bài], bạn có thế thu lấy 1 thẻ bài trên tay nhiều nhất của 2 người chơi khác;\nbỏ qua giai đoạn hành động, bạn có thể di dời 1 thẻ bài trên bàn chơi.",
      },
    ],
    cau_noi:
      "Hành quân đánh trận, phải biết tùy cơ ứng biến!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Hoa_Ham: {
    title: "Hoa Hâm",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Uyên Thanh Ngọc Khiết",
    ky_nang: [
      {
        ten: "Vọng Quy",
        mo_ta:
          "Mỗi lượt 1 lần, sau khi bạn gây/nhận sát thương, nếu: \nBạn chỉ đang lật mở tướng này, bạn có thể gây 1 sát thương cho người không cùng thế lực với bạn; \nBạn đã mở tất cả tướng, bạn có thể lệnh những người cùng thế lực rút 1 thẻ.",
      },
      {
        ten: "Tức Binh",
        mo_ta:
          "Sau khi người khác trong giai đoạn hành động sử dụng thẻ [Sát sắc Đen] đầu tiên hoặc [Cẩm Nang Phổ Thông sắc đen] đầu tiên chỉ định 1 mục tiêu duy nhất, nếu bài trên tay họ nhỏ hơn sinh lực của họ, bạn có thể lệnh họ bổ sung bài trên tay đến giới hạn sinh lực và họ không thể tiếp tục sử dụng bài trên tay trong lượt này. Nếu bạn và họ đều lật mở tất cả tướng, bạn có thể lật úp 1 tướng của bạn và họ, sau đó lượt này không thể lật mở lại thẻ tướng đó.",
      },
    ],
    cau_noi:
      "Thiên lý vận lương, phi dùng binh chi lợi!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Khong_Minh: {
    title: "Khổng Minh",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Ngọa Long",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Bát Trận",
        mo_ta:
          "Nếu [vùng trang bị] của bạn không có [Phòng Cụ], bạn xem như đang trang bị [Bát Quái Đỏ].",
      },
      {
        ten: "Khán Phá",
        mo_ta:
          "Bạn có thể sử dụng thẻ bài [sắc Đen] trên tay xem như thẻ [Vô Giải Khả Kích].",
      },
      {
        ten: "Hỏa Kế",
        mo_ta:
          "Giai đoạn hành động, bạn có thể sử dụng thẻ bài [sắc Đỏ]ư trên tay xem như thẻ [Hoả Công].",
      },
    ],
    cau_noi:
      "Kế của ngươi đã bị phá rồi! Chút tài mọn cũng dám múa rìu qua mắt thợ?",
    hao_tuong: ["Hoàng Nguyệt Anh", "Bàng Thống"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Vu_Cam: {
    title: "Vu Cấm",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Thảo Bạo Kiên Lũy",
    ky_nang: [
      {
        ten: "Tiết Việt",
        mo_ta:
          "Giai đoạn chuẩn bị, bạn có thế giao cho 1 người chơi không là thế lực [Ngụy] 1 thẻ bài trên tay, sau đó bạn lệnh họ thực hiện 1 [Quân Lệnh]. \nNếu họ chấp hành, bạn rút 1 thẻ bài; \nNếu không, bạn rút thêm 3 thẻ bài trong giai đoạn rút bài tại lượt này.",
      },
    ],
    cau_noi:
      "Có ta tọa trần, há để thế trận sa lầy!",
    hao_tuong: ["Hạ Hầu Đôn"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tao_Huu: {
    title: "Tào Hưu",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Thiên Phong Quán Tẫn",
    ky_nang: [
      {
        ten: "Khuynh Thế",
        mo_ta:
          "Giai đoạn chuẩn bị của người khác, bạn có thể bỏ cùng lúc tối đa [X] thẻ trên tay, sau đó xem như bạn lần lượt sử dụng các thẻ đó lên họ ([X] là số sinh lực đã mất của bạn, tối thiểu là 1). Nếu làm như thế, trong lượt này họ sử dụng bài lên bạn không hạn chế khoảng cách.",
      },
    ],
    cau_noi:
      "Tiễn liệp tại dã chi long!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ha_Hau_Thi: {
    title: "Hạ Hầu Thị",
    the_luc: ["Ngụy", "Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Thái Duyên Hiệt Mục",
    ky_nang: [
      {
        ten: "Yến Ngữ",
        mo_ta:
          "Giai đoạn hành động giới hạn 2 lần, bạn có thể [Trọng Chú] 1 thẻ [Sát] (không chuyển hoá), nếu bạn làm thế, lượt này bạn tính toán khoảng cách đến người khác -1. Giai đoạn kết thúc, bạn có thể chọn tối đa [X] người chơi lệnh mỗi người rút 1 thẻ. ([X] là số lần [Trọng Chú] bởi [Yến Ngữ]).",
      },
      {
        ten: "Tiều Thập",
        mo_ta:
          "Sau khi người khác cùng thế lực với bạn nhận sát thương, họ có thể giao cho bạn 1 thẻ [Sát] (không chuyển hoá), sau đó bạn có thể lệnh họ rút 1 thẻ.",
      },
    ],
    cau_noi:
      "Thần tâm bất tự an, nãi quân chi qua dã!",
    hao_tuong: ["Trương Phi", "Hạ Hầu Bá"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chu_Du: {
    title: "Chu Du",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Đại Đô Đốc",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Anh Tư",
        mo_ta:
          "Giai đoạn rút bài, bạn rút thêm 1 thẻ; Giới hạn trữ bài của bạn bằng với giới hạn sinh lực.",
      },
      {
        ten: "Phản Gián",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thế mở ra 1 thẻ bài trên tay và giao cho 1 người khác. Bạn lệnh họ lựa chọn 1 mục: \n1. Mở toàn bộ thẻ bài trên tay và bỏ đi tất cả thẻ cùng chất mà bạn mở ra. \n2. Tự giảm đi 1 sinh lực.",
      },
    ],
    cau_noi:
      "Dĩ chân chân giả giả chi kế, loạn tâm trí địch! ",
    hao_tuong: ["Tôn Sách", "Tiểu Kiều", "Hoàng Cái"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Hoang_Nguyet_Anh: {
    title: "Hoàng Nguyệt Anh",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Quy Ẩn Đích Kiệt Nữ",
    ky_nang: [
      {
        loai:"Tỏa định kỹ",
        ten: "Kỳ Tài",
        mo_ta:
          "bạn sử dụng thẻ [Cẩm Nang] không hạn chế khoảng cách",
      },
      {
        ten: "Tập Chí",
        mo_ta:
          "Khi bạn sử dụng 1 thẻ bài [Cẩm Nang phổ thông] (không chuyển hóa và không phải bài ảo), bạn có thế rút 1 thẻ",
      },
    ],
    cau_noi:
      "Bác lãm quần thư, tập trí tuệ chi đại thành!",
    hao_tuong: ["Khổng Minh", "Gia Cát Lượng"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tuan_Tham: {
    title: "Tuân Thầm",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Đơn Phong Mưu Cô Thành",
    ky_nang: [
      {
        ten: "Phong Lược",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thể đấu điểm với 1 người khác. \nNếu bạn thắng, họ đem 2 thẻ bài trong vùng chơi giao cho bạn; \nNếu bạn không thắng, bạn giao cho họ 1 thẻ bài. \nTung Hoành: Họ nhận kỹ năng này cho đến khi kết thúc lượt sau của họ, đồng thời thay đổi mô tả kỹ năng này, đổi “2 thẻ” thành 1 thẻ.",
      },
      {
        ten: "Ám Dũng",
        mo_ta:
          "Một lần mỗi lượt, khi người cùng thế lực với bạn gây sát thương cho 1 người chơi khác. Bạn có thể lệnh cho sát thương này tăng lên gấp đôi. Sau đó nếu người chơi đối phương đang: \n1. Lật mở 2 tướng; bạn tự giảm 1 sinh lực và mất kỹ năng này. \n2. Chỉ lật mở 1 tướng; bạn tự bỏ đi 2 thẻ trên tay.",
      },
    ],
    cau_noi:
      "Ai có thế so sánh với chúa công nhà ta!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Gia_Hu: {
    title: "Giả Hủ",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Lãnh Khốc Đích Độc Sĩ",
    ky_nang: [
      {
        loai:"Hạn Định Kỹ",
        ten: "Loạn Vũ",
        mo_ta:
          "Giai đoạn hành động, bạn lệnh cho tất cả người khác sử dụng thẻ [Sát] đối với mục tiêu là người chơi được tính toán khoảng cách nhỏ nhất, nếu không họ phải tự mất 1 sinh lực.",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Hoàn Sát",
        mo_ta:
          "Trong lượt của bạn, khi có người chơi rơi vào trạng thái hấp hối, trừ bạn và người đó mới có thể dùng [Đào].",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Duy Mạc",
        mo_ta:
          "Khi bạn trở thành mục tiêu của [Cẩm Nang sắc Đen], huỷ bỏ nó.",
      },
    ],
    cau_noi:
      "Với tất cả kế pháp của tại hạ, há sợ thiên hạ không loạn!",
    hao_tuong: ["Lý Giác & Quách Tỷ", "Trương Tú"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tuong_Kham: {
    title: "Tưởng Khâm",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Kỳ Thề Chi Khí",
    ky_nang: [
      {
        ten: "Thượng Nghĩa",
        mo_ta:
          "Một lần trong giai đoạn hành động. Bạn có thể cho người khác xem toàn bộ bài trên tay. Sau đó bạn chọn:\n1. Bạn xem bài trên tay của họ và bỏ đi 1 thẻ [sắc Đen].\n2. Bạn xem tất cả tướng úp của người chơi đó.",
      },
      {
        loai:"Trận Pháp Kỹ",
        ten: "Điểu Tường",
        mo_ta:
          "Trong trạng thái [Vây Công]. Nếu bạn hoặc đồng đội trong quan hệ bao vây sử dụng [Sát] chỉ định người không cùng thế lực bị vây công thì họ cần 2 [Né] để triệt tiêu thẻ [Sát] này.",
      },
    ],
    cau_noi:
      "Đoạt chiếm tiên cơ, đoạt tận ưu thế!",
    hao_tuong: ["Chu Thái"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tao_Thao: {
    title: "Tào Tháo",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Tuyệt Thế Đích Gian Hùng",
    ky_nang: [
      {
        ten: "Gian Hùng",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thể thu lấy thẻ bài gây ra sát thương cho bạn lên tay hoặc chọn rút 1 thẻ bài.",
      },
    ],
    cau_noi:
      "Thà ta phụ người trong thiên hạ chứ không để người trong thiên hạ phụ ta!",
    hao_tuong: ["Hứa Chử", "Điển Vi", "Biện Phu Nhân"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tan_Mat: {
    title: "Tần Mật",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Triệt Thiên Chi Thiệt",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Chuyên Đối",
        mo_ta:
          "Trong lượt, khi bạn sử dụng thẻ đầu tiên, người khác không thể dùng/đánh ra thẻ có điểm nhỏ hơn bằng với thẻ bạn sử dụng; \nKhi bạn sử dụng thẻ thứ 2, nếu thẻ đó có điểm số lớn hơn thẻ thứ nhất, bạn rút 1 thẻ.",
      },
      {
        ten: "Gián Chinh",
        mo_ta:
          "Mỗi vòng chơi 1 lần, Bắt đầu giai đoạn hành động của người cùng thế lực, nếu bài trên tay họ không phải nhiều nhất, bạn có thể lệnh họ xem như sử dụng [Viễn Giao Cận Công]. Nếu trong lượt này có người trận vong, bạn thay đổi tướng này.",
      },
    ],
    cau_noi:
      "Ỷ khí dụng sự, phi quân tử chi sở vi!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Cat_Huyen: {
    title: "Cát Huyền",
    the_luc: ["Ngô", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Thái Cực Tiên Nhân",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Tập Đan",
        mo_ta:
          "Khi bạn nhận sát thương, bạn bỏ 1 thẻ và rút 2 thẻ, sau đó bạn lật 1 thẻ trên đầu chồng bài rút và đặt lên thẻ tướng này, gọi là [Đan] (thẻ [Đan] luôn mở). Trong cùng 1 lượt, nếu bạn hồi phục sinh lực 3 lần, bạn lập tức trận vong.",
      },
      {
        ten: "Luyện Hóa",
        mo_ta:
          "Giai đoạn chuẩn bị giới hạn 1 lần, bạn có thể di trừ 3 [Đan] cùng màu. Nếu bằng cách này:\n1. [Đan] di trừ là [sắc Đỏ], bạn thu lấy Kỹ năng [Anh Tư]\n2. [Đan] di trừ là [sắc Đen], bạn thu lấy Kỹ năng [Bế Nguyệt]\nSau khi có người phát động [Anh Tư] / [Bế Nguyệt] cùng tên với Kỹ năng bạn có, bạn có thế di trừ 1 [Đan] sau đó sử dụng 1 thẻ trên tay như [Hỏa Công] / [Quyết Đấu] tương ứng",
      },
    ],
    cau_noi:
      "Dĩ phù vi căn, dĩ tiêu vi pháp!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tu_Ma_Chieu_2: {
    title: "Tư Mã Chiêu",
    the_luc: ["Dã"],
    sinh_luc: 1.5,
    danh_hieu: "Trào Phong Khai Thiên",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Túc Trí",
        mo_ta:
          "Trong lượt của bạn, bạn nhận hiệu quả:\n1. Bạn dùng [Sát]/[Quyết Đầu] gây sát thương + 1;\n2. Khi bạn dùng [Cẩm Nang] (không chuyển hoá), không hạn chế khoảng cách và bạn rút 1 thẻ; \n3. Sau khi bài của người khác vào chồng bài bỏ do bỏ bài, bạn thu của họ 1 thẻ.\nNếu hiệu quả trên phát động đủ 3 lần, kỹ năng này vô hiệu đến hết lượt; \nNếu chưa đủ, khi kết thúc lượt, cho đến khi bắt đầu lượt sau bạn nhận được [Phản Quỹ] (Tư Mã Ý).",
      },
      {
        ten: "Chiêu Tâm",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thể mở hết bài trên tay, và hoán đổi với 1 người khác có số bài trên tay nhỏ hơn hoặc bằng bạn.",
      },
    ],
    cau_noi:
      "Vương quyền khuynh  triều dã, hồng vọng định giang sơn!",
    hao_tuong: ["Tư Mã Ý"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tao_Due: {
    title: "Tào Duệ",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Thiên Tư Đích Minh Quân",
    ky_nang: [
      {
        ten: "Hưng Quan",
        mo_ta:
          "Giai đoạn hành động 1 lần, bạn có thể lệnh cho tất cả người chơi thuộc cùng 1 thế lực tiến hành lựa chọn có tiến vào trạng thái liên hoàn (xoay ngang phó tướng) hay không, người chơi lựa chọn chấp hành sau kết toán cùng bạn rút 1 thẻ.",
      },
      {
        ten: "Khói Thác",
        mo_ta:
          "Kết thúc lượt của 1 người chơi, nếu trong lượt này người cùng thế lực với bạn nhận tổng số sát thương ít nhất là 2, bạn có thế lệnh 1 người tiến hành phán xét. Nếu là:\n [sắc Đen], họ rút [X] thẻ ([X] là số sinh lực họ đang mất); \n[sắc Đỏ], họ hồi 1 sinh lực.",
      },
    ],
    cau_noi:
      "Thiên hạ nhất thống chi công, trẫm sẽ ban thưởng chư vị tướng quân!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Vuong_Di: {
    title: "Vương Dị",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Kỳ Kế Cửu Sách",
    ky_nang: [
      {
        ten: "Trinh Liệt",
        mo_ta:
          "Khi bạn trở thành mục tiêu của thẻ [Sát] hoặc [Cẩm Nang phố thông] do người khác sử dụng, bạn có thể tự giảm 1 sinh lực, huỷ bỏ nó, sau đó bạn bỏ 1 thẻ bài của họ.",
      },
      {
        ten: "Bí Kế",
        mo_ta:
          "Mỗi vòng giới hạn 1 lần, giai đoạn chuẩn bị của người khác, nếu bạn đang bị thương và họ không có [Quân Lệnh], bạn có thể tiến hành [Hiến Sách] đối với họ. Nếu làm vậy, trong giai đoạn hành động, họ lựa chọn 1 mục:\n1. Họ lệnh 1 người ngoài họ và ngoài bạn chấp hành [Quân Lệnh] này;\n2. Họ bỏ đi [Quân Lệnh] này, [Kiểm Sách] và thu lấy 1 thẻ [Cẩm Nang].",
      },
    ],
    cau_noi:
      "Ta tuyệt đối không khuất phục, chớ xem thường chí khí của nữ nhân! ",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tuan_Du: {
    title: "Tuân Du",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Tào Ngụy Đích Mưu Chủ",
    ky_nang: [
      {
        ten: "Kỳ Sách",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể sử dụng tất cả thẻ bài trên tay xem như 1 thẻ [Cẩm Nang phi thời gian] (số mục tiêu được chọn không được vượt quá số thẻ bài trên tay bạn đã dùng theo cách này), sau đó bạn có thể thay đổi [Phó Tướng].",
      },
      {
        ten: "Trí Ngu",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thế rút 1 thẻ và mở ra toàn bộ bài trên tay, nếu tất cả đều cùng 1 màu với nhau, bạn lệnh cho nguồn sát thương bỏ 1 thẻ bài trên tay.",
      },
    ],
    cau_noi:
      "Kỳ Sách tại đây, ai dám cùng ta tranh phong!",
    hao_tuong: ["Tuân Úc"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tran_Cung_2: {
    title: "Trần Cung",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Cương Lực Tráng Liệt",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Trí Trì",
        mo_ta:
          "Sau khi bạn nhận sát thương ngoài lượt, trong lượt đó nếu bạn trở thành mục tiêu thẻ [Sát] hoặc [Cẩm Nang], bạn huỷ bỏ nó.",
      },
      {
        ten: "Minh Sách",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thế bỏ 1 thẻ [Sát] hoặc 1 thẻ [Vũ Khí], tiến hành [Hiến Sách] đối với 1 người khác chưa có [Quân Lệnh] đồng thời chỉ định 1 người khác ngoài họ. Bắt đầu lượt người tiếp theo, người được [Hiến Sách] chọn 1 mục:\n1. Lệnh người còn lại chấp hành [Quân Lệnh];\n2. Bỏ đi thẻ [Quân Lệnh] đó, rút 2 thẻ.",
      },
    ],
    cau_noi:
      "Thế địch thao thao, không nên cùng họ giao phong! ",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Dang_Dan: {
    title: "Đằng Dận",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Lệ Thao Luân Đạo",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Tích Tú",
        mo_ta:
          "Mỗi lượt giới hạn 1 lần, sau khi bạn trở thành mục tiêu của thẻ bài của người khác, nếu trong [vùng trang bị] có thẻ cùng chất với thẻ mà họ sử dụng, bạn rút 1 thẻ; Khi người khác bỏ đi thẻ cuối trong vùng trang bị của bạn, bạn ngăn chặn lần mất bài này.",
      },
      {
        ten: "Trần Kiến",
        mo_ta:
          "Giai đoạn chuẩn bị, bạn có thế lật mở [X] thẻ trên đầu chồng bài rút ([X] là số bài trong [vùng trang bị] của bạn, ít nhất là 1). sau đó bạn lựa chọn 1 mục: \n1.Bạn bỏ 1 thẻ, lệnh 1 người thu lấy 1 thẻ cùng chất trong đó; \n2. Bạn sử dụng 1 thẻ trong đó. \nSau kết toán, các thẻ còn lại tiến nhập vào chồng bài bỏ.",
      },
    ],
    cau_noi:
      "Quốc hữu kỳ tệ, thượng hư dương trần! ",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Dieu_Thuyen: {
    title: "Điêu Thuyền",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Tuyệt Thế Đích Vũ Cơ",
    ky_nang: [
      {
        ten: "Ly Gián",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể bỏ đi 1 thẻ bài và lựa chọn 2 người [Nam] khác, xem như 1 người sử dụng [Quyết Đấu] lên người còn lại.",
      },
      {
        ten: "Bế Nguyệt",
        mo_ta:
          "Giai đoạn kết thúc, bạn có thể rút 1 thẻ.",
      },
    ],
    cau_noi:
      "Tướng quân. Người phải đích thân đi trút giận dùm thiếp đó nhoa! ",
    hao_tuong: ["Lữ Bố"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ngo_Quoc_Thai: {
    title: "Ngô Quốc Thái",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Niên Cao Đức Thiện",
    ky_nang: [
      {
        ten: "Bổ Ích",
        mo_ta:
          "Một lần mỗi lượt, sau khi người chơi cùng thế lực thoát khỏi trạng thái hấp hối, bạn có thể lệnh nguồn sát thương chấp hành 1 [Quân Lệnh]. Nếu họ không chấp hành, bạn lệnh người vừa thoát khỏi hấp hối hồi phục 1 sinh lực.",
      },
      {
        ten: "Cam Lộ",
        mo_ta:
          "Giai đoạn hành động 1 lần, bạn có thể chọn 2 người chơi có số thẻ bài trong [vùng Trang Bị] không cùng là 0 và chênh lệch không lớn hơn số sinh lực bạn đã mất. Lệnh họ hoán đổi bài trong [khu Trang Bị] với nhau.",
      },
    ],
    cau_noi:
      "Mẫu nghi thiên hạ, phúc tận chúng sanh! ",
    hao_tuong: ["Tôn Kiên"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tong_Du: {
    title: "Tông Dự",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Cửu Uấn Hồng Lưu",
    ky_nang: [
      {
        ten: "Khí Ngạo",
        mo_ta:
          "Mỗi lượt 1 người giới hạn 2 lần, sau khi bạn trở thành mục tiêu dùng bài của người không cùng thế lực, bạn có thể bỏ 1 thẻ bài của người đó, sau đó bạn tự bỏ 1 thẻ bài.",
      },
      {
        ten: "Thừa Thưởng",
        mo_ta:
          "Giai đoạn hành động 1 lần, sau khi bạn sử dụng bài kết toán xong, nếu thẻ này có chỉ định người không cùng thế lực làm mục tiêu và thẻ này chưa gây sát thương, bạn có thế rút 1 thẻ. Nếu vậy, giai đoạn này bạn có thể sử dụng 1 thẻ trên tay như 1 thẻ [Cơ Bản] khác hoặc thẻ [Cẩm Nang phổ thông] khác có cùng chất và điểm số như thẻ bạn đã sử dụng lần này.",
      },
    ],
    cau_noi:
      "Đông trần Ba Khâu, Tây phòng Bạch Đế !",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chu_Thuong: {
    title: "Chu Thương",
    the_luc: ["Thục", "Quần"],
    sinh_luc: 2,
    danh_hieu: "Phi Can Lịch Đảm",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Đao Hồn",
        mo_ta:
          "Nếu trong vùng trang bị của bạn không có [Vũ Khí], và trên bàn không có [Thanh Long Yểm Nguyệt Đao]. Bạn xem như trang bị thẻ đó; Khi thẻ [Thanh Long Yểm Nguyệt Đao] rời khỏi vùng chơi của người khác và tiến vào chồng bài bỏ, bạn thu lấy thẻ đó.",
      },
      {
        ten: "Trung Dũng",
        mo_ta:
          "Giai đoạn hành động hạn 1 lần, sau khi bạn gây sát thương cho mục tiêu bởi thẻ [Sát], bạn có thể: \n1. Bỏ 1 thẻ [Vũ Khí], sau đó rút 2 thẻ; \n2. Giao 1 thẻ [Vũ Khí] trên tay cho người khác.",
      },
    ],
    cau_noi:
      "Quan tướng quân, mượn cây đao của ngài ta dùng một lát! ",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Manh_Hoach: {
    title: "Mạnh Hoạch",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Nam Man Vương",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Họa Thủ",
        mo_ta:
          "[Nam Man Nhập Xâm] vô hiệu đối với bạn. Sau khi có người sử dụng thẻ bài [Nam Man Nhập Xâm] chỉ định mục tiêu, bạn trở thành nguồn sát thương của thẻ bài này.",
      },
      {
        ten: "Tái Khởi",
        mo_ta:
          "Kết thúc giai đoạn bỏ bài, bạn có thể lệnh cho tối đa [X] người chơi cùng thế lực với bạn lần lượt lựa chọn 1 mục:\nHọ rút 1 thẻ bài;\nLệnh bạn hồi phục 1 sinh lực.\n(X là số thẻ bài [chất Cơ] đi vào chồng bài bỏ trong lượt này).",
      },
    ],
    cau_noi:
      "Cự tượng trận, nghênh địch! ",
    hao_tuong: ["Chúc Dung"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Luu_Ba: {
    title: "Lưu Ba",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Tình Thượng Chi Tiết",
    ky_nang: [
      {
        ten: "Thống Độ",
        mo_ta:
          "Giai đoạn kết thúc của người chơi cùng thế lực, người đó có thể rút [X] thẻ ([X] là số bài người đó bỏ đi trong giai đoạn bỏ bài, tối đa là 3)",
      },
      {
        loai:"Hạn Định Kỹ",
        ten: "Thanh Ẩn",
        mo_ta:
          "Giai đoạn hành động, bạn có thể lệnh cho tất cả người chơi cùng thế lực với bạn hồi phục lượng sinh lực đến tối đa, sau đó bạn loại bỏ thẻ tướng này.",
      },
    ],
    cau_noi:
      "Đúc tiền giá một trăm, điều hòa giá trị mọi vật, dùng thư lại kiểm soát! ",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chung_Hoi: {
    title: "Chung Hội",
    the_luc: ["Dã tâm gia"],
    sinh_luc: 2,
    danh_hieu: "Kiệt Ngạo Đích Dã Tâm Gia",
    ky_nang: [
      {
        ten: "Quyền Kế",
        mo_ta:
          "Mỗi lượt mỗi mục giới hạn 1 lần, sau khi bạn gây sát thương hoặc nhận sát thương, bạn có thể rút [X] thẻ và đem số thẻ tương đương đặt lên tướng, gọi là [Quyền]. Giới hạn trữ bài của bạn [+X].",
      },
      {
        ten: "Bài Dị",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thế phát động 1 lần [Quân Lệnh] lên 1 người. Nếu người đó chấp hành, bạn rút [X] thẻ bài và di trừ đi 1 thẻ [Quyền]. nếu họ không chấp hành, bạn gây 1 sát thương cho tối đa cho [X] người cùng thế lực với họ và di trừ số thẻ [Quyền] tương ứng. ([X] là tổng số thẻ [Quyền], tối thiểu là 1, tối đa bằng giới hạn sinh lực của bạn).",
      },
    ],
    cau_noi:
      "Thuận ứng thiên thời, tùy ta hành sự!",
    hao_tuong: ["Khương Duy"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Luc_Khang: {
    title: "Lục Kháng",
    the_luc: ["Ngô"],
    sinh_luc: 0,
    danh_hieu: "Cô Trú Phù Hạ",
    ky_nang: [
      {
        ten: "Khắc Thủ",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thể bỏ 2 thẻ và lựa chọn 1 người khác, sau đó nếu giả sử người chơi này trận vong mà trên bàn chơi: \n1 Xuất hiện 1 quan hệ vây công mới, bạn gây cho họ 2 điểm sát thương; \n2 Không xuất hiện 1 quan hệ vây công mới, bạn rút 1 thẻ.",
      },
      {
        ten: "Quyết Yển",
        mo_ta:
          "Sau khi bạn mất đi 2 thẻ cùng lúc, bạn có thể lựa chọn 1 người có cùng thế lực với bạn, nếu làm vậy thì trong lượt chơi tiếp theo, khi người chơi này nhận sát thương, lệnh sát thương nhận -1.",
      },
    ],
    cau_noi:
      "Kế phụ chi tiết, khiêm tốn cung hoa!",
    hao_tuong: ["Lục Tốn"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Hach_Pho: {
    title: "Hách Phổ",
    the_luc: ["Thục", "Ngô"],
    sinh_luc: 2,
    danh_hieu: "Tàm Hận Nhập Địa",
    ky_nang: [
      {
        ten: "Trấn Huỳnh",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thể lựa chọn 1 người khác có bài trên tay ít hơn bạn. Bạn và họ cùng tiến hành lựa chọn 1 con số trong phạm vi [0, 1, 2], cả 2 đem bài trên tay bản thân rút hoặc bỏ dựa trên số đã chọn, sau đó người chơi có ít bài trên tay hơn xem như sử dụng [Quyết Đấu] lên người còn lại.",
      },
    ],
    cau_noi:
      "Ngô tuy binh lâm tam quận, Phổ Ninh tử bất hàng!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Duc: {
    title: "Trương Dực",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Kháng Duệ Hoài Trung",
    ky_nang: [
      {
        ten: "Kháng Duệ",
        mo_ta:
          "Giai đoạn hành động của người cùng thế lực giới hạn 1 lần, khi họ dùng bài chỉ định người khác là mục tiêu duy nhất, bạn có thế huỷ bỏ mục tiêu của thẻ đó, lệnh họ chọn 1 mục:\n1. Họ bổ sung bài trên tay đến khi có [X] thẻ ([X] là giới hạn sinh lực của họ), những người khác trong giai đoạn này không thể trở thành mục tiêu của thẻ bài họ sử dụng.\n2. Nếu không có người trong trạng thái hấp hối, họ lệnh mục tiêu ban đầu của thẻ đó xem như dùng [Quyết Đấu] với họ, số sát thương của thẻ này +1.",
      },
    ],
    cau_noi:
      "Thành trung tạo loạn, sớm diệt địch thủ trước!",
    hao_tuong: ["Liêu Hóa"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tu_Thu: {
    title: "Từ Thứ",
    the_luc: ["Thục"],
    sinh_luc: 0,
    danh_hieu: "Nan Vi Hoàn Thần",
    ky_nang: [
      {
        ten: "Khiêm Sách",
        mo_ta:
          "Sau khi người cùng thế lực với bạn sử dụng thẻ [Cẩm Nang] chỉ định mục tiêu, bạn có thể lệnh những mục tiêu thuộc [Đại Thế Lực] không thể hưởng ứng thẻ này.",
      },
      {
        loai:["Phó Tướng Kỹ","Tỏa Định Kỹ"],
        ten: "Cử Tiến",
        mo_ta:
          "(-0.5 sinh lực) Khi 1 người cùng thế lực với bạn tiến vào trạng thái hấp hối, bạn lệnh họ hồi phục đến còn 1 sinh lực, sau đó bạn thay đổi [Phó Tướng] 1 lần.",
      },
    ],
    cau_noi:
      "Ta có thế dung ngươi, nhưng trời không dung thứ cho người!",
    hao_tuong: ["Khổng Minh", "Triệu Vân"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Nhiem: {
    title: "Trương Nhiệm",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Tác Mệnh Thần Xạ",
    ky_nang: [
      {
        ten: "Xuyên Tâm",
        mo_ta:
          "Giai đoạn chuẩn bị, bạn có thể xem như sử dụng 1 thẻ [Điệu Hổ Ly Sơn] đối với tất cả các người khác đang trong quan hệ đội hình hoặc quan hệ vây công, sau đó bạn rút số bài bằng số mục tiêu.",
      },
      {
        loai:"Trận Pháp Kỹ",
        ten: "Phong Thỉ",
        mo_ta:
          "Nếu bạn là người vây công đồng thời bạn đang trong quan hệ đội hình, khi bạn sử dụng [Sát] chỉ định người bị vây công, bạn lệnh sát thương do thẻ [Sát] này gây ra [+X] ([X] là số người chơi trong quan hệ đội hình của bạn)",
      },
    ],
    cau_noi:
      "Nhất tiễn xuyên tâm, chạy làm sao thoát, haha!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Cam_Ninh: {
    title: "Cam Ninh",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Cẩm Phàm Du Hiệp",
    ky_nang: [
      {
        ten: "Kỳ Tập",
        mo_ta:
          "Giai đoạn hành động, bạn có thể sử dụng thẻ bài [sắc Đen] xem như thẻ bài [Quá Hà Sách Kiều].",
      },
      {
        loai:"Hạn Định Kỹ",
        ten: "Phấn Uy",
        mo_ta:
          "Khi 1 thẻ bài [Cẩm nang phổ thông] chỉ định mục tiêu, nếu số mục tiêu của thẻ này >1, bạn có thế lựa chọn tùy ý các mục tiêu của thẻ này (tối thiểu là 1) và lệnh thẻ này vô hiệu với các mục tiêu do bạn chọn.",
      },
    ],
    cau_noi:
      "Tiếp chiêu đi, bài của ngươi quá nhiều rồi!",
    hao_tuong: ["Lăng Thống"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Pham_Cuong_Truong_Dat: {
    title: "Phạm Cương & Trương Đạt",
    the_luc: ["Thục", "Ngô"],
    sinh_luc: 2,
    danh_hieu: "Nhĩ Tử Ngã Vong",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Dán Cừu",
        mo_ta:
          "Trong lượt của bạn, thẻ [Sát] của bạn vô hiệu phòng cụ của người không cùng thế lực; Ngoài lượt của bạn, thẻ [Sát sắc Đen] của người không cùng thế lực vô hiệu [Phòng Cụ] của bạn.",
      },
      {
        ten: "Quyết Sinh",
        mo_ta:
          "Bắt đầu giai đoạn hành động, bạn có thế chọn 1 người khác và thu của họ 1 thẻ trên tay. Sau đó, bạn lệnh cho giới hạn sử dụng [Sát] ở lượt này +1 và nhận 1 sát thương từ họ. Nếu bằng cách này, bạn tiến vào trạng thái hấp hối, bạn rút 2 thẻ và họ rút 1 thẻ.",
      },
    ],
    cau_noi:
      "Trương Dực Đức, bọn ta đến báo thù đây!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Manh_Dat: {
    title: "Mạnh Đạt",
    the_luc: ["Ngụy", "Thục"],
    sinh_luc: 2,
    danh_hieu: "Đãi Quân Phản Phục",
    ky_nang: [
      {
        ten: "Cầu An",
        mo_ta:
          "Khi bạn nhận sát thương, nếu bạn không có thẻ [Hàm], bạn có thể đem thẻ bài gây sát thương cho bạn đặt lên võ tướng bài gọi là [Hàm], sau đó chặn sát thương này lại.",
      },
      {
        ten: "Lượng Phản",
        mo_ta:
          "Giai đoạn chuẩn bị, nếu võ tướng bài của bạn có [Hàm] thì bạn thu lấy [Hàm] sau đó tự giảm 1 sinh lực. Sau khi bạn dùng thẻ [Hàm] thu được trong lượt gây sát thương trong lượt này, bạn có thế thu lấy 1 thẻ bài của người nhận sát thương.",
      },
    ],
    cau_noi:
      "Thần tâm bất tự an, nãi quân chi qua dã!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Phung_Hy: {
    title: "Phùng Hy",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Tín Trọng Tô Võ",
    ky_nang: [
      {
        ten: "Ngọc Toái",
        mo_ta:
          "Mỗi lượt giới hạn 1 lần, sau khi bạn trở thành mục tiêu của thẻ bài [sắc Đen] do người khác sử dụng: Nếu họ không cùng thế lực với bạn, bạn có thể tự giảm 1 sinh lực, sau đó bạn lựa chọn 1 mục:\n1. Họ bỏ đi [X] thẻ trên tay ([X] là giới hạn sinh lực của họ).\n2. Họ tự giảm sinh lực cho đến bằng sinh lực bạn.",
      },
      {
        ten: "Bát Ngôn",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể chọn 1 người chơi khác, lệnh họ bổ sung bài trên tay bằng giới hạn sinh lực của họ. Sau đó, họ không thể sử dụng hoặc đánh ra bài trên tay cho đến khi kết thúc lượt này.\nTung Hoành: Họ nhận kỹ năng này cho đến khi kết thúc lượt sau của họ, đồng thời kỹ năng này xoá bỏ mô tả họ bổ sung bài trên tay bằng giới hạn sinh lực của họ.",
      },
    ],
    cau_noi:
      "Trắng đen điên đảo, mất chính là mạng người!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Yen: {
    title: "Trương Yến",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Phi Yến Nhập Xâm",
    ky_nang: [
      {
        ten: "Khinh Kiếp",
        mo_ta:
          "Bắt đầu giai đoạn hành động, bạn có thể chọn 1 người nằm trong phạm vi công kích của bạn, họ có thể bỏ số bài tuỳ ý. Sau đó bạn cũng có thế bỏ số bài tuỳ ý. Khi kết thúc giai đoạn này, nếu số thẻ bài trong vùng chơi của bạn ≤ số thẻ trong vùng chơi của họ, bạn xem hết bài trên tay của họ đồng thời chọn thu lấy 1 thẻ.",
      },
    ],
    cau_noi:
      "Yến phiêu đề cập tốc quá nhân, địch quân trung hạo nhật phi yến!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ton_Lam: {
    title: "Tôn Lâm",
    the_luc: ["Dã tâm gia"],
    sinh_luc: 2,
    danh_hieu: "Hung Thụ Doanh Dật",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Thị Lục",
        mo_ta:
          "Kết thúc giai đoạn hành động, nếu [Phó Tướng] của bạn chưa phát động qua kỹ năng [Phi Tỏa Định Kỹ], bạn thay đổi [Phó Tướng] thành tướng mới không cùng thế lực với [Lục]; Phó tướng được thay đổi bằng cách này sẽ đặt lên võ tướng này, gọi là [Lục]; \nGiai đoạn chuẩn bị, bạn bỏ [X] thẻ trên tay, sau đó rút lại [X] thẻ. ([X] là số thế lực của [Lục]).",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Hung Ngược",
        mo_ta:
          "Khi bạn gây/nhận sát thương bởi thẻ [Sát]. nếu người gây/ nhận sát thương có cùng thế lực với thẻ [Lục]. sát thương gây ra +1: Đồng thời khi bạn nhận sát thương từ nguồn gây sát thương có cùng thế lực với thẻ [Lục], nếu không phải thẻ [Sát], sát thương bạn nhận -1.",
      },
    ],
    cau_noi:
      "Sao ta nghe mùi máu không thuần khiết, người đâu đem đi chém cho ta!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Cong_Ton_Uyen_1: {
    title: "Công Tôn Uyên",
    the_luc: ["Dã tâm gia"],
    sinh_luc: 2,
    danh_hieu: "Giảo Hoạt Đích Đầu Cơ Giả",
    ky_nang: [
      {
        ten: "Hoài Dị",
        mo_ta:
          "Giai đoạn hành động 1 lần, bạn có thể bỏ hết bài trong 1 khu vực thuộc [vùng chơi của bạn] hoặc tự di trừ [Phó Tướng]. lệnh cho tất cả người thuộc [Đại Thế Lực] lần lượt mỗi người giao cho bạn tối thiểu 1 thẻ. Sau đó bạn chọn thế lực giao thẻ bài cho bạn ít hơn, di trừ 1 [Phó Tướng] của 1 người chơi thuộc thế lực đó.",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Thái Duy",
        mo_ta:
          "[Phó Tướng] bị bạn di trừ sẽ được đặt lên tướng này, gọi là [Dị]; Giai đoạn rút bài, bạn rút thêm [X] thẻ. Giai đoạn kết thúc, nếu [X] lớn hơn giới hạn sinh lực của bạn, bạn trận vong. ([X] là số [Dị]).",
      },
    ],
    cau_noi:
      "Bắt đầu từ ngày hôm nay, ta chính là Yến Vương!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ti_Di_Ho: {
    title: "Ti Di Hô",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Thân Nguy Oa Vương",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Viễn Vực",
        mo_ta:
          "Khi bạn nhận sát thương, nếu bạn không nằm trong phạm vi công kích của nguồn gây sát thương, sát thương bạn nhận -1.",
      },
      {
        ten: "Quỷ Thuật",
        mo_ta:
          "Giai đoạn hành động, với mỗi danh bài giới hạn 1 lần, bạn có thể đem 1 thẻ [chất Bích] trên tay xem như thẻ [Viễn Giao Cận Công] hoặc [Tri Kỷ Tri Bỉ] để sử dụng.",
      },
    ],
    cau_noi:
      "Đừng phản kháng nữa, tiếp nhận sự thao túng của ta đi!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chu_Di: {
    title: "Chu Di",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Giang Đông Trích Tiên Nhân",
    ky_nang: [
      {
        ten: "Trục Khấu",
        mo_ta:
          "Giai đoạn hành động của 1 người chơi, sau khi bạn lần đầu gây ra sát thương, bạn có thế rút thêm [X] thẻ ( [X] là số thẻ bạn đã dùng trong lượt này và tối đa là 5).",
      },
      {
        ten: "Đoạn Niệm",
        mo_ta:
          "Kết thúc giai đoạn hành động, nếu bạn có bài trên tay, bạn có thế bỏ hết bài trên tay, rồi rút bài bằng giới hạn sinh lực.",
      },
      {
        ten: "Liên Hữu",
        mo_ta:
          "Khi bạn trận vong, bạn có thế chọn 1 người khác, lệnh họ nhận kỹ năng [Hưng Hoả].",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Hưng Hỏa",
        mo_ta:
          "Sát thương hệ [Hoả] bạn gây ra +1.",
      },
    ],
    cau_noi:
      "Bình định Lĩnh Nam thảo khấu, cứ để ta lo!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Cao_Thuan: {
    title: "Cao Thuận",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Liên Quân Thượng Tướng",
    ky_nang: [
      {
        ten: "Tấn Tích",
        mo_ta:
          "Khi người chơi khác lật mở tướng ngoài lượt của họ, bạn có thể xem như sử dụng 1 thẻ [Sát] lên họ.",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Hoàn Giáp",
        mo_ta:
          "Mỗi lượt 1 người 1 lần, \nSau khi bạn thành mục tiêu của thẻ [Sát], lượt này của bạn xem như trang bị phòng cụ của người sử dụng, cho đến khi vùng trang bị bạn có phòng cụ; \nSau khi bạn chỉ định mục tiêu duy nhất cho [Sát]. lượt này của bạn xem như trang bị vũ khí của họ, cho đến khi vùng trang bị bạn có vũ khí.",
      },
    ],
    cau_noi:
      "Đến đây, sợ kế ngươi không thế thành đấy!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ngo_Canh: {
    title: "Ngô Cảnh",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Dương Võ Tướng Quân",
    ky_nang: [
      {
        ten: "Điều Quy",
        mo_ta:
          "Giai đoạn hành động 1 lần, bạn có thể dùng 1 thẻ bài [Trang Bị] như [Điệu Hổ Ly Sơn], nếu vì vậy mà thế lực của bạn có quan hệ đội hình, bạn rút [X] thẻ bài ([X] là số người thế lực bạn trong quan hệ đội hình).",
      },
      {
        loai:"Trận Pháp Kỹ",
        ten: "Phong Dương",
        mo_ta:
          "Người chơi không cùng thế lực với bạn không thể huỷ bỏ hoặc thu được bài trong [vùng trang bị] của người chơi có quan hệ đội hình với bạn.",
      },
    ],
    cau_noi:
      "Nghe Bá Phù lập nghiệp, nay đến để tương trợ!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Luu_Bi: {
    title: "Lưu Bị",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Loạn Thế Đích Kiêu Hùng",
    ky_nang: [
      {
        ten: "Nhân Đức",
        mo_ta:
          "Giai đoạn hành động, bạn có thế đem tuỳ ý lượng thẻ bài trong tay giao cho 1 người khác chưa nhận bài từ kỹ năng này trong giai đoạn này. Nếu vậy khi tổng số thẻ bài bạn giao trong lượt này bằng 2 hoặc nhiều hơn, bạn có thế xem như sử dụng 1 thẻ [Cơ Bản] bất kỳ.",
      },
    ],
    cau_noi:
      "Dĩ đức phục nhân, dĩ nhân đãi nhân",
    hao_tuong: ["Quan Vũ", "Trương Phi", "Cam Phu Nhân"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Dien_Phong: {
    title: "Điền Phong",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Hà Bắc Côi Kiệt",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Tùy Thế",
        mo_ta:
          "Khi 1 người chơi khác tiến vào trạng thái hấp hối, nếu nguồn sát thương là người cùng thế lực, bạn rút 1 thẻ. Khi 1 người chơi khác cùng thế lực trận vong, bạn chọn tự giảm 1 sinh lực hoặc bỏ hết bài trên tay",
      },
      {
        ten: "Tử Gián",
        mo_ta:
          "Khi bạn mất đi thẻ bài cuối cùng trên tay, bạn có thể bỏ đi 1 thẻ bài của 1 người chơi khác",
      },
    ],
    cau_noi:
      "Tiền tuyến kỳ khai đắc thắng, ta đợi cơ hội thừa thắng truy kích!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Do_Du_1: {
    title: "Đỗ Dự",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Văn Thành Võ Đức",
    ky_nang: [
      {
        ten: "Chú Truyền",
        mo_ta:
          "Giai đoạn hành động mỗi chất giới hạn 1 lần, bạn có thể bỏ 1 thẻ, sau đó căn cứ vào chất của thẻ này lệnh thẻ [Cơ Bản] hoặc [Cẩm Nang] phổ thông tiếp theo bạn sử dụng trong giai đoạn này gia tăng hiệu quả cường hoá tương ứng:\n\nchất...Trợ Chiến - Mục tiêu +1\\tchất...Không Sào - Sát thương+1;\n\nchất...Phú Giáp - Không thế hưởng ứng;\n\\tchất...Tàn Khu. - Rút 1 thẻ.",
      },
    ],
    cau_noi:
      " Kim âu thượng khuyết, tử bất minh mục!",
    hao_tuong: ["Dương Hỗ"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ta_Tu_Hon: {
    title: "Tả Từ Hồn",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Quỷ Ảnh Thần Đạo",
    ky_nang: [
      {
        ten: "Dịch Quỷ",
        mo_ta:
          "Lần đầu khi bạn lật mở tướng này, bạn có thể đem 2 thẻ tướng từ chồng tướng đặt úp lên võ tướng này, gọi là [Hồn]; Mỗi lượt mỗi loại giới hạn 1 lần, Bạn có thể di trừ 1 thẻ [Hồn], xem như sử dụng 1 thẻ [Cơ Bản] hoặc [Cẩm Nang phổ thông] (trừ thẻ [Né] và [Vô Giải], mục tiêu không thể bao gồm các người chơi thuộc thế lực khác với thế lực [Hồn], trừ [Dã Tâm Gia]).",
      },
      {
        ten: "Cấp Hồn",
        mo_ta:
          "Sau khi bạn nhận sát thương, hoặc sau khi người không cùng thế lực với bạn thoát khỏi trạng thái hấp hối, bạn có thể đem 1 thẻ tướng từ chồng tướng đặt úp lên võ tướng, nhập vào [Hồn]. Giai đoạn chuẩn bị, bạn có thể di trừ tối đa 2 thẻ [Hồn] và rút số [Hồn] tương đương.",
      },
    ],
    cau_noi:
      "Thần quang bất diệt, tiên lực bất tuyệt!",
    hao_tuong: ["Vu Cát"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tao_Thuan: {
    title: "Tào Thuần",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Anh Tài Thục  Hóa",
    ky_nang: [
      {
        ten: "Đốc Nhuệ",
        mo_ta:
          "Khi kết thúc lượt của 1 người chơi, nếu người cùng thế lực với bạn trong lượt này khi kết toán sát thương gây ra tối thiểu 2 sát thương cho người khác thế lực, bạn có thế xem như sử dụng 1 thẻ [Sát] lên 1 người trong phạm vi công kích. Nếu như người chịu sát thương trong lượt này là duy nhất, thé [Sát] này sát thương +1.",
      },
    ],
    cau_noi:
      "Hổ  báo thống kỵ, giáp binh tự đương thiên hạ!",
    hao_tuong: ["Tào Nhân"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Mi_Phu_Nhan: {
    title: "Mi Phu Nhân",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Loạn Thế Trầm Hương",
    ky_nang: [
      {
        ten: "Khuê Tú",
        mo_ta:
          "Sau khi bạn lật mở võ tướng này, bạn có thể rút 2 thẻ bài. \nSau khi bạn loại bỏ võ tướng này, bạn có thế hồi phục 1 sinh lực.",
      },
      {
        ten: "Tôn Tự",
        mo_ta:
          "Giai đoạn hành động, bạn có thể loại bỏ võ tướng này. nếu làm như thế, bạn chọn 1 người chơi và họ nhận kỹ năng [Dũng Quyết], nếu người đó không phải bạn, họ rút 2 thẻ.",
      },
      {
        ten: "Dũng Quyết",
        mo_ta:
          "Nếu người cùng thế lực trong giai đoạn hành động sử dụng thẻ đầu tiên là thẻ [Sát], sau khi thẻ [Sát] này kết toán và nhập vào chồng bài bỏ, bạn lệnh người đó thu lại thẻ [Sát] này.",
      },
    ],
    cau_noi:
      "Vì bảo tồn nòi gióng Hoàng Thúc, thiếp cam nguyện nhất tử!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Hoang_To: {
    title: "Hoàng Tổ",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Hổ Cứ Giang Hạ",
    ky_nang: [
      {
        ten: "Tập Xạ",
        mo_ta:
          "Giai đoạn chuẩn bị của người khác, bạn có thể bỏ 1 thẻ bài trong vùng [Trang Bị] của bạn, xem như sử dụng 1 thẻ [Sát] không hạn chế khoảng cách lên người đó, (nếu người đó có sinh lực < bạn thì thẻ [Sát] này không thế hưởng ứng), sau đó bạn có thể tái phát động Kỹ năng này. Sau khi kết thúc lượt người này, nếu theo cách này mà bạn có giết người chơi khác, bạn có thế đổi [Phó Tướng] 1 lần và tướng đổi lên sẽ ở trạng thái lật úp.",
      },
    ],
    cau_noi:
      "Vãn cung như nguyệt, khắc định giang hạ",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Li_Dien: {
    title: "Lí Điển",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Thâm Minh Đại Nghĩa",
    ky_nang: [
      {
        ten: "Tuân Tuân",
        mo_ta:
          "Đầu giai đoạn rút bài, bạn có thể xem trước 4 thẻ bài từ chồng bài. Sau đó đem 2 thẻ bài trong số đó đặt lên chồng bài rút, còn lại xếp trình tự tùy ý đặt xuống dưới đáy chồng bài rút",
      },
      {
        ten: "Vong Kích",
        mo_ta:
          "Sau khi bạn gây ra 1 sát thương cho 1 người chơi khác, hoặc bạn nhận sát thương từ người chơi khác 1 sát thương, bạn có thể cùng họ rút 1 thẻ bài",
      },
    ],
    cau_noi:
      "Muốn thành đại sự, chớ câu tiểu tiết!",
    hao_tuong: ["Nhạc Tiến"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Lo_Chi: {
    title: "Lỗ Chi",
    the_luc: ["Tấn", "Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Di Phục Mộ Đức",
    ky_nang: [
      {
        loai:"Luân Thứ Kỹ",
        ten: "Vệ Cảnh",
        mo_ta:
          "Khi bạn cần dùng thẻ [Sát] / [Né], nếu bạn có bài trên tay, bạn có thể xem như sử dụng thẻ đó.",
      },
      {
        ten: "Thanh Trung",
        mo_ta:
          "Bắt đầu giai đoạn hành động, bạn có thể rút thêm 2 thẻ, nếu làm vậy, vào cuối giai đoạn này, bạn hoán đổi bài trên tay với người hiện có ít bài trên tay nhất.",
      },
    ],
    cau_noi:
      "Ngô tâm chiêu chiêu, hà cụ thiên hạ chí khẩu!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tuong_Can: {
    title: "Tưởng Cán",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Thiết Tín Đích Hủ Nho",
    ky_nang: [
      {
        ten: "Ngụy Thành",
        mo_ta:
          "Khi bạn giao bài trên tay cho người khác, hoặc sau khi thẻ bài của bạn bị người khác thu lấy. nếu bài trên tay ít hơn sinh lực hiện tại, bạn có thể rút 1 thẻ.",
      },
      {
        ten: "Đạo Thư",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể gọi tên 1 chất, rồi thu 1 thẻ trên tay 1 người chơi khác đồng thời lật mở ra. Nếu đồng chất với lựa chọn của bạn, Bạn gây 1 sát thương lên người đó và kỹ năng này xem như chưa kích hoạt. nếu khác chất, bạn chọn lật mở 1 thẻ trên tay khác chất với thẻ bạn thu được, sau đó giao lại cho họ.",
      },
    ],
    cau_noi:
      "Để ta xem xem trong đây có cơ mật gì!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ly_Nghiem: {
    title: "Lý Nghiêm",
    the_luc: ["Thục"],
    sinh_luc: 0,
    danh_hieu: "Long Lý Toàn Vân",
    ky_nang: [
      {
        ten: "Căng Võ",
        mo_ta:
          "Bắt đầu giai đoạn hành động, bạn có thế lệnh bản thân chấp hành 1 [Quân Lệnh), nếu chấp hành, bạn xem như 1 thẻ [Sát], nếu không, bạn kết thúc giai đoạn hành động.",
      },
      {
        ten: "Trúc Khoa",
        mo_ta:
          "Chủ Tướng Ký. (-) Khi bạn chấp hành [Quân Lệnh), bạn có thế tiến hành chọn lại [Quân Lệnh). Khi bạn tiền vào trạng thái liên hoàn/ chồng tướng, bạn có thế lệnh 1 người cùng thế lực hồi phục 1 sinh lực.",
      },
      {
        loai:"Phó Tướng Kỹ",
        ten: "Khuyến Giá",
        mo_ta:
          "Sau khi bạn lần đầu lật mở tưởng này, bạn thực hiện 1 lần triệu hoán thế lực, người lật mờ tướng bởi kỹ năng này không trở thành Dã Tâm, người cùng thế lực với bạn rút 1 thẻ, người có Nhân Đức nhận kỹ năng Chương Vũ và Thụ Việt",
      },
    ],
    cau_noi:
      "Vận lương đốc chiến, hiểu rõ mối nguy tiền tuyến!",
    hao_tuong: ["Trần Đáo"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ngo_Y: {
    title: "Ngô Ý",
    the_luc: ["Thục", "Quần"],
    sinh_luc: 2,
    danh_hieu: "Kiến Hưng An  Bí",
    ky_nang: [
      {
        ten: "Ách Yếu",
        mo_ta:
          "Sau khi người khác trở thành mục tiêu duy nhất của thẻ [Sát], nếu khoảng cách của người dùng [Sát] đến bạn gần hơn mục tiêu, bạn có thể bỏ 1 thẻ bài, lệnh họ giao cho bạn 1 thẻ trên tay.",
      },
      {
        ten: "Tướng Tiết",
        mo_ta:
          "Khi bạn cần sử dụng/đánh ra 1 thẻ [Né], bạn có thế rút [X] thẻ và xem như sử dụng thẻ đó, sau đó bạn bỏ đi 2 thẻ [sắc Đỏ] hoặc tự giảm 1 sinh lực ([X] là số lần bạn phát động kỹ năng [Tướng Tiết] trong lượt này).",
      },
    ],
    cau_noi:
      "Canh ba nầu cơm, canh bốn tề quân, canh năm đánh  thẳng địch  doanh !",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Phan_Tuan: {
    title: "Phan Tuấn",
    the_luc: ["Thục", "Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Đại Nghiêm Địch Ác",
    ky_nang: [
      {
        ten: "Thông Sát",
        mo_ta:
          "Giai đoạn chuẩn bị, bạn có thể lựa chọn 1 người chơi chưa xác định thế lực, cho đến khi bắt đầu lượt sau của bạn, sau khi họ lần đầu lật mở tướng, so với bạn, nếu cùng thế lực, bạn và họ rút 2 thẻ bài;\nNếu không cùng thế lực với bạn, họ tự giảm 1 sinh lực \nGiai đoạn rút bài, nếu tất cả người chơi đã xác định thế lực, bạn rút thêm 2 thẻ bài",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Công Thanh",
        mo_ta:
          "Khi bạn nhận sát thương, nếu phạm vi công kích của nguồn bé hơn 3. Sát thương bạn nhận còn 1. Nếu phạm vi công kích của nguồn lớn hơn 3. Sát thương này +1",
      },
    ],
    cau_noi:
      "Tiết khái cảnh cảnh, công thanh như thủy!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Quan_Vu: {
    title: "Quan Vũ",
    the_luc: ["Thục"],
    sinh_luc: 2.5,
    danh_hieu: "Trung Nghĩa Đích Võ Thánh",
    ky_nang: [
      {
        ten: "Võ Thánh",
        mo_ta:
          "Bạn có thế sử dụng thẻ bài [sắc Đỏ] xem như thẻ [Sát]; Bạn sử dụng thẻ [Sát] chất ... không hạn chế khoảng cách.",
      },
    ],
    cau_noi:
      "Sách mã huy đao, an thiên hạ, phục Hán Thất!",
    hao_tuong: ["Lưu Bị"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chung_Hoi_2: {
    title: "Chung Hội",
    the_luc: ["Thục", "Tấn", "Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Tứ Hải Độc Uy",
    ky_nang: [
      {
        ten: "Hiệp Thuật",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thế chọn 1 người chơi, lệnh họ xem như sử dụng 1 thẻ [Viễn Giao Cận Công], sau đó họ gây 1 điểm sát thương lên người chơi khác cùng thế lực với họ do bạn chọn.",
      },
    ],
    cau_noi:
      "Thuận ứng thiên thời, tùy ta hành sự",
    hao_tuong: ["Tư Mã Sư", "Khương Duy"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Hoang_Phu_Tung: {
    title: "Hoàng Phủ Tung",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Phó Lý Nguy Loạn",
    ky_nang: [
      {
        ten: "Phấn Việt",
        mo_ta:
          "Giai đoạn hành động giới hạn [X] lần ([X] là số lượng thế lực trên bàn chơi), bạn có thể đấu điểm với 1 người. Nếu thắng, bạn chọn 1 mục:\n1. Họ không thể sử dụng/đánh ra thẻ bài cho đến khi kết thúc lượt\n 2. Xem như bạn sử dụng thẻ [Sát Lôi] lên họ (không tính vào giới hạn dùng [Sát] trong lượt).\nNếu bạn không thắng, bạn không thể phát động kỹ năng này cho đến hết lượt này.",
      },
    ],
    cau_noi:
      "Muốn định hoàng cân, buộc thay đổi binh chi lực!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Lu_Bo: {
    title: "Lữ Bố",
    the_luc: ["Quần"],
    sinh_luc: 2.5,
    danh_hieu: "Kích Chỉ Trung Nguyên",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Vô Song",
        mo_ta:
          "Sau khi bạn sử dụng thẻ [Sát] chỉ định mục tiêu, họ phải sử dụng 2 thẻ [Né] để triệt tiêu thẻ [Sát] của bạn. Người chơi tiến hành [Quyết Đấu] với bạn phải sử dụng 2 thẻ [Sát] cho mỗi lần đáp trả;\nKhi bạn sử dụng [Quyết Đấu] không chuyển hóa, có thể chọn thêm tối đa 2 mục tiêu cho thẻ này",
      },
    ],
    cau_noi:
      "Hmm, Tay cầm họa kích, chân cưỡi xích thố, ai dám đến gần ta!",
    hao_tuong: ["Điêu Thuyền"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Gia_Cat_Khac: {
    title: "Gia Cát Khác",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Hưng Gia Xích Tộc",
    ky_nang: [
      {
        ten: "Ngạo Tài",
        mo_ta:
          "Ngoài lượt của bạn, khi bạn cần dùng/ đánh ra 1 thẻ [Cơ Bản], bạn có thể xem 2 thẻ trên đầu chồng bài rút, sau đó có thể dùng/ đánh ra 1 thẻ trong đó bạn cần.",
      },
      {
        loai:"Hạn Định Kỹ",
        ten: "Khóa Võ",
        mo_ta:
          "Giai đoạn hành động, bạn có thế chọn 1 [Quân Lệnh], lệnh tất cả người chơi trong phạm vi công kích của bạn không cùng hoặc chưa xác định thế lực chấp hành [Quân Lệnh] này, nếu người đó không chấp hành thì bạn gây 1 sát thương cho người đó, sau đó bạn rút 1 thẻ bài; Sau khi tất cả người chơi kết toán [Quân Lệnh] xong, nếu trong lúc kết toán [Quân Lệnh] có người chơi thoát trạng thái hấp hồi thì bạn tự giảm 1 sinh lực.",
      },
    ],
    cau_noi:
      "Truyền lệnh của ta, nhất định phải đem người đuổi cùng giết tận!",
    hao_tuong: ["Đinh Phụng"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Thai_Phu_Nhan: {
    title: "Thái Phu Nhân",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Tương Giang Đích Bạc Vi",
    ky_nang: [
      {
        ten: "Thiết Thính",
        mo_ta:
          "Kết thúc lượt người khác, nếu tại lượt này người đó không gây sát thương cho người khác, bạn có thể chọn 1 mục:\n1. Rút 1 thẻ;\n2. Dời 1 thẻ trong [vùng trang bị] của họ sang vùng trống của bạn.",
      },
      {
        loai:"Hạn Định Kỹ",
        ten: "Hiến Châu",
        mo_ta:
          "Giai đoạn hành động, bạn có thế đem tất cả thẻ bài trong [vùng Trang Bị] giao cho 1 người khác. Họ gây 1 điểm sát thương cho 1 người nằm trong phạm vi công kích của họ, sau đó họ hồi phục lượng sinh lực bằng sát thương họ gây theo cách này.",
      },
    ],
    cau_noi:
      "Lưu Thị thất đức, dương hiến Tào Công!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ton_Sach: {
    title: "Tôn Sách",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Giang Đông Đích Tiểu Bá Vương",
    ky_nang: [
      {
        ten: "Kích Ngang",
        mo_ta:
          "Sau khi bạn dùng hoặc trở thành mục tiêu của thẻ bài [Sát sắc Đỏ] hoặc [Quyết Đấu], bạn có thế rút 1 thẻ bài.",
      },
      {
        ten: "Ưng Dương",
        mo_ta:
          "Sau khi thẻ đấu điểm được lật mở, bạn có thể +3 hoặc -3 cho thẻ đấu điểm của bạn.",
      },
      {
        loai:"Phó Tướng Kỹ",
        ten: "Hồn Thương",
        mo_ta:
          "(-0.5 sinh lực). Giai đoạn chuẩn bị, nếu sinh lực của bạn là 1, bạn có kỹ năng [Anh Hồn] (Tôn Kiên) và [Anh Tư] (Chu Du) cho đến hết lượt này.",
      },
    ],
    cau_noi:
      "Tiểu bá vương chi danh hưởng triệt thiên hạ, ai mà không biết?",
    hao_tuong: ["Đại Kiều", "Chu Du", "Thái Sử Từ"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Quach_Hoai: {
    title: "Quách Hoài",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Thùy Vấn Tân Ung",
    ky_nang: [
      {
        loai:["Tỏa Định Kỹ","Chủ Tướng Kỹ"],
        ten: "Đoạn Thế",
        mo_ta:
          "(-0.5 sinh lực) Khi 1 người chấp hành thưởng phạt bởi giết 1 người chơi khác cùng thế lực với bạn mà có rút bài, họ rút ít đi 1 thẻ, bạn rút 1 thẻ.",
      },
      {
        ten: "Tính Sách",
        mo_ta:
          "Khi lượt bạn kết thúc, nếu lượt này số thẻ vào chồng bài bỏ không ít hơn [X] thẻ, bạn có thể chấp hành thêm 1 giai đoạn rút bài;\nNếu lượt này số thẻ bạn sử dụng không ít hơn [X] thẻ, bạn có thể chấp hành thêm 1 giai đoạn hành động. ([X] là lượng sinh lực hiện tại của bạn)",
      },
    ],
    cau_noi:
      "Chiếm được một tấc, tiến thêm một trượng",
    hao_tuong: ["Trương Cáp", "Hạ Hầu Uyên"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chan_Co: {
    title: "Chân Cơ",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Bạc Hạnh Đích Mỹ Nhân",
    ky_nang: [
      {
        ten: "Khuynh Quốc",
        mo_ta:
          "Bạn có thể sử dụng hoặc đánh ra thẻ bài [sắc Đen] trên tay xem như thẻ [Né].",
      },
      {
        ten: "Lạc Thần",
        mo_ta:
          "Giai đoạn chuẩn bị, bạn có thể tiến hành phán xét, nếu kết quả là [sắc Đen], bạn có thể lần nữa tiến hành phán xét cho đến khi kết quả phán xét là [sắc Đỏ] thì dừng lại. Sau đó bạn thu lấy những thẻ phán xét [sắc Đen] của bạn lên tay.",
      },
    ],
    cau_noi:
      "Phảng phất như mây che bóng nguyệt. Phiêu diêu tựa gió  bay làn tuyết!",
    hao_tuong: ["Tào Phi"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Vien_Thuat: {
    title: "Viên Thuật",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Trọng Gia Đế",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Dong Tứ",
        mo_ta:
          "Nếu trên bàn chơi không có 1 [Đại Thế Lực] duy nhất, thế lực của bạn xem như [Đại Thế Lực] duy nhất; Giai đoạn rút bài, bạn rút thêm 1 thẻ; đầu giai đoạn hành động, bạn xem như sử dụng [Trì Bỉ Tri Kỷ]; Khi bạn là mục tiêu của [Trì Bỉ Tri Kỷ], bạn mở ra tất cả bài trên tay.",
      },
      {
        ten: "Ngụy Đế",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thể phát động 1 [Quân Lệnh] lên người khác có rút bài trong lượt này. Nếu họ không chấp hành, bạn thu lấy tất cả bài trên tay của họ, sau đó bạn đem thẻ trên tay giao lại lượng bài tương đương cho họ.",
      },
    ],
    cau_noi:
      "Trẫm là khai quốc chi quân, hahahaha!",
    hao_tuong: ["Kỷ Linh"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Nhan_Luong_Van_Xu: {
    title: "Nhan Lương & Văn Xú",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Hổ Lâng Huynh Đệ",
    ky_nang: [
      {
        ten: "Song Hùng",
        mo_ta:
          "Bắt đầu giai đoạn hành động, bạn có thể lệnh 1 người chơi bỏ 1 thẻ bài, nếu làm vậy thì trong giai đoạn này, bạn có thể đem 1 thẻ khác màu trên tay với thẻ bài bỏ trên sử dụng như [Quyết Đấu].",
      },
    ],
    cau_noi:
      "Anh em ta định giáo huấn người một khóa, đó là có đi mà không có về!",
    hao_tuong: ["Viên Thiệu"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Thuan_Vu_Quynh: {
    title: "Thuần Vu Quỳnh",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Tích Bào Kim Thần",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Tửu Giải",
        mo_ta:
          "Giới hạn sử dụng [Tửu] của bạn trong lượt +1; Giới hạn trữ bài của bạn [+X] ([X] là số lần bạn sử dụng [Tửu]).",
      },
      {
        ten: "Lương Sào",
        mo_ta:
          "Giai đoạn hành động 1 lần, nếu trong giai đoạn này bạn chưa gây ra sát thương, bạn có thế đem 1 thẻ trên tay sử dụng như [Tửu], thẻ này sau khi kết toán bạn có thể giao cho 1 người khác cùng thế lực với bạn.",
      },
    ],
    cau_noi:
      "Mùi rượu thơm phức, tinh thần sảng khoái!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Lo_Tuc: {
    title: "Lỗ Túc",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Độc Đoán Đích Ngoại Giao Gia",
    ky_nang: [
      {
        ten: "Hảo Thí",
        mo_ta:
          "Giai đoạn rút bài, bạn có thể rút thêm 2 thẻ, khi kết thúc giai đoạn rút bài, nếu bài trên tay bạn hơn 5 thẻ, bạn đem 1 nửa số bài trên tay giao cho 1 người khác có ít bài trên tay nhất trên bàn chơi.",
      },
      {
        ten: "Kết Minh",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể chọn 2 người chơi khác và bỏ đi [X] thẻ ([X] là số bài chênh lệch trên tay giữa 2 người chơi đó). Sau đó, bạn lệnh họ hoán đổi bài trên tay cho nhau.",
      },
    ],
    cau_noi:
      "Cầm lấy cầm lấy, chớ có khách khí với ca ca",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ton_Tu_Luu_Phong: {
    title: "Tôn Tư & Lưu Phóng",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Phục Sàm Sưu Thắc",
    ky_nang: [
      {
        loai:"Hạn Định Kỹ",
        ten: "A Bính",
        mo_ta:
          "Giai đoạn hành động, bạn có thể tùy ý phân phối 3 tiêu ký: [Tiên Phong], [Chu Liên], [Khuyết Ngọc] cho người chơi bạn chọn",
      },
      {
        ten: "Kỳ Du",
        mo_ta:
          "Mỗi lượt một lần, khi 1 người cùng thế lực kết toán sát thương nhận vào, bạn có thể chọn 1 mục và lệnh họ:\n(1) Bỏ 1 [Khuyết Ngọc], sau đó sát thương họ nhận vào -1;\n(2) [Trọng chú] 1 thẻ, sau đó bỏ 1 thẻ và nhận 1 [Khuyết Ngọc]",
      },
    ],
    cau_noi:
      "Đây, tất cả điều là ân điển của điện hạ!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Doan_Oi: {
    title: "Đoàn Ổi",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Tùng Bách Đĩnh Trinh",
    ky_nang: [
      {
        ten: "Phạt Nhu",
        mo_ta:
          "Mỗi lượt 1 người giới hạn 1 lần; khi 1 người khác thoát khỏi trạng thái hấp hồi, nếu nguồn sát thương hoặc lượt hiện tại là người cùng thế lực, bạn có thể bỏ 1 thẻ trên tay, bạn gây 1 sát thương với người vừa thoát hấp hối.",
      },
      {
        ten: "Trung Tiết",
        mo_ta:
          "Khi thẻ [Hiệp Thiên Tử Di Lệnh Chư Hầu] tiến vào chồng bài bỏ ngoài lượt của bạn, bạn có thế tự giảm 1 sinh lực hoặc bỏ 1 thẻ [chất Cơ] trên tay, sau đó bạn thu lấy thẻ đó. Khi bạn sử dụng [Hiệp Thiên Tử Di Lệnh Chư Hầu], bạn bỏ qua điều kiện [Đại Thế Lực] và bạn lệnh những người cùng thế lực rút 1 thẻ.",
      },
    ],
    cau_noi:
      "Quần lang họa loạn thế, nghĩa sĩ định giang sơn!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Dong_Chieu: {
    title: "Đổng Chiêu",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Di Tôn Dĩ Đỉnh",
    ky_nang: [
      {
        ten: "Khuyến Tiến",
        mo_ta:
          "Giai đoạn hành động 1 lần, bạn có thể giao 1 thẻ trên tay cho 1 người tại giai đoạn này đã chịu sát thương, sau đó lệnh người này chấp hành 1 [Quân Lệnh]. Nếu chấp hành, bạn rút 1 thẻ; Nếu không chấp hành, bạn bổ sung bài trên tay đến bằng người hiện có số bài trên tay cao nhất (tối đa rút 5 lá).",
      },
      {
        ten: "Tạc Vận",
        mo_ta:
          "Giai đoạn hành động 1 lần, bạn có thể chọn 1 người không cùng thế lực với bạn tính toán khoảng cách > 1, đồng thời bỏ [X] thẻ bài trên tay ([X] là khoảng cách bạn tính toán đến họ -1), lệnh lượt này bạn tính toán khoảng cách đến người đó là 1. Sau đó bạn gây 1 sát thương cho người đó.",
      },
    ],
    cau_noi:
      "Minh công thụ phong, chính hợp thiên tâm chi ý!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Trieu_Van: {
    title: "Triệu Vân",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Thiếu Niên Tướng Quân",
    ky_nang: [
      {
        ten: "Long Đảm",
        mo_ta:
          "Bạn có thế sử dụng hoặc đánh ra thẻ [Sát] như [Né] và ngược lại. Nếu theo cách này:\n- Thẻ [Sát] của bạn bị triệt tiêu bởi thẻ bài [Né] của 1 người chơi. Bạn có thế gây 1 sát thương cho 1 người khác ngoài họ.\n- Thẻ [Né] của bạn triệt tiêu thể [Sát] của 1 người chơi, bạn có thế lệnh 1 người chơi khác ngoài họ hồi phục 1 sinh lực.",
      },
    ],
    cau_noi:
      "Chủ động xuất kích giả sống, khiếp đảm giả, chết!",
    hao_tuong: ["Lưu Thiện"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tran_Dao: {
    title: "Trần Đáo",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Bạch Nhị Đốc",
    ky_nang: [
      {
        ten: "Vãng Liệt",
        mo_ta:
          "Giai đoạn hành động, bạn dùng thẻ bài đầu tiên không hạn chế khoảng cách. Khi bạn dùng bài trong giai đoạn hành động, bạn có thể lệnh cho thẻ bài này không thể bị hưởng ứng. Nếu bạn làm thế, giai đoạn này bạn không thể dùng bài được nữa.",
      },
    ],
    cau_noi:
      "Mãnh tướng chi liệt, thống soái chi sở vãng!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ton_Quyen: {
    title: "Tôn Quyền",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Niên Khinh Đích Hiền Quân",
    ky_nang: [
      {
        ten: "Chế Hành",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể bỏ đi nhiều nhất [X] thẻ bài ([X] là giới hạn sinh lực của bạn). Sau đó bạn rút lại số thẻ tương ứng.",
      },
    ],
    cau_noi:
      "Không vội, Ngô vương ta vẫn nhất định một đòn chế phục kẻ địch!",
    hao_tuong: ["Chu Thái"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Hoa_Hung: {
    title: "Hoa Hùng",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Ma Tướng",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Đặc Dũng",
        mo_ta:
          "Khi bạn nhận sát thương, nếu bạn chưa phát động [Vinh Võ] đồng thời thẻ gây sát thương không phải [sắc Đỏ], bạn rút 1 thẻ; Nếu bạn đã phát động [Vinh Võ] và thẻ gây sát thương không phải [sắc Đen], nguồn sát thương rút 1 thẻ.",
      },
      {
        loai:"Hạn Định Kỹ",
        ten: "Vinh Võ",
        mo_ta:
          "Sau khi bạn gây ra sát thương, bạn có thể lật mở thẻ tướng này, bạn tăng 2 giới hạn sinh lực và hồi phục 2 sinh lực. Nếu bạn làm thế, khi bạn trận vong, những người chơi khác cùng thế lực với bạn mỗi người tự giảm 1 sinh lực.",
      },
    ],
    cau_noi:
      "Liên quân 18 lộ chư hầu các ngươi đều là lũ nhát gan!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Luc_Uc_Sinh: {
    title: "Lục Úc Sinh",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Nghĩa Cô",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Chiêu Tiết",
        mo_ta:
          "Sát thương từ thẻ bài [sắc Đỏ] gây ra cho bạn -1. Khi bạn trở thành mục tiêu của thẻ bài [Cẩm Nang Có Thời Gian], huỷ bỏ nó.",
      },
      {
        ten: "Phụng Vũ",
        mo_ta:
          "Giai đoạn chuẩn bị của người khác cùng thế lực với bạn, bạn có thể giao cho họ 1 thẻ bài, sau đó dựa trên tình trạng hiện tại của họ để lần lượt chấp hành các mục sau:\n- Bài trên tay ít nhất, bạn có thể lệnh ho hồi phục 1 sinh lực;\n- Sinh lực đang ít nhất, bạn có thế lệnh họ [Kiểm Sách] và thu 1 thẻ [Cơ Bản].",
      },
    ],
    cau_noi:
      "Chiêu đức đi hành, Sinh bất nãng thị phụng nhị chủ!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Dai_Kieu: {
    title: "Đại Kiều",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Căn Trì Chi Hoa",
    ky_nang: [
      {
        ten: "Quốc Sắc",
        mo_ta:
          "Giai đoạn hành động, bạn có thể sử dụng thẻ bài chất … như thẻ [Lạc Bất Tư Thục].",
      },
      {
        ten: "Lưu Ly",
        mo_ta:
          "Khi bạn trở thành mục tiêu của thẻ [Sát], bạn có thể bỏ 1 thẻ để chuyển mục tiêu của thẻ [Sát] sang 1 người khác (trừ mục tiêu ban đầu và nguồn thẻ [Sát] này) trong phạm vi công kích của bạn.",
      },
    ],
    cau_noi:
      "Chinh chiến gian khổ, ngươi hãy nghỉ ngơi a!",
    hao_tuong: ["Tôn Sách", "Tiều Kiều"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Phap_Chinh: {
    title: "Pháp Chính",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Thục Hán Đích Phụ Dực",
    ky_nang: [
      {
        ten: "Huyễn Hoặc",
        mo_ta:
          "Một lần trong giai đoạn hành động của người khác cùng thế lực, họ có thể giao cho bạn 1 thẻ trên tay, sau đó họ bỏ đi 1 thẻ và chọn sở hữu 1 trong các kỹ năng chưa có trên bàn chơi cho đến hết lượt sau: [Võ Thánh], [Bào Hao], [Long Đàm], [Thiết Kỵ], [Liệt Cung], [Cuồng Cốt].",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Ân Oán",
        mo_ta:
          "Khi người khác dùng [Đào] lên bạn, bạn lệnh họ rút 1 thẻ bài. Sau khi bạn nhận sát thương, bạn lệnh nguồn sát thương giao 1 thẻ bài trên tay cho bạn hoặc tự mất 1 sinh lực.",
      },
    ],
    cau_noi:
      "Thụ quân chi ân, chính định tư báo!",
    hao_tuong: ["Lưu Bị"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Gia_Cat_Dan: {
    title: "Gia Cát Đản",
    the_luc: ["Ngụy", "Ngô"],
    sinh_luc: 2,
    danh_hieu: "Giới Lộ Hao Lý",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Công Ngao",
        mo_ta:
          "Sau khi bạn giết 1 người chơi, thưởng phạt cho bạn sửa thành gây 1 điểm sát thương lần lượt cho tất cả người khác cùng thế lực với người bị giết; Khi kết thúc lượt, nếu bạn có giết người duy nhất của 1 thế lực, sau đó bạn chấp hành 1 lượt.",
      },
      {
        ten: "Cử Nghĩa",
        mo_ta:
          "Sau khi bạn xác nhận thế lực, nếu bạn là người cuối cùng xác nhận thế lực của bạn. Bạn có thể trở thành [Dã Tâm Gia] và thu lây tiêu ký tương ứng, sau đó bạn chiêm bốc [X] thẻ ([X] là số thế lực).",
      },
    ],
    cau_noi:
      "Tư Mã thị, định bất công nhỉ tự bại dã!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Lu_Linh_Ky: {
    title: "Lữ Linh Kỳ",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Xí Diễm Lưu Kim",
    ky_nang: [
      {
        ten: "Quắc Vũ",
        mo_ta:
          "Đầu giai đoạn hành động, bạn có thể lật mở tất cả bài trên tay, nếu số loại bài trên tay của bạn lớn hơn:\n≥1, bạn thu 1 thẻ [Sát] từ chống bài bỏ;\n≥2, bạn dùng bài không giới hạn khoảng cách;\n≥3, trong lượt này bạn dùng [Sát] hoặc [Cẩm Nang phổ thông], có thể chọn thêm 2 mục tiêu. (giới hạn 1 lần).",
      },
      {
        ten: "Trang Nhung",
        mo_ta:
          "Một lần giai đoạn hành động, bạn có thể bỏ 1 thẻ [Cầm Nang], sau đó nhận [Vô Song] (Lữ Bố) cho đến hết lượt.",
      },
      {
        loai:"Chủ Tướng Kỹ",
        ten: "Thần Uy",
        mo_ta:
          "(-0.5 sinh lực) Giai đoạn rút bài, nếu bạn có sinh lực cao nhất, bạn rút thêm 2 thẻ; giới hạn trữ bài +2.",
      },
    ],
    cau_noi:
      "Vãn thao võ lược, tá phụ xuất chinh",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Nam_Hoa_Lao_Tien: {
    title: "Nam Hoa Lão Tiên",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Hư Bộ Thái Thanh",
    ky_nang: [
      {
        ten: "Cộng Tu",
        mo_ta:
          "Giai đoạn rút bài, bạn có thể rút ít đi 1 thẻ, sau đó lựa chọn 1 mục mà chưa lựa chọn lần trước: \n1. Lệnh tối đa [X] người chơi khác bỏ đi 1 thẻ;\n 2. Lệnh tối đa [X] người chơi khác rút 1 thẻ ([X] là giới hạn sinh lực của bạn).",
      },
      {
        ten: "Kinh Hợp",
        mo_ta:
          "Giai đoạn hành động 1 lần, bạn có thể phát động [Thiên Thư]. Sau đó lệnh 1 người nhận Kỹ năng đó trong ... đến khi bạn bắt đầu lượt tiếp theo.",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Thái Đan",
        mo_ta:
          "Nếu [khu Trang Bị] của bạn không có [Phòng Cụ], xem như bạn đang trang bị [Thái Bình Yêu Thuật].",
      },
    ],
    cau_noi:
      "Nan đáp chi vấn, tiên nhân chỉ lộ!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Dinh_Phung: {
    title: "Đinh Phụng",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Thanh Trắc Trọng Thần",
    ky_nang: [
      {
        ten: "Đoản Binh",
        mo_ta:
          "Khi bạn sử dụng thẻ [Sát] có thể chọn trong khoảng cách 1 thêm 1 người khác làm mục tiêu. Thẻ [Sát] của bạn khi chỉ định 1 người chơi duy nhất cần 2 thẻ [Né] để triệt tiêu.",
      },
      {
        ten: "Phấn Tấn",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể bỏ đi 1 thẻ và chọn 1 người khác. Bạn tính khoảng cách đến họ luôn là 1 trong lượt này.",
      },
    ],
    cau_noi:
      "Thiên hạ chi tri tấn tật giả mạc nhược vô kỉ!",
    hao_tuong: ["Từ Thịnh"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tu_Thinh: {
    title: "Từ Thịnh",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Giang Đông Đích Thiết Bích",
    ky_nang: [
      {
        ten: "Nghi Thành",
        mo_ta:
          "Sau khi bạn chỉ định mục tiêu cho thẻ [Sát] hoặc sau khi 1 người cùng thế lực với bạn trở thành mục tiêu của [Sát], bạn có thể đem [X] thẻ của mục tiêu đặt úp lên trên tướng của họ ([X] là số sinh lực hiện tại của mục tiêu, nếu không đủ [X] thì đặt tất cả). Nếu làm vậy, khi kết thúc lượt hiện tại họ thu lấy tất cả thẻ bài đã đặt lên tay. Đồng thời, sau kết toán thẻ [Sát], nếu thẻ [Sát] này không gây ra sát thương, bạn rút 1 thẻ.",
      },
    ],
    cau_noi:
      "Đãi mạt tướng bố hạ nghi thành, dĩ thoái Tào tặc!",
    hao_tuong: ["Đinh Phụng"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Bien_Phu_Nhan: {
    title: "Biện Phu Nhân",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Biến Thế Chi Ung Dung",
    ky_nang: [
      {
        ten: "Văn Nguy",
        mo_ta:
          "Khi thẻ bài của bạn trở thành mục tiêu do người khác chỉ định thu lấy hoặc bỏ đi, bạn có thể sửa thành chính bạn tự  chọn thẻ bài bị mất đi, sau đó bạn rút 1 thẻ.",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Ước Kiệm",
        mo_ta:
          "Bắt đầu giai đoạn bỏ bài của người cùng thế lực, nếu lượt này họ không sử dụng thẻ bài chỉ định người khác thế lực làm mục tiêu, thì giới hạn trữ bài ở lượt này bằng giới hạn sinh lực của người đó",
      },
    ],
    cau_noi:
      "Thiên mệnh ở họ Tào, ắt có thế gặp dữ hóa lành!",
    hao_tuong: ["Tào Tháo"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tao_Phi: {
    title: "Tào Phi",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Bá Nghiệp Đích Kế Thừa Giả",
    ky_nang: [
      {
        ten: "Hành Thương",
        mo_ta:
          "Khi có 1 người chơi khác trận vong, bạn có thể thu lấy tất cả thẻ bài mà người chơi đó sở hữu.",
      },
      {
        ten: "Phóng Trục",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thể lệnh cho 1 người chơi khác đặt chồng/giải chồng tướng, sau đó họ rút [X] thẻ bài ([X] là số sinh lực mà bạn đã mất).",
      },
    ],
    cau_noi:
      "Sống không đem lại, chết không đem đi",
    hao_tuong: ["Chân Cơ"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Duong_Tu_1: {
    title: "Dương Tu",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Đặc Tài Phóng Khoáng",
    ky_nang: [
      {
        ten: "Đạm Lạc",
        mo_ta:
          "Sau khi bạn trở thành mục tiêu của thẻ [Cẩm Nang], nếu bạn không phải là mục tiêu duy nhất của thẻ bài này, bạn có thế rút 1 thẻ bài, sau đó lệnh thẻ bài này vô hiệu với bạn.",
      },
      {
        ten: "Kê Lặc",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thế gọi tên 1 loại bài. Nguồn gây sát thương không thể dùng, đánh ra và bỏ bài thuộc loại bài mà bạn đã gọi.",
      },
    ],
    cau_noi:
      "Gân gà, muốn ăn thì không có thịt, bỏ thì lại tiếc, Haha!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Hoang_Quyen: {
    title: "Hoàng Quyền",
    the_luc: ["Ngụy", "Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Đạo Tuyệt Thù Đồ",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Điểm Hổ",
        mo_ta:
          "Khi bạn lần đầu lật mở thẻ tướng này, bạn lệnh 1 người chơi nhận tiêu ký [Điểm Hổ], sau khi người cùng thế lực với bạn gây sát thương lên người có tiêu ký [Điểm Hổ], nguồn sát thương rút 1 thẻ.",
      },
      {
        ten: "Giám Kế",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể lệnh 1 người khác rút 1 thẻ và lật mở ra thẻ đó, sau đó họ có thể dùng thẻ này (thẻ bài này có thể chuyển hoá, và mục tiêu cần hợp lệ).",
      },
    ],
    cau_noi:
      "Chính là người, mau đưa cờ tế quân cho ta!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Chieu_Truong_Hoanh: {
    title: "Trương Chiêu & Trương Hoành",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Kinh Thiên Vĩ Địa",
    ky_nang: [
      {
        ten: "Trực Gián",
        mo_ta:
          "Giai đoạn hành động, bạn có thế đem 1 thẻ bài [Trang Bị] trên tay đặt vào vị trí còn trống trong vùng [Trang Bị] của 1 người khác, sau đó bạn được rút 1 thẻ bài.",
      },
      {
        ten: "Cố Chính",
        mo_ta:
          "Kết thúc giai đoạn bỏ bài của 1 người chơi khác, bạn có thể đem những thẻ trên tay được bỏ đi trong giai đoạn này trả 1 thẻ lên tay của họ. Nếu làm như thế, bạn thu lấy những thẻ bị bỏ đi còn lại trong giai đoạn này.",
      },
    ],
    cau_noi:
      "Nội tu ngoại nhưỡng, cố chính an bang",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Dien_Vi: {
    title: "Điển Vi",
    the_luc: ["Ngụy"],
    sinh_luc: 2.5,
    danh_hieu: "Cổ Chí Ác Lai",
    ky_nang: [
      {
        ten: "Cường Tập",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thể chọn tự mất 1 sinh lực hoặc bỏ đi 1 thẻ bài [Vũ Khí], sau đó bạn chọn 1 người chơi khác nằm trong phạm vi công kích của bạn, bạn gây ra 1 sát thương đối với người đó.",
      },
    ],
    cau_noi:
      "Hở ! Thấy mùi vị phi kích của Vi gia gia của người thế nào?",
    hao_tuong: ["Tào Tháo"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Hua_Chu: {
    title: "Hứa Chử",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Hổ Si",
    ky_nang: [
      {
        ten: "Khỏa Y",
        mo_ta:
          "Kết thúc giai đoạn rút bài, bạn có thể bỏ đi 1 thẻ bài. Nếu làm như thế, cho đến khi hết lượt, bạn sử dụng [Sát] hoặc [Quyết Đấu] lên mục tiêu tạo thành sát thương, thì sát thương bạn gây ra cho họ +1.",
      },
    ],
    cau_noi:
      "Trông bộ dạng của nhà ngươi, ta có thế đánh 10 tên!",
    hao_tuong: ["Tào Tháo"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Hi_Chi_Tai: {
    title: "Hí Chí Tài",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Trù Vô Họa Hữu",
    ky_nang: [
      {
        loai:"Chủ Tướng Kỹ",
        ten: "Hắc Tiên",
        mo_ta:
          "Bắt đầu giai đoạn hành động, bạn có thể xem tất cả [Phó Tướng]  của người cùng thế lực, sau đó bạn lật úp hết thẻ [Phó Tướng] và tiến hành phân phối lại các thẻ đó.",
      },
      {
        ten: "Bạch Hậu",
        mo_ta:
          "Mỗi vòng chơi giới hạn mỗi người cùng thế lực 1 lần. Khi người cùng thế lực với bạn tiến hành lật mở thẻ tướng, sau kết toán, bạn có thể lệnh họ phát động 1 Kỹ năng (không có nhãn phân loại kỹ năng và bỏ qua thời điểm phát động) của tướng còn lại đang lật mở của họ.",
      },
    ],
    cau_noi:
      "Nhân sinh có số, thiên cơ bất khả lộ!",
    hao_tuong: ["Quách Gia"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Hua_Du: {
    title: "Hứa Du",
    the_luc: ["Ngụy", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Triều Tần Mộ Sở",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Thị Tài",
        mo_ta:
          "Sau khi bạn nhận sát thương, nếu như sát thương là:\n1, bạn rút 1 thẻ\nNhiều hơn 1, bạn bỏ 2 thẻ",
      },
      {
        ten: "Thành Lược",
        mo_ta:
          "Sau khi kết toán bài do 1 người cùng thế lực với bạn sử dụng, nếu số mục tiêu của thẻ đó lớn hơn 1, có thể lệnh họ rút 1 thẻ. Sau đó, nếu bạn đã nhận sát thương từ thẻ bài này, bạn có thể lệnh 1 người cùng thế lực với bạn không có tướng úp và chưa có tiêu ký nào nhận 1 tiêu ký [Khuyết Ngọc]",
      },
    ],
    cau_noi:
      "Trừ đi cân  tuyết trên người, thiên hạ ai có thế xứng với bộ y phục này!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Lo_1: {
    title: "Trương Lỗ",
    the_luc: ["Ngụy", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Chính Khoan Giáo Huệ",
    ky_nang: [
      {
        ten: "Bố Thí",
        mo_ta:
          "Sau khi bạn nhận 1 sát thương, bạn có thể rút 1 thẻ; Khi bạn gây sát thương cho người khác thế lực, họ có thể rút 1 thẻ, sau đó bạn rút 1 thẻ",
      },
      {
        ten: "Mễ Đạo",
        mo_ta:
          "Giai đoạn hành động người cùng thế lực bạn 1 lần, khi họ dùng thẻ [Sát] hoặc [Cẩm nang] loại gây sát thương (không chuyển hóa) chỉ định mục tiêu đầu tiên, họ có thể giao cho bạn 1 thẻ trên tay, nếu là bạn bỏ qua bước này, rồi lệnh bạn gọi tên 1 chất bài và 1 loại thuộc tính. Sau đó thẻ bài họ dùng có chất và thuộc tính bạn đã gọi tên.",
      },
    ],
    cau_noi:
      "Bố thí hành thiện, nãi đạo nghĩa chi bổn!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Luu_Yen: {
    title: "Lưu Yên",
    the_luc: ["Hán", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Liệt Thổ Chi Tông",
    ky_nang: [
      {
        ten: "Tự Phong",
        mo_ta:
          "Mỗi lượt giới hạn 1 lần, khi người khác sử dụng/ đánh ra thẻ [Né] phi chuyển hóa. Bạn có thể đem thẻ đó đặt lên vùng phán xét bản thân như [Lạc Bất Tư Thục] hoặc thu lấy thẻ [Lạc Bất Tư Thục] trong vùng phán xét của bạn lên tay.",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Cứ Hiểm",
        mo_ta:
          "Điều kiện phán xét của thẻ [Lạc Bất Tư Thục] trong vùng phán xét của bạn bị đảo ngược. Sau khi thẻ [Cẩm Nang] có thời gian lên bạn được kết toán, bạn chọn: rút 1 thẻ hoặc tự bỏ 1 thẻ đồng thời gây 1 sát thương lên 1 người khác do bạn chọn",
      },
    ],
    cau_noi:
      "Cứ thổ dưỡng long khí, phong quyển tam thiên lý!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Do_Du_2: {
    title: "Đỗ Dự",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Văn Thành Võ Đức",
    ky_nang: [
      {
        ten: "Gián Quốc",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thế chọn 1 mục:\n1. Lệnh 1 người rút 1 thẻ, sau đó họ bỏ đi 1 nửa lượng bài trên tay;\n2.  Lệnh 1 người bỏ 1 thẻ, sau đó họ rút số bài bằng một nửa lượng bài đang có trên tay (Làm tròn xuống và tối đa là 5)",
      },
      {
        ten: "Khuynh Thế",
        mo_ta:
          "Sau khi bạn sử dụng [Sát] hoặc bài [Cẩm Nang] chỉ định người khác trở thành mục tiêu, nếu bài này là thẻ lần thứ [X] bạn sử dụng trong lượt hiện tại, bạn có thể gây ra 1 sát thương lên 1 người trong số người chơi trở thành mục tiêu \n([X] là số thẻ bài trên tay của bạn)",
      },
    ],
    cau_noi:
      "Khiến rồng nuốt sông thành bình địa, kiếm chỉ đông nam định Giang Đông!",
    hao_tuong: ["Dương Hỗ"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Phi: {
    title: "Trương Phi",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Vạn Phu Bất Đương",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Bào Hao",
        mo_ta:
          "Bạn sử dụng thẻ [Sát] không giới hạn số lượng. Trong 1 lượt khi bạn sử dụng đến thẻ [Sát] thứ 2, bạn rút thêm 1 thẻ bài",
      },
    ],
    cau_noi:
      "Hổ lao tiêu yên khởi, trường bản thủy nghịch lưu!",
    hao_tuong: ["Lưu Bị"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Sa_Ma_Kha: {
    title: "Sa Ma Kha",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Ngũ Khê Man Vương",
    ky_nang: [
      {
        ten: "Tật Lê",
        mo_ta:
          "Trong 1 lượt của 1 người chơi, khi bạn sử dụng hoặc đánh ra thẻ bài. Nếu tổng số thẻ bạn sử dụng hoặc đánh ra trong lượt này là [X], bạn rút [X] thẻ bài. ([X] là phạm vi công kích của bạn).",
      },
    ],
    cau_noi:
      "Đoạt lấy vũ khí, thay Hán Hoàng đánh chúng thành dã nhân!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Vu_Cat: {
    title: "Vu Cát",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Hồn Nhiễu Tả Hữu",
    ky_nang: [
      {
        ten: "Thiên Huyễn",
        mo_ta:
          "Sau khi 1 người cùng thế lực nhận sát thương, bạn có thế đem 1 thẻ bài của bạn đặt lên trên võ tướng này, gọi là [Huyễn]. Nếu [Huyễn] đó trùng chất với thẻ trước đó thì bỏ nó đi. \nKhi bạn hoặc người cùng thế lực trở thành mục tiêu duy nhất của thẻ bài [Cơ Bản] hoặc [Cẩm Nang], bạn có thể đem 1 thẻ [Huyễn] đặt vào chồng bài bỏ, hủy bỏ nó",
      },
    ],
    cau_noi:
      "Mọi sự như không, ảo tượng phục sinh, Hồn bay khắp chốn, do ác mà sinh!",
    hao_tuong: ["Tả Từ"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Hoa_Da: {
    title: "Hoa Đà",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Thần Y",
    ky_nang: [
      {
        ten: "Cấp Cừu",
        mo_ta:
          "Ngoài lượt của bạn, bạn có thể sử dụng thẻ bài [sắc Đỏ] xem như [Đào].",
      },
      {
        ten: "Trừ Lệ",
        mo_ta:
          "Một lần trong giai đoạn hành động, nếu bạn có bài, bạn có thể chọn tối đa 3 người khác có bài và không cùng thế lực với nhau hoặc không có thế lực, sau đó bạn bỏ đi 1 thẻ bài của bạn và họ; Nếu theo cách này, khi kết toán kết thúc, người mất đi thẻ [chất Bích] được rút 1 thẻ.",
      },
    ],
    cau_noi:
      "Diệu thủ nhân tâm, được đảo  bệnh trừ!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Nguy_Dien: {
    title: "Ngụy Diên",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Thị Huyết Đích Độc Lang",
    ky_nang: [
      {
        ten: "Cuồng Cốt",
        mo_ta:
          "Sau khi bạn đối với 1 người chơi trong khoảng cách 1 tạo thành sát thương, bạn có thể chọn hồi phục 1 sinh lực hoặc rút 1 thẻ bài.",
      },
    ],
    cau_noi:
      "Phản cốt cuồng ngạo, chương hiển bản sắc!",
    hao_tuong: ["Hoàng Trung"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Lu_Pham: {
    title: "Lữ Phạm",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Trung Đốc Lượng Trực",
    ky_nang: [
      {
        ten: "Điều Độ",
        mo_ta:
          "Khi người cùng thế lực lần đầu sử dụng thẻ [Trang Bị] trong lượt, họ có thể rút 1 thẻ. Bắt đầu giai đoạn hành động, bạn có thể thu lấy 1 thẻ trong [vùng Trang Bị] của 1 người cùng thế lực, sau đó bạn có thể đem giao cho 1 người khác.",
      },
      {
        ten: "Điển Tài",
        mo_ta:
          "Kết thúc giai đoạn hành động của người khác, nếu trong giai đoạn này số bài bạn mất đi không nhỏ hơn số sinh lực của bạn, bạn có thể bổ sung bài trên tay đến bằng giới hạn sinh lực. Sau đó, nếu bạn chưa thay đổi [Phó Tướng], bạn có thể thay đổi [Phó Tướng] 1 lần.",
      },
    ],
    cau_noi:
      "Trị quân có đường lối mới có thế chiến thắng ngàn dậm!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chu_Thai: {
    title: "Chu Thái",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Thanh Trắc Trọng Thần",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Bất Khuất",
        mo_ta:
          "Khi bạn trong trạng thái hấp hối, bạn lật 1 thẻ từ chồng bài đặt lên tướng của bạn, gọi là thẻ [Sang]. Nếu thẻ [Sang] mới rút không cùng điểm với các thẻ [Sang] khác trên tướng, bạn hồi phục đến 1 điểm sinh lực; Nếu trùng, bạn đặt [Sang] này vào chồng bài bỏ.",
      },
      {
        ten: "Phấn Kích",
        mo_ta:
          "Giai đoạn kết thúc của 1 người chơi, nếu họ không có bài trên tay, bạn có thể lệnh họ rút 2 thẻ lên tay, sau đó bạn tự giảm 1 sinh lực.",
      },
    ],
    cau_noi:
      "Hóa thân thành thuẫn, hộ vệ Ngô chủ!",
    hao_tuong: ["Tôn Quyền", "Tưởng Khâm"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tu_Ma_Y: {
    title: "Tư Mã Ý",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Lang Cố Chi Quỷ",
    ky_nang: [
      {
        ten: "Phản Quỷ",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thể thu lấy 1 thẻ bài của nguồn gây ra sát thương.",
      },
      {
        ten: "Quỷ Tài",
        mo_ta:
          "Trước khi thẻ phán xét của 1 người chơi có hiệu lực, bạn có thể đánh ra 1 thẻ bài để thay thế thẻ phán xét đó.",
      },
    ],
    cau_noi:
      "Hiểu rõ địch nhân so với hiểu rõ bản thân thì càng quan trọng hơn!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ha_Hau_Don: {
    title: "Hạ Hầu Đôn",
    the_luc: ["Ngụy"],
    sinh_luc: 2.5,
    danh_hieu: "Độc Nhãn Đích La Sát",
    ky_nang: [
      {
        ten: "Cương Liệt",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thể tiến hành phán xét. Nếu thẻ phán xét không phải [chất Cơ], bạn lệnh nguồn sát thương lựa chọn 1 mục sau:\n1. Bỏ đi 2 thẻ bài trên tay;\n2. Nhận 1 điểm sát thương từ bạn.",
      },
    ],
    cau_noi:
      "Kẻ nào có gan dám tổn thương ta, ta hoàn trả gấp 10 lần!",
    hao_tuong: ["Hạ Hầu Uyên", "Vu Cấm"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Dao_Hoang: {
    title: "Đào Hoàng",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Quan Quân Tướng Quân",
    ky_nang: [
      {
        ten: "Lộ Dí",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thể lật mở 1 thẻ [Phi Cơ Bản] trên tay, lệnh 2 người khác tiến hành đấu điểm, người thắng thu lấy thẻ được lật mở.",
      },
      {
        ten: "Phá Phục",
        mo_ta:
          "Bạn có thể đem thẻ [Né] xem như [Vô Giải Khả Kích] để sử dụng, nếu như thẻ [Cẩm Nang phổ thông] bị vô hiệu chỉ định bạn là mục tiêu duy nhất. Sau kết toán, bạn lựa chọn 1 mục: \n1. Thu lấy thẻ [Cẩm Nang] đó; \n2. Gây 1 điểm sát thương lên người sử dụng.",
      },
    ],
    cau_noi:
      "Con đường phục hưng, tràn đầy ngang trái!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chu_Hoan: {
    title: "Chu Hoàn",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Trung Chân Cự Thiên Nhân",
    ky_nang: [
      {
        ten: "Cự Thiên",
        mo_ta:
          "Mỗi lượt 1 người chơi, mỗi mục giới hạn 1 lần, sau khi bạn gây sát thương cho 1 người khác, bạn có thế chọn 1 mục:\n1. Lệnh 1 người cùng thế lực với người nhận sát thương bỏ [X] thẻ trên tay ([X] là số thẻ họ vượt quá số sinh lực hiện tại, tối đa là 5).\n2. Lệnh 1 người cùng thế lực với bạn bổ sung bài bằng giới hạn sinh lực của họ.",
      },
    ],
    cau_noi:
      "Thế địch hung hãn, chỉ có thế dũng cảm đương đấu!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Thai_Mao_Truong_Doan: {
    title: "Thái Mạo & Trương Doãn",
    the_luc: ["Ngụy", "Quần"],
    sinh_luc: 2,
    danh_hieu: "Giao Hải Đằng Vân",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Trục Lưu",
        mo_ta:
          "Trong lượt của bạn, khi bạn xài liên tiếp:\n- 2 thẻ loại gây sát thương, bạn hồi phục 1 sinh lực;\n- 3 thẻ không gây sát thương và hồi phục,  bạn tự giảm 1 sinh lực, sau đó đặt lại bộ đếm này",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Điệp Lãng",
        mo_ta:
          "Khi thẻ [Sát] của bạn gây sát thương cho người chơi khác, nếu sinh lực của bạn  và họ bằng nhau, sát thương này +1",
      },
    ],
    cau_noi:
      "Thao luyện thủy quân, di nghênh Đông Ngô!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ma_Tac: {
    title: "Mã Tắc",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Duy Ác Kình Mưu",
    ky_nang: [
      {
        ten: "Tán Dao",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể bỏ đi 1 thẻ bài và chọn 1 người có sinh lực nhiều nhất, bạn gây 1 sát thương cho họ.",
      },
      {
        ten: "Chế Man",
        mo_ta:
          "Khi bạn gây sát thương cho 1 người chơi khác, bạn có thể chặn sát thương này lại. Nếu vậy, bạn thu lấy 1 thẻ bài trong [vùng Trang Bị] hoặc phán xét của họ. Nếu họ cùng thế lực, họ có thể thay đổi [Phó Tướng].",
      },
    ],
    cau_noi:
      "Hồi kỳ tri, an kỳ dân, nhi hậu quy tâm!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Duong_Uyen: {
    title: "Dương Uyển",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Dung Mạc Chi Li",
    ky_nang: [
      {
        ten: "Dụ Ngôn",
        mo_ta:
          "Trong lượt 1 lần, sau khi bài của bạn đi vào chồng bài bỏ do bạn bỏ đi, bạn có thể lật mở 4 thẻ đầu chồng bài rút. thu lấy những thẻ không cùng chất với thẻ bài bạn bỏ.",
      },
      {
        ten: "Truy Hoàn",
        mo_ta:
          "Giai đoạn kết thúc, bạn có thể chọn tối đa 2 người: lệnh 1 người nhận tiêu ký [Thương Hại], còn lại nhận [Khí Bài] (người chơi không được biết tiêu ký đã nhận). Cho đến lượt tiếp theo, nếu họ nhận sát thương, họ bỏ đi tiêu ký, nếu tiêu ký họ bỏ là:\nThương Hại: họ gây 1 sát thương cho nguồn.\nKhí Bài: nguồn sát thương bỏ 2 thẻ trên tay.",
      },
    ],
    cau_noi:
      "Phu quân nắm lấy thương, thành công báo thù mối hận!",
    hao_tuong: ["Mã Siêu"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ky_Linh: {
    title: "Kỷ Linh",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Trọng Gia Đích Chủ Tướng",
    ky_nang: [
      {
        ten: "Song Nhận",
        mo_ta:
          "Bắt đầu giai đoạn hành động, bạn có thế đấu điểm với 1 người khác. Nếu bạn thắng, xem như bạn đã sử dụng 1 thẻ [Sát] Ào lên tuỳ ý người chơi có cùng thế lực với người đó làm mục tiêu (thẻ [Sát] này không tính vào giới hạn sử dụng [Sát] trong lượt); Nếu không thắng, lượt này bạn không thế sử dụng bài lên người khác.",
      },
    ],
    cau_noi:
      "Trọng quốc đại tướng Kỷ Linh tại đây, nếm thử tam tiêm lưỡng nhận đao!",
    hao_tuong: ["Viên Thuật"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Nguyen_Tich: {
    title: "Nguyễn Tịch",
    the_luc: ["Tấn", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Cô Hồng Dạ Bồi",
    ky_nang: [
      {
        ten: "Hành Thận",
        mo_ta:
          "Khi người cùng thế lực với bạn nhận sát thương, bạn có thể rút 1 thẻ và bỏ cùng lúc 2 thẻ.",
      },
      {
        ten: "Ly Thương",
        mo_ta:
          "Khi thẻ bài loại gây sát thương chỉ định mục tiêu, nếu số thẻ chất ... tiến vào chồng bài bỏ lượt này lớn hơn 1, bạn có thế triệt tiêu số mục tiêu tuỳ ý của thẻ bài đó. Sau đó người chơi đang có lượt có thể lệnh bạn xem như rời khỏi trò chơi cho đến hết lượt hiện tại.",
      },
    ],
    cau_noi:
      "Ta bối chiêu chiêu, chính thủy chi âm hạo dãng!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Luu_Phu_Nhan: {
    title: "Lưu Phu Nhân",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Khốc Đố Đích Hải Đường",
    ky_nang: [
      {
        ten: "Truy Đố",
        mo_ta:
          "Một lần trong giai đoạn hành động, khi bạn gây sát thương cho 1 người chơi, bạn có thể lệnh họ chọn 1 mục: \n1. Sát thương này +1; \n2. Tự bỏ tất cả bài trong [khu Trang Bị] (tối thiểu là 1). Nếu người đó là [Nữ], bạn có thể bỏ 1 thẻ bài, lệnh họ theo thứ tự chấp hành cả 2 mục.",
      },
      {
        loai:"Hạn Định Kỹ",
        ten: "Kỳ Cung",
        mo_ta:
          "Khi bạn rơi vào trạng thái hấp hối ngoài lượt của bạn, bạn có thể di trừ đi [Phó Tướng] của bạn, sau đó lệnh người đang có lượt chọn 1 mục:\n1. Họ nhận 1 kỹ năng không có nhãn loại hình kỹ năng của tướng di trừ, sau đó bạn hồi sinh lực đến tối đa; \n2. Bạn hồi 1 sinh lực. (kỹ năng không có chữ Kỹ, VD: Tỏa Định Kỹ, Trận Pháp Kỹ)",
      },
    ],
    cau_noi:
      "Phàm gặp nữ tử, tuyệt bất lưu tình!",
    hao_tuong: ["Viên Thiệu"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ma_Huu_Ma_Thiet: {
    title: "Mã Hưu & Mã Thiết",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Tru Can Nghĩa Tôn",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Mã Thuật",
        mo_ta:
          "Bạn tính toán khoảng cách với người khác -1.",
      },
      {
        ten: "Khẩn Thương",
        mo_ta:
          "Bạn có thể đem tuỳ ý số thẻ bài sử dụng như [Sát] và có thể sửa mục tiêu của [Sát] này thành tất cả người chơi không nằm trong phạm vi công kích của bạn, sau đó khi [Sát] này kết toán kết thúc, nếu tổng số thẻ đã dùng theo cách này lớn hơn [X], bạn rút [X] thẻ ([X] là số sát thương gây ra bởi [Sát] này); nếu không bạn lựa chọn mất đi 1 kỹ năng của thẻ tướng này.",
      },
    ],
    cau_noi:
      "Chọn binh tuyển tướng, nhất kích đã quét sạch!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ly_Phong: {
    title: "Lý Phong",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Kế Phụ Tận Sự",
    ky_nang: [
      {
        ten: "Truân Trữ",
        mo_ta:
          "Giai đoạn rút bài, bạn có thể rút thêm 2 thẻ bài. Sau đó, bạn đặt từ 1 đến 2 thẻ trên tay lên tướng, gọi là [Lương]. Nếu bạn làm thế, trong lượt này bạn không thể sử dụng [Sát].",
      },
      {
        ten: "Thâu Lương",
        mo_ta:
          "Giai đoạn kết thúc của 1 người chơi cùng thế lực với bạn, nếu khoảng cách giữa bạn và họ không lớn hơn [X] ([X] là số thẻ [Lương] đặt trên tướng này), bạn có thế di trừ 1 [Lương], lệnh họ rút 2 thẻ bài.",
      },
    ],
    cau_noi:
      "Quản đốn lương thảo, mới có thế đối kháng lâu dài!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Luc_Uc_Sinh_2: {
    title: "Lục Úc Sinh",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Nghĩa Cô",
    ky_nang: [
      {
        ten: "Trinh Đặc",
        mo_ta:
          "Mỗi lượt chơi mỗi người 1 lần, sau khi bạn trở thành mục tiêu người khác dùng bài [sắc Đen] ([Cơ Bản] hoặc [Cẩm Nang] phổ thông), bạn có thể lệnh người dùng bài này chọn 1 mục : \n1. Lượt này không thể tiếp tục dùng bài có cùng màu này; \n2. Thẻ bài này vô hiệu với bạn.",
      },
      {
        ten: "Chí Vi",
        mo_ta:
          "Khi bạn lật mở thẻ tướng bài này, bạn chọn 1 người chơi khác. Sau khi người đó gây sát thương, bạn rút 1 thẻ bài; Sau khi người đó nhận sát thương, bạn bỏ đi ngẫu nhiên 1 thẻ bài trên tay. Bài bỏ trong giai đoạn bỏ bài của bạn người đó đều thu lấy hết. Khi người đó trận vong, nếu bạn đang lật mở cả 2 thẻ tướng, bạn lật úp thẻ tướng này.",
      },
    ],
    cau_noi:
      "Thệ nhi bất hứa, nghĩa tâm cố vu kim thạch!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Thai_Su_Tu: {
    title: "Thái Sử Từ",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Đốc Liệt Chí Sĩ",
    ky_nang: [
      {
        ten: "Thiên Nghĩa",
        mo_ta:
          "Giai đoạn hành động 1 lần, Bạn có thế đầu điểm với 1 người khác. Nếu bạn thắng, lượt này bạn sử dụng thẻ [Sát] không giới hạn khoảng cách, giới hạn số lần sử dụng và số mục tiêu của thẻ [Sát] +1; nếu bạn không thắng, bạn không thể sử dụng thẻ [Sát] cho đến khi kết thúc lượt.",
      },
      {
        ten: "Hàm Chiến",
        mo_ta:
          "Sau khi bạn đấu điểm, người không tắng có thể thu lấy 1 thẻ trong vùng trang bị của người còn lại.",
      },
    ],
    cau_noi:
      "Tín nghĩa vi tiên, báo ân vi tắc",
    hao_tuong: ["Tôn Sách"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Khuong_Duy: {
    title: "Khương Duy",
    the_luc: ["Thục"],
    sinh_luc: 0,
    danh_hieu: "Long Đích Y Bát",
    ky_nang: [
      {
        ten: "Khiêu Hấn",
        mo_ta:
          "Giai đoạn hành động 1 lần. Bạn có thể lệnh cho 1 người khác có phạm vi công kích đến bạn sử dụng [Sát] lên bạn, nếu không bạn bỏ đi 1 thẻ bài của họ.",
      },
      {
        loai:["Chủ Tướng Kỹ","Trận Pháp Kỹ"],
        ten: "Thiên Phúc",
        mo_ta:
          "Trong lượt của những người chơi có quan hệ đội hình của bạn, bạn nhận kỹ năng [Khán Phá] (Khổng Minh).",
      },
      {
        loai:"Phó Tướng Kỹ",
        ten: "Di Chí",
        mo_ta:
          "(-0.5 sinh lực) Nếu [Chủ Tướng] của bạn có [Quan Tinh] (Gia Cát Lượng), kỹ năng này sửa số thẻ xem luôn là 5; Nếu không, bạn nhận kỹ năng này.",
      },
    ],
    cau_noi:
      "Bắc định trung nguyên, khôi phục Hán thất!",
    hao_tuong: ["Gia Cát Lượng"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Lieu_Hoa: {
    title: "Liêu Hóa",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Lịch Kinh Thương Tang",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Đương Tiên",
        mo_ta:
          "Khi bạn lần đầu lật mở thẻ tướng này, bạn thu lấy 1 tiêu ký [Tiên Phong]; Khi bắt đầu lượt chơi của bạn, bạn chấp hành thêm 1 giai đoạn hành động.",
      },
    ],
    cau_noi:
      "Nhất mã dương tiên, phấn đúng sát địch!",
    hao_tuong: ["Quan Vũ"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Huong_Lang: {
    title: "Hướng Lãng",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Giáo Thư Huyên Phiên",
    ky_nang: [
      {
        ten: "Khám Tập",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thể lật mở hết bài trên tay bạn, nếu mỗi thẻ bài có chất khác nhau, bạn rút 2 thẻ, sau đó nếu bởi vậy các thẻ trên tay bạn đủ 4 chất, bạn bỏ qua giai đoạn bỏ bài lượt này.",
      },
      {
        ten: "Khiêm Chính",
        mo_ta:
          "Mỗi lượt 1 người giới hạn 1 lần, khi bạn trở thành mục tiêu của thẻ [Cẩm Nang Phổ Thông] hoặc [Sát] do người khác sử dụng, bạn có thể [Trọng Chú] 2 thẻ; nếu những thẻ [Trọng Chú] này khác loại với thẻ họ sử dụng, sau khi thẻ đó kết toán xong và đi vào chồng bài bỏ, bạn có thể thu lấy thẻ đó.",
      },
    ],
    cau_noi:
      "Thế gian học vấn, giai tài điển biên chi thượng!",
    hao_tuong: ["…."],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ton_Thuong_Huong: {
    title: "Tôn Thượng Hương",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Cung Kiêu Cơ",
    ky_nang: [
      {
        ten: "Kiêu Cơ",
        mo_ta:
          "Khi bạn trong 1 lần mất đi thẻ bài trong khu vực [Trang Bị], Nếu đang trong lượt của bạn, bạn rút 1 thẻ; Nếu không phải trong lượt của bạn, bạn rút 3 thẻ.",
      },
      {
        ten: "Kết Nhân",
        mo_ta:
          "Một lần trong giai đoạn hành động, bạn có thể bỏ đi 2 thẻ bài trên tay và chọn 1 võ tướng [Nam] khác đang bị thương, bạn cùng họ hồi phục 1 sinh lực.",
      },
    ],
    cau_noi:
      "Ai bảo nữ nhân không thế so với đàn ông!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tuong_Uyen_Phi_Y: {
    title: "Tưởng Uyển & Phí Y",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Xã Tắc Cổ Quăng",
    ky_nang: [
      {
        ten: "Sinh Tức",
        mo_ta:
          "Giai đoạn kết thúc, nếu trong lượt này bạn không gây ra sát thương, bạn có thể rút 2 thẻ bài.",
      },
      {
        ten: "Thủ Thành",
        mo_ta:
          "Khi 1 người chơi cùng thế lực mất đi thẻ bài cuối cùng trên tay ngoài lượt, bạn có thế lệnh cho họ rút 1 thẻ bài.",
      },
    ],
    cau_noi:
      "Quốc thái dân an, mưa thuận gió hòa!",
    hao_tuong: ["Gia Cát Lượng & Vương Bình"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Toan_Tong: {
    title: "Toàn Tông",
    the_luc: ["Ngô"],
    sinh_luc: 2,
    danh_hieu: "Ngô Mộ Thế Diệu Tộc",
    ky_nang: [
      {
        loai:"Phó Tướng Kỹ",
        ten: "Thân Trọng",
        mo_ta:
          "Bắt đầu lượt chơi của bạn, bạn có thế tiến hành hoán đối [Phó Tướng] với 1 người khác cùng thế lực.",
      },
      {
        ten: "Chiêu Phụ",
        mo_ta:
          "Bắt đầu giai đoạn hành động, nếu trên bàn chơi không có nhiều hơn 2 [Thưởng], bạn có thể bỏ 1 thẻ và lệnh 1 người khác nhận tiêu ký [Thưởng]. Sau khi người có [Thưởng] kết toán xong thẻ [Cơ Bản] / ]Cẩm Nang phổ thông] họ sử dụng, nếu bạn phù hợp với điều kiện sử dụng thẻ đó (bỏ qua thời điểm sử dụng), bạn có thể bỏ đi 1 [Thưởng], xem như bạn sử dụng thẻ đó.",
      },
    ],
    cau_noi:
      "Lương thực sung túc, không sầu quốc vận!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Tac: {
    title: "Trương Tắc",
    the_luc: ["Quần"],
    sinh_luc: 2,
    danh_hieu: "Ngọa Hổ",
    ky_nang: [
      {
        ten: "Tức Tuy",
        mo_ta:
          "Một lần mỗi vòng, ứng với mỗi lựa chọn, khi bạn nhận sát thương, bạn có thể lật mở số thẻ trên tay tuỳ ý và lệnh nguồn sát thương chọn 1 mục:\n1. Chặn sát thương này, sau đó họ đem số thẻ này tuỳ ý phân phát cho người khác. \n2. Mở ra tất cả bài trên tay, sau đó bỏ tất cả bài có cùng chất với thẻ đó, nếu làm vậy, bạn rút 1 thẻ.",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Thanh Khắc",
        mo_ta:
          "Khi người khác thu lấy bài của bạn, họ phải để lộ những thẻ này (lật mở). Khi 1 người mất thẻ để lộ cuối cùng trên tay, bạn lệnh họ rút 1 thẻ hoặc bỏ đi 1 thẻ.",
      },
    ],
    cau_noi:
      "Hổ nằm chờ mồi, chỉ chờ thời cơ! ",
    hao_tuong: ["Trần Huệ Khiêm"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tran_Hue_Khiem: {
    title: "Trần Huệ Khiêm",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Triết Liệt",
    ky_nang: [
      {
        ten: "Đức Giáo",
        mo_ta:
          "Mỗi lượt 1 lần với mỗi người chơi, khi 1 người chơi nhận sát thương, nếu đây là lần thứ 2 họ nhận sát thương trong cùng 1 lượt hoặc sát thương này lớn hơn 1, bạn có thể lệnh cho sát thương này -1. Nếu làm vậy, nguồn của sát thương hồi phục 1 sinh lực",
      },
      {
        ten: "Giới Hư",
        mo_ta:
          "Sau khi người khác sử dụng thẻ chuyển hóa hoặc bài ảo, hoặc sau khi 1 người khác hồi phục sinh lực không thông qua bài sử dụng, bạn có thế lật mở 1 thẻ trên tay họ, sau đó bạn có thể lật mở 1 thẻ trên tay cùng chất với thẻ đó, nếu làm vậy, bạn rút 1 thẻ",
      },
    ],
    cau_noi:
      "Triết lý cương liệt, thông tuệ ám minh! ",
    hao_tuong: ["Trương Tắc"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Vuong_Dao_Vuong_Duyet: {
    title: "Vương Đào & Vương Duyệt",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Đao Sai Tịnh Vũ",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Xu Doanh",
        mo_ta:
          "Phạm vi công kích và giới hạn trữ bài của bạn +1. Khi xét quan hệ trận pháp, bạn được tính là 2 người ngồi liền kề nhau.",
      },
      {
        loai:"Trận Pháp Kỹ",
        ten: "Hổ Dực",
        mo_ta:
          "Một lần mỗi lượt đối với mỗi người, sau khi kết toán thẻ [Sát] do người cùng đội hình với bạn sử dụng, nếu mục tiêu có người khác cùng thế lực tạo đội hình liền kề, thì bạn có thể dùng thêm 1 thẻ [Sát] (không tính vào số lần sử dụng trong lượt) lên 1 người khác ở hàng liền kề đó.",
      },
    ],
    cau_noi:
      "Hoa rơi trong sân xuân, gặp người lòng ta rung động! ",
    hao_tuong: ["Quan Sách", "Quan Ngân Binh"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chu_Cu: {
    title: "Chu Cư",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Thiệt Tước Thần Ngạnh",
    ky_nang: [
      {
        ten: "Lương Chấp",
        mo_ta:
          "Một lần mỗi lượt đối với mỗi người, bạn sử dụng thẻ bài [Cơ Bản] hoặc [Cẩm Nang phổ thông], bạn có thể chỉ định thêm 1 người chơi có tướng úp trở thành mục tiêu của thẻ này. Sau khi kết toán, họ có thể mở 1 thẻ tướng và chọn:\n1. Bỏ 1 thẻ, xem như sử dụng 1 [Sát] lên bạn;\n Rút 1 thẻ, xem như sử dụng 1 [Đào] lên bạn.",
      },
      {
        ten: "Từ Chính",
        mo_ta:
          "Một lần mỗi vòng, đầu mỗi giai đoạn hành động của người khác, nếu sinh lực của họ bé hơn hoặc bằng bạn, bạn có thể bỏ 1 thẻ và tiến thành [Hiến Sách] cho họ. Giai đoạn hành động của họ, họ chọn:\n1. Cưỡng chế 1 người khác không cùng thế lực với họ chấp hành quân lệnh;\n 2. Bỏ [Quân lệnh] này và bỏ qua giai đoạn bỏ bài của lượt này",
      },
    ],
    cau_noi:
      "Cố quyết tiến quân, không hẹn với non sông! ",
    hao_tuong: ["Tôn Lỗ Dục"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ton_Lo_Duc: {
    title: "Tôn Lỗ Dục",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Nhị Cung Đường Yến",
    ky_nang: [
      {
        ten: "Mục Mục",
        mo_ta:
          "Khi bạn trở thành mục tiêu của thẻ bài đa mục tiêu, nếu bạn:\n1. Liền kề với người sử dụng, bạn có thể bỏ 1 thẻ của họ hoặc lệnh họ rút 1 thẻ;\n 2. Không liền kề với người sử dụng, bạn có thẻ bỏ 1 thẻ, huỷ bỏ 1 mục tiêu của thẻ này.",
      },
      {
        ten: "Biệt Bão",
        mo_ta:
          "Sau khi bạn mất bài trong vùng trang bị, bạn có thể cùng với 1 người cùng thế lực hoán đổi [Phó Tướng], sau đó bạn có thể lệnh 1 người chơi có sinh lực thấp nhất trên bàn chơi hồi phục 1 sinh lực.",
      },
    ],
    cau_noi:
      "Gió thoảng mang hương phấn, bóng nàng soi hoa bên nước!",
    hao_tuong: ["Chu Cư"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tao_Thuc: {
    title: "Tào Thực",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Bạch Mã Lạc Nính",
    ky_nang: [
      {
        ten: "Lâm Lang",
        mo_ta:
          "Sau khi thẻ phán xét có hiệu lực, nếu thẻ đó là [Cẩm Nang], bạn có thể lựa chọn: \n1 Sau khi thẻ này tiến vào chồng bài bỏ, bạn thu lên tay; \n2. Di chuyển 1 thẻ trên bàn chơi có cùng màu với thẻ phán xét đó.",
      },
      {
        ten: "Lạc Anh",
        mo_ta:
          "Sau khi bạn giải chồng tướng, bạn có thể tiến hành phán xét, Nếu thẻ đó chất ..., khi kết thúc lượt hiện tại bạn nhận ngay 1 lượt chơi chỉ có giai đoạn hành động. Sau khi bạn nhận sát thương, bạn có thể rút [X] thẻ đồng thời thay đổi trạng thái chồng tướng ([X] là sinh lực đã mất của bạn).",
      },
    ],
    cau_noi:
      "Hoa rơi trên giấy trắng, bút vung như trời khéo! ",
    hao_tuong: ["Thôi Phi", "Dương Tu"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Thoi_Phi: {
    title: "Thôi Phi",
    the_luc: ["Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Cẩm Thước Cứ Tật",
    ky_nang: [
      {
        ten: "Y Tú",
        mo_ta:
          "Sau khi bạn nhận được thẻ bài, bạn có thể lật mở thẻ đó đồng thời có thể sử dụng bất kỳ số lượng thẻ [Trang Bị] nào trong đó, sau đó rút thêm bài bằng số thẻ đã dùng.",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Nhã Thương",
        mo_ta:
          "Sau khi bạn nhận sát thương, nếu nguồn sát thương: \n- Khác thế lực, họ phải bỏ bài trên tay cho đến khi còn [X] thẻ;\n- Cùng thế lực, bạn phải bỏ bài trên tay cho đến khi còn [X] thẻ. \nNếu bằng cách này không có ai bỏ bài, bên còn lại bổ sung bài trên tay đến [X] ([X] là số [vùng Trang Bị] trống của bạn).",
      },
    ],
    cau_noi:
      "Thiếp sinh trong nhà nghìn vàng, lẽ xứng đôi cùng bậc ngự giá vạn cỗ! ",
    hao_tuong: ["Tào Thực"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Quan_Sach: {
    title: "Quan Sách",
    the_luc: ["Thục"],
    sinh_luc: 2,
    danh_hieu: "Long Doanh Trâm Hoa",
    ky_nang: [
      {
        ten: "Chính Phong",
        mo_ta:
          "Giai đoạn chuẩn bị của người cùng thế lực, bạn có thể sử dụng 1 thẻ [Sát].",
      },
      {
        loai:"Chủ Tướng Kỹ",
        ten: "Lữ Tiến",
        mo_ta:
          "Một lần mỗi lượt đối với mỗi người, sau khi thẻ [Sát] của bạn gây ra sát thương, bạn có thể giao thẻ [Sát] này cho 1 người khác, nếu họ là [Nữ], họ nhận 1 tiêu ký [Khuyết Ngọc].",
      },
      {
        loai:"Phó Tướng Kỹ",
        ten: "Mộ Dưỡng",
        mo_ta:
          "(-0.5 sinh lực) Giai đoạn kết thúc, bạn có thể mở ra 2 thẻ trên đầu chồng bài rút, thu lấy bài [sắc Đỏ] và thẻ [Sát] trong số đó.",
      },
    ],
    cau_noi:
      "Một mình giữ Nam Quan, tung hoành khắp địch thủ mà chưa dùng hết sức!",
    hao_tuong: ["Vương Đào & Vương Duyệt"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Vuong_Lang: {
    title: "Vương Lăng",
    the_luc: ["Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Phong Tiết Khách Thượng",
    ky_nang: [
      {
        ten: "Bí Bị",
        mo_ta:
          "Giai đoạn chuẩn bị, nếu số thẻ trên tay bạn không phải là nhiều nhất bàn chơi, bạn chọn 1 người có bài trên tay nhiều nhất lệnh bạn chấp hành 1 [Quân Lệnh]. Sau khi bạn: \n1. Chấp hành [Quân Lệnh], bạn bổ sung bài trên tay đến [X] thẻ ([X] là số thẻ của họ, tối đa 5 thẻ); \n2. Không chấp hành [Quân Lệnh], bạn mở ra từ 1 đến 3 thẻ trên tay cho đến khi lượt này kết thúc, gọi là [Bí Bị];\nMỗi lượt giới hạn 1 lần, bạn có thể đem 1 thẻ [Bí Bị] sử dụng như 1 thẻ [Bí Bị] khác (giới hạn là thẻ [Cơ Bản] hoặc [Cẩm Nang phổ thông]).",
      },
    ],
    cau_noi:
      "Chủ thượng âm nhược, nên lựa minh chủ thị chi!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Tu_Ma_Huy: {
    title: "Tư Mã Huy",
    the_luc: ["Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Thủy Kính Tiên Sinh",
    ky_nang: [
      {
        ten: "Tiến Kiệt",
        mo_ta:
          "1. Khi bạn lần đầu lật mở thẻ tướng này, bạn có thế chọn 1 người chơi, lệnh họ nhận 1 tiêu ký [Long/ Phượng Ấn]\n2. Khi bạn lần đầu thoát khỏi trạng thái hấp hối, bạn có thể chọn 1 người chưa có [Long/ Phượng Ấn], lệnh họ thu lấy tiêu ký còn lại\n3. Nếu như trên bàn chơi có 2 người khác có kỹ năng [Hỏa Kế] và [Liên Hoàn], bạn có thể cưỡng chế họ cùng bạn tạo thành 1 thế lực [Dã Tâm Gia] mới",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Ẩn Sĩ",
        mo_ta:
          "Một lần mỗi lượt, nếu [vùng phòng cụ] của bạn đang trống, sát thương đầu tiên bạn nhận từ người chơi có tiêu ký [Long/ Phượng Ấn] trong lượt này -1\n2. Sau khi bạn cùng 1 lúc mất/ bỏ đi 2 thẻ bài, bạn rút 1 thẻ",
      },
    ],
    cau_noi:
      "Thu phục được cả hai kỳ tài, ắt định được giang  sơn!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Hoang_Thua_Ngan: {
    title: "Hoàng Thừa Ngạn",
    the_luc: ["Quần", "Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Phùng Nguyệt Cộng Minh",
    ky_nang: [
      {
        ten: "Giải Trận",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn chọn 1 thẻ tướng đã lật mở của 1 người khác, lệnh cho họ thu kỹ năng [Bát Trận] và tất cả kỹ năng trừ [Tỏa Định Kỹ] của họ đều bị vô hiệu cho đến hết lượt này, sau đó bạn thu lấy 1 thẻ của họ.",
      },
      {
        loai:"Tỏa Định Kỹ",
        ten: "Ẩn Thế",
        mo_ta:
          "Một lần mỗi lượt, sau khi bạn lần đầu nhận sát thương, nếu sát thương này từ thẻ bài [Vô Sắc] hoặc sát thương này không đến từ bài trong trò chơi, bạn buộc bỏ 1 thẻ sau đó chặn sát thương này. Khi trên bàn có người tiến hành phán xét [Bát Quái Trận], bạn thu lấy thẻ phán xét có hiệu lực của họ.",
      },
    ],
    cau_noi:
      "Nam Dương có Ngọa Long, sánh đôi được với Bạch Nguyệt Quang nha ta!",
    hao_tuong: ["Hoàng Nguyệt Anh"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chu_Quan: {
    title: "Chu Quần",
    the_luc: ["Quần", "Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Thiên Sấm Triệu Nhân",
    ky_nang: [
      {
        ten: "Vận Chuyển",
        mo_ta:
          "Khi tướng này lần đầu được lật mở, hoặc bạn gây ra sát thương, bạn lấy hai/một thẻ từ đỉnh chồng bài và đặt úp lên thẻ tướng của bạn, gọi là [Xăm] (tối đa 6 thẻ). Sau khi bạn nhận sát thương, bạn có thể hoán đổi 1 thẻ trên tay với 1 thẻ [Xăm].",
      },
      {
        ten: "Cầu Sâm",
        mo_ta:
          "Giai đoạn hành động, bạn có thế bỏ đi 4 thẻ [Xăm] sau đó chọn 1 người chơi khác, bạn gây 1 sát thương cho họ và đồng thời thu lấy 1 tiêu ký [Kỳ Nhân]. Nếu trong cùng 1 lượt bạn phát động Kỹ năng này lần thứ 3, bạn tự giảm 1 sinh lực và vô hiệu Kỹ năng này đến hết lượt.",
      },
    ],
    cau_noi:
      "Thủy Hoàng biến long khí nhi tuần thủ thiên hạ!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Dong_Phu: {
    title: "Đổng Phù",
    the_luc: ["Quần", "Hán"],
    sinh_luc: 2,
    danh_hieu: "Cứu Cực Thu Hào",
    ky_nang: [
      {
        ten: "Vọng Khí",
        mo_ta:
          "Mỗi lượt một lần, khi một nhân vật thuộc [Đại Thế Lực] khác rút bài ngoài lượt của họ, bạn có thể rút 1 thẻ bài. Nếu bạn rút bài bởi kỹ năng này trong lượt của bạn, sửa thành 2 thẻ.",
      },
      {
        ten: "Phân Dã",
        mo_ta:
          "Giai đoạn chuẩn bị, nếu thế lực của bạn không là [Đại Thế Lực], bạn có thể chọn 1 người khác không cùng thế lực/Ẩn Danh, lệnh họ trở thành người thuộc [Đại Thế Lực] cho đến hết lượt này, sau đó lệnh họ rút 1 thẻ. Khi kết thúc lượt, nếu người rút bài đó là người duy nhất còn sống của thế lực, bạn có thế lệnh họ trở thành [Dã Tâm Gia] và tự giảm 1 sinh lực.",
      },
    ],
    cau_noi:
      "Mậu An, nơi này khí tượng thế nào?",
    hao_tuong: ["Lưu Yên"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Thuy_Chu: {
    title: "Thùy Chu",
    the_luc: ["Thục", "Tấn", "Hán"],
    sinh_luc: 1.5,
    danh_hieu: "Sấm Tinh Trầm Tộ",
    ky_nang: [
      {
        ten: "Trí Mệnh",
        mo_ta:
          "Bắt đầu giai đoạn chuẩn bị và bắt đầu giai đoạn bỏ bài, bạn có thế rút 1 thẻ và đặt 1 thẻ trên tay lên đầu chồng bài rút.",
      },
      {
        ten: "Tương Tức",
        mo_ta:
          "Bắt đầu giai đoạn hành động giới hạn hạn 1 lần, bạn có thể xem tất cả bài trên tay của 1 người khác đồng thời chọn lật mở 1 thẻ của họ cho đến hết lượt này. Dựa vào thẻ lật mở đó, bạn chọn 1 người chơi lệnh họ nhận lấy hiệu quả tương ứng:\n1. [sắc Đỏ], họ hồi phục 1 sinh lực và giảm 1 lần dùng [Sát];\n2. [sắc Đen], họ tăng 1 lần dùng [Sát] và bạn rút 1 thẻ bài.",
      },
    ],
    cau_noi:
      "Người đời sau ất chỉ nhớ tội khuyên hàng, quên công cứu dân toàn mạng!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chu_Nhien: {
    title: "Chu Nhiên",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Bất Động Chi Đốc",
    ky_nang: [
      {
        ten: "Đảm Thủ",
        mo_ta:
          "Một lần trong mỗi vòng chơi, giai đoạn chuẩn bị của 1 người, bạn có thể bỏ tất cả thẻ trong [vùng chơi] (tối thiểu là 1). Đầu mỗi giai đoạn trong lượt đó, trừ giai đoạn chuẩn bị và kết thúc, nếu bài trên tay bạn bé hơn hoặc bằng [X] ([X] là số bài bạn bỏ bằng cách này), bạn rút 1 thẻ bài hoặc lệnh cho số thẻ rút từ [Đảm Thủ] lượt này +1. Sau khi bạn rút ít nhất 4 thẻ cùng lúc từ [Đàm Thủ], bạn có thể gây 1 sát thương cho người đang có lượt",
      },
    ],
    cau_noi:
      "Cứu thành nguy nan, ta quyết phải tận toàn lực",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_Ky_Anh: {
    title: "Trương Kỳ Anh",
    the_luc: ["Ngụy", "Quần"],
    sinh_luc: 1.5,
    danh_hieu: "Nhương Đảo Tây Đông",
    ky_nang: [
      {
        ten: "Chân Nghi",
        mo_ta:
          "Giai đoạn hành động giới hạn 2 lần, khi bạn sử dụng 1 thẻ bài, nếu trên tướng này chưa có thẻ [Pháp Lục] cùng chất với thẻ được sử dụng, sau kết toán bạn có thế đặt thẻ đó lên thẻ tướng này, gọi là [Pháp Lục]. Khi trên tướng này có tối thiểu 2 [Pháp Lục], thẻ phân loại sát thương đầu tiên do bạn sử dụng có thể tuỳ ý lựa chọn 1 thuộc tính bất kỳ",
      },
      {
        ten: "Điểm Hóa",
        mo_ta:
          "Một lần trong giai đoạn hành động của người cùng thế lực, bạn/họ có thể di trừ 1 thẻ [Pháp Lục] của bạn, sau đó bạn họ sở hữu kỹ năng [trừ Tỏa Định Kỹ] của 1 [Trang Bị] trên bàn chơi có cùng chất với thẻ [Pháp Lục] bị di trừ cho đến hết lượt.",
      },
    ],
    cau_noi:
      "Một pháp dẫn thiên khí, một lòng mộ tiên hiền, một tay điểm hóa muôn linh!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Gia_Cat_Qua: {
    title: "Gia Cát Quả",
    the_luc: ["Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Phượng Cát Thừa Yên",
    ky_nang: [
      {
        loai:"Luân Thứ Kỹ",
        ten: "Kỳ Nhương",
        mo_ta:
          "Bắt đầu giai đoạn hành động của người cùng thế lực, bạn có thể xem 3 thẻ trên chồng bài rút, sau đó chọn 1 thẻ để công khai, rồi bí mật sắp xếp vào trong 3 thẻ đó và đặt tuỳ ý trên/dưới chồng bài rút. Khi lượt này kết thúc, bạn rút 1 thẻ và công khai nó; Nếu không trùng với thẻ bạn đã đặt vào, bạn rút thêm 1 thẻ.",
      },
      {
        ten: "Vũ Hóa",
        mo_ta:
          "Khi bạn trở thành mục tiêu của thẻ bài do người khác sử dụng, nếu trong lượt này bạn đã từng mất bài, bạn có thể tiến hành phán xét: nếu kết quả là chất..., hủy bỏ thẻ bài đó đối với bạn.",
      },
    ],
    cau_noi:
      "Âm nhạc cảm thiên địa, nhưng tri âm thưa thớt!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Luu_Tan: {
    title: "Lưu Tấn",
    the_luc: ["Hán", "Ngô"],
    sinh_luc: 2,
    danh_hieu: "Chí Tháo Thù Dị",
    ky_nang: [
      {
        ten: "Chủy Nghĩa",
        mo_ta:
          "Giai đoạn kết thúc của 1 người chơi khác, bạn có thể tự giảm 1 sinh lực, rồi sử dụng 1 thẻ bài như bất kỳ thẻ gây sát thương nào trong lượt đó từng bị triệt tiêu/ vô hiệu. Sau đó, nếu thẻ bạn dùng theo cách này gây được sát thương, bạn hồi 1 sinh lực.",
      },
    ],
    cau_noi:
      "Xông pha không ngớt, bước bước theo kịp quân hàng!'",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ton_Lang: {
    title: "Tôn Lang",
    the_luc: ["Hán", "Thục"],
    sinh_luc: 2,
    danh_hieu: "Thoán Hiền Thủ Lương",
    ky_nang: [
      {
        ten: "Kháng Dịch",
        mo_ta:
          "Mỗi lượt, với mỗi người cùng thế lực giới hạn 1 lần, Khi bạn hoặc 1 người khác còn 1 sinh lực trở thành mục tiêu của thẻ phân loại sát thương, bạn có thể huỷ bỏ thẻ đó. Sau đó bạn sử dụng thẻ [Sát] lên người sử dụng thẻ đó; nếu không, bạn tự giảm 1 sinh lực.",
      },
      {
        loai:"Trận Pháp Kỹ",
        ten: "Ứng Thụ",
        mo_ta:
          "Nếu bạn và một người cùng thế lực với bạn tạo thành trận pháp, thì mỗi lượt, khi bạn hoặc người đó sử dụng thẻ [Sát] đầu tiên, người sử dụng rút 1 lá. Nếu không tạo thành trận pháp, thì các thẻ chất ... của bạn xem như [Sát].",
      },
    ],
    cau_noi:
      "Kháng địch nghìn quân, ứng tiếp thụ mệnh!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Truong_The_Binh_To_Song: {
    title: "Trương Thế Bình & Tô Song",
    the_luc: ["Hán", "Thục"],
    sinh_luc: 1.5,
    danh_hieu: "Thoán Hiền Thủ Lương",
    ky_nang: [
      {
        ten: "Tư Lụy",
        mo_ta:
          "Giai đoạn kết thúc của người cùng thế lực, họ có thể đặt 1 đến 2 thẻ lên tướng bài của bạn, gọi là [Tư], sau đó họ có thể thu lấy 1 thẻ [Tư] còn lại. Nếu [Tư] của bạn bao gồm đủ ba loại bài, tất cả người cùng thế lực nhận Kỹ năng [Phi Ản] (Phi Ảnh - người khác tính toán khoảng cách đến bạn +1).",
      },
      {
        ten: "Dịch Giới",
        mo_ta:
          "Giai đoạn hành động hạn 1 lần, bạn có thế giao 1 thẻ Tư cho 1 người khác, rồi thu lấy 1 thẻ trong vùng trang bị của họ.",
      },
    ],
    cau_noi:
      "Ngàn vàng đổi ngựa báu, muốn mua thì phải nhanh!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ve_Tu: {
    title: "Vệ Tư",
    the_luc: ["Hán", "Ngụy"],
    sinh_luc: 1.5,
    danh_hieu: "Tiên Tán Hoằng Mưu",
    ky_nang: [
      {
        loai:"Hạn Định Kỹ",
        ten: "Khuynh Tư",
        mo_ta:
          "Giai đoạn chuẩn bị của 1 người khác, bạn có thể giao cho họ toàn bộ bài trên tay. Sau đó, mỗi lần họ gây sát thương trong lượt này, nếu số bài trên tay của bạn < số thế lực hiện có trên bàn, bạn rút 2 thẻ.",
      },
      {
        ten: "Liệt Tiết",
        mo_ta:
          "Sau khi bạn nhận sát thương, bạn có thể bỏ tối đa 2 thẻ, rồi rút số bài bằng đúng số đã bỏ và khiến nguồn gây sát thương Họ bỏ [X] thẻ; Bạn rút X thẻ. (X là số thẻ lựa chọn 1 mục: sắc Đô bạn bỏ).",
      },
    ],
    cau_noi:
      "Giặc nghịch dấy loạn, ta nên vì nghĩa mà xông vào nơi dầu sôi lửa bổng!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Chu_Tri: {
    title: "Chu Trị",
    the_luc: ["Hán", "Ngô"],
    sinh_luc: 2,
    danh_hieu: "Vương Sự Mỹ Cổ",
    ky_nang: [
      {
        ten: "An Quốc",
        mo_ta:
          "Giai đoạn hành động giới hạn 1 lần, bạn có thể chọn 1 người khác đồng thời chọn 1 thẻ [Trang bị] của bạn, sau đó bạn tự giảm 1 sinh lực, đem thẻ trang bị đó sử dụng lên họ. Sau đó tiến hành so sánh giữa cả bạn và họ, lần lượt chấp hành từng hạng mục sau:\n 1. Ai có ít bài trên tay hơn, họ rút 2 thẻ;\n2. Ai có ít sinh lực hơn, hồi 1 sinh lực;\n 3. Ai có ít thẻ ở [vùng trang bị] hơn, [Trọng Chú] tối đa 2 thẻ.",
      },
    ],
    cau_noi:
      "An bang định quốc, ổn định Giang Đông!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Bao_Tin: {
    title: "Bào Tín",
    the_luc: ["Hán", "Ngụy"],
    sinh_luc: 2,
    danh_hieu: "Anh Kiệt Thủ Huấn",
    ky_nang: [
      {
        loai:"Tỏa Định Kỹ",
        ten: "Huyết Lộ",
        mo_ta:
          "Khi bạn sử dụng thẻ [Cẩm Nang] trong lượt của bạn, bạn bỏ 1 thẻ. Nếu thẻ đó là [sắc Đỏ], thì số lần sử dụng thẻ [Sát] trong lượt này của bạn là +1. Giai đoạn kết thúc, nếu bạn có lượt dùng [Sát] được tăng thêm bằng Kỹ năng này nhưng chưa tiêu hết, bạn chọn 1 người khác bỏ lượng bài tương ứng. Đồng thời, cứ mỗi 2 thẻ người khác bị bỏ bởi Kỹ năng này, bạn rút 1 thẻ",
      },
    ],
    cau_noi:
      "Sinh tử quyết chiến, mở cho Mạnh Đức một đường sống!",
    hao_tuong: ["Vu Cấm"],
    ban_mo_rong: "Chưa cập nhật",
  },
  Ngo_Pham: {
    title: "Ngô Phạm",
    the_luc: ["Ngô"],
    sinh_luc: 1.5,
    danh_hieu: "Chiêm Tinh Định Bốc",
    ky_nang: [
      {
        loai:"Luân Thứ Kỹ",
        ten: "Ứng Nghiệm",
        mo_ta:
          "Khi bắt đầu giai đoạn hành động của một người chơi khác, bạn có thể xem hết bài trên tay của họ. Đối với 3 thẻ đầu tiên khi họ sử dụng bài trong lượt này và thẻ đó không phải bài chuyển hóa, thẻ đó sẽ được tạm úp (chỉ tuyên bố mục tiêu, không tuyên bố tên bài). Bạn sẽ đoán tên thẻ bài. \nNếu đoán đúng, bạn hoặc người đó rút 1 thẻ\nNếu đoán sai, bạn thu lấy 1 thẻ tiêu kí [Kỳ Nhân] ngẫu nhiên",
      },
    ],
    cau_noi:
      "Hễ có hung cát, Hiền suy số mà tỏ bày!",
    hao_tuong: ["Không có"],
    ban_mo_rong: "Chưa cập nhật",
  },


};

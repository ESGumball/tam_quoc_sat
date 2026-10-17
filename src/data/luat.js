export const luat = [
  {
    id: "co-ban",
    title: "Khái niệm",
    items: [
      {
        ten: "Sinh lực",
        mo_ta:
          "Số máu hiện có của người chơi. Về 0 thì rơi vào trạng thái hấp hối, cần dùng [Đào] để cứu.",
      },
      {
        ten: "Giới hạn sinh lực",
        mo_ta: "Số máu tối đa. Hồi phục không thể vượt quá giá trị này.",
      },
      {
        ten: "Vùng chơi",
        mo_ta: "- [Vùng Bài trên tay]\n- [Vùng Phán xét]: Nơi các thẻ [Cẩm nang thời gian] được đặt\n- [Vùng Trang Bị]: Nơi các [thẻ Trang bị] mà người chơi đã trang bị",
      },
      {
        ten: "Khoảng cách",
        mo_ta: "- [Khoảng cách: +X]: [Người khác] tính toán khoảng cách đến bạn +X\n- [Khoảng cách: -X]: [Bạn] tính toán khoảng cách đến người khác -X\n- Khi tính toán khoảng cách từ 1 người chơi đến 1 người chơi khác, giá trị [TỐI THIỂU] là 1\n- Khoảng cách đối với [BẢN THÂN] luôn là 0",
      },
      {
        ten: "Phạm vi công kích",
        mo_ta: "- Khi trận đấu bắt đầu, mỗi người chơi đều có phạm vi công kích là 1, tức là bạn chỉ có thể sử dụng [Sát] lên người ở khoảng cách 1 với bạn.\n- Sau khi bạn trang bị [Vũ khí], phạm vi công kích của người chơi bằng phạm vi công kích của [vũ khí]",
      },
      {
        ten: "Sử dụng",
        mo_ta:
          "- Sử dụng nghĩa là dùng thẻ bài một cách hợp lệ và có mục tiêu nhất định.\n- Quá trình sử dụng tóm tắt gồm:\n1. thông báo tên thẻ bài muốn sử dụng\n2. chọn mục tiêu ban đầu cho nó (số mục tiêu của thẻ bài tối thiểu là 1, có một số trường hợp không cần bước chọn mục tiêu)\n3. chờ xử lý.\n- Sau khi xử lý và thực thi hiệu quả thẻ bài cho tất cả các mục tiêu, quá trình kết toán sử dụng hoàn thành.\n- Sau đó đặt thẻ bài sử dụng vào chồng bài bỏ.",
      },
      {
        ten: "Đánh ra",
        mo_ta:
          "- Đánh ra là phản ứng với một lá bài hoặc một hiệu ứng kỹ năng nhất định, hoặc để kích hoạt một hiệu ứng kỹ năng nhất định, mà không đúng với mục đích chính được mô tả trong danh bài được thông báo khi đánh ra. Những thẻ bài đánh ra thì không thể và không có mục tiêu.\n- Quá trình đánh ra tóm tắt gồm:\n1. Thông báo thẻ bài đánh ra\n2. Ngay sau đó đặt thẻ bài này tiến đến chồng bài bỏ.",
      },
      {
        ten: "Bỏ đi",
        mo_ta:
          "- Đưa bài vào chồng bài bỏ, bạn không cần thông báo thẻ bài bạn bỏ đi.\n- Trừ khi phải bỏ đi lượng bài chênh lệch trong giai đoạn bỏ bài , bạn không thể chủ động tự ý bỏ bài vào bất kì thời điểm nào, trừ một số trường hợp đặc biệt cho phép bạn làm như vậy.",
      },
    ],
  },

  {
    id: "The-luc",
    title: "Thế lực",
    items: [
      {
        ten: "Không Cùng Thế Lực (Different faction)",
        mo_ta:
          "Nếu cả 2 ĐÃ CÓ thế lực, và thế lực của họ KHÔNG GIỐNG NHAU. Nếu 1 trong 2 ĐANG ÚP thì KHÔNG THỂ tính là không cùng thế lực",
      },
      {
        ten: "Cùng Thế Lực (The same faction)",
        mo_ta:
          "Nếu cả 2 ĐÃ CÓ thế lực, và thế lực của họ GIỐNG NHAU. Mỗi người LUÔN TÍNH là cùng thế lực với bản thân, NGAY CẢ KHI bản thân còn đang úp!",
      },
      {
        ten: "Khác Thế Lực (Other faction)",
        mo_ta: "Nếu ít nhất 1 trong 2 người ĐANG ÚP, HOẶC cả 2 ĐỀU ÚP",
      },
    ],
  },

  {
    id: "Ky-nang",
    title: "Nhãn kỹ năng",
    items: [
      {
        ten: "Tỏa Định Kỹ",
        mo_ta: "- Kĩ năng mà khi thỏa mãn điều kiện bắt buộc phải kích hoạt hoặc hiệu quả kéo dài vĩnh viễn.\n- Khi người chơi chưa lật mở tướng nào, xem như không có kĩ năng, dù cho có là [Tỏa Định Kĩ] thì nó cũng sẽ không kích hoạt",
      },
      {
        ten: "Hạn Định Kỹ",
        mo_ta: "- Kĩ năng chỉ có thể kích hoạt 1 lần trong cùng 1 trận đấu",
      },
      {
        ten: "Trận Pháp Kỹ",
        mo_ta: "",
      },
      {
        ten: "Luân Thứ Kỹ",
        mo_ta: "",
      },
    ],
  },

  {
    id: "Giai-doan",
    title: "Giai đoạn",
    items: [
      {
        ten: "Giai đoạn chuẩn bị",
        mo_ta: "- Một số kĩ năng có thể kích hoạt ở giai đoạn này\n- Bạn cũng có thể lật mở bất kỳ 1 trong 2 thẻ [Tướng] hoặc đồng thời cả 2 trong giai đoạn này",
      },
      {
        ten: "Giai đoạn phán xét",
        mo_ta: "- Nếu [vùng phán xét] của bạn có thẻ [Cẩm Nang thời gian] nằm ngang, bạn phải tiến hành phán xét theo thứ tự để chấp nhận hiệu quả của nó.\n- Nếu có nhiều thẻ phán xét trong [vùng phán xét] của bạn, thẻ nào được đặt sau sẽ tiến hành phán xét trước\n- Bạn lật mở thẻ trên cùng của chồng bài rút, gọi là [thẻ phán xét]",
      },
      {
        ten: "Giai đoạn rút bài",
        mo_ta: "- Bạn rút 2 thẻ từ đầu chồng bài",
      },
      {
        ten: "Giai đoạn hành động",
        mo_ta: "- Bạn có thể sử dụng bài tùy ý, tuy nhiên tuân thủ 2 quy tắc:\n1. Mỗi giai đoạn hành động chỉ được sử dụng 1 thẻ [Sát]\n2. Không thể đặt 2 thẻ [Cẩm Nang] cùng tên trong [vùng phán xét] của 1 người chơi",
      },
      {
        ten: "Giai đoạn bỏ bài",
        mo_ta: "- Trong giai đoạn hành động, nếu bạn không có bài hoặc không muốn sử dụng bài, bạn có thể tiến vào giai đoạn bỏ bài.\n- Kiểm tra xem số bài trên tay có vượt qua số sinh lực hiện tại không, rồi bỏ đi số chênh lệch",
      },
      {
        ten: "Giai đoạn kết thúc",
        mo_ta: "- Một số kĩ năng có thể kích hoạt vào giai đoạn này",
      },
    ],
  },

  {
    id: "Ung-bien",
    title: "Hiệu ứng ứng biến",
    items: [
      {
        ten: "Trợ chiến",
        mo_ta: "Sau khi chỉ định mục tiêu, người khác có thể tự bỏ 1 thẻ cùng loại để phát động hiệu quả [Ứng Biến]: hiệu quả [Trợ chiến]",
      },
      {
        ten: "Không Sào",
        mo_ta: "Sau khi bạn sử dụng thẻ bài này, mà bạn không còn bài trên tay, phát động hiệu quả [Ứng Biến]: Hiệu quả [Không Sào]",
      },
      {
        ten: "Phú Giáp",
        mo_ta: "Khi sử dụng lá bài này, số lá trên tay nhiều nhất bàn chơi, phát động hiệu quả [Ứng Biến]: hiệu quả [Phú Giáp]",
      },
      {
        ten: "Tàn Khu",
        mo_ta: "Sau khi bạn sử dụng thẻ này, nếu khi đó bạn còn 1 sinh lực, phát động hiệu quả [Ứng Biến]: Hiệu quả [Tàn Khu]",
      },
    ],
  },
  {
    id: "Tieu-ky",
    title: "Các loại tiêu ký",
    items: [
      {
        ten: "Khuyết Ngọc",
        mo_ta: "- Giai đoạn hành động, bạn có thể bỏ tiêu ký này, rút 1 thẻ bài\n- Giai đoạn bỏ bài, bạn có thể bỏ tiêu ký này, giới hạn trữ bài trên tay bạn lượt này [+2]",
      },
      {
        ten: "Tiên Phong",
        mo_ta: "- Giai đoạn hành động, bạn có thể bỏ tiêu ký này, bổ sung bài trên tay đến [4 thẻ] rồi xem 1 tướng đang úp của 1 người chơi khác",
      },
      {
        ten: "Chu Liên Bích Hợp",
        mo_ta: "- Giai đoạn hành động, bạn có thể bỏ tiêu ký này, rút 2 thẻ bài\n- Hoặc xem tiêu ký này, xem như [Đào] để sử dụng",
      },
    ],
  },
  {
    id: "ki-hieu",
    title: "Kí hiệu trên lá bài",
    items: [
      {
        ten: "Tặng",
        mo_ta: "Lá bài có ký hiệu này có thể đem cho người khác. Nếu lá cho là [Trang bị] thì nó sẽ đi thẳng vào [khu trang bị] và thay thế [trang bị] hiện có.",
      },
      {
        ten: "Trọng Chú",
        mo_ta: "",
      },
      {
        ten: "Hợp/ Liên",
        mo_ta: "",
      },
    ],
  },
  {
    id: "Mẫu",
    title: "Mẫu",
    items: [
      {
        ten: "Mẫu",
        mo_ta: "Mẫu",
      },
    ],
  },
];

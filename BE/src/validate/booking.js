import joi from "joi";

import { errorValidateMessages } from "../component";

const bookingValidate = joi.object({
  id_user: joi
    .string()
    .required()
    .messages(errorValidateMessages("ID khách hàng")),
  check_in: joi
    .date()
    .required()
    .messages(errorValidateMessages("Ngày nhận phòng")),
  check_out: joi
    .date()
    .required()
    .messages(errorValidateMessages("Ngày trả phòng")),
  total_price: joi
    .number()
    .required()
    .messages(errorValidateMessages("Tổng giá")),
  status: joi
    .string()
    .valid("Đang chờ xử lý", "Đã xác nhận", "Đã hủy bỏ")
    .default("Đang chờ xử lý")
    .messages(errorValidateMessages("Trạng thái")),
  id_bill: joi
    .string()
    .required()
    .messages(errorValidateMessages("Nhận dạng phương thức thanh toán")),
  id_room: joi.string().required().messages(errorValidateMessages("ID phòng")),
  passport: joi
    .number()
    .required()
    .messages(errorValidateMessages("Nhập số căn cước công dân của bạn")),
});

export default bookingValidate;

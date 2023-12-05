import mongoose from "mongoose";

import { HotelModel } from "../models";
import { HotelValidate } from "../validate";
import { validateFormMiddleware } from "../middleware";
import { sendResponse, uploadImageToCloudinary } from "../utils";

export const getAll = async (req, res) => {
  try {
    const hotelList = await HotelModel.find().populate("id_room");

    if (!hotelList || hotelList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách khách sạn");
    }

    return sendResponse(res, 200, "Danh sách khách sạn", hotelList);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy danh sách khách sạn"
    );
  }
};

export const getOne = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    const hotel = await HotelModel.findById(req.params.id)
      .populate("id_amenities id_room")
      .populate({
        path: "id_room",
        populate: "id_roomType",
      });

    if (!hotel || hotel.length === 0) {
      return sendResponse(res, 404, "Không có thông tin khách sạn");
    }

    return sendResponse(res, 200, "Thông tin khách sạn", hotel);
  } catch (error) {
    console.error(error);

    return sendResponse(
      res,
      500,
      "Đã có lỗi xảy ra khi lấy thông tin khách sạn"
    );
  }
};

export const create = async (req, res) => {
  const imagesArray = [];

  for (const field in req.files) {
    if (req.files.hasOwnProperty(field)) {
      const file = req.files[field];
      imagesArray.push({
        name: field,
        url: file.path,
      });
    }
  }

  req.fields.images = imagesArray;

  if (req.fields.id_amenities) {
    const id_amenities = req.fields.id_amenities.split(",");

    const amenities = id_amenities.map(
      (item) => new mongoose.Types.ObjectId(item)
    );
    req.fields.id_amenities = amenities;
  }

  try {
    validateFormMiddleware(req, res, HotelValidate, async () => {
      const newImages = await Promise.all(
        req.fields.images.map(uploadImageToCloudinary)
      );

      const images = newImages.map((imageUrl) => ({
        url: imageUrl,
      }));

      const data = await HotelModel.create({
        ...req.fields,
        images,
      });

      if (!data) {
        return sendResponse(res, 404, "Thêm khách sạn thất bại");
      }

      return sendResponse(res, 200, "Thêm khách sạn thành công", data);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm khách sạn");
  }
};

export const update = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return sendResponse(res, 400, "ID không hợp lệ");
  }

  const imagesArray = [];
  for (const field in req.files) {
    if (req.files.hasOwnProperty(field)) {
      const file = req.files[field];
      imagesArray.push({
        name: field,
        url: file.path,
      });
    }
  }
  req.fields.images = imagesArray;

  if (req.fields.id_amenities) {
    const id_amenities = req.fields.id_amenities.split(",");

    const amenities = id_amenities.map(
      (item) => new mongoose.Types.ObjectId(item)
    );
    req.fields.id_amenities = amenities;
  }

  try {
    validateFormMiddleware(req, res, HotelValidate, async () => {
      const newImages = await Promise.all(
        req.fields.images.map(uploadImageToCloudinary)
      );

      const images = newImages.map((imageUrl, index) => ({
        url: imageUrl,
      }));

      const newData = {
        ...req.fields,
        images,
      };

      const data = await HotelModel.findByIdAndUpdate(req.params.id, newData, {
        new: true,
      });

      if (!data) {
        return sendResponse(res, 404, "Cập nhật khách sạn thất bại");
      }

      return sendResponse(res, 200, "Cập nhật khách sạn thành công", data);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật khách sạn");
  }
};

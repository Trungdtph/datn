import mongoose from "mongoose";

import { RoomValidate } from "../validate";
import { RoomModel, HotelModel } from "../models";
import { validateFormMiddleware } from "../middleware";
import { sendResponse, uploadImageToCloudinary } from "../utils";

export const getAll = async (req, res) => {
  try {
    const roomList = await RoomModel.find().populate("id_roomType");

    if (!roomList || roomList.length === 0) {
      return sendResponse(res, 404, "Không có danh sách phòng");
    }

    return sendResponse(res, 200, "Danh sách phòng", roomList);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi lấy danh sách phòng");
  }
};

export const getOne = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return sendResponse(res, 400, "ID không hợp lệ");
    }

    const room = await RoomModel.findById(req.params.id).populate(
      "id_amenities id_hotel id_roomType"
    );

    if (!room || room.length === 0) {
      return sendResponse(res, 404, "Không có thông tin phòng");
    }

    return sendResponse(res, 200, "Thông tin phòng", room);
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi lấy thông tin phòng");
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
    validateFormMiddleware(req, res, RoomValidate, async () => {
      const newImages = await Promise.all(
        req.fields.images.map(uploadImageToCloudinary)
      );

      const images = newImages.map((imageUrl, index) => ({
        url: imageUrl,
      }));

      const data = await RoomModel.create({
        ...req.fields,
        images,
      });

      if (!data) {
        return sendResponse(res, 404, "Thêm phòng thất bại");
      }

      await HotelModel.findByIdAndUpdate(
        req.fields.id_hotel,
        { $push: { id_room: data._id } },
        { new: true }
      );

      return sendResponse(res, 200, "Thêm phòng thành công", data);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi thêm phòng");
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
    validateFormMiddleware(req, res, RoomValidate, async () => {
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

      const data = await RoomModel.findByIdAndUpdate(req.params.id, newData, {
        new: true,
      });

      if (!data) {
        return sendResponse(res, 404, "Cập nhật phòng thất bại");
      }

      return sendResponse(res, 200, "Cập nhật phòng thành công", data);
    });
  } catch (error) {
    console.error(error);

    return sendResponse(res, 500, "Đã có lỗi xảy ra khi cập nhật phòng");
  }
};

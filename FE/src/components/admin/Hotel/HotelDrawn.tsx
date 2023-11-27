import { useState } from "react";
import moment from "moment";

import { Button, Descriptions, Drawer, Image, Spin } from "antd";
import type { DescriptionsProps } from "antd";

import { useGetHotelDetailByIdQuery } from "../../../api/hotel";

import TwoDrawnAmenities from "./TwoDrawnAmenities";
import TwoDrawnDescription from "./TwoDrawnDescription";
import TwoDrawnRoom from "./TwoDrawnRoom";

type HotelDrawnProps = {
  idHotel: string;
  openHotelDrawn: boolean;
  onClosedHotelDrawn: () => void;
};

const HotelDrawn = ({
  idHotel,
  openHotelDrawn,
  onClosedHotelDrawn,
}: HotelDrawnProps) => {
  const [openDrawnAmenities, setOpenDrawnAmenities] = useState(false);
  const [openDrawnDescription, setOpenDrawnDescription] = useState(false);
  const [openDrawnRoom, setOpenDrawnRoom] = useState(false);
  const { data, isFetching } = useGetHotelDetailByIdQuery(idHotel);
  const imgList: string[] = [];

  data?.data?.images &&
    data.data.images.forEach((item: { url: string }) => {
      imgList.push(item.url);
    });

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Tên",
      children: data?.data?.name,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "2",
      label: "Địa chỉ",
      children: data?.data?.address,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "3",
      label: "Thành phố",
      children: data?.data?.city,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "4",
      label: "Email",
      children: data?.data?.email,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "5",
      label: "Số điện thoại",
      children: data?.data?.phone,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "6",
      label: "Hình ảnh",
      children: (
        <Image.PreviewGroup items={imgList}>
          <Image width={100} src={data?.data?.images[0]?.url} />
        </Image.PreviewGroup>
      ),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "7",
      label: "Tiện nghi",
      children: (
        <>
          <Button type="link" onClick={() => setOpenDrawnAmenities(true)}>
            Xem chi tiết
          </Button>
          <TwoDrawnAmenities
            dataAmenities={data?.data?.id_amenities}
            openDrawnAmenities={openDrawnAmenities}
            isClosedDrawnAmenities={() => setOpenDrawnAmenities(false)}
          />
        </>
      ),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "8",
      label: "Phòng",
      children: (
        <>
          <Button type="link" onClick={() => setOpenDrawnRoom(true)}>
            Xem chi tiết
          </Button>
          <TwoDrawnRoom
            dataRoom={data?.data?.id_room}
            openDrawnRoom={openDrawnRoom}
            isClosedDrawnRoom={() => setOpenDrawnRoom(false)}
          />
        </>
      ),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "9",
      label: "Mô tả",
      children: (
        <>
          <Button type="link" onClick={() => setOpenDrawnDescription(true)}>
            Xem chi tiết
          </Button>
          <TwoDrawnDescription
            dataDescription={data?.data?.description}
            openDrawnDescription={openDrawnDescription}
            isClosedDrawnDescription={() => setOpenDrawnDescription(false)}
          />
        </>
      ),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "10",
      label: "Trạng thái",
      children: data?.data?.status,
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
    {
      key: "11",
      label: "Ngày tạo",
      children:
        data?.data?.createdAt &&
        moment(data?.data?.createdAt).format("DD/MM/YYYY"),
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    },
  ];

  return (
    <Drawer
      title={isFetching ? "" : data?.data?.name}
      placement="right"
      size="large"
      open={openHotelDrawn}
      closable={false}
      onClose={onClosedHotelDrawn}
    >
      {isFetching ? (
        <div className="flex items-center justify-center h-full">
          <Spin spinning={isFetching} />
        </div>
      ) : (
        <Descriptions title="Thông tin khách sạn" bordered items={items} />
      )}
    </Drawer>
  );
};

export default HotelDrawn;

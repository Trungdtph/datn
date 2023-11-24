import { Button } from "../..";
import { useGetOneRoomTypeQuery } from "../../../api/roomType";

interface RoomType {
  _id: string;
  images: {
    url: string;
  }[];
  quantity: number;
  price: number;
  status: string;
  description: string;
  id_amenities: string[];
  id_hotel: string;
  id_roomType: string;
  createdAt: string;
  updatedAt: string;
}

type RoomCardProps = {
  room: RoomType;
};
const RoomCard = ({ room }: RoomCardProps) => {
  const { data } = useGetOneRoomTypeQuery(room?.id_roomType);

  return (
    <>
      <div className="h-auto transition duration-300 rounded-md bg-light dark:bg-dark">
        <div className="overflow-hidden h-64">
          <img
            src="https://booking.muongthanh.com/images/hotels/rooms/original/phong-deluxe-king_1694053986.jpg"
            alt="Room"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 p-5 text-textLight2nd dark:text-textDark2nd">
          <h5 className="font-semibold text-lg"> {data?.data?.name} </h5>

          <div className="flex flex-row justify-between items-center">
            <div className="mt-3">
              <span className="mr-1 text-xs">Chỉ từ</span>

              <span className="text-md text-yellow-500 font-bold capitalize">
                {room?.price}
              </span>

              <span className="ml-1 text-xs">/đêm</span>
            </div>

            <div className="w-[40%]">
              <Button label="Đặt ngay" onClick={() => alert("Đặt phòng")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;

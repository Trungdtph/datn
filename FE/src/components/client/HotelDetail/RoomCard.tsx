import { Button } from "../..";
import { IRoom, IRoomType } from "../../../interface";

interface IShowRoom extends Omit<IRoom, "id_roomType"> {
  id_roomType: IRoomType;
}

type RoomCardProps = {
  room: IShowRoom;
};
const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <>
      <div className="h-auto transition duration-300 rounded-md bg-light dark:bg-dark">
        <div className="overflow-hidden h-64">
          <img
            src={`${room.images[0].url}`}
            alt="Room"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 p-5 text-textLight2nd dark:text-textDark2nd">
          <h5 className="font-semibold text-lg"> {room?.id_roomType?.name} </h5>

          <div className="flex flex-row justify-between items-center">
            <div className="mt-3">
              <span className="mr-1 text-xs">Chỉ từ</span>

              <span className="text-md text-yellow-500 font-bold capitalize">
                {room?.price}
              </span>

              <span className="ml-1 text-xs">/đêm</span>
            </div>

            <div className="w-[40%]">
              <Button
                label="Đặt ngay"
                onClick={() => alert("Đặt phòng")}
                disabled={room.quantity === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomCard;

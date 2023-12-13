// Amenities API
import {
  amenitiesApi,
  useGetAllAmenitiesQuery,
  useGetOneAmenitiesQuery,
  useCreateAmenitiesMutation,
  useUpdateAmenitiesMutation,
  useDeleteAmenitiesMutation,
} from "./amenities";

// Auth API
import {
  authApi,
  useLoginAccountMutation,
  useRegisterAccountMutation,
  useInfoAccountQuery,
  useLogoutAccountMutation,
  useGetCodeChangePasswordMutation,
  useCheckCodeChangePasswordMutation,
  useChangePasswordMutation,
} from "./auth";

// Booking API
import {
  bookingApi,
  useGetAllBookingQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useVnPayPaymentMutation,
  useZaloPayPaymentMutation,
  useCheckStatusZaloPayMutation,
  useGetBookingByUserQuery,
} from "./booking";

// Hotel API
import {
  hotelApi,
  useGetAllHotelQuery,
  useGetOneHotelQuery,
  useGetHotelByCityQuery,
  useCreateHotelMutation,
  useUpdateHotelMutation,
} from "./hotel";

// Provinces API
import { provincesApi, useGetAllProvincesQuery } from "./provinces";

// Room API
import {
  roomApi,
  useGetAllRoomQuery,
  useGetOneRoomQuery,
  useCreateRoomMutation,
  useUpdateRoomMutation,
} from "./room";

// RoomType API
import {
  roomTypeApi,
  useGetAllRoomTypeQuery,
  useGetOneRoomTypeQuery,
  useCreateRoomTypeMutation,
  useUpdateRoomTypeMutation,
  useDeleteRoomTypeMutation,
} from "./roomType";

// User API
import {
  userApi,
  useGetAllUserQuery,
  useGetOneUserMutation,
  useLockUserMutation,
} from "./user";

export {
  amenitiesApi,
  useGetAllAmenitiesQuery,
  useGetOneAmenitiesQuery,
  useCreateAmenitiesMutation,
  useUpdateAmenitiesMutation,
  useDeleteAmenitiesMutation,
  authApi,
  useLoginAccountMutation,
  useRegisterAccountMutation,
  useInfoAccountQuery,
  useLogoutAccountMutation,
  useGetCodeChangePasswordMutation,
  useCheckCodeChangePasswordMutation,
  useChangePasswordMutation,
  bookingApi,
  useGetAllBookingQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useVnPayPaymentMutation,
  useZaloPayPaymentMutation,
  useCheckStatusZaloPayMutation,
  useGetBookingByUserQuery,
  hotelApi,
  useGetAllHotelQuery,
  useGetOneHotelQuery,
  useGetHotelByCityQuery,
  useCreateHotelMutation,
  useUpdateHotelMutation,
  provincesApi,
  useGetAllProvincesQuery,
  roomApi,
  useGetAllRoomQuery,
  useGetOneRoomQuery,
  useCreateRoomMutation,
  useUpdateRoomMutation,
  roomTypeApi,
  useGetAllRoomTypeQuery,
  useGetOneRoomTypeQuery,
  useCreateRoomTypeMutation,
  useUpdateRoomTypeMutation,
  useDeleteRoomTypeMutation,
  userApi,
  useGetAllUserQuery,
  useGetOneUserMutation,
  useLockUserMutation,
};

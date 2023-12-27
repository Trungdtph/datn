// import { PreferentialCard, Container } from "../..";
// import React, { useState } from "react";

// const Preferential = () => {
//   const data = [
//     {
//       image: "/images/ha-noi.jpg",
//       title:
//         "Combo nghỉ dưỡng 3N2Đ tại Đà Nẵng - Hội An",
//       price: "1,600,000",
//     },
//     {
//       image:
//         "https://booking.muongthanh.com/images/combo/2023/08/resize/combodnha_4n3d_2_1681368197-copy_1687764713_1688005429_1692847271.jpg",
//       title:
//       "Combo nghỉ dưỡng 4N3Đ tại Đà Nẵng - Hội An (2 Đêm tại Đà Nẵng + 1 Đêm tại Hội An)",
//       price: "1,600,000",
//     },
//     {
//       image: "/images/da-nang.jpg",
//       title:
//         "Combo nghỉ dưỡng 4N3Đ tại Đà Nẵng - Hội An (1 Đêm tại Đà Nẵng + 2 Đêm tại Hội An)",
//       price: "1,600,000",
//     },
//     {
//       image:
//         "https://dyf.vn/wp-content/uploads/2021/10/15-mau-sanh-khach-san-5-sao-dep-xuat-sac-2020_61726921b0a4f.jpeg",
//       title:
//         "[WINTER PROMOTION | LÝ SƠN] - Nghỉ dưỡng 2N1Đ + 01 chuyến xe 01 chiều đưa/đón từ cảng Lý Sơn về Khách Sạn",
//       price: "1,600,000",
//     },
//     {
//       image: "/images/ho-chi-minh.jpg",
//       title:
//         "[MŨI NÉ NẮNG VÀNG | 2023] Nghỉ dưỡng 2N1Đ + 01 bữa ăn trưa hoặc tối + 02 đơn vị nước uống",
//       price: "1,600,000",
//     },
//     {
//       image:
//         "https://img.lovepik.com/photo/20211123/medium/lovepik-deluxe-the-springs-hotel-night-view-picture_500810167.jpg",
//       title:
//         "[SA PA MỜ SƯƠNG | SA PA] Nghỉ dưỡng 2N1Đ + 01 set lẩu hương vị Tây Bắc",
//       price: "1,600,000",
//     },
//   ];

//   const itemsPerPage = 3;
//   const [currentPage, setCurrentPage] = useState(0);

//   const nextPage = () => {
//     setCurrentPage(
//       (prevPage) => (prevPage + 1) % Math.ceil(data.length / itemsPerPage)
//     );
//   };

//   const prevPage = () => {
//     setCurrentPage(
//       (prevPage) =>
//         (prevPage - 1 + Math.ceil(data.length / itemsPerPage)) %
//         Math.ceil(data.length / itemsPerPage)
//     );
//   };

//   const startIdx = currentPage * itemsPerPage;
//   const visibleData = data.slice(startIdx, startIdx + itemsPerPage);

//   console.log("startIdx:", startIdx);
//   console.log("visibleData:", visibleData);

//   return (
//     <>
//       <Container>
//         <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-8 relative ">
//           <div className="flex flex-col items-center mb-5 text-center md:mb-8">
//             <h2 className="flex">
//               <p className="text-2xl mb-5 select-none font-bold lg:text-3xl text-texLight dark:text-textDark text-neutral-700">
//                 ƯU ĐÃI
//               </p>
//               <p className="ml-2 select-none lg:text-3xl text-texLight dark:text-textDark font-normal text-neutral-500">
//                DÀNH CHO BẠN
//               </p>
//             </h2>
//           </div>

//           <div className="grid auto-cols-auto grid-flow-row auto-rows-auto grid-cols-3 lg:gap-5 gap-2 relative ">
//             {visibleData.map((item, index) => (
//               <PreferentialCard
//                 key={index}
//                 image={item.image}
//                 title={item.title}
//                 price={item.price}
//               />
//             ))}

//             <button
//               className="absolute left-7 top-1/2 transform -translate-y-1/2 translate-x-[-50%] bg-gradient-to-r from-amber-500 to-transparent hover:from-amber-200 hover:to-transparent text-white font-bold py-2 px-4 rounded-full overflow-hidden"
//               onClick={prevPage}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
//                 />
//               </svg>
//             </button>

//             <button
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-amber-500 to-transparent hover:from-amber-200 hover:to-transparent text-white font-bold py-2 px-4 rounded-full overflow-hidden"
//               onClick={nextPage}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//         <button className="flex group items-center pl-10 pr-13 mx-auto mt-5 text-yellow-500 border border-yellow-500 w-[180px] h-[40px] rounded-[30px] transition-colors duration-300 hover:bg-yellow-500 hover:text-white">
//           Xem thêm
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-6 h-6 ml-2 text-yellow-500 group-hover:text-white transition-colors duration-300"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
//             />
//           </svg>
//         </button>
//       </Container>
//     </>
//   );
// };

// export default Preferential;

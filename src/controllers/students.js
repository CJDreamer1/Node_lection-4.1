// import { parsePaginationParams } from "../utils/parsePaginationParams.js";
// import { parseSortParams } from "../utils/parseSortParams.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";

// export const getStudentsController = async (req, res) => {
//   const { page, perPage } = parsePaginationParams(req.query);
//   const students = await getAllStudents({
//     page,
//     perPage,
//   });

//   res.json({
//     status: 200,
//     message: "Successfully found students!",
//     data: students,
//   });
// };

// export const getStudentsController = async (req, res) => {
//   const { page, perPage } = parsePaginationParams(req.query);

//   const { sortBy, sortOrder } = parseSortParams(req.query);

//   const students = await getAllStudents({
//     page,
//     perPage,
//     sortBy,
//     sortOrder,
//   });

//   res.json({
//     status: 200,
//     message: "Successfully found students!",
//     data: students,
//   });
// };

export const getStudentsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);

  const students = await getAllStudents({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.json({
    status: 200,
    message: "Successfully found students!",
    data: students,
  });
};

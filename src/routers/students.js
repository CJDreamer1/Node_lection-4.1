import { Router } from "express";

import {
  getStudentsController,
  getStudentByIdController,
  createStudentController,
  deleteStudentController,
  upsertStudentController,
  patchStudentController,
} from "../controllers/students.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import {
  createStudentSchema,
  updateStudentSchema,
} from "../validation/students.js";
import { checkRoles } from "../middlewares/checkRoles.js";
import { ROLES } from "../constants/index.js";
import { upload } from "../middlewares/multer.js";

const router = Router();

router.get("/", checkRoles(ROLES.TEACHER), ctrlWrapper(getStudentsController));

router.get(
  "/:studentId",
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  ctrlWrapper(getStudentByIdController)
);

router.post(
  "/",
  checkRoles(ROLES.TEACHER),
  upload.single("photo"), // додаємо цю middleware
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController)
);

router.put(
  "/:studentId",
  checkRoles(ROLES.TEACHER),
  upload.single("photo"), // додаємо цю middleware
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController)
);

router.patch(
  "/:studentId",
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  upload.single("photo"), // додаємо цю middleware
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController)
);

router.delete(
  "/:studentId",
  checkRoles(ROLES.TEACHER),
  ctrlWrapper(deleteStudentController)
);

export default router;

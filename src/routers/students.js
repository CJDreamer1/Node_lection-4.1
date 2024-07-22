import { validateBody } from "../middlewares/validateBody.js";
import {
  createStudentSchema,
  updateStudentSchema,
} from "../validation/students.js";
import { isValidId } from "../middlewares/isValidId.js";

/* Решта коду файла */

router.get("/:studentId", isValidId, ctrlWrapper(getStudentByIdController));

router.post(
  "/",
  validateBody(createStudentSchema),
  ctrlWrapper(createStudentController)
);

router.put(
  "/students/:studentId",
  validateBody(createStudentSchema),
  ctrlWrapper(upsertStudentController)
);

router.patch(
  "/students/:studentId",
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController)
);

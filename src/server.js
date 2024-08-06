import router from "./routers/index.js";
import cookieParser from "cookie-parser";
import { initMongoDB } from "./db/initMongoDB.js";
import { startServer } from "./server.js";
import { createDirIfNotExists } from "./utils/createDirIfNotExists.js";
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from "./constants/index.js";
import { UPLOAD_DIR } from "./constants/index.js";

app.use(router);

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  app.use("/uploads", express.static(UPLOAD_DIR));
};

const bootstrap = async () => {
  await initMongoDB();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  startServer();
};

void bootstrap();

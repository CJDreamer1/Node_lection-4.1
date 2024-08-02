import router from "./routers/index.js";
import cookieParser from "cookie-parser";

app.use(router);

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
};

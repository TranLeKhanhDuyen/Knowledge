import { create, router as _router, defaults } from "json-server";
const server = create();
const router = _router("db.json");
const middlewares = defaults();
import localIpAddress from "local-ip-address";
import Logger from "@ptkdev/logger";
const port = process.env.PORT || 3000;
const logger = new Logger();
import cors from "cors";

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  logger.info(
    `JSON Server is running - http://localhost:${port} - http://${localIpAddress()}:${port}`
  );
});

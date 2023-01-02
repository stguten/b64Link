import app from "./config/express.config.js";
import b64 from "./router/encodeDecode.route.js";

app.use('/',b64);

export default app;
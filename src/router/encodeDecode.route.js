import { Router } from "express";
import { decode, encode } from "../controller/encodeDecode.controller.js";

const b64 = Router();

b64.post('/encode', encode);
b64.get('/decode',decode);

export default b64;
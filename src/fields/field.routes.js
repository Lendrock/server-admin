//importar las dependencias

import { Router } from "express";
import { getFields, createField } from "./field.controller.js";

import { validateCreateField } from "../../middlewares/field-validators.js";
import { uploadFieldImage } from "../../middlewares/file-uploader.js";

const router = Router();

//Rutas GET
router.get('/', getFields);

//Rutas POST
router.post('/', uploadFieldImage.single('image') ,validateCreateField, createField);

//Rutas PUT

//Rutas DELETE

export default router;
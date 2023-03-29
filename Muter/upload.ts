
import path  from "path";
import multer from "multer"; 
import crypto from "crypto";

const UPLOADS_FOLDER = path.resolve(".", "uploads");
const MULTER = {
  storage: multer.diskStorage({
    destination: UPLOADS_FOLDER,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const filename = `${file.originalname}`;
      console.log("salvou imagem no multer");
      return callback(null, filename);
    },
  }),
};


export default  {UPLOADS_FOLDER,MULTER};
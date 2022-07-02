import http from "../http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/uploadfile/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  download(onDownloadFinished){
    return http.get("/get_output/" , {
      headers: {
        "Content-Type": "text/plain",
      }, onDownloadFinished
    });
  }
}

export default new UploadFilesService();

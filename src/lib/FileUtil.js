import FileReaderSync from './FileReaderSync';

export default {
  /**
   * イベントからファイル配列を取り出す
   * @param {Event} e
   * @returns {FileList}
   */
  getFileListOnEvent(e) {
    return e.target.files || e.dataTransfer.files;
  },

  /**
   * ファイルを表示できる形式にするやつ
   * @param {Blob} blob
   * @returns {string}
   */
  toShowable(blob) {
    return window.URL.createObjectURL(blob);
  },

  /**
   * FileをImageDataに変換するやつ
   * @param {File}   file
   * @param {number} width
   * @param {number} height
   * @param {number} scale (0-1)
   * @returns {Promise<ImageData>}
   */
  async fileToImageData(file, width, height, scale = 1) {
    const blob = await (new FileReaderSync()).readAsDataURL(file);

    const canvas  = document.createElement('canvas');
    canvas.width  = width * scale;
    canvas.height = height * scale;
    const ctx     = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src   = blob;

      img.onload = () => {
        const scaledWidth  = parseInt(img.naturalWidth * scale);
        const scaledHeight = parseInt(img.naturalHeight * scale);

        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, scaledWidth, scaledHeight);
        resolve(ctx.getImageData(0, 0, scaledWidth, scaledHeight));
      };

      img.onerror = (err) => {
        reject(err);
      };
    });
  },

  /**
   * ImageDataをBase64に変換するやつ
   * @param {ImageData} imageData
   * @returns {string}
   */
  imageDataToBase64(imageData) {
    const canvas = document.createElement('canvas');
    const ctx    = canvas.getContext('2d');
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);

    return canvas.toDataURL();
  },

  /**
   * ImageDataをリサイズするやつ
   * @param {ImageData} imageData
   * @param {number} width
   * @param {number} height
   */
  async resizeImageData (imageData, width, height) {
    const resizeWidth  = width >> 0;
    const resizeHeight = height >> 0;

    const ibm     = await window.createImageBitmap(imageData, 0, 0, imageData.width, imageData.height);
    const canvas  = document.createElement('canvas');
    canvas.width  = resizeWidth;
    canvas.height = resizeHeight;

    const ctx = canvas.getContext('2d');
    ctx.scale(resizeWidth / imageData.width, resizeHeight / imageData.height);
    ctx.drawImage(ibm, 0, 0);

    return ctx.getImageData(0, 0, resizeWidth, resizeHeight);
  },


  /**
   * Fileから縦横のサイズを返すやつ
   * @param {File} file
   * @returns {Promise<{width: number, height: number}>}
   */
  async getFileSize(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        const size = {
          width : img.naturalWidth,
          height: img.naturalHeight,
        };

        URL.revokeObjectURL(img.src);
        resolve(size);
      };

      img.onerror = (err) => {
        reject(err);
      };

      img.src = URL.createObjectURL(file);
    });
  },
};

declare module 'qrcode' {
  export interface QRCodeToDataURLOptions {
    margin?: number;
    width?: number;
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
    type?: 'svg' | 'utf8' | 'terminal';
  }

  export interface QrcodeApi {
    toDataURL(text: string, options?: QRCodeToDataURLOptions): Promise<string>;
  }

  const qrcode: QrcodeApi;
  export default qrcode;
}

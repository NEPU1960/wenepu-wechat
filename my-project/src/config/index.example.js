const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
const domains = {
  dev: 'https://127.0.0.1:5000', // 测试api接口
  prod: 'https://127.0.0.1:5000' // api接口
}
export const domain = domains[env]
export const version = '0.8.0' // 版本号

export const COSConf = {
  key: {
    SecretId: 'AKIDc9gK6lCAoMkXHuBefDmATzVYTG2Oqs5T',
    SecretKey: 'kmMlCt6b4yDuXZWIyXxFPRMBVnvulSAu'
  },
  bucket: 'nepu-1251611395',
  region: 'ap-shanghai'
}

let prefix = "wenepu.dev."
if (process.env.NODE_ENV == "production") {
  prefix = "wenepu.production."
}

const Set = (key, value) => {
  wx.setStorageSync(prefix + key, value)
}

const Get = (key) => {
  return wx.getStorageSync(prefix + key)
}

module.exports = {
  Set,
  Get
}

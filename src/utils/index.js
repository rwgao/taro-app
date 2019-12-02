import Taro from "@tarojs/taro";

export async function setStorage(key, value) {
  if (!key) return;
  const res = await Taro.setStorage({
    key: key,
    data: value,
  });
  return res;
}

export async function getStorage(key) {
  if (!key) return;
  const res = await Taro.getStorage({
    key: key,
  });
  return res;
}


export default {
  setStorage,
  getStorage
}
export function setStorage(name, content){
  return localStorage.setItem(name,content)
}

export function getStorage(name){
  return localStorage.getItem(name)
}
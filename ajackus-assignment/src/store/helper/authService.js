export const storeData = response => {
  localStorage.setItem("status", response.status);
  localStorage.setItem("user_id", response.id);
  localStorage.setItem("name", response.name);
};

export const clearData = ()=>{
    localStorage.removeItem("status");
    localStorage.removeItem("name");
    localStorage.removeItem("user_id");
}

export const isLogin = () => {
  if (localStorage.getItem("name") != null) return true;
  return false;
};

export const checkUser = () => {
  if (localStorage.getItem("status") == "doctor") return true;
  return false;
};

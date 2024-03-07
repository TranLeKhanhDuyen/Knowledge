import axios from "axios";

const handleLoginAPi = async (email: string, password: string) => {
  console.log("ok uerservice haha")
  const aa = await axios.post('/api/login', { email, password });
  console.log("object: ", aa)
  return aa
};

export default handleLoginAPi;

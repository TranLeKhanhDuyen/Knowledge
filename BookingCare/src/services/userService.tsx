import axios from "axios";

const handleLoginAPi = async (email: string, password: string) => {
  console.log("ok uerservice handleLoginApi")
  try {
    const res = await axios.post('/api/login', { email, password });
    console.log("res: ", res);
    return res;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export default handleLoginAPi;

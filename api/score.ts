import {axiosInstance} from "../utils/axiosInstance";

export const getFeed = async () => {
    try {
        const res = await axiosInstance.get(`feed/?token=MTM4OTIxXzE3MTQ5NjI1MjlfZDA0MTU1NTZiMWIxOWY2M2Y0NGVlNjVmOGMyNjhjNjVmMWQ3YTkzMw==`)
        return res.data.response;
    } catch (e) {
        throw e;
    }
}
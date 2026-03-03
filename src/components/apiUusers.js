import axios from "axios";

export const getUsers = async ({ queryKey }) => {
    const [, params] = queryKey;
    const { page , limit } = params;

    try {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users",
            {
                params: {
                    _limit: limit,
                    _page: page
                }
            }
        )
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
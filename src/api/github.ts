import axios from "axios";

const getGithubInfoForRepo = async (name: string) => {
	const url = `https://api.github.com/repos/tim0-12432/${name}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error(error);
		return {error};
	}
};

export default getGithubInfoForRepo;
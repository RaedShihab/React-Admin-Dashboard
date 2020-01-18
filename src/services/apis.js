import axios from 'axios';
const USER_API_BASE_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";

class ApiService {
    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }
    fetchPosts() {
        return axios.get(POSTS_API_BASE_URL);
    }
}

export default new ApiService();
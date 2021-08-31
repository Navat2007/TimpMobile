import axios from "axios";

export default class MessageService {

    static async getAll(limit){

        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?${limit ? '_limit=' + limit : ''}`);
        console.log(response);
        return response.data;

    }
}
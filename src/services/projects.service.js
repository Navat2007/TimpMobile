import axios from "axios";

export default class ProjectsService {

    static async getAll(user_id) {

        let form = new FormData();
        form.append('user_id', user_id);

        const response = await axios({
            method: 'post',
            url: 'https://mytimp.com/api/ThemeLoad/',
            data: form
        });

        if(window.global.debug)
            console.log("Projects: ", response);

        return response.data.array;

    }
}
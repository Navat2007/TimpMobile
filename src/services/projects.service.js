import axios from "axios";
import memoize from 'lodash.memoize';

export default class ProjectsService {

    static async getAll(user_id) {

        let form = new FormData();
        form.append('user_id', user_id);

        const response = await axios({
            method: 'post',
            url: window.global.timpApiUrl + '/api/ThemeLoad/',
            data: form
        });

        if(window.global.debug)
            console.log("Projects: ", response);

        return response.data.array;

    }

    static async getByID() {

        

    }
}
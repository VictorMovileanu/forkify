import axios from 'axios';
import { search_url } from '../config'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${search_url}?q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result)
        } catch (e) {
            alert(e)
        }
    }
}

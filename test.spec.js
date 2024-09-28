import axios from "axios";
import { expect } from "chai";

describe('API test suit', () => {

    it('GET post/1', async () => {
        const response = await axios({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'get'
        });
        console.log(response.status);
        console.log(response.data);
        expect(response.status).to.equal(200);
        expect(response.data.userId).to.equal(1);
    });
});
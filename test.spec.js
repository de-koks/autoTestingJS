import axios from "axios";
import { expect } from "chai";

describe('API test suit', () => {

    it('GET post/1', async () => {
        const response = await axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        });
        expect(response.status).to.equal(200);
        expect(response.data.userId).to.equal(1);
    });

    it('POST posts', async () => {
        const response = await axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: {
                title: 'foo',
                body: 'bar',
                userId: 1,
            },
        });
        expect(response.status).to.equal(201);
    });
});
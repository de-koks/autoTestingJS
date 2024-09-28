import { expect } from "chai";
import { sendRequest } from "../helpers/api.helper.js";
import testData from '../config/data.json' assert { type: 'json' };

describe('API test suit', () => {

    it('GET post/1', async () => {
        const response = await sendRequest('posts/1')
        expect(response.status).to.equal(200);
        expect(response.data.userId).to.equal(1);
    });

    it('POST posts', async () => {
        const response = await sendRequest('posts', testData, 'post');
        expect(response.status).to.equal(201);
    });
});
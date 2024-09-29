import { expect } from "chai";
import { sendRequest } from "../helpers/api.helper.js";
import { readJson } from "../config/readJson.js";

const createDataPath = './config/createData.json';
const updateDataPath = './config/updateData.json';
const patchDataPath = './config/patchData.json';

describe('Positive API test suit', () => {

    it('Creating - POST posts', async () => {
        const testData = readJson(createDataPath);
        const response = await sendRequest('posts', testData, 'post');
        // console.log(response.data);
        expect(response.status).to.equal(201);
        expect(response.data.id).to.equal(101);
    });

    it('Reading - GET post/2', async () => {
        const response = await sendRequest('posts/2')
        // console.log(response.data);
        expect(response.status).to.equal(200);
        expect(response.data.userId).to.equal(1);
        expect(response.data.title).to.equal('qui est esse');
    });

    it('Updating - PUT posts/3', async () => {
        const testData = readJson(updateDataPath);
        const response = await sendRequest('posts/3', testData, 'put');
        // console.log(response.data);
        expect(response.status).to.equal(200);
        // expect(response.data.userId).to.equal(5);
        expect(response.data.id).to.equal(3);
        // expect(response.data.title).to.equal("For those about to rock");
    });

    it('Patching - PATCH posts/4', async () => {
        const testData = readJson(patchDataPath);
        const response = await sendRequest('posts/4', testData, 'patch');
        // console.log(response.data);
        expect(response.status).to.equal(200);
        expect(response.data.id).to.equal(4);
        expect(response.data.title).to.equal("eum et est occaecati");
    });

    it('Deleting - DELETE posts/5', async () => {
        const response = await sendRequest('posts/5', null, 'delete');
        expect(response.status).to.equal(200);
    });
});
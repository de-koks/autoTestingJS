import { expect } from "chai";
import { sendRequest } from "../helpers/api.helper.js";
import { readJson } from "../config/readJson.js";

const createDataPath = './config/createData.json';
const updateDataPath = './config/updateData.json';
const patchDataPath = './config/patchData.json';
const invalidDataPath = './config/invalidData.json';

describe('Positive API test suit', () => {

    it('Creating - POST posts', async () => {
        const testData = readJson(createDataPath);
        const response = await sendRequest('posts', testData, 'post');
        // console.log(response.data);
        expect(response.status).to.equal(201);
        expect(response.data.id).to.equal(101);
    });

    it('Reading - GET posts/2', async () => {
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

describe('Negative API test suit', () => {

    it('GET returns 404 for posts/101', async () => {
        const response = await sendRequest('posts/101');
        expect(response.status).to.equal(404);
    });

    it('POST returns 404 for post/2', async () => {
        const testData = readJson(createDataPath);
        const response = await sendRequest('post/2', testData, 'post');
        expect(response.status).to.equal(404);
    });

    it('POST returns 404 without body for posts/2', async () => {
        const testData = readJson(createDataPath);
        const response = await sendRequest('post/2', null, 'post');
        // console.log(response.status);
        // console.log(response.data);
        expect(response.status).to.equal(404);
    });

    it('PUT returns 404 for posts/', async () => {
        const testData = readJson(updateDataPath);
        const response = await sendRequest('posts/', testData, 'put');
        // console.log(response.status);
        // console.log(response.data);
        expect(response.status).to.equal(404);
    });

    it('PATCH with invalid data returns 404 for posts4', async () => {
        const testData = readJson(invalidDataPath);
        const response = await sendRequest('posts4', testData, 'patch');
        // console.log(response.status);
        // console.log(response.data);
        expect(response.status).to.equal(404);
    });

    it('DELETE returns 404 for post/5', async () => {
        // const testData = readJson(createDataPath);
        const response = await sendRequest('post/5', null, 'delete');
        expect(response.status).to.equal(404);
    });
});
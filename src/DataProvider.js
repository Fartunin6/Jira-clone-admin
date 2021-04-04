import { fetchUtils } from 'react-admin';

const apiURL = 'http://localhost:8000/api';
const httpClient = fetchUtils.fetchJson;

const options = {};
options.headers = new Headers({ Accept: 'application/json' });

options.headers.set(
  'Authorization',
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRhMzZjYWU2Y2NlNTI0ZTgzOWEwOTUiLCJpYXQiOjE2MTc0NDI5NjYsImV4cCI6MTYxODA0Nzc2Nn0.TPB6VNpSBLJ9D3J8QRJgKimqwJXuqZwz5L9raCHK1Y8',
);

const DataProvider = {
  getList: (resource, params) => {
    const url = `${apiURL}/${resource}/all`;

    return httpClient(url, options).then(({ headers, json }) => ({
      data: json.data,
      total: json.total,
    }));
  },

  getOne: (resource, params) => {},

  getMany: (resource, params) => {},

  getManyReference: (resource, params) => {},

  update: (resource, params) => {},

  updateMany: (resource, params) => {},

  create: (resource, params) => {
    const url = `${apiURL}/${resource}/`;

    const data = {
      title: params.title,
      description: params.description,
      background: params.background,
      userId: params.userId,
    };

    return httpClient(url, options, data).then(({ headers, json }) => ({
      data: json.data,
    }));
  },

  delete: (resource, params) => {
    const url = `${apiURL}/${resource}/delete/?id=${params.id}`;

    return httpClient(url, options).then(({ headers, json }) => ({
      data: json.data,
    }));
  },

  deleteMany: (resource, params) => {},
};

export default DataProvider;

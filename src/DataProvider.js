import { fetchUtils } from 'react-admin';
import { stringify } from 'querystring';
import { HttpError } from 'react-admin';

const apiURL = 'http://localhost:8000/api';

const httpClient = (
  url,
  options = {
    method: 'GET',
    body: null,
  },
) => {
  options.headers = new Headers({ Accept: 'application/json', 'Content-Type': 'application/json' });

  options.headers.set(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdhOTJkODI0Zjg1ZDE5NzgyMjZkODIiLCJpYXQiOjE2MTg3MzE4NjEsImV4cCI6MTYxOTMzNjY2MX0.oLtbo6qD0yvQTFzP78745S4AJTYR0Yq5RcudLEPLXP8',
  );

  return fetchUtils.fetchJson(url, options);
};

const DataProvider = {
  getList: (resource, params) => {
    const url = `${apiURL}/${resource}/all`;

    return httpClient(url, { method: 'GET' })
      .then(({ headers, json }) => ({
        data: json.data,
        total: json.total,
      }))
      .catch((error) => console.log('catch', error));
  },

  getOne: (resource, params) => {},

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };

    const url = `${apiURL}/${resource}?${stringify(query)}`;

    return httpClient(url, { method: 'GET' }).then(({ headers, json }) => ({
      data: json.data,
    }));
  },

  getManyReference: (resource, params) => {},

  update: (resource, params) => {
    const url = `${apiURL}/${resource}/update`;

    const data = Object.fromEntries(
      Object.entries(params.data).filter(
        ([key, value], idx) => value !== Object.entries(params.previousData)[idx][1],
      ),
    );

    return httpClient(url, {
      method: 'PATCH',
      body: JSON.stringify({ id: params.id, newFields: data }),
    }).then(({ headers, json }) => ({ data: json.data[0] }));
  },

  updateMany: (resource, params) => {},

  create: (resource, params) => {
    const url = `${apiURL}/${resource}/`;

    console.log('create');

    return httpClient(url, { method: 'POST', body: JSON.stringify(params.data) }).then(
      ({ headers, json }) => ({
        data: json.data[json.data.length - 1],
      }),
    );
  },

  delete: (resource, params) => {
    const url = `${apiURL}/${resource}/delete/?id=${params.id}`;

    return httpClient(url, { method: 'GET' }).then(({ headers, json }) => ({
      data: json.data,
    }));
  },

  deleteMany: (resource, params) => {},
};

export default DataProvider;

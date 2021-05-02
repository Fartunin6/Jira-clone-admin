import { fetchUtils } from 'react-admin';
import { stringify } from 'querystring';

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
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgzY2VlZDNlMjU2YjM2ZDAzNTdiMWYiLCJpYXQiOjE2MTk5Mzc5MDgsImV4cCI6MTYyMDU0MjcwOH0.IrMp9zoRuINSMXjhnuH1lUHNMgUB7O1aoInM1iwAFAA',
  );

  return fetchUtils.fetchJson(url, options);
};

const DataProvider = {
  getList: (resource, params) => {
    const query = {
      filter: JSON.stringify(params.filter),
      sort: JSON.stringify(params.sort),
    };

    const url = `${apiURL}/${resource}/all?${stringify(query)}`;

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

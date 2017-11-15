import dispatch from 'redux/es/createStore';
import axios from 'axios';

import localStorageManager from '../localStorageManager';
import { NOT_AUTHORISED } from '../containers/App/constants';

const baseUrl = 'http://localhost:3090/api/';

function getHeader(isAuthenticated = false, contentType = 'application/json') {
  const headers = {
    Accept: 'application/json',
    'Content-Type': contentType,
  };
  if (isAuthenticated) {
    headers['Authorization'] = `${localStorageManager.getIdToken()}`;
  }
  return headers;
}

function getConfig(method, body, headers = null) {
  const config = {
    method,
    headers: headers || getHeader(),
    body,
  };
  return config;
}

function getUrl(url) {
  return `${baseUrl}${url}`;
}

function fetchGet(url, headers = null) {
  const config = getConfig('GET', null, headers);
  return fetch(getUrl(url), config)
      .then((response) => {
        if (response.status === 401) {
          dispatch(NOT_AUTHORISED);
        }
        return response.json();
      });
}

function fetchPost(url, body, headers = null) {
  const config = getConfig('POST', body, headers);
  return fetch(getUrl(url), config).then(response => response.json());
}

export default {
  getHeader,
  fetchGet,
  fetchPost
}

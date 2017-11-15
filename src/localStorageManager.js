const idTokenKey = 'id_token';

function setIdToken(token) {
  sessionStorage.setItem(idTokenKey, token);
}

function getIdToken() {
  return sessionStorage.getItem(idTokenKey);
}

function removeIdToken() {
  sessionStorage.removeItem(idTokenKey);
}    

export default {
  setIdToken,
  getIdToken,
  removeIdToken
}

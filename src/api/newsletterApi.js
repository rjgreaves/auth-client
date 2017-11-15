import axios from 'axios';
import apiConfig from './config';

import {
  ROOT_URL
} from './constants';

export function fetchNewsletter(newsletterId) {
  const config = apiConfig.getHeader(true);
  return apiConfig.fetchGet(
        `newsletter/${newsletterId}`,
        config
    );
}

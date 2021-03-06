import axios from 'axios';

import {
    recentPhotosPath,
    tabbarPath,
    userPhotosPath,
} from './api';

export const getRecentPhotos = async (params = {}) => {
    const response = await axios(recentPhotosPath, params);
    return response;
};

export const getTabbar = async (params = {}) => {
    const response = await axios(tabbarPath, params);
    return response;
};

export const getUserPhotos = async (params = {}) => {
    const response = await axios.get(userPhotosPath, {
        params,
    });
    return response;
};

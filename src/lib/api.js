const isMock = true;
let url = '';

if (isMock) {
    url = 'https://www.easy-mock.com/mock/5acdf3cc30ee7d62f6c16be9/500pxme';
} else {
    url = '';
}

export const recentPhotosPath = `${url}/recentphotos`;
export const tabbarPath = `${url}/tabbar`;

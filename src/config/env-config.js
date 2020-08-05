const API_HOST_LOCAL = 'localhost:8080';
const API_HOST_TEST = '35.234.221.174';
const API_HOST_PRE_PROD = 'change_me';
const API_HOST_PROD = 'change_me';

const UI_HOST_LOCAL = 'localhost';
const UI_HOST_TEST = '35.234.216.106';
const UI_HOST_PRE_PROD = 'change_me';
const UI_HOST_PROD = 'change_me';

const HOST_NAMES = {
    [UI_HOST_LOCAL]: API_HOST_LOCAL,
    [UI_HOST_TEST]: API_HOST_TEST,
    [UI_HOST_PRE_PROD]: API_HOST_PRE_PROD,
    [UI_HOST_PROD]: API_HOST_PROD,
};

export const urls = {
    applicationName: `http://${HOST_NAMES[window.location.hostname]}/application`,
};

import {request} from '@playwright/test';

async function globalSetup() {
    const baseUrl = 'https://randomlyapi.symphony.is/';  // Replace with your actual base URL
    const requestContext = await request.newContext();
    const response = await requestContext.post(`${baseUrl}/auth/login/`, {
        data: {
            username: 'vlestar',
            password: 'a1b2c3d4'
        }
    });

    if (response.status() !== 200) {
        throw new Error(`Login failed with status ${response.status()}`);
    }

    const responseBody = await response.json();
    // Store the token in an environment variable
    process.env.TOKEN = responseBody.token;
}

export default globalSetup;
import {expect, request, test} from '@playwright/test';

const baseUrl = 'https://randomlyapi.symphony.is/api';

test.describe('API Test Flow', () => {
    let token: string;
    let postId: string;

    test('Signup', async ({ request }) => {
        const response = await request.post(`${baseUrl}/auth/signup/`, {
            data: {
                email: 'tuser@resut.com',
                password: 'a1b2c3d4',
                firstName: 'Tuser',
                lastName: 'Resut',
                username: 'tuseresut',
                dateOfBirth: '28/09/1991'
            }
        });

        expect(response.status()).toBe(200);
    });

    test('Login and Get Token', async ({ request }) => {
        const response = await request.post(`${baseUrl}/auth/login/`, {
            data: {
                username: 'vlestar',
                password: 'a1b2c3d4'
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        token = responseBody.token;
    });

    test('Add Post', async ({ request }) => {
        const token = process.env.TOKEN;
        if (!token) {
            throw new Error('Token not found');
        }
        const response = await request.post(`${baseUrl}/posts/`, {
            data: {
                text: 'Test Post',
            },
            headers: {
                Authorization:`Token ${token}`
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        postId = responseBody.id;
    });

    test('Add Comment', async ({ request }) => {
        const response = await request.post(`${baseUrl}/post-comments/`, {
            data: {
                // Replace with actual comment data
                text: 'Test comment.',
                post: 1,
            },
            headers: {
                Authorization: `token ${token}`
            }
        });

        expect(response.status()).toBe(200);
    });

    test('Read Comments', async ({ request }) => {
        const response = await request.get(`${baseUrl}/posts/${postId}/comments/`, {
            data: {
               post: 1,
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toContainEqual(
            expect.objectContaining({
                content: 'Test comment.'
            })
        );
    });
});
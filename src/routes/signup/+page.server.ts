import * as users from '$lib/database';

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();

    const email = data.get('email');
    const username = data.get('username');
    const password = data.get('password');

    // Validate that values are not null and are strings
    if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      throw new Error('Invalid form data');
    }

    users.createUser({
      username,
      email,
      password
    })
  },
};
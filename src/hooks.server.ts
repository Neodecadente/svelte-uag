import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { getUserFromSession, type User } from './lib/session';

declare global {
  namespace App {
    interface Locals {
      user: User | null;
    }
  }
}

export const handle: Handle = async ({ event, resolve }) => {
  const sessionCookie = event.cookies.get('session_id');

  // Fetch user info and add it to event.locals
  event.locals.user = sessionCookie ? await getUserFromSession(sessionCookie) : null;

  // Redirect unauthenticated users to /landing
  const publicRoutes = ['/landing', '/signup', '/signin'];
  if (!event.locals.user && !publicRoutes.includes(event.url.pathname)) {
    redirect(302, '/landing');
  }

  return resolve(event);
};
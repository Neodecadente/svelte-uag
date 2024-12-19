export interface User {
  id: number;
  name: string;
  role: string;
}

export async function getUserFromSession(sessionId: string): Promise<User | null> {
  if (!sessionId) {
    return null;
  }

  // Simulate session validation and user fetching
  if (sessionId === 'valid-session-id') {
    return {
      id: 1,
      name: 'John Doe',
      role: 'user',
    };
  }

  return null; // Invalid session
}

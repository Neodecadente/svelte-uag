import fs from 'fs';
import path from 'path';

interface User {
  id: number;
  username: string;
  email: string;
  password: string; // Store the hashed password
}

const DATA_FILE = path.join(process.cwd(), 'users.json');
const SALT_ROUNDS = 10; // Define the cost factor for bcrypt

// Get all users
export function getUsers(): User[] {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data) as User[];
}

// Create a new user with hashed password
export async function createUser(user: Omit<User, 'id'>): Promise<User> {
  const users = getUsers();

  const newUser: User = { id: Date.now(), ...user };
  users.push(newUser);

  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
  return newUser;
}

// Verify a password
export async function verifyPassword(email: string, plainPassword: string): Promise<boolean> {
  const users = getUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    throw new Error('User not found');
  }

  // Compare the plain password with the plain password
  return user.password === plainPassword;
}

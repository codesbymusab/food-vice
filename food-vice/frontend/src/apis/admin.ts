
export interface User {
  _id: string;
  provider: string;
  name: string;
  email: string;
  username: string;
  profilePhoto: string;
  address?: string;
  bio?: string;
  level: number;
  role: 'user' | 'moderator' | 'admin';
  banned: boolean;
  banReason?: string;
  banUntil?: string;
  dateJoined: string;
  createdAt: string;
  updatedAt: string;
}

export interface Restaurant {
  _id: string;
  name: string;
  phone?: string;
  website?: string;
  description?: string;
  priceCategory?: string;
  locationId?: string;
  flags: Array<{
    userId: string;
    reason: string;
    createdAt: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface AuditLog {
  _id: string;
  actorId: User;
  actorRole: string;
  action: string;
  targetType: string;
  targetId: string;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

const API_BASE = 'http://localhost:3000';

async function request(path: string, options: RequestInit = {}){
  const res = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Server error');
  }
  return data
}

export async function fetchAdminRestaurants(query = '') {
  const search = query ? `?${query}` : '';
  return request(`/admin/restaurants${search}`);
}

export async function createRestaurant(payload: Partial<Restaurant>){
  return request('/admin/restaurants', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export async function updateRestaurant(id: string, payload: Partial<Restaurant>){
  return request(`/admin/restaurants/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload)
  });
}

export async function deleteRestaurant(id: string){
  return request(`/admin/restaurants/${id}`, {
    method: 'DELETE'
  });
}


export async function fetchAdminUsers(query = ''){
  const search = query ? `?${query}` : '';
  return request(`/admin/users${search}`);
}

export async function setUserRole(userId: string, role: 'user' | 'moderator' | 'admin') {
  return request(`/admin/users/${userId}/role`, {
    method: 'PUT',
    body: JSON.stringify({ role })
  });
}

export async function fetchAuditLogs(query = ''){
  const search = query ? `?${query}` : '';
  return request(`/admin/audit-logs${search}`);
}

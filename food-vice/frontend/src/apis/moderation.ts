// Types based on backend responses
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

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

export interface Review {
  _id: string;
  uid: User;
  restaurantId: string;
  text: string;
  status: 'pending' | 'approved' | 'rejected' | 'hidden';
  flags: Array<{
    userId: string;
    reason: string;
    createdAt: string;
  }>;
  moderationNotes: Array<{
    moderatorId: string;
    note: string;
    action: 'approve' | 'reject' | 'hide' | 'warn';
    createdAt: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface Thread {
  _id: string;
  uid: User;
  communityId: string;
  title: string;
  content: string;
  views: number;
  likes: string[];
  dislikes: string[];
  topics: string[];
  media: string[];
  status: 'pending' | 'approved' | 'rejected' | 'hidden';
  flags: Array<{
    userId: string;
    reason: string;
    createdAt: string;
  }>;
  moderationNotes: Array<{
    moderatorId: string;
    note: string;
    action: 'approve' | 'reject' | 'hide' | 'warn';
    createdAt: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface Report {
  _id: string;
  type: 'review' | 'thread' | 'user' | 'restaurant';
  targetId: string;
  reporterId: User;
  reason: string;
  details?: string;
  status: 'open' | 'escalated' | 'resolved';
  assignedTo?: User;
  createdAt: string;
  updatedAt: string;
}

const API_BASE = 'http://localhost:3000';

async function request<T>(path: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
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
  return data as ApiResponse<T>;
}

export async function fetchModerationReviews(query = ''): Promise<ApiResponse<Review[]>> {
  const search = query ? `?${query}` : '';
  return request<Review[]>(`/moderation/reviews${search}`);
}

export async function flagReview(reviewId: string, reason: string): Promise<ApiResponse<Review>> {
  return request<Review>(`/moderation/reviews/${reviewId}/flag`, {
    method: 'POST',
    body: JSON.stringify({ reason })
  });
}

export async function moderateReview(reviewId: string, action: 'approve' | 'reject' | 'hide', note: string): Promise<ApiResponse<Review>> {
  return request<Review>(`/moderation/reviews/${reviewId}/moderate`, {
    method: 'POST',
    body: JSON.stringify({ action, note })
  });
}

export async function fetchModerationThreads(query = ''): Promise<ApiResponse<Thread[]>> {
  const search = query ? `?${query}` : '';
  return request<Thread[]>(`/moderation/threads${search}`);
}

export async function moderateThread(threadId: string, action: 'approve' | 'reject' | 'hide', note: string): Promise<ApiResponse<Thread>> {
  return request<Thread>(`/moderation/threads/${threadId}/moderate`, {
    method: 'POST',
    body: JSON.stringify({ action, note })
  });
}

export async function fetchReports(query = ''): Promise<ApiResponse<Report[]>> {
  const search = query ? `?${query}` : '';
  return request<Report[]>(`/moderation/reports${search}`);
}

export async function assignReport(reportId: string, assignedTo: string): Promise<ApiResponse<Report>> {
  return request<Report>(`/moderation/reports/${reportId}/assign`, {
    method: 'POST',
    body: JSON.stringify({ assignedTo })
  });
}

export async function resolveReport(reportId: string, resolution: string, escalateToAdmin = false): Promise<ApiResponse<Report>> {
  return request<Report>(`/moderation/reports/${reportId}/resolve`, {
    method: 'POST',
    body: JSON.stringify({ resolution, escalateToAdmin })
  });
}

export async function banUser(userId: string, reason: string, until?: string): Promise<ApiResponse<User>> {
  return request<User>(`/moderation/users/${userId}/ban`, {
    method: 'POST',
    body: JSON.stringify({ reason, until })
  });
}

export async function unbanUser(userId: string): Promise<ApiResponse<User>> {
  return request<User>(`/moderation/users/${userId}/unban`, {
    method: 'POST'
  });
}
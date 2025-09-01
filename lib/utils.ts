import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sanitizeProfile(data: Profile): Profile {
  return {
    login: data.login || "",
    name: data.name || "",
    avatar_url: data.avatar_url || "",
    type: data.type || "",
    company: data.company || "",
    blog: data.blog || "",
    location: data.location || "",
    email: data.email || null,
    hireable: data.hireable ?? null,
    bio: data.bio || "",
    twitter_username: data.twitter_username || "",
    public_repos: data.public_repos ?? 0,
    followers: data.followers ?? 0,
    following: data.following ?? 0,
    private_gists: data.private_gists ?? 0,
    total_private_repos: data.total_private_repos ?? 0,
    collaborators: data.collaborators ?? 0,
  };
}
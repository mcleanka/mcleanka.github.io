type Profile = {
    login: string;
    name: string;
    avatar_url: string;
    type: string;
    company: string | null;
    blog: string;
    location: string | null;
    email: string | null;
    hireable: boolean | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    followers: number;
    following: number;
    private_gists: number;
    total_private_repos: number;
    collaborators: number;
};

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: 'featured' | 'noteworthy';
    icon: LucideIcon;
    gradient?: string;
    status?: 'live' | 'government' | 'ministry';
    organization?: string;
    externalLink?: string;
    isReversed?: boolean;
}
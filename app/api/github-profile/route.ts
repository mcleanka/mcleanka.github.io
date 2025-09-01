import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const githubToken = process.env.GITHUB_TOKEN;

        if (!githubToken) {
            return NextResponse.json(
                { error: "GitHub Personal Access Token is not defined" },
                { status: 500 }
            );
        }

        const response = await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${githubToken}`,
                Accept: "application/vnd.github+json",
            },
            cache: "no-store",
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: `GitHub API responded with status: ${response.status}` },
                { status: response.status }
            );
        }

        const userData = await response.json();
        return NextResponse.json(userData);

    } catch (error) {
        console.error("Error fetching GitHub profile:", error);
        return NextResponse.json(
            { error: "Failed to fetch GitHub profile" },
            { status: 500 }
        );
    }
}
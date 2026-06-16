// src/app/api/github/route.ts
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await fetch(
      'https://api.github.com/users/DivyangUGitHub/events/public',
      {
        headers: {
          'User-Agent': 'Divyang-portfolio'
        }
      }
    );
    
    if (!response.ok) {
      return NextResponse.json({
        success: false,
        repo: "Divyang-portfolio",
        message: "GitHub API limit reached",
        time: new Date().toISOString(),
        url: "https://github.com/DivyangUGitHub"
      });
    }
    
    const events = await response.json();
    const pushEvent = events.find((event: any) => event.type === 'PushEvent');
    
    if (pushEvent) {
      return NextResponse.json({
        success: true,
        repo: pushEvent.repo.name,
        message: pushEvent.payload.commits[0]?.message || 'Code pushed',
        time: pushEvent.created_at,
        url: `https://github.com/${pushEvent.repo.name}`
      });
    }
    
    return NextResponse.json({
      success: false,
      repo: "Divyang-portfolio",
      message: "No recent pushes",
      time: new Date().toISOString(),
      url: "https://github.com/DivyangUGitHub"
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      repo: "Divyang-portfolio",
      message: "Welcome to my portfolio!",
      time: new Date().toISOString(),
      url: "https://github.com/DivyangUGitHub"
    });
  }
}
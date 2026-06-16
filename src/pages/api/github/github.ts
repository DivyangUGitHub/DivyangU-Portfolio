// src/pages/api/github.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      'https://api.github.com/users/DivyangUGitHub/events/public',
      {
        headers: { 'User-Agent': 'Divyang-portfolio' }
      }
    );
    
    const events = await response.json();
    const pushEvent = events.find((event: any) => event.type === 'PushEvent');
    
    if (pushEvent) {
      return res.status(200).json({
        success: true,
        repo: pushEvent.repo.name,
        message: pushEvent.payload.commits[0]?.message || 'Code pushed',
        time: pushEvent.created_at,
        url: `https://github.com/${pushEvent.repo.name}`
      });
    }
    
    return res.status(200).json({
      success: false,
      repo: "Divyang-portfolio",
      message: "No recent pushes",
      time: new Date().toISOString(),
      url: "https://github.com/DivyangUGitHub"
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      repo: "Divyang-portfolio",
      message: "Welcome to my portfolio!",
      time: new Date().toISOString(),
      url: "https://github.com/DivyangUGitHub"
    });
  }
}
import express from "express";

export function setCookies(res: express.Response, session: any) {
    res.cookie('token', session.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",       
      sameSite: 'lax', 
      maxAge: 2147483647 // set Max
    });
    res.cookie('refresh-token', session.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",       
      sameSite: 'lax', 
      maxAge: 2147483647 // set Max
    });
  }
export function clearCookies(res: express.Response) {
    res.clearCookie('token');
    res.clearCookie('refresh-token');
  }
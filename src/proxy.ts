import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constants/roles";

export async function proxy (request : NextRequest) {

  const pathname = request.nextUrl.pathname;

  let isAuthenticated = false;
  let role = null;
  const {data} = await userService.getSession();
  // console.log(data);
  // console.log(data.user.role);

  if(data){
    isAuthenticated = true;
    role = data.user.role
  }
  if(!isAuthenticated){
    return NextResponse.redirect( new URL("/login",request.url) );
  }
  if(role===Roles.admin && (pathname.startsWith('/dashboard') || pathname.startsWith('/seller-dashboard') || pathname.startsWith('/customer-dashboard') ) ){
    return NextResponse.redirect( new URL("/admin-dashboard",request.url) );
  }
  else if(role===Roles.seller && (pathname.startsWith('/dashboard') || pathname.startsWith('/admin-dashboard') || pathname.startsWith('/customer-dashboard') ) ){
    return NextResponse.redirect( new URL("/seller-dashboard",request.url) );
  }
  else if(role===Roles.customer && (pathname.startsWith('/dashboard') || pathname.startsWith('/admin-dashboard') || pathname.startsWith('/seller-dashboard') ) ){
    return NextResponse.redirect( new URL("/customer-dashboard", request.url) )
  }

  return NextResponse.next();
}

export const config = {
  matcher : ['/dashboard',
    '/dashboard/:path*',
    '/admin-dashboard',
    '/admin-dashboard/:path*',
    '/seller-dashboard',
    '/seller-dashboard/:path*',
    '/customer-dashboard',
    '/customer-dashboard/:path*']
}
import Link from 'next/link'

//By default nextjs 13 function component is react server props.
export default function Page(){
  return <Link href={'/dashboard'} className="flex h-screen items-center justify-center">Index page</Link>
}

/*
  Next.js provides a set of special files to create UI with specific behavior in nested routes:

 layout =======	Shared UI for a segment and its children 
 page ========	Unique UI of a route and make routes publicly accessible
 loading =========	Loading UI for a segment and its children
 not-found ========	Not found UI for a segment and its children
 error =========	Error UI for a segment and its children
 global-error =======	Global Error UI
 route ============	Server-side API endpoint
 template	=========== Specialized re-rendered Layout UI
 default	=========== Fallback UI for Parallel Routes

*/

/*
Templates are similar to layouts in that they wrap each child 
layout or page. Unlike layouts that persist across routes and
maintain state, templates create a new instance for each of 
their children on navigation. This means that when a user 
navigates between routes that share a template, a new instance 
of the component is mounted, DOM elements are recreated, 
state is not preserved, and effects are re-synchronized.

There may be cases where you need those specific behaviors, 
and templates would be a more suitable option than layouts. 
For example:

- Features that rely on useEffect (e.g logging page views) and 
  useState (e.g a per-page feedback form).
  
- To change the default framework behavior. For example, 
  Suspense Boundaries inside layouts only show the fallback the 
  first time the Layout is loaded and not when switching pages. 
  For templates, the fallback is shown on each navigation.
*/
export default function Template({ children }: { children: React.ReactNode }) {
    
    return <div>{children}</div>
}


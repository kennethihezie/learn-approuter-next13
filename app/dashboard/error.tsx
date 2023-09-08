/*
The error.js file convention allows you to gracefully 
handle unexpected runtime errors in nested routes.

Automatically wrap a route segment and its nested 
children in a React Error Boundary.

Create error UI tailored to specific segments using the file-system 
hierarchy to adjust granularity.

Isolate errors to affected segments while keeping the rest 
of the application functional.

Add functionality to attempt to recover from an error without 
a full page reload.

Create error UI by adding an error.js file inside a route 
segment and exporting a React component:
*/
'use client'
import { useEffect } from "react"

 //Error components must be a client components

export default function Error({error, reset}: {error: Error, reset: () => void}){
    useEffect(() => console.error(error), [error])

    return (
        <div>
        <h2>Something went wrong!</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    )

}


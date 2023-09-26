'use client'
 
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 // Displaying Loading State
 // Use the useFormStatus hook to show a loading state when a 
 // form is submitting on the server. The useFormStatus hook can 
 //only be used as a child of a form element using a Server Action.
 
  return (
    <button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>
  )
}

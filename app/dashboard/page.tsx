import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { SubmitButton } from "../components/submit_button";
import { experimental_useFormState as useFormState } from 'react-dom'
import { cookies } from 'next/headers'

async function getDataFromNetwork() {
    const res = await fetch('https://api.example.com/..')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if(!res.ok){
        return Error('failed to fetch data')
    }

    return res.json()
}

async function revalidatingData() {
    /*
    Revalidating Data
    Revalidation is the process of purging the Data Cache and re-fetching the 
    latest data. This is useful when your data changes and you want to ensure
    you show the latest information.

    Cached data can be revalidated in two ways:

    Time-based revalidation: Automatically revalidate data after a certain
    amount of time has passed. This is useful for data that changes infrequently 
    and freshness is not as critical.
   
    On-demand revalidation: Manually revalidate data based on an event (e.g. form submission). 
    On-demand revalidation can use a tag-based or path-based approach to revalidate 
    groups of data at once. This is useful when you want to ensure the latest data 
    is shown as soon as possible (e.g. when content from your headless CMS is updated).
    */

    // Time-based Revalidation
    // To revalidate data at a timed interval, you can use the next.revalidate 
    // option of fetch to set the cache lifetime of a resource (in seconds).
    const res = await fetch('https://api.example.com/..', { next: { revalidate: 3600 }})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if(!res.ok){
        return Error('failed to fetch data')
    }

    return res.json()

    /*
    Opting out of Data Caching
    
    fetch requests are not cached if:

    The cache: 'no-store' is added to fetch requests. fetch('https://...', { cache: 'no-store' })
    The revalidate: 0 option is added to individual fetch requests.
    The fetch request is inside a Router Handler that uses the POST method.
    The fetch request comes after the usage of headers or cookies.
    The const dynamic = 'force-dynamic' route segment option is used.
    The fetchCache route segment option is configured to skip cache by default.
    The fetch request uses Authorization or Cookie headers and there's an uncached 
    request above it in the component tree.
     */

    /*
    In the example below: Caching for third party libraries that don't use fetch.

    The revalidate option is set to 3600, meaning the data will be cached 
    and revalidated at most every hour.
    The React cache function is used to memoize data requests.

    import { cache } from 'react'
 
    export const revalidate = 3600 // revalidate the data at most every hour
 
    export const getItem = cache(async (id: string) => {
      const item = await db.item.findUnique({ id })
      return item
    })
    */

}

const schema = z.object({
    //add your config
})

export default async function Page(){
      // Next.js provides a powerful way to handle form submissions 
    // and data mutations using Server Actions.
    // To create a server-only form, define the Server Action in a 
    // Server Component. The action can either be defined inline with the 
    // "use server" directive at the top of the function, or in a separate 
    // file with the directive at the top of the file.
    async function create(formData: FormData) {
        'use server'

       try{
         // mutate data
        // revalidate cache

        /*
        Form Validation
        We recommend using HTML validation like required and type="email" 
        for basic form validation.

        For more advanced server-side validation, use a schema validation 
        library like zod to validate the structure of the parsed form data:
        */
       const parsed = schema.parse({
        id: formData.get('id')
       })

        // setting cookies
        // You can set cookies inside a Server Action using the cookies function:
        cookies().set('cartId', 'your id')

        //reading a cookie
        cookies().get('your id')?.value

        //deleting cookie
        cookies().delete('your id')

        // Revalidating Data
        // Server Actions allow you to invalidate the Next.js Cache on demand. 
        // You can invalidate an entire route segment with revalidatePath:

        revalidatePath('/')

        // Or invalidate a specific data fetch with a cache tag using revalidateTag:
 
        revalidateTag('posts')

        // If you would like to redirect the user to a different route after 
        // the completion of a Server Action, you can use redirect and any absolute 
        // or relative URL:

        redirect('/')

       } catch(e) {
        return { message: 'failed to create' }
       }
    }

   const [state, formAction] = useFormState(create, { message: null })

    //fetching data
    //const data = await getDataFromNetwork()
    //const data = revalidatingData()


  

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <Link href={'/dashboard/user'}>
               <h1 className="">Dashboard page</h1> 
            </Link>

            <form action={create}>
                <input type="text" name="" id="id" />

                <SubmitButton />

                <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
            </form>
        </div>
    )
}



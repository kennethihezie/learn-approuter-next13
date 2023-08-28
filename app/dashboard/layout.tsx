import type { Metadata } from 'next'

/*
 Metadata can be defined by exporting a metadata object or
 generateMetadata function in a layout.js or page.js file.

 You should not manually add <head> tags such as <title> and <meta> to root layouts. 
 Instead, you should use the Metadata API which automatically 
 handles advanced requirements such as streaming and 
 de-duplicating <head> elements.
*/
export const metadata: Metadata = {
    title: 'Custom title'
}

/*
A layout is UI that is shared between multiple pages. 
On navigation, layouts preserve state, remain interactive, 
and do not re-render. Layouts can also be nested.

You can define a layout by default exporting a React component 
from a layout.js file. The component should accept a children 
prop that will be populated with a child layout (if it exists) 
or a child page during rendering.
*/
export default function DashboardLayout({children}: {children: React.ReactNode}){
    
    return (
        <section>
              {/* Include shared UI here e.g. a header or sidebar */}
              <nav></nav>

              { children }
        </section>
    )
}
/*
Good to know:

- The top-most layout is called the Root Layout. 
  This required layout is shared across all pages in an
  application. Root layouts must contain html and body tags.

- Only the root layout can contain <html> and <body> tags.

- Any route segment can optionally define its own Layout. 
  These layouts will be shared across all pages in that segment.

- Layouts in a route are nested by default. Each parent layout 
  wraps child layouts below it using the React children prop.

- You can use Route Groups to opt specific route segments in 
  and out of shared layouts.

- Layouts are Server Components by default but can be set to 
  a Client Component.

- Layouts can fetch data. View the Data Fetching section for 
  more information.

- Passing data between a parent layout and its children is not 
  possible. However, you can fetch the same data in a route 
  more than once, and React will automatically dedupe the 
  requests without affecting performance.

- Layouts do not have access to the current route segment(s). 
  To access route segments, you can use useSelectedLayoutSegment 
  or useSelectedLayoutSegments in a Client Component.

- .js, .jsx, or .tsx file extensions can be used for Layouts.

- A layout.js and page.js file can be defined in the same folder.
  The layout will wrap the page.
 */

  /*
  Nesting Layouts
  Layouts defined inside a folder (e.g. app/dashboard/layout.js) apply to 
  specific route segments (e.g. acme.com/dashboard) and render 
  when those segments are active. By default, layouts in the file
  hierarchy are nested, which means they wrap child layouts via 
  their children prop.
  */
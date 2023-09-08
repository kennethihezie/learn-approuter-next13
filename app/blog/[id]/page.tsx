/*
When you don't know the exact segment names 
ahead of time and want to create routes from 
dynamic data, you can use Dynamic Segments that
are filled in at request time or prerendered at build time

Convention
A Dynamic Segment can be created by wrapping a folder's name
in square brackets: [folderName]. For example, [id] or [slug].

Dynamic Segments are passed as the params prop to layout, 
page, route, and generateMetadata functions.
*/

export default function Page({ params }: { params: { id: string }}){
    return (
        <div>My post: { params.id }</div>
    )
}

/*
Generating Static Params
The generateStaticParams function can be used in combination with 
dynamic route segments to statically generate routes at build time 
instead of on-demand at request time.
*/
export async function generateStaticParams() {
    //some api call
    const posts = await fetch('https://.../posts').then((res) => res.json())

    return posts.map((post: any) => ({
        id: post.id
    }))
}

//valid url: acme.com/blog/1

/*
Catch-all Segments
Dynamic Segments can be extended to catch-all subsequent 
segments by adding an ellipsis inside the brackets [...folderName].

For example, app/shop/[...slug]/page.js will match /shop/clothes, 
but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.

Route	                   Example URL	           params
app/shop/[...slug]/page.js	/shop/a	                { slug: ['a'] }
app/shop/[...slug]/page.js	/shop/a/b	            { slug: ['a', 'b'] }
app/shop/[...slug]/page.js	/shop/a/b/c	            { slug: ['a', 'b', 'c'] }


Optional Catch-all Segments
Catch-all Segments can be made optional by including 
the parameter in double square brackets: [[...folderName]].

For example, app/shop/[[...slug]]/page.js will also match /shop, 
in addition to /shop/clothes, /shop/clothes/tops, /shop/clothes/tops/t-shirts.

The difference between catch-all and optional catch-all segments 
is that with optional, the route without the parameter is also 
matched (/shop in the example above).

Route	                      Example URL	        params
app/shop/[[...slug]]/page.js	/shop	            {}
app/shop/[[...slug]]/page.js	/shop/a         	{ slug: ['a'] }
app/shop/[[...slug]]/page.js	/shop/a/b	        { slug: ['a', 'b'] }
app/shop/[[...slug]]/page.js	/shop/a/b/c	        { slug: ['a', 'b', 'c'] }
 */
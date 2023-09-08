/*
In the app directory, nested folders are normally mapped to URL paths. 
However, you can mark a folder as a Route Group to prevent the folder 
from being included in the route's URL path.

This allows you to organize your route segments and project files 
into logical groups without affecting the URL path structure.

Route groups are useful for:

Organizing routes into groups e.g. by site section, intent, or team.
Enabling nested layouts in the same route segment level:
Creating multiple nested layouts in the same segment, including 
multiple root layouts
Adding a layout to a subset of routes in a common segment.

A route group can be created by wrapping a folder's name in parenthesis: (folderName)
Now instead of acme.com/shop/product it will be acme.com/product
*/

export default function Product(){
    return (
        <p>Product page for route group</p>
    )
}
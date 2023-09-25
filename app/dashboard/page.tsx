import Link from "next/link";

export default function Page(){
    return <Link href={'/dashboard/user'}><h1 className="flex h-screen items-center justify-center">Dashboard page</h1> </Link>
}
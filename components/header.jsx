import React from "react";
import Link from "next/link";
import Image from "next/image";

const header = async (isAdminPage= true) => {
    const isAdmin = false
  return (
    <header>
        <nav>
            <Link href={isAdminPage ? "/admin" : "/"}>
            <Image src="/logo.png" alt="Vercel Logo" width={600} height={60} className="h-12 w-auto object-contain" />
            {isAdminPage &&(
                <span className="text-xs font-extralight">admin</span>
            )}
            </Link>
        </nav>
    </header>
    
  
  );
};

export default header;

import { Outlet } from "react-router-dom";

export default function LayoutVacio(){
    return(
        <div className="min-h-dvh flex flex-col bg-gray-50 text-gray-900">
           
            <main className="flex-1">
                <Outlet/>
            </main>
        
        </div>
    )
}
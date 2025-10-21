import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Componentes/Navbar";
import { Footer } from "../Componentes/Footer";
import Modal from "../Componentes/Modal";
import {LoginForm} from "../Componentes/LoginForm";

export default function MainLayout(){
    const [loginOpen, setLoginOpen] = useState(false);
    return(
        <div className="min-h-dvh flex flex-col bg-gray-50 text-gray-900">
            <Navbar onOpenLogin={() => setLoginOpen(true)}/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>

            <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
                <LoginForm onSuccess={() => setLoginOpen(false)} />
            </Modal>
        </div>
    )
}
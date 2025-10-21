import { useTheme }  from "../Context/ThemeContext";

export function Nosotros(){
    const {theme} = useTheme();
    return(
        <div className={theme === "dark" ? "min-h-dvh bg-gray-900 text-white" : "min-h-dvh bg-white text-gray-900"}>
            <h1 className="text-3xl font-bold text-blue-500/60 my-[200px] hover:text-violet-600">Nosotros</h1>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum facilis explicabo ab quam natus accusamus atque ut mollitia aliquid.</p>
        </div>
    )
}
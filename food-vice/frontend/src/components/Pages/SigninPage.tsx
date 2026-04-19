import { useState } from "react";
import { Link, useNavigate } from "react-router";
import google from '../../assets/google.svg'
import '../../index.css'
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../context/AuthContext";


export function SigninPage() {

    const [emailInput, setEmailInput] = useState<string>("")
    const [passwordInput, setPasswordInput] = useState<string>("")
    const { setUser,loading} = useAuth()

    const navigate = useNavigate()



    function onEmailInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmailInput(event.target.value)

    }

    function onPasswordInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPasswordInput(event.target.value)

    }
    async function onSignInClick() {
  
        try {
            const res = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: emailInput, password: passwordInput }),
                credentials: "include"
            });

            if (res.ok) {
                const { user } = await res.json()
                setUser(user)
                navigate('/home')
            }
        }
        catch (error) {
            console.log(error)
        }

    }


    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {

            try {
                const res = await fetch("http://localhost:3000/auth/google", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ access_token: tokenResponse.access_token }),
                    credentials: "include"
                });

                if (res.ok) {
                    const { user } = await res.json()
                    setUser(user)
                    navigate('/home')
                }
            }
            catch (error) {
                console.log(error)
            }
        }
    });

    if(loading){
        return (
            <div>Loading...</div>
        )
    }
    return (

        <div className="relative h-screen w-screen flex overflow-hidden">



            <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-16 bg-background-light dark:bg-background-dark">



                <div className="w-full max-w-md">

                    <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
                        <span className="material-symbols-outlined text-primary text-4xl" >restaurant</span>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100" >FoodVice</h2>
                    </div>


                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 mb-3" >Welcome Back</h2>
                        <p className="text-slate-500 dark:text-slate-400" >Start Exploring.</p>
                    </div>
                    <form className="space-y-5" onSubmit={async (e: React.SubmitEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        await onSignInClick();
                    }}>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" >Email Address</label>
                            <input className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="name@example.com" type="email" value={emailInput} onChange={onEmailInputChange} />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" >Password</label>
                                <a className="text-xs font-bold text-primary hover:underline" href="#" >Forgot password?</a>
                            </div>
                            <input className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="••••••••" type="password" value={passwordInput} onChange={onPasswordInputChange} />
                        </div>
                        <div className="flex items-center">
                            <input className="rounded border-slate-300 text-primary focus:ring-primary" id="remember" type="checkbox" />
                            <label className="ml-2 text-sm text-slate-600 dark:text-slate-400 font-medium" >Remember me for 30 days</label>
                        </div>
                        <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-4"
                            type="submit">
                            Sign In
                            <span className="material-symbols-outlined text-xl" >arrow_forward</span>
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-slate-400 dark:border-slate-700"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background-light dark:bg-background-dark px-4 text-slate-500 font-bold tracking-widest" >Or continue with</span>
                        </div>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors" onClick={async () => await googleLogin()}>

                        <img className="w-7 h-7" src={google} alt="google-logo" />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300" >Google</span>
                    </button>


                    <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400" >
                        Don't have an account?
                        <Link className="text-accent-cyan font-bold hover:underline" to="/signup" >Sign up for free</Link>
                    </p>
                </div>
            </div>

            <div className="hidden lg:block lg:w-3/5 relative right-diagonal-split bg-primary">
                <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-90" data-alt="Close-up of a vibrant gourmet burger and fries" style={{ backgroundImage: "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBpcmdJuSAsc7NrppCq1bhEVzA_F3-aZs-mvI-14BaiiQxAPRPLZa01mSKPz05xj06gk5YWh2ZWFHExUubG9qOLioscaMBlLPC16KyhQaIAzaD8dIoe8aN0-bpgNMpA8e1kofv43qSzFaRrcviuwsUT34HedTbZeLu2FXxqZwKGb8K_LXb_c0aSZv5M_XwPOyAeDzq_NgmsgfeA5LiKwH3vG5K2oopdbetCLy8KHATuv-IhC0pFFAyAMR69iOxzzFjj439eL0PNcmY;)" }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>

                <div className="text-white">
                    <div className="absolute top-6 left-10 z-10 flex items-center gap-3 mb-6">
                        <span className="material-symbols-outlined text-5xl" >restaurant</span>
                        <h1 className="text-6xl font-black tracking-tighter" >FoodVice</h1>
                    </div>

                </div>
            </div>

        </div>


    );
}


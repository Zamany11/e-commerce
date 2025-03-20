import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FaEnvelope, FaGoogle, FaLock } from "react-icons/fa";

export default function Registerform() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState('');
    const router = useRouter();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Register</h1>
        </div> 
    )
}
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Credential from '../../components/auth/Credential'
import UserInfo from '../../components/auth/UserInfo'
import TwoFa from '../../components/auth/TwoFa'

export default function Login() {
    const router = useRouter()

    const [step, setStep] = useState(0)

    return (
        <div className="w-screen h-screen flex flex-col bg-white overflow-x-auto">
            <div className="bg-white border-b">
                <div className="flex items-center justify-between container mx-auto px-5 md:px-0">
                    <div className="cursor-pointer" onClick={() => router.push('/landing')}>
                        <Image
                            className='rounded-xl'
                            src="/assets/logo.png"
                            width={80}
                            height={80}
                            alt="logo"
                        />
                        {/* <h3 className="font-bold text-gray-600 text-xl">Eyepa Meal.</h3> */}
                    </div>

                </div>
            </div>
            <div className="flex flex-1  md:items-center justify-center">

                {step === 0 && <Credential next={() => setStep(prev => (prev + 1))} />}
                {step === 1 && <TwoFa next={() => setStep(prev => (prev + 1))} previous={() => setStep(prev => (prev - 1))} />}
                {step === 2 && <UserInfo next={() => setStep(prev => (prev + 1))} previous={() => setStep(prev => (prev - 1))} />}

            </div>
        </div>
    )
}

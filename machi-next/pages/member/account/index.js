import React from 'react'
import { useAuth } from '@/hooks/use-auth'
import MemberNavBar from '@/components/member/is-auth/member-sidebar'
import EditProfileForm from '@/components/member/is-auth/edit-profile-form'
// import MemberLayout from '@/components/layout/member/member-layout'

function MemberSidebar() {
    const { auth } = useAuth() // 使用 useAuth hook 來獲取 auth 狀態

    return (
        <>
            <div className='d-flex my-5'>
                <MemberNavBar />
                <EditProfileForm />
            </div>

        </>
    )
}

export default MemberSidebar
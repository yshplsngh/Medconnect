import React from 'react'

export default function Loading() {
    return (
        <div class='h-screen flex justify-center items-center'>
            <div class='animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500'></div>
        </div>
    )
}

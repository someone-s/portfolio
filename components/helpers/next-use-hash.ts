"use client"

// https://stackoverflow.com/a/79215367/12875823
import React from 'react'

export const useHash = () => {
    const [hash, setHash] = React.useState(typeof window !== 'undefined' ? window.location.hash: undefined)
    const setHashDB = (h: string) => {
        console.log(h);
        setHash(h);
    }
    
    React.useEffect(() => {
        const onHashChanged = () => setHashDB(window.location.hash)
        const { pushState, replaceState } = window.history
        window.history.pushState = function (...args) {
            pushState.apply(window.history, args)
            setTimeout(() => setHashDB(window.location.hash))
        }
        window.history.replaceState = function (...args) {
            replaceState.apply(window.history, args)
            setTimeout(() => setHashDB(window.location.hash))
        }
        window.addEventListener('hashchange', onHashChanged)
        return () => {
            window.removeEventListener('hashchange', onHashChanged)
        }
    }, [])
    return hash
}
import React from 'react'
import logo from './spotify-logo.png'

import { Container } from 'react-bootstrap'

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=40e8b276f23c4303abf74945b97b12f1&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '100vh', backgroundColor: 'black' }}>
            <img
                src={logo}
                alt="Spotify logo"
                style={
                    { width: 'auto', height: '100px', margin: '1rem' }
                }
            />
            <a className="btn btn-success btn-lg" href={AUTH_URL}>Login</a>
        </Container>
    )
}

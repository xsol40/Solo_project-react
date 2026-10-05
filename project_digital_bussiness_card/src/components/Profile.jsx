import me from '../assets/Me.jpg'
import {FaEnvelope } from 'react-icons/fa';

export default function Profile(){
    return (
        <>
            <img className="profile_photo" src={me} />
                <h1>Maissa el Hiak</h1>
                <h2>Software Engineering Student</h2>

                <p>Backend Developer | 1337 Coding School</p>

                <div>
                    <a className="email-button" href="mayssaeelhiak@gmail.com">
                        <FaEnvelope/>
                    </a>
                </div>
        </>
    )
}
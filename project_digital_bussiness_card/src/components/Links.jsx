import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Links(){
    return (
        <>
            <div className="links">
                <a href="https://github.com/xsol40" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/maissa-el-hiak-376917255/?isSelfProfile=true" target="_blank">
                    <FaLinkedin />
                </a>
            </div>
        </>
    )
}
import { useState } from "react"

export function TwitterFollowCard ({children, formatUserName, userName, initIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    const followText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="Foto de Usuario" />
                <div className='tw-followCard-info'>
                    <strong>
                        {children}
                    </strong>
                    <span className='tw-followCard-infoUserName'>
                        {formatUserName(userName)}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{followText}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
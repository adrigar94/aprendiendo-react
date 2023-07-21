import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const users = [
    {
        userName: 'akrian',
        name: 'Adrián García',
        isFollowing: false
    },
    {
        userName: 'stevejobs',
        name: 'Steve Jobs',
        isFollowing: true
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: false
    },
    {
        userName: 'jbezos',
        name: 'Jeff Bezos',
        isFollowing: true
    }
]

export function App() {

    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            formatUserName={formatUserName}
                            userName={userName}
                            initIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import {Button} from '../components/Button'


import '../styles/auth.scss'
import { AuthContext } from '../App'

export function Home(){
    const history = useHistory();

    const { user,signInWithGoogle } = useContext(AuthContext)

    function handleCreateRoom(){
        if(!user){
           signInWithGoogle() 
        }

        history.push('/room/new');
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                        <button onClick={handleCreateRoom} className="create-room">
                            <img src={googleIconImg} alt="Logo de Google" />
                            Crie sua sala com o Google
                        </button>
                <div className="separator">ou entre em uma sala</div>
                <form>
                    <input type="text"
                     placeholder="Digite o codigo da sala" />
                     <Button type="submit">
                        Entrar na sala
                     </Button>
                </form>
                </div>
            </main>
        </div>
    )
}
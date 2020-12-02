import React from 'react';
import {
    IonButtons,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react'
import {logoIonic} from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import './MensajesUsuario.css';
import {RouteComponentProps} from "react-router";
import List from "../components/List";

interface MyPageProps extends RouteComponentProps <{
    id: string
}>{}

const MensajesUsuarioPage: React.FC<MyPageProps> = ({match}) => {


    return (
        <IonPage className='home'>
            <IonHeader>
                <IonToolbar color='primary'>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle> Mensajes usuarios </IonTitle>
                    <IonIcon slot='end' icon={logoIonic} className='logo'  />

                </IonToolbar>
            </IonHeader>

            <List id={match.params.id}>

            </List>

            <IonContent >


            </IonContent>
            <IonFooter>
                <IonToolbar color='primary' >
                    <IonTitle >
                        Oscar
                    </IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default MensajesUsuarioPage;

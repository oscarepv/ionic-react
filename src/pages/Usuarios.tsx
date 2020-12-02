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

const UsuariosPage: React.FC = () => {
    return (
        <IonPage >
            <IonHeader>
                <IonToolbar color='primary'>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Usuarios </IonTitle>
                    <IonIcon slot='end' icon={logoIonic} className='logo'  />

                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large"> </IonTitle>
                    </IonToolbar>
                </IonHeader>

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

export default UsuariosPage;

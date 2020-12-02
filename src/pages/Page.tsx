import {
    IonIcon,
    IonFooter,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter,
    IonItem,
    IonList,
    IonCard,
    IonCardHeader,IonCardSubtitle,IonCardTitle,IonCardContent
} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { logoIonic } from 'ionicons/icons'
import axios from 'axios';

interface State {
    mensajes : Mensaje[]
}

interface Mensaje {
    'id': number,
    'asunto': string,
    'mensaje': string,
    'name': string
    'userId': number
}

const Page: React.FC = () => {

    const API_URL = '';
    const [state,setState] = React.useState({
        mensajes : [ {
            'id': 1,
            'asunto': "prueba",
            'mensaje': "prueba mensaje",
            'name': "prueba nombre",
            'userId': 2
        }]
    });
    const miUsuario= 'Oscar';
    useIonViewWillEnter( () => {
        axios.get(API_URL).then( response => response.data).then((data) => {
            console.log(data);
            /*setState({
                mensajes: data
            });*/
        })
    });

    const items = state.mensajes.map((mensaje:Mensaje, index) => {
        const  slotMine= miUsuario === mensaje.name ? 'end' : '';
        const  colorMine= miUsuario === mensaje.name ? 'danger' : 'primary';

        return(
            <IonItem key={index} color='none' className='bg-transparent'>
                <div className='item-note'>
                 <IonCard color='light' slot={slotMine}>
                     <IonCardHeader>
                         <IonCardSubtitle color={colorMine}>
                             {mensaje.name}
                         </IonCardSubtitle>
                         <IonCardTitle>
                             {mensaje.asunto}
                         </IonCardTitle>
                     </IonCardHeader>
                     <IonCardContent>
                        <p>{mensaje.mensaje}</p>
                     </IonCardContent>
                 </IonCard>
                </div>
            </IonItem>
        )
    } );

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage className='home'>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
          <IonIcon slot='end' icon={logoIonic} className='logo'  />

        </IonToolbar>
      </IonHeader>

      <IonContent >
        <IonList lines="none" className='bg-transparent'>
            {items}
        </IonList>
      </IonContent>

        <IonFooter>
            <IonToolbar color='primary' >
                <IonTitle >
                    Oscar
                </IonTitle>
            </IonToolbar>
        </IonFooter>
    </IonPage>
  );
};

export default Page;

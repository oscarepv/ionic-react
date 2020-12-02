import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import axios from 'axios';

interface UserDetailProps {
  id :string
}

interface State {
  mensajes : Mensaje[],
  id: string,
  userName: string
  email: string
}

interface Mensaje {
  'id': number,
  'asunto': string,
  'mensaje': string,
  'name': string
  'userId': number
}


const List: React.FunctionComponent<UserDetailProps> = (props:UserDetailProps) => {

  const API_URL = '';


  const [state,setState] = React.useState({
    mensajes : [ {
      'id': 1,
      'asunto': "prueba",
      'mensaje': "prueba mensaje",
      'name': "prueba nombre",
      'userId': 2
    }],
    id: '',
    userName: '',
    email: ''
  });

  React.useEffect(() => {
    const id = state.id;
    axios.get(API_URL + props.id).then( response => response.data).then((data) => {
      console.log(data);
      /*setState({
          mensajes: data[0].mensajes,
          userName: data[0].data.name,
          email: data[0].data.email,
          id:id,

      });*/
    })
  },[props.id])

  const items = state.mensajes.map((mensaje:Mensaje, index) => {

    return(
        <IonItem key={index} color='none' className='bg-transparent' >
          <div className='item-note'>
            <IonCard color='light' slot='start'>
              <IonCardHeader>
                <IonCardSubtitle color='danger'>
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

  return (
      <IonList lines="none" className='bg-transparent'>
        {items}
      </IonList>
  );
};

export default List;

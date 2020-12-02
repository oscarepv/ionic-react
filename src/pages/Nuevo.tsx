import React, {Component, FormEvent} from "react";
import {RouteComponentProps} from 'react-router'
import {
    IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar, IonList , IonItem ,IonLabel, IonInput,IonTextarea, IonButton, IonAlert
} from "@ionic/react";
import {logoIonic} from "ionicons/icons";
import axios from "axios";

interface State {
    asunto: string,
    mensaje: string,
    respuesta: string,
    showAlert: boolean
}

class NuevoPage extends Component<RouteComponentProps, State>{

     API_URL = '';
     miUsuario = 13;

    constructor(props: RouteComponentProps) {
     super(props);
     this.state = {
         asunto: '',
         mensaje: ' ',
         respuesta: '',
         showAlert: false
     }
 }
    handleAsuntoChange(e: any) {
     this.setState({
         asunto: e.target.value,
     })
    }

    handleMensajeChange(e: any) {
        this.setState({
            asunto: e.target.value,
        })
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault();
        const data = {
            user_id: this.miUsuario,
            asunto: this.state.asunto,
            mensaje: this.state.mensaje
        }

        axios.post(this.API_URL,data).then( response => response.data).then((data) => {
            console.log(data);
            var respuesta;
            if (data[0].ok) {
                respuesta ='ok'
            } else {
                respuesta = 'error'
            }
            this.setState({
                respuesta: respuesta,
                showAlert: true
            })

            // this.props.history.push('/');
            /*setState({
                mensajes: data
            });*/
        })
    }

 render() {
     return (
         <IonPage >
             <IonHeader>
                 <IonToolbar color='primary'>
                     <IonButtons slot="start">
                         <IonMenuButton />
                     </IonButtons>
                     <IonTitle>Nuevo </IonTitle>
                     <IonIcon slot='end' icon={logoIonic} className='logo'  />

                 </IonToolbar>
             </IonHeader>

             <IonContent >
                 <IonCard color='light' >
                     <IonCardHeader>

                         <IonCardTitle>
                             Nuevo mensaje
                         </IonCardTitle>
                     </IonCardHeader>
                     <IonCardContent>
                        <form onSubmit={(e: any ) => this.handleSubmit(e)} action='post'>
                            <IonList>
                                <IonItem>
                                    <IonLabel position='floating' >Sunto</IonLabel>
                                    <IonInput type='text' value={this.state.asunto} onInput={(e: any ) => this.handleAsuntoChange(e)} ></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position='floating' >Sunto</IonLabel>
                                    <IonTextarea auto-grow='true' value={this.state.mensaje} onInput={(e: any ) => this.handleMensajeChange(e)} ></IonTextarea>
                                </IonItem>
                            </IonList>
                            <IonButton type='submit' expand='block' >Enviar </IonButton>
                        </form>
                     </IonCardContent>
                 </IonCard>
                 {this.state.asunto}
                 <IonAlert header='Resultado' message ={this.state.respuesta} isOpen = {this.state.showAlert} buttons={[
                     {
                         text: 'ok',
                         handler: () => {
                             this.props.history.push('/');
                         }
                     }
                 ]}/>
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
 };
}

export default NuevoPage;

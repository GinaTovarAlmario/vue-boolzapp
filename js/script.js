// ! PROVA DI COLLEGAMENTO
console.log('js ok');

// TODO
/**
 * Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco)
assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
 */

/**
 * Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo
all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
 */

/**
 * Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra,
come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
 */

/**
 * Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite
(es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
 */

const DateTime = luxon.DateTime;
// ? DATO IL SEGUENTE ARRAY DI OGGETI
const { createApp } = Vue

createApp({
    data() {
        return {
            selectedContact: null,
            newMessage : '',
            searchedLetter:'',
            contacts : [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
        }
    },
    methods:{
        changeSelectedContact(contact){
            this.selectedContact = contact;
        },
        addNewMessage(content){
            const now = DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');
            this.selectedContact.messages.push(
                {
                date: now,
                message: content,
                status: 'sent'
                }
            );
            this.sendAutoResponseMessage(content);
            this.clearTextArea();
        },
        clearTextArea(){
            this.newMessage='';
        },
        addResponseMessage(content){
            const now = DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');
            this.selectedContact.messages.push(
                {
                date: now,
                message: 'ok',
                status: 'received'
                }
            );
        },
        sendAutoResponseMessage(content){
            if(this.newMessage.length >= 1){
                setTimeout(()=>{
                    this.addResponseMessage();
                },1000);
            }
        },
        formatDate(fullDateString){
            //todo date: '10/01/2020 15:30:55',
            const dt = DateTime.fromFormat(fullDateString, "dd/MM/yyyy HH:mm:ss");
            return  dt.toLocaleString(DateTime.TIME_SIMPLE);
        },
        filterContacts(){
            const filteredData= [];
            for(let contact of this.contacts){
                filteredData.push(contact.name);
            } 
            return filteredData;
        },
        deleteMessage(content){
            console.log('ouch');

        },
        // createSearchList(searchedLetter){
        //     const results = this.filterContacts();
        //     const needle = searchedLetter;
        //     const sameLetter = [];
        //     const differentLetter = [];
        //     needle.toLowerCase();
        //     console.log(results);
        //     for(let i = 0; i < results.length; i++){
        //         const text = results[i];
        //         // prendo la prima lettera del nome contatto
        //         let letter = text.charAt(0).toLowerCase();
        //         if( letter === needle){
        //             sameLetter.push(text);
        //         } else {
        //             differentLetter.push(text);
        //         }
        //     }
        //     console.log('iniziano con la stessa lettera cercata : ',sameLetter);
        //     console.log('non iniziano con la stessa lettera cercata : ',differentLetter);
        //     return sameLetter;
        // }
    },
    computed:{
        searchedListNames(){
            return this.contacts.filter((contact)=>{
                let isFound = true;

                if (this.searchedLetter.length > 0){
                    isFound = contact.name.toLowerCase().includes(this.searchedLetter.toLowerCase());
                }

                return isFound;
            });
        }
    },
    created(){
        /**
         * !Quando creo la mia app voglio che il primo oggetto dell'array sia
         * !mostrato come predefinito nella chat
         */
        console.log('Applicazione creata',this.contacts);
        this.selectedContact = this.contacts[0];
    },
}).mount('#app')
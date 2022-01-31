
import admin, { ServiceAccount } from 'firebase-admin';
import { FireabseModel } from './interfaces/firebase.model';



export class FirebaseConfig {

    constructor(data: FireabseModel) {
        admin.initializeApp({ credential: admin.credential.cert(data as ServiceAccount) })
    }

}

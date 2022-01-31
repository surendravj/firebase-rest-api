import admin from 'firebase-admin';
import { sendResponse, internalError, customError } from '../util/parseData';
import { Response } from '../interfaces/response.model';


/**
 * @classdesc Firestore class that contain all the methods 
 * @class
 */
export class Firestore {

    private db: any;

    constructor() {
        this.db = admin.firestore();
    }


    /**
    Method that reads a document using firestore path
     * @param  path document exact path Eg: collection/docId/collection/docId
     * @async 
     * @return {Promise<Response>} Response Object
    */
    readDocumentByPath = async (path: string): Promise<Response> => {
        try {
            const data = await this.db.doc(path).get();
            if (data.data() === null || data.data() === undefined) {
                return customError();
            }
            return sendResponse(200, "read", data.data());
        } catch (error) {
            return internalError();
        }

    }



    /**
        Method to read a document using uid of an document from firestore collection.
     * @param  collection name of the firestore collection
     * @param  uid uid of the firestore document
     * @async 
     * @return {Promise<Response>} Response Object
    */
    readDocumentById = async (collection: string, uid: string): Promise<Response> => {
        try {
            const data = await admin.firestore().collection(collection).doc(uid).get();
            if (!data.exists) {
                return customError("Unable to find documents with this UID");
            }
            if (data.data() === null || data.data() === undefined) {
                return customError();
            }
            return sendResponse(200, "read", data.data());
        } catch (error) {
            return internalError();
        }
    }



    /**
        Method to read all documents from the collection
     * @param  collection name of the firestore collection
     * @async 
     * @return {Promise<Response>} Response Object
    */
    readCollection = async (collection: string): Promise<Response> => {
        try {
            const data = await this.db.collection(collection).get();
            if (data.size === 0) {
                return customError();
            }
            var temp: any[] = [];
            data.forEach((doc: any) => {
                temp.push({ document: doc.data(), id: doc.id })
            })
            return sendResponse(200, "read", temp);
        } catch (error) {
            return internalError();
        }

    }


    /**
        Method that create a document using given firestore path.
     * @param  path Path of the firestore document
     * @param data data to store with is mostly javascript object
     * @async 
     * @return {Promise<Response>} Response Object
    */
    createDocumentByPath = async (path: string, data: any): Promise<Response> => {
        try {
            const isDocCreated = await this.db.doc(path).set(data);
            return sendResponse(201, 'create', isDocCreated);
        } catch (error) {
            return internalError();
        }
    }




    /**
        Methos that creats document using custom id provided by the user
     * @param  collection name of the firestore collection
     * @param  uid custom uid of the firestore document
     * @param data data to store with is mostly javascript object
     * @async 
     * @return {Promise<Response>} Response Object
    */
    createDocumentWithId = async (collection: string, uid: string, data: any): Promise<Response> => {
        try {
            const docRef = await this.db.collection(collection).doc(uid).get();
            if (!docRef.exists) {
                return customError("Unable to find documents with this UID");
            }
            const isDocCreated = await docRef.add(data);
            return sendResponse(201, 'create', isDocCreated);
        } catch (error) {
            return internalError();
        }
    }




    /**
        Method that creates document by generating auto UID provided by the firestore
     * @param  collection name of the firestore collection
     * @param  data data to store with is mostly javascript object
     * @async 
     * @return {Promise<Response>} Response Object
    */
    createDocumentwithAutoId = async (collection: string, data: any): Promise<Response> => {
        try {
            const generatedUid = await(await this.db.collection(collection).add(data)).id;
            return sendResponse(201, 'create', { uid: generatedUid });
        } catch (error) {
            return internalError();
        }
    }
 




    /**
        Method that updates the document by providing the uid
     * @param  collection name of the firestore collection
     * @param  uid uid of the firestore document
     * @param data data to store with is mostly javascript object
     * @async 
     * @return {Promise<Response>} Response Object
    */
    updateDocumentById = async (collection: string, uid: string, data: any): Promise<Response> => {
        try {
            const docRef = await this.db.collection(collection).doc(uid).get();
            if (!docRef.exists) {
                return customError("Unable to find documents with this UID");
            }
            const isDocUpdated = await docRef.update(data);
            return sendResponse(201, 'create', isDocUpdated);
        } catch (error) {
            return internalError();
        }
    }





    /**
       Method that updates the document by providing the path of the document
    * @param path path of the firestore document
    * @param data data to store with is mostly javascript object
    * @async 
    * @return {Promise<Response>} Response Object
    */
    updateDocumentByPath = async (path: string, data: any): Promise<Response> => {
        try {
            const isDocUpdated = await this.db.doc(path).update(data);
            return sendResponse(201, 'create', isDocUpdated);
        } catch (error) {
            return internalError();
        }
    }




    /**
        Method to deletes a document using path of an document from firestore collection.
     * @param  path path of the firestore collection
     * @async 
     * @return {Promise<Response>} Response Object
    */
    deleteDocumentByPath = async (path: string): Promise<Response> => {
        try {
            const isDocDeleted = await this.db.doc(path).delete();
            return sendResponse(202, 'Delete', isDocDeleted);
        } catch (error) {
            return internalError();
        }
    }



    /**
        Method to deletes a document using uid of an document from firestore collection.
     * @param  collection name of the firestore collection
     * @param  uid uid of the firestore document
     * @async 
     * @return {Promise<Response>} Response Object
    */
    deleteDocumentById = async (collection: string, uid: string): Promise<Response> => {
        try {
            const docRef = await this.db.collection(collection).doc(uid).get();
            if (!docRef.exists) {
                return customError("Unable to find documents with this UID");
            }
            const isDocDeleted = await docRef.delete();
            return sendResponse(202, 'Delete', isDocDeleted);
        } catch (error) {
            return internalError();
        }
    }

}
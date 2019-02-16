import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Klienci, IdNameInterface, NameInterface, IdNameValueInterface, Uslugi } from './models/klienci.model';


@Injectable({
  providedIn: 'root'
})
export class DndSafFirestoreGetService {
  formData: Klienci;

  constructor(private firestore: AngularFirestore) { }

  getKlienci() {
    return this.firestore.collection<Klienci>('klienci');
  }

  getUslugi() {
    return this.firestore.collection<Uslugi>('uslugi');
  }

  getKlienciToAutocomplete() {
    const values: NameInterface[] = [];
    this.getKlienci().snapshotChanges().subscribe(actionArray => {
      actionArray.map(item => {
        // tslint:disable-next-line:no-shadowed-variable
        const myObj: IdNameInterface = {
          'name': item.payload.doc.data().imie + ' ' + item.payload.doc.data().nazwisko,
          'id': item.payload.doc.id
        };
        values.push(myObj);
      });
    });
    return values;
  }

  getUslugiToSelect() {
    const values: NameInterface[] = [];
    this.getUslugi().snapshotChanges().subscribe(actionArray => {
      actionArray.map(item => {
        // tslint:disable-next-line:no-shadowed-variable
        const myObj: IdNameValueInterface = {
          'name': item.payload.doc.data().nazwa,
          'value': item.payload.doc.data().czas,
          'id': item.payload.doc.id
        };
        values.push(myObj);
      });
    });
    return values;
  }


}

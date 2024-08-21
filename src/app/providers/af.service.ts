import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { switchMap } from 'rxjs';
import { User } from './user';

interface FirebaseUser {
  uid: any;
  email: any;
  displayName: any;
  photoURL: any;
}

@Injectable({
  providedIn: 'root',
})
export class AfService {
  user$: Observable<User | null | undefined>;

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {
    this.user$ = afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider).then((credential) => {
      this.updateUser(credential.user as FirebaseUser);
    });
  }

  updateUser(user: FirebaseUser) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    console.log(user);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        subscriber: true,
        admin: false,
      },
    };

    return userRef.set(data, { merge: true });
  }

  logout() {
    this.afAuth.signOut();
  }
}

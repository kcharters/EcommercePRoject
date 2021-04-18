import { auth, https } from 'firebase-functions';
import { initializeApp, firestore, auth as _auth } from 'firebase-admin';

initializeApp()

const db = firestore()

export const AddUserRole = auth.user().onCreate(async (authUser) => {

  if (authUser.email) {
    const customClaims = {
      customer: true,
    };
    try {
      var _ = await _auth().setCustomUserClaims(authUser.uid, customClaims)

      return db.collection("roles").doc(authUser.uid).set({
        email: authUser.email,
        role: customClaims
      })

    } catch (error) {
      console.log(error)
    }


  }

});

export const setUserRole = https.onCall(async (data, context) => {

  if (!context.auth.token.admin) return

  try {
    var _ = await _auth().setCustomUserClaims(data.uid, data.role)

    return db.collection("roles").doc(data.uid).update({
      role: data.role
    })

  } catch (error) {
    console.log(error)
  }

});

exports.setUserRole = functions.https.onCall(async (data, context) => {
  if (!context.auth.token.admin) return
  try {
    var _ = await admin.auth().setCustomUserClaims(data.uid, data.role)
    return db.collection("roles").doc(data.uid).update({
      role: data.role
    })
  } catch (error) {
    console.log(error)
  }
});
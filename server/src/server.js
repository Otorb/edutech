import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "../src/routes/index.js";
import admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "kotlyn-delivery-77c07",
    private_key_id: "7475463a12b26b6e04476b2fdfce262b3e73a940",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCsOwXY4q6cEyOK\n/jvyApYVU4JhlAcP2BkHR02LrKSdRrSKPnL/Qt/eeD2IjCgS5XWducLGcAH6oQ7t\nM0NE0+kZyJUG8b5ScaOEkn1DEJREwLXmMcHYzNTxXo50OMzECJBcrlWEQdaH7yno\nFxYS/tz+XEdT5vIivpxAshGfH8yIfStsJ5MF4FfUU3nnpg4n1BVsGZ07qM5oJU01\ndmDJgDxPxDLDc9w7ZBFKs12rc4wcXoMiAlYz2HU2AgIr8PGuQ76dZJqUpo03Emjk\nq7qOfRDwyFMqavdeDMgOIMNpngRlSmRbsNbk05nIHvk/m/9YHnmHO8Olh63QEye7\npDDxbzexAgMBAAECggEAMb5wX2aFWQW8F8p7JNhzYaB3gVhgO8bF39DLyGIqP1Sr\nE1ybGTfG8fnXh+c3MdH9SPtckrTKFYnMBl1ueeQcqLpCtLlAp44z1Lf8ntCcikkA\noIZRfx0WCcquKUo4dgwlKeeeQm9Dl4pPl72HPiBHUt3zKfwDhl54QcVMiqGEEQ1g\nma6RAH/qAy4cefpAGgesSsenXWO7lA2iBjAn+MZbs62JcvvkDfYuLXmY5LujppHd\nWiTh5ihfAiZ9xHiHzjYMPTEj4wKHyrAcNYGrfsFbYYd7jmqwBkagdBOsJmgpSeqY\n2ITdovfBRFwHBUjaYFdcZqehZ/8IDZrnkYaZzDV4cwKBgQDWX/Fl2wVAAcWpe94v\noH41b0+SsNSboElDd0gJlLpRa0WvsvKS1xvlC51NlSmrA+4x+CUkik1oVGpL8mOz\nXs7CnyjXNDuHi+gpgLiKNsIfBEMOI+t9iUM9VmqLZsGEYWigLc8dYGQX+wKcMkmO\n2/wxYRR4XJkNzuXHsWRej/Fm3wKBgQDNrDEODZ+jiytoPW+KBfZd5SmamUkNGOxJ\na0XdT18aoIeqmLaWJwheZnWTQC/yjYjKc6vXm7sdSwKM4y++huH3US5rjYDcOfIB\nzf9xLHzHBoX/sWeejQmOrzCJ7bDvS1qlPXx6QiO5w64gUoyetZOMAiaQHBlXe+Sh\nf/w4uVEDbwKBgQCSyCSYUiu5FL2Le3W5dJGV8r4wOYWJfWlMmXqonL4qC2IumD9B\nTaoa3SX6vhxGrS1F55s+9rdjrREPKUscwNifJ60mFOyBtcjjyfARKsclx5xGLVAL\np5VzhRz0kAoGo0+pBVSfz6UZSlQSMNhuya9W/BqxAu4FJ1nrrkmD+dkXTwKBgFAZ\n4/EJNUdIiFtMsggbUlw3SADB+kVzk3L0qH0M0IlaQ/wZBeNsyEGbvebfdM0Oelv+\nuMp8CF/cOt4MDSgy+AaOQ3n33lvm5W32gKnfHamVzNJMkYKag0Ji0JCnVeWcf20j\niTtETw2mPEayX7ngFdrNa59skiIUSnLrmZut8PNZAoGANPD5XfA388TXXWsqdyMJ\nX7CAvJGorHzDFPvsj/up5DMhsc1Dlis07kH8p9cR1hrQyBUp/92AiLoM49cdg9d+\n7u/bOqrn0DA8lB2vuzTE8hgQDIEAU4Ki7m2xzbW8fDGNBkg2a8XCnYspF8maxPcA\nx6n2Tbf2v5LEgjzzXJUtJfg=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-94gs9@kotlyn-delivery-77c07.iam.gserviceaccount.com",
    client_id: "117852275085970467992",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-94gs9%40kotlyn-delivery-77c07.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  }),
});

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/", router);

export default server;
// const onSuccessLogin = async (response) => {
//     try {
//       const token = response.tokenId;
//       const email = response.profileObj.email;

//       // Enviar el token y el email al backend
//       const res = await fetch('http://localhost:3001s/auth/google', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token, email }),
//       });

//       const data = await res.json();
//       console.log('Success:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

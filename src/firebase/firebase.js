import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database
// 	.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 		console.log(expenses);
// 	})
// 	.catch((err) => {
// 		console.log("Couldn't fetch data", err);
// 	});

// database.ref('expenses').on(
// 	'value',
// 	(snapshot) => {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});

// 		console.log(expenses);
// 	},
// 	(err) => {
// 		console.log('Error with fetching data', err);
// 	}
// );

// database.ref('expenses').push({
// 	description: 'Rent',
// 	note: '',
// 	amount: 133.0,
// 	createdAt: moment().toString()
// });

// database.ref().on(
// 	'value',
// 	(snapshot) => {
// 		const val = snapshot.val();
// 		console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// 	},
// 	(err) => {
// 		console.log('Error with fetching data', err);
// 	}
// );

// database
// 	.ref()
// 	.set({
// 		name: 'Matt',
// 		age: 24,
// 		stressLevel: 6,
// 		job: {
// 			title: 'Software developer',
// 			company: 'Google'
// 		},
// 		location: {
// 			city: 'Philly',
// 			country: 'USA'
// 		}
// 	})
// 	.then(() => {
// 		console.log('Data is saved');
// 	})
// 	.catch((err) => {
// 		console.log('This failed', err);
// 	});

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// });

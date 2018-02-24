import configVars from '../config/vars';

var apiUrl = configVars.apiUrl;

export function addNewUser(userObj){
	return new Promise((resolve,reject)=>{
		fetch( apiUrl + '/user', 
			{
			  method: 'POST',
			  mode: 'cors',
			  body: JSON.stringify(userObj), 
			  headers: new Headers({
			  	'Content-Type': 'application/json'
			  })
			}
		).then(res =>{ 
			return res.json();
		}).then(res => {
		  	console.log(res);
		  	resolve(res);
		}).catch(err => {
			console.log(err);
			reject(err);
		});
	});

	
}



export default {
	addNewUser : addNewUser
}
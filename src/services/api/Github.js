import axios from 'axios'

class Github {
	constructor(){
		//Construtor cria url base para axios
		this.axiosBase = axios.create({baseURL: "https://api.github.com/users/albertrein"});
	}

	headerDrops = _ => new Promise(async (resolve, reject) => {
		try{
			let response = await this.axiosBase.get('');
			resolve({
				name: response.data.name,
				description: response.data.bio,
				img_perfil: response.data.avatar_url 
			});
		}catch(e){
			reject('Não foi possível encontrar URL');
		}
	});

	repoDrops = _ => new Promise(async (resolve, reject) => {
		try{
			let response = await this.axiosBase.get('/repos');
			resolve(response.data);
		}catch(e){
			reject('Não foi possível encontrar URL');
		}
	});
}

const githubApi = new Github();

export default githubApi;


const scriptsInEvents = {

	async StageEvents_Event16_Act2(runtime, localVars)
	{
		var objRanqueText = runtime.objects.ranqueText.getFirstInstance();
		
		objRanqueText.text = "Ranque: Miaumal";
	},

	async StageEvents_Event17_Act2(runtime, localVars)
	{
		var objRanqueText = runtime.objects.ranqueText.getFirstInstance();
		
		objRanqueText.text = "Ranque: MiaUau";
	},

	async StageEvents_Event18_Act2(runtime, localVars)
	{
		var objRanqueText = runtime.objects.ranqueText.getFirstInstance();
		
		objRanqueText.text = "Ranque: Miaucrível!";
	},

	async StageEvents_Event20_Act5(runtime, localVars)
	{
		// Pegando o objeto de texto pela tag/nome
		var objTacadasTexto = runtime.objects.tacadasText.getFirstInstance();
		
		// Alterando o texto exibido
		objTacadasTexto.text = "Tacadas feitas: " + runtime.globalVars.tacadasResultadoFase;
	},

	async StageEvents_Event20_Act6(runtime, localVars)
	{
		var objPontosTexto = runtime.objects.pontosText.getFirstInstance();
		
		objPontosTexto.text = "Pontos adquiridos: " + runtime.globalVars.pontos;
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;

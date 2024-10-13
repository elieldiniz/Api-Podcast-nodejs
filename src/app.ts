import { getFilterEpisodios, getListEpisodios } from "./controllers/podcast-controller"
import { Router } from "./router/rauter"
import {HttpMethod} from "./utils/http-methods"
import * as http from "http"

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {


    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""]
    
    if(request.method === HttpMethod.GET && baseUrl === Router.LIST_EPISODIOS){
        await getListEpisodios(request, response)
    }

    if(request.method === HttpMethod.GET && baseUrl === Router.FILTER_EPISODIOS){
        await getFilterEpisodios(request, response) 
    }


}
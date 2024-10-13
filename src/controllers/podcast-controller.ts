import {IncomingMessage,ServerResponse} from 'http'


import {serviceListEpisodios} from '../services/listEpisodios-services'
import { filterEpisodiosServices } from '../services/filterEpisodios-services'
import { StatusCode } from '../utils/status-code'
import { ContentType } from '../utils/content-type'
import { FilterPodcastModel } from '../model/fileter-podcas-model'

export const getListEpisodios = async (req: IncomingMessage, res: ServerResponse) =>{
    const content = await serviceListEpisodios()
    res.writeHead(StatusCode.OK,{'content-type': ContentType.APPLICATION_JSON})
    res.end(JSON.stringify(content))
}

export const getFilterEpisodios = async (req: IncomingMessage, res: ServerResponse) =>{
    const content: FilterPodcastModel = await filterEpisodiosServices(req)
    res.writeHead(content.statusCode,{'content-type': ContentType.APPLICATION_JSON})
    res.end(JSON.stringify(content.body))
}
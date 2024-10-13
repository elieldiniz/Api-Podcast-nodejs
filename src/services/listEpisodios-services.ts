import { FilterPodcastModel } from "../model/fileter-podcas-model";
import { RepositoyPodcast } from "../repository/podcasts-repository"
import { StatusCode } from "../utils/status-code";


export const serviceListEpisodios = async (): Promise<FilterPodcastModel>=>{

    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    }

    const data = await RepositoyPodcast()

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    responseFormat.body = data

    return responseFormat
}
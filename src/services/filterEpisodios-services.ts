import { IncomingMessage } from "http";
import { RepositoyPodcast } from "../repository/podcasts-repository"
import { FilterPodcastModel } from "../model/fileter-podcas-model";
import { StatusCode } from "../utils/status-code";

export const filterEpisodiosServices = async (podcastName: IncomingMessage): Promise<FilterPodcastModel>=>{

    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    }

    const queryString = podcastName.url?.split("?p=")[1] || ""
    const data = await RepositoyPodcast(queryString)

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT
    
    responseFormat.body = data
    
    return responseFormat

}
import fs from "fs"
import path from "path"
import { PodCastModel } from "../model/Interaface-Podcast"

const pathData = path.join(__dirname,"../repository/podcast.json")

export const RepositoyPodcast = async (podcastName ?:string):Promise<PodCastModel[]> =>{
    const rawData = fs.readFileSync(pathData, 'utf8')
    let jsonFile = JSON.parse(rawData)

    if(podcastName){
        jsonFile = jsonFile.filter(
            (podcast: PodCastModel) => podcast.podcastName === podcastName)
    }
    return jsonFile

}
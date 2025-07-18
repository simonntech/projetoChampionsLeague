import * as HttpResponse from "../utils/http-helper";
import * as repoistory from "../repositories/clubs-repository"

export const getClubService = async () => {
    const data = await repoistory.findAllClubs();
    
    const response = HttpResponse.ok(data);

    return response;
}
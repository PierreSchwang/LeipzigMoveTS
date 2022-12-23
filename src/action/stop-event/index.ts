import {Environment} from "../../index";
import {OAuthProvider} from "../../auth/oauth";
import {Location} from "../../types";

export type StopEventRequest = {
    location: Location,
    params: {

    }
}

export type StopEventResponse = {

}

export const stopEvent = (environment: Environment, oauth: OAuthProvider) => async function (stopId: string): Promise<StopEventResponse> {
    throw new Error("not implemented");
}

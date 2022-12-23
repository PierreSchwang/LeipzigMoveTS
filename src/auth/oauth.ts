import axios from "axios";
import {Environment} from "../index";

export type Token = {
  token: string;
  expires: Date;
}

export interface OAuthProvider {

  /**
   * Get the locally stored oauth-token or return {@code null}, if no token was found
   */
  getToken(): Promise<Token | null>

  /**
   * Called when a new token was obtained from the rest api. Used to store the token to be again retrieved by {@link getToken}.
   * Return {@code true} if the token has been stored, or false if not (due to errors, ...)
   * @param token The freshly obtained token
   */
  onTokenObtained(token: Token): Promise<boolean>

}

export async function obtainToken(environment: Environment, provider: OAuthProvider, username?: string, password?: string): Promise<Token> {
  if (username || password) {
    throw new Error("username / password authentication is not supported (yet?)")
  }

  const auth = btoa(`${environment.basicAuth.username}:${environment.basicAuth.password}`)

  const fd = new FormData()
  fd.set("grant_type", "client_credentials")
  const response = await axios.post(`${environment.baseUrl}/restapi/oauth/token`, fd, {
    headers: {
      'Authorization': `Basic ${auth}`
    }
  })

  const token: Token = {
    token: response.data.access_token,
    expires: new Date(Date.now() + response.data.expires_in)
  }
  await provider.onTokenObtained(token)
  return token
}

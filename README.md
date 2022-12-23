# LeipzigMoveTS

A simple implementation of the [LeipzigMove API](https://leipzig-move.de/) (it's backend).

### Authentication

Every request to any endpoint requires a valid and not-expired oauth token.
Based on the requested environment (production, testing or developing) a basic-auth-Authorization header has to be sent.
The credentials for those are hardcoded (e.g. in the final APK).

This API does not support user accounts (yet) but rather only utilizes anonymous user accounts. 

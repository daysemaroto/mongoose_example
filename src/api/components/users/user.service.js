const debug = require('debug')('bsf_api:debug:gateway-service');
const error = require('debug')('bsf_api:error:gateway-service');
const UserModel = require('../../models/user.model');

/**
 * Get gateway list
 * @public
 */
exports.list = async (query) => {
    try {
        debug('users query: %o', query);
        const users = await GatewayModel.list(query);
        debug('list: %o', users);
        return users;
    } catch (e) {
        error('%o', e.message);
        throw e;
    }
};
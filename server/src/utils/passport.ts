import { Strategy, ExtractJwt } from 'passport-jwt'

import keys from './keys'
import UserModel from '../models/users.model'

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey
}

export default passport => {
  passport.use(
    // jwt_payload: 登录接口生成的payload
    new Strategy(opts, async function(jwt_payload, done) {
      console.log('jwt_payload: ...');
      const userResult = await UserModel.findById(jwt_payload.id)
      const user = {
        id: userResult.id,
        name: userResult.name,
        email: userResult.email
      }
      
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    })
  );
}
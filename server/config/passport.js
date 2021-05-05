const keys = require('./keys')
const User = require('../models/users')

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    // jwt_payload: 登录接口生成的payload
    new JwtStrategy(opts, async function(jwt_payload, done) {
      console.log('jwt_payload: ...');
      const userResult = await User.findById(jwt_payload.id)
      const user = {
        id: userResult.id,
        name: userResult.name,
        email: userResult.email
      }
      
      if (user) {
        return done(null, user)
      } else {
        return dene(null, false)
      }
    })
  );
}
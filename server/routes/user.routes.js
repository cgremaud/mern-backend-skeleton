import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create)
//requireSignin checks for authentication, hasAuth checks for authorization (duh), so any user can read info of any other, but not any user can update/remove any user
router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  //passing the authCtrl methods in as args here is how you check that user is authorized
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)
//this is how the user objects are passed around. this seems too simple almost
router.param('userId', userCtrl.userByID)

export default router

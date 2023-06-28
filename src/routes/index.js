const express = require('express');
const router = express.Router();

const {
  AddService,
  getUser,
  loginUser,
  deleteUser,
  sendMail,
  addComment,
  getServices,
  newUser,
  modifyPwd,
  modifyUser,
  imgLink,
  getUserDet,
  fileUpload,
} = require('../controllers');

const {
  Upload,
  isUser,
  dataValidation,
  UploadComm,
  confirmMail,
  UploadAvatar,
} = require('../middleware');
const getService = require('../controllers/getService');
const addLike = require('../controllers/addLike');
const getLikesServices = require('../controllers/getLikesServices');
const getLikesComents = require('../controllers/getLikesComents');
const getColaboraciones = require('../controllers/getColaboraciones');

router.post('/login', loginUser);
router.get('/getuser', isUser, getUser);
router.post('/addservice', isUser, fileUpload, AddService);
router.post('/newcomment', isUser, fileUpload, addComment);
router.post('/deleteuser/:id', isUser, deleteUser);
router.get('/mail/:mail', sendMail);
router.post('/newUser', dataValidation, newUser);
router.post('/modifyPwd/:id', isUser, modifyPwd);
router.get('/confirm/:code', confirmMail);
router.get('/services/:order', getServices);
router.get('/service/:id', getService);
router.post('/modifyUser', isUser, UploadAvatar, modifyUser);
router.get('/img/link/:id', imgLink);
router.get('/userdet/:id', getUserDet);
router.post('/addLike', isUser, addLike);
router.get('/getlikesservices/:id', getLikesServices);
router.get('/getlikescoments/:id', getLikesComents);
router.get('/getcolaboraciones', isUser, getColaboraciones);

module.exports = router;

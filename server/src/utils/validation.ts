import Validator from 'validator'
import isEmpty from './is-empty'

// 登录、注册表单
interface LoginInput {
  name?: string;
  password?: string,
}

// 返回值
interface Result {
  errors: LoginInput;
  isValid: Boolean,
}


/**
 * 验证登录表单数据
 * @param data 
 * @returns 
 */
function validatorLogin(data: LoginInput): Result{
  const errors: LoginInput = {}

  data.name = isEmpty(data.name) ? '' : data.name
  data.password = isEmpty(data.password) ? '' : data.password


  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = '名字长度不能小于2位且不能超过30位'
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = '密码长度不能小于6位且不能超过30位'
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = '名字不能为空'
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = '密码不能为空'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}


/**
 * 验证注册表单数据
 * @param data 
 * @returns 
 */
function validatorRegister(data: LoginInput): Result{
  const errors: LoginInput = {}

  data.name = isEmpty(data.name) ? '' : data.name
  data.password = isEmpty(data.password) ? '' : data.password


  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = '名字长度不能小于2位且不能超过30位'
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = '密码长度不能小于6位且不能超过30位'
  }

   
  if (Validator.isEmpty(data.name)) {
    errors.name = '名字不能为空'
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = '密码不能为空'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}



export {
  validatorLogin,
  validatorRegister,
}
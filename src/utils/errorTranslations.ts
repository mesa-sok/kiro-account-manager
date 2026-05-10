const rustErrorMap: Record<string, string> = {
  '读取目录失败': 'errors.readDirFailed',
  '文件名不能为空': 'errors.fileNameEmpty',
  '文件名不合法': 'errors.fileNameInvalid',
  '无法获取用户目录': 'errors.cannotGetUserDir',
  '文件已存在': 'errors.fileExists',
  '文件不存在': 'errors.fileNotFound',
  '权限不足': 'errors.permissionDenied',
  '配置无效': 'errors.invalidConfig',
  '解析失败': 'errors.parseFailed',
  '写入失败': 'errors.writeFailed',
  '读取失败': 'errors.readFailed',
  '网络请求失败': 'errors.networkFailed',
  '请求超时': 'errors.requestTimeout',
  '命令执行失败': 'errors.commandFailed',
  '操作失败': 'errors.operationFailed',
  '未找到': 'errors.notFound',
  '已存在': 'errors.alreadyExists',
  '输入无效': 'errors.invalidInput',
  '路径无效': 'errors.invalidPath',
  'Token 无效': 'errors.invalidToken',
  '认证失败': 'errors.authFailed'
}

export function tRustError(message: string, t: (key: string) => string) {
  if (!message) return t('errors.unknown')

  for (const [needle, key] of Object.entries(rustErrorMap)) {
    if (message.includes(needle)) {
      return message.replace(needle, t(key))
    }
  }

  return message
}

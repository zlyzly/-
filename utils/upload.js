import { createUploadFile, uploadToThirdService, informUploadFileSuccess } from '../api/upload'

function uploadFile(file, params, key) {
  console.log('params: ', params)
  console.log('file: ', file)
  return new Promise((resolve, reject) =>
    new Promise((resImg, rejImg) => {
      const img = new Image()
      img.onload = function() {
        resImg(img)
      }
      img.src = URL.createObjectURL(file)
    }).then((res) => {
      console.log('img: ', res.height, res.width)
      const createParams = {
        type: 1,
        width: res.width,
        height: res.height,
        mime_type: params.file_type
      }
      if (params.sort) createParams.sort = params.sort
      createUploadFile(createParams).then(fileInfo => {
        console.log('createUploadFile success:', fileInfo)
        const fileForm = new FormData()
        fileForm.append('FileName', fileInfo.file_id)
        fileForm.append('Authorization', fileInfo.signature)
        fileForm.append('Content-Type', params.file_type)
        const nameArr = file.name.split('.')
        const fileType = nameArr[nameArr.length - 1]
        const newFile = new File([file], fileInfo.file_id + '.' + fileType, { type: file.type })
        fileForm.append('file', newFile)
        console.log('fileForm:', fileForm)
        uploadToThirdService(fileForm).then(thirdResp => {
          console.log('uploadToThirdService success:', thirdResp)
          informUploadFileSuccess({
            file_id: fileInfo.file_id
          }).then(informResp => {
            console.log('informUploadFileSuccess success:', informResp)
            resolve(Object.assign({}, { fileInfo: fileInfo }, { thirdResp: thirdResp }, { informResp: informResp }, { key: key }, { imgInfo: {
              type: file.type,
              size: file.size,
              name: file.name,
              width: createParams.width,
              height: createParams.height
            }}))
          }).catch(error3 => {
            console.log('informUploadFileSuccess error:', error3)
            reject({
              desc: 'informUploadFileSuccess error',
              error: error3
            })
          })
        }).catch(error2 => {
          console.log('uploadToThirdService error:', error2)
          reject({
            desc: 'uploadToThirdService error',
            error: error2
          })
        })
      }).catch(error1 => {
        console.log('createUploadFile error:', error1)
        reject({
          desc: 'createUploadFile error',
          error: error1
        })
      })
    })
  )
}
module.exports = {
  uploadFile
}
const fs = require('fs')

const getAllFiles = (path, foldersOnly = false) => {
  const files = fs.readdirSync(path, {
    withFileTypes: true,
  })
  let filesFound = []

  for (const file of files) {
    const fileName = `${path}/${file.name}`

    const normalizedPath = fileName.replace(/\\/g, '/');
  
    console.log(normalizedPath)

    if (file.isDirectory()) {
      if (foldersOnly) {
        filesFound.push(normalizedPath)
      } else {
        filesFound = [...filesFound, ...getAllFiles(normalizedPath)]
      }
      continue
    }

    filesFound.push(normalizedPath)
  }

  return filesFound
}

module.exports = getAllFiles

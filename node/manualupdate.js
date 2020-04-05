const makedata = require('./makedata.js')
const util = require('./util.js')
const git = require('./git.js')

const DT = 1000 * 60 * 10 // 10min
//const DT = 1000 * 3 // 3sec

const main = async function() {
  // 一度だけ更新を行う
  if (await makedata.updateData()) {
    await git.onlycommit()
    console.log('updated')
  }
  // await util.sleep(DT)
}
if (require.main === module) {
  main()
}

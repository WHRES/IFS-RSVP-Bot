module.exports = async function (id) {
  let ifslist = JSON.parse(process.env.IFS_INFO)
  console.log(ifslist)
  for (let i in ifslist) {
    let faction = ''
    if (config.ifslist[i].enlpoc === id) {
      faction = 'ENL'
    } else if (config.ifslist[i].respoc === id) {
      faction = 'RES'
    }
    console.log(config.ifslist[i].location)
    if (faction !== '') return { faction, location: config.ifslist[i].location}
  }
  throw `抱歉，你没有权限使用本 bot，请联系你所在阵营的 PoC（Res @Nickywong, Enl @wkbond）完成签到。希望你可以在 Ingress First Saturday 玩得愉快！`
}

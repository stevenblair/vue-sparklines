import arrayMin from './min'
import arrayMax from './max'

function nearestThousand(n) {
  return Math.ceil(n/1000)*1000
}
function getMax(n) {
  let ret = nearestThousand(arrayMax(n))
  if (ret === 0) {
    return 1000
  }
  return ret
}

export default ({
  data,
  limit,
  width = 1,
  height = 1,
  margin = 0,
  max = getMax(data),
  min = 0,//arrayMin(data),
  textHeight = 0
}) => {
  const len = data.length

  if (limit && limit < len) {
    data = data.slice(len - limit)
  }

  const vfactor = (height - margin * 2 - textHeight) / ((max - min) || 2)
  const hfactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0))

  return data.map((d, i) => ({
    x: i * hfactor + margin,
    y: (max === min ? 1 : (max - d)) * vfactor + margin + textHeight
  }))
}

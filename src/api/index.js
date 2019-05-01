
const activities =  {
  '1546968934': {
    id: '1546968934',
    title: 'Learn Vue.js',
    notes: 'I started today and it was not good.',
    progress: 0,
    category: '1546969049',
    createdAt: 1546969144391,
    updatedAt: 1546969144391
  },
  '1546969212': {
    id: '1546969212',
    title: 'Read Witcher Books',
    notes: 'The se books are super nice',
    progress: 0,
    category: '1546969049',
    createdAt: 1546969144391,
    updatedAt: 1546969144391
  }
}

const canContinue = () => {
  const rndNumber = Math.floor(Math.random() * 10)

  if (rndNumber > 5) {
    return true
  }
  return false
}

export const fetchActivities = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (canContinue()) {
        resolve(activities)
      } else {
        reject('Cannot fetch activities')
      }
    }, 2000)
  })
}

const generateUid = () => Math.floor(new Date() * Math.random())

export const createActivityAPI = (activity) => {
  activity.id = generateUid()
  activity.progress = 0
  activity.createdAt = new Date()
  activity.updatedAt = new Date()

  return new Promise((resolve, reject) => {
    resolve(activity)
  })
}

export const fetchUser = () => {
  return {
    name: 'Patty Arquette',
    id: '-Aj34jknvncx98812',
  }
}

export const fetchCategories = () => {
  return {
    '1546969049': {text: 'books', id: '1546969049'},
    '1546969225': {text: 'movies', id: '1546969225'},
    '1546969226': {text: 'coding', id: '1546969226'},
    '1546969227': {text: 'work', id: '1546969227'},
    '1546969228': {text: 'film', id: '1546969228'},
    '1546969229': {text: 'party', id: '1546969229'},
    '1546969230': {text: 'politics', id: '1546969230'},
    '1546969231': {text: 'games', id: '1546969231'},
    '1546969232': {text: 'cooking', id: '1546969232'}
  }
}
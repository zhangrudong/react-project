const reducer = (state = {
  tabs: [
    { title: '旅游攻略' },
    { title: '出行专题' },
    { title: '房东故事' },
    { title: '热门评论' }
  ]
}, action) => {
  const { type, data } = action;
  switch (type) {
    case '':
        return state;
    default:
      return state;
  }
}

export default reducer;
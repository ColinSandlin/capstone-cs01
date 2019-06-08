// // take state and make new options arrays for the dropdown menu.
// .then(() => {

//     this.state.greatMoods.map(greatmood => {
//         let newObj = {
//             value: `${greatmood.name}--${greatmood.moodCategoryId}`,
//             label: greatmood.name,
//         }
//         greatOpt.push(newObj)
//         newState.greatOpt = greatOpt
//     })
// })
// .then(() => {
//     this.state.goodMoods.map(goodmood => {
//         let newObj = {
//             value: `${goodmood.name}--${goodmood.moodCategoryId}`,
//             label: goodmood.name,
//         }
//         goodOpt.push(newObj)
//         newState.goodOpt = goodOpt
//     })
// })
// .then(() => {
//     this.state.okayMoods.map(okaymood => {
//         let newObj = {
//             value: `${okaymood.name}--${okaymood.moodCategoryId}`,
//             label: okaymood.name,
//         }
//         okayOpt.push(newObj)
//         newState.okayOpt = okayOpt
//     })
// })
// .then(() => {
//     this.state.notSoGreatMoods.map(notsogreatmood => {
//         let newObj = {
//             value: `${notsogreatmood.name}--${notsogreatmood.moodCategoryId}`,
//             label: notsogreatmood.name,
//         }
//         notSoGreatOpt.push(newObj)
//         newState.notSoGreatOpt = notSoGreatOpt
//     })
// })
// .then(() => {
//     this.state.badMoods.map(badmood => {
//         let newObj = {
//             value: `${badmood.name}--${badmood.moodCategoryId}`,
//             label: badmood.name,
//         }
//         badOpt.push(newObj)
//         newState.badOpt = badOpt
//     })
// })
// .then(() => this.setState(newState))
// .then(() => {
//     let moodOpts = this.state.greatOpt.concat(this.state.goodOpt, this.state.okayOpt, this.state.notSoGreatOpt, this.state.badOpt)
//     newState.moodOpts = moodOpts
// })
// .then(() => this.setState(newState))
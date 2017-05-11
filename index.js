console.log('lambda start')

exports.handler = (event, context) => {
	console.log(event)
	context.suceed("completed!")
	console.log("you will not see this message")
}

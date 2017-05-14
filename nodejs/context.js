module.exports = function() {
	return {
		'fail': (msg)=> { 
			console.log('[ERROR]',msg)
			process.exit(0)
		},
		'suceed': (msg)=> { 
			console.log('[OK]',msg) 
			process.exit(0)
		},
		'done': (err, msg)=> { 
			console.log(err, '[DONE]', msg)
			process.exit(0)
		}
	}
}

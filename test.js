// // let regex = new RegExp(
  // // 	`([^\x00-\xff]([\,\.\;\:])\s*[^\x00-\xff])|([^\x00-\xff][\-\w\s]+([\,\.\;\:])\s*[^\x00-\xff])|([^\x00-\xff]{1,4}\s*[\,\.\;\:]\s*$)`,
  // // 	'gim'
  // // )
  // // var matches = [],
  // // 	match,
  // // 	index,
  // // 	error
  // // console.log(regex.exec(text))
  // // while ((match = regex.exec(text))) {
    // // 	if (index === regex.lastIndex) {
      // // 		error = { id: 'infinite', warning: true }
      // // 		++regex.lastIndex
      // // 	}
      // // 	index = regex.lastIndex
      // // 	var groups = match.reduce(function (arr, s, i) {
        // // 		return (i === 0 || arr.push({ s: s })) && arr
        // // 	}, [])
        // // 	matches.push({ i: match.index, l: match[0].length, groups: groups })
        // // 	if (!regex.global) {
          // // 		break
          // // 	} // or it will become infinite.
          // // }
          // // console.log(matches)
          
          
          
          // const worker = new Worker('./worker.js')
          
          // worker.onmessage = (evt) => {
            // 	// if (evt.data === 'onload') {
              // 	// 	// this._startTime = Utils.now()
              // 	// 	this._timeoutId = setTimeout(() => {
                // 	// 		worker.terminate()
                // 	// 		this._onRegExComplete({ id: 'timeout' }, null, mode) // TODO: make this a warning, and return all results so far.
                // 	// 	}, 250)
                // 	// } else {
                  // 	// 	clearTimeout(this._timeoutId)
                  // 		// worker.terminate()
                  //     console.log(evt);
                  // 		// this._onRegExComplete(evt.data.error, evt.data.matches, evt.data.mode)
                  // 	// }
                  // }
                  
                  // // we need to pass the pattern and flags as text, because Safari strips the unicode flag when passing a RegExp to a Worker
                  // worker.postMessage({
                    // 	pattern: `([^\x00-\xff]([,.;:])\s*[^\x00-\xff])|([^\x00-\xff][\-\w\s]+([,.;:])\s*[^\x00-\xff])|([^\x00-\xff]{1,4}\s*[,.;:]\s*$)`,
                    // 	flags: 'g',
                    // 	text,
                    // 	tests: [],
                    // 	mode: 'text'
                    // })
                    
                    // const worker = require('worker')
                    const str = `onmessage = function (e) {
                      postMessage("onload");
	var t,
		s,
		n,
		a = e.data,
		i = a.text,
		d = a.tests,
		l = a.mode,
		r = new RegExp(a.pattern, a.flags),
		o = [];
	if ("tests" === l)
		for (var g = 0, x = d.length; g < x; g++) {
			let e = d[g];
			(i = e.text),
				(r.lastIndex = 0),
				(t = r.exec(i)),
				(o[g] = t ? { i: t.index, l: t[0].length, id: e.id } : { id: e.id });
		}
	else
		for (; (t = r.exec(i)); ) {
			s === r.lastIndex &&
				((n = { id: "infinite", warning: !0 }), ++r.lastIndex),
				(s = r.lastIndex);
			var f = t.reduce(function (e, t, s) {
				return (0 === s || e.push({ s: t })) && e;
			}, []);
			if ((o.push({ i: t.index, l: t[0].length, groups: f }), !r.global)) break;
		}
    console.log(JSON.stringify({ error: n, matches: o, mode: l }));
	postMessage({ error: n, matches: o, mode: l });
};
`
const e = new Blob([str], {
	type: 'text/javascript'
})
this._workerObjectURL = URL.createObjectURL(e)


if(window.Worker){
	const worker = new Worker(this._workerObjectURL)
	worker.onmessage = (evt) => {
		// if (evt.data === 'onload') {
		// 	// this._startTime = Utils.now()
		// 	this._timeoutId = setTimeout(() => {
		// 		worker.terminate()
		// 		this._onRegExComplete({ id: 'timeout' }, null, mode) // TODO: make this a warning, and return all results so far.
		// 	}, 250)
		// } else {
		// 	clearTimeout(this._timeoutId)
		// worker.terminate()
		console.log(evt)
		// this._onRegExComplete(evt.data.error, evt.data.matches, evt.data.mode)
		// }
	}
  let text = `不过，在配合使用TypeScript与Babel时，仍然有一些 注意事项。因为Babel对Typescrip的支持是纯编译形式（无类型校验，因此Jest在运行测试时不会对它们进行类型检查. 如果需要类型校验。可以改用ts-jest .也用ts_jest .也可以单独运行TypeScript编译器 tsc （或作为构建过程的一部分）  ,`
	worker.postMessage({
		pattern:
			'([^\\x00-\\xff]([\\,\\.\\;\\:])\\s*[^\\x00-\\xff])|([^\\x00-\\xff][\\-\\w\\s]+([\\,\\.\\;\\:])\\s*[^\\x00-\\xff])|([^\\x00-\\xff]{1,4}\\s*[\\,\\.\\;\\:]\\s*$)',
		flags: 'g',
		text: '不过，在配合使用TypeScript与Babel时，仍然有一些 注意事项。因为Babel对Typescrip的支持是纯编译形式（无类型校验，因此Jest在运行测试时不会对它们进行类型检查. 如果需要类型校验。可以改用ts-jest .也用ts_jest .也可以单独运行TypeScript编译器 tsc （或作为构建过程的一部分）  , ',
		mode: 'text'
	})
}
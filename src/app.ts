console.clear()
var log = console.log.bind(console)

import greeter = require('./greeter');

console.log("dsfasg")
log("sdf", 34, () => {})

console.log("sssssssssssss", greeter("World"))
function test(bla: string) {
    console.log(bla, "wat")
    return bla
}
document.write(test("funst"))
test("sdfsd")


var link = function(height:number = 50, color:string = 'red', url = 'http://azat.co') {
  log(height, color, url)
}
link()
